'use client';

import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main>
      <div className="verify-container" style={{ textAlign: 'center', paddingTop: '60px' }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✓</div>
        <h1>Application Submitted Successfully!</h1>
        <p style={{ marginTop: '20px', color: '#bbbbbb', fontSize: '1.1rem' }}>
          Thank you for applying to ICSD. We have received your application and will review it shortly.
        </p>
        <p style={{ marginTop: '15px', color: '#bbbbbb' }}>
          Shortlisted candidates will receive an email shortly. All the best!
        </p>

        <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="apply-button">
            Back to Home
          </Link>
          <Link
            href="/verify"
            className="apply-button"
            style={{ background: '#58cce9', color: '#000000' }}
          >
            Apply to Another Department
          </Link>
        </div>
      </div>
    </main>
  );
}
