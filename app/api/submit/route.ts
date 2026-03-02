export const runtime = "nodejs";

import { departments } from '@/data/departments';
import { google } from 'googleapis';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGISTRATION_REGEX = /^[0-9]{2}[A-Za-z]{3}[0-9]{4}$/;
const MAX_APPLICATIONS = 2;
const ALLOWED_DEPARTMENT_IDS = departments.map((d) => d.id);

// helper to authenticate using a service account
async function getSheetsClient() {
  const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env;
  if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    throw new Error('Google service account credentials not set');
  }

  const auth = new google.auth.JWT({
    email: GOOGLE_CLIENT_EMAIL,
    key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  await auth.authorize();
  return google.sheets({ version: 'v4', auth });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // --- Strong server-side validation ---

    if (!data.email || typeof data.email !== 'string') {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    const email = String(data.email).trim().toLowerCase();
    if (!EMAIL_REGEX.test(email)) {
      return Response.json({ error: 'Please enter a valid email address' }, {
        status: 400,
      });
    }

    if (!data.name || typeof data.name !== 'string') {
      return Response.json({ error: 'Name is required' }, { status: 400 });
    }

    const name = String(data.name).trim();
    if (!name) {
      return Response.json({ error: 'Name cannot be empty' }, { status: 400 });
    }

    if (!data.registrationNumber || typeof data.registrationNumber !== 'string') {
      return Response.json({ error: 'Registration number is required' }, {
        status: 400,
      });
    }

    const registrationNumber = String(data.registrationNumber).trim();
    if (!REGISTRATION_REGEX.test(registrationNumber)) {
      return Response.json({ error: 'Please enter a valid registration number (e.g., 25BRS1024)' }, {
        status: 400,
      });
    }

    if (!data.department || typeof data.department !== 'string') {
      return Response.json({ error: 'Department is required' }, { status: 400 });
    }

    const department = String(data.department).trim().toLowerCase();
    if (!ALLOWED_DEPARTMENT_IDS.includes(department)) {
      return Response.json(
        { error: 'Invalid department. Please select a valid department.' },
        { status: 400 }
      );
    }

    const answerKeys = Object.keys(data).filter((k) => k.startsWith('answer_'));
    if (!answerKeys.length) {
      return Response.json(
        { error: 'At least one answer is required' },
        { status: 400 }
      );
    }

    // sort keys numerically so answers stay in order even if JSON order is weird
    answerKeys.sort((a, b) => {
      const na = parseInt(a.split('_')[1] || '0', 10);
      const nb = parseInt(b.split('_')[1] || '0', 10);
      return na - nb;
    });

    // --- Server-side 2-application limit enforcement via Google Sheets API ---
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) {
      console.error('GOOGLE_SHEET_ID not set');
      return Response.json(
        { error: 'Configuration error: sheet ID missing' },
        { status: 500 }
      );
    }

    let sheets;
    try {
      sheets = await getSheetsClient();
    } catch (err) {
      console.error('Failed to initialize Google Sheets client:', err);
      return Response.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // read column B (emails) to count existing applications
    let emailCount = 0;
    try {
      const resp = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: 'Applications!B:B',
      });

      const values = resp.data.values || [];

      // Efficient backwards search to avoid .flat() memory overhead and allow short-circuiting
      for (let i = values.length - 1; i >= 0; i--) {
        const row = values[i];
        if (row && row.length > 0) {
          const e = row[0];
          if (typeof e === 'string' && e.trim().toLowerCase() === email) {
            emailCount++;
            if (emailCount >= MAX_APPLICATIONS) {
              break;
            }
          }
        }
      }
    } catch (err) {
      console.error('Failed to read existing emails from sheet:', err);
      return Response.json(
        { error: 'Unable to verify application limit. Please try again later.' },
        { status: 500 }
      );
    }

    if (emailCount >= MAX_APPLICATIONS) {
      return Response.json(
        { error: 'Maximum applications reached. You can only apply to 2 departments.' },
        { status: 403 }
      );
    }

    // assemble row values; include all answers instead of a fixed 5
    const timestamp = new Date().toISOString();
    const row: (string | null)[] = [
      timestamp,
      email,
      name,
      registrationNumber,
      data.departmentName || department,
    ];

    // add each answer in order
    answerKeys.forEach((key) => {
      row.push(String(data[key] ?? ''));
    });

    // keep previous minimum length for backward compatibility
    const MIN_COLUMNS = 16;
    while (row.length < MIN_COLUMNS) {
      row.push('');
    }

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: 'Applications!A:Z',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [row],
        },
      });
    } catch (err) {
      console.error('Failed to append row to sheet:', err);
      return Response.json(
        { error: 'Failed to process application' },
        { status: 500 }
      );
    }

    return Response.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
