export const runtime = "nodejs";

import { departments } from '@/data/departments';
import { google } from 'googleapis';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
    if (!registrationNumber) {
      return Response.json({ error: 'Registration number cannot be empty' }, {
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
      emailCount = values
        .flat()
        .filter((e) => typeof e === 'string' && e.trim().toLowerCase() === email)
        .length;
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

    // assemble row values (always 16 columns)
    const timestamp = new Date().toISOString();
    const row: (string | null)[] = [
      timestamp,
      email,
      name,
      registrationNumber,
      data.departmentName || department,
    ];

    // answers correspond to columns F–J (up to 5)
    for (let i = 0; i < 5; i++) {
      const key = `answer_${i + 1}`;
      const val = answerKeys.includes(key) ? String(data[key] ?? '') : '';
      row.push(val);
    }

    // pad dept2 columns K–P with empties
    while (row.length < 16) {
      row.push('');
    }

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: 'Applications!A:P',
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
