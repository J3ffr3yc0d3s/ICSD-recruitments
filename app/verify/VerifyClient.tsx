'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function VerifyClient() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const deptParam = searchParams.get('dept') || 'technical';

  // Check if email is already verified (only once on mount)
  useEffect(() => {
    const storedEmail = localStorage.getItem('applicantEmail');
    if (storedEmail && !isRedirecting) {
      // Email already verified, redirect directly to the application form
      setIsRedirecting(true);
      router.push(`/apply/${deptParam}`);
    }
  }, [router, deptParam, isRedirecting]);

  const validateEmail = useCallback((email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Store email and verification timestamp in localStorage
    localStorage.setItem('applicantEmail', email);
    localStorage.setItem('emailVerifiedAt', Date.now().toString());

    // Initialize department application count if not exists
    const departmentApps = localStorage.getItem('departmentApplications');
    if (!departmentApps) {
      localStorage.setItem('departmentApplications', JSON.stringify({}));
    }

    setSuccess('Email verified! Redirecting to application...');
    setTimeout(() => {
      setIsRedirecting(true);
      router.push(`/apply/${deptParam}`);
    }, 1500);
  }, [email, validateEmail, deptParam, router]);

  return (
    <div className="verify-container">
      <Link href="/" style={{ textDecoration: 'none', color: '#58cce9', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to Home
      </Link>
      
      <h1>Verify Your Email</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
          />
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
        </div>

        <button type="submit" className="submit-button">
          Continue
        </button>
      </form>

      <p style={{ marginTop: '20px', textAlign: 'center', color: '#bbbbbb' }}>
        We'll use this email to process your application
      </p>
    </div>
  );
}
