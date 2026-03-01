'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { departments } from '@/data/departments';
import { departmentQuestions } from '@/data/questions';

const MAX_APPLICATIONS = 2;

export default function ApplicationPage() {
  const params = useParams();
  const router = useRouter();
  const dept = params.dept as string;

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [departmentCount, setDepartmentCount] = useState(0);
  const [alreadyAppliedToThisDept, setAlreadyAppliedToThisDept] = useState(false);

  const department = useMemo(() => departments.find(d => d.id === dept), [dept]);
  const questions = useMemo(() => departmentQuestions[dept as keyof typeof departmentQuestions] || [], [dept]);

  // Debug: log department and questions for troubleshooting
  useEffect(() => {
    console.log('✅ Department ID (dept):', dept);
    console.log('✅ Department Object:', department);
    console.log('✅ Questions Array Length:', questions.length);
    console.log('✅ Questions:', questions);
  }, [dept, department, questions]);

  // Define callbacks before any conditional returns (hooks must be called in same order)
  const handleAnswerChange = useCallback((questionIndex: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [`q${questionIndex}`]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Prevent duplicate submission - disable button immediately
    setLoading(true);

    // department must exist
    if (!department) {
      setError('Invalid department selected');
      setLoading(false);
      return;
    }

    // Validation
    if (!name) {
      setError('Please enter your name');
      setLoading(false);
      return;
    }

    if (!registrationNumber) {
      setError('Please enter your registration number');
      setLoading(false);
      return;
    }

    // Check if all questions are answered
    for (let i = 0; i < questions.length; i++) {
      if (!answers[`q${i}`]?.trim()) {
        setError(`Please answer all questions (Question ${i + 1} is empty)`);
        setLoading(false);
        return;
      }
    }

    // Check department limit (client-side enforcement - server also enforces)
    const departmentAppsStr = localStorage.getItem('departmentApplications');
    const departmentApps = departmentAppsStr ? JSON.parse(departmentAppsStr) : {};
    const alreadyAppliedToThisDepartment = departmentApps[dept] === email;
    const totalApplications = Object.keys(departmentApps).filter(
      (key) => departmentApps[key] === email
    ).length;

    if (alreadyAppliedToThisDepartment) {
      setError('You have already applied to this department.');
      setLoading(false);
      return;
    }

    if (totalApplications >= MAX_APPLICATIONS) {
      setError(`You have reached the maximum number of applications (${MAX_APPLICATIONS} departments).`);
      setLoading(false);
      return;
    }

    try {
      // Prepare form data
      const formData = {
        email,
        name,
        registrationNumber,
        department: dept,
        departmentName: department.name,
        ...Object.entries(answers).reduce((acc, [key, value], index) => {
          acc[`question_${index + 1}`] = questions[index];
          acc[`answer_${index + 1}`] = value;
          return acc;
        }, {} as Record<string, string>)
      };

      // Submit to API
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        const errMsg = typeof errData?.error === 'string' ? errData.error : 'Failed to submit your application. Please try again.';
        setError(errMsg);
        setLoading(false);
        return;
      }

      // Update localStorage to track department application
      departmentApps[dept] = email;
      localStorage.setItem('departmentApplications', JSON.stringify(departmentApps));

      // Redirect to success page
      router.push('/success');
    } catch (err) {
      setError('Failed to submit your application. Please try again.');
      console.error(err);
      setLoading(false);
      return;
    }

    setLoading(false);
  }, [email, name, registrationNumber, answers, dept, questions, department, router]);

  const canApplyMore = useMemo(() => departmentCount < MAX_APPLICATIONS, [departmentCount]);
  const canSubmit = canApplyMore && !alreadyAppliedToThisDept;

  // All hooks must be called before conditional returns
  useEffect(() => {
    // Check if email is verified using timestamp (only on mount)
    const storedEmail = localStorage.getItem('applicantEmail');
    const verifiedAt = localStorage.getItem('emailVerifiedAt');
    
    if (!storedEmail || !verifiedAt) {
      router.push('/verify');
      return;
    }

    setEmail(storedEmail);
    setIsVerified(true);

    // Check department application count (only on mount)
    const departmentAppsStr = localStorage.getItem('departmentApplications');
    const departmentApps = departmentAppsStr ? JSON.parse(departmentAppsStr) : {};
    const currentCount = Object.keys(departmentApps).filter(
      key => departmentApps[key] === storedEmail
    ).length;
    setDepartmentCount(currentCount);
    setAlreadyAppliedToThisDept(
      !!departmentApps[dept] && departmentApps[dept] === storedEmail
    );

    // Initialize answers (only on mount)
    const initialAnswers: Record<string, string> = {};
    questions.forEach((_, index) => {
      initialAnswers[`q${index}`] = '';
    });
    setAnswers(initialAnswers);
  }, [dept, questions, router]);

  // Conditional renders after all hooks
  if (!department) {
    return (
      <main>
        <div className="verify-container">
          <h1>Department Not Found</h1>
          <p>The department you're looking for doesn't exist.</p>
          <Link href="/" className="apply-button" style={{ display: 'inline-block', marginTop: '20px' }}>
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  if (!isVerified) {
    return (
      <main>
        <div className="verify-container">
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="application-container">
        <Link href="/" style={{ textDecoration: 'none', color: '#58cce9', marginBottom: '20px', display: 'inline-block' }}>
          ← Back to Home
        </Link>

        <h1>Apply for {department.name}</h1>

        {(!canApplyMore || alreadyAppliedToThisDept) && (
          <div className="limit-warning">
            {alreadyAppliedToThisDept
              ? 'You have already applied to this department.'
              : `You have reached the maximum number of applications (${MAX_APPLICATIONS} departments). You cannot apply to this department unless you remove a previous application.`}
          </div>
        )}

        {error && <div className="error-message" style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#330f0f', borderRadius: '6px' }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className="form-section">
            <h2>Personal Information</h2>
            
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="reg">Registration Number *</label>
              <input
                type="text"
                id="reg"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                placeholder="Your registration number"
              />
            </div>
          </div>

          {/* Questions Section */}
          <div className="form-section">
            <h2>Department Questions</h2>
            {!questions || questions.length === 0 ? (
              <div style={{ 
                padding: '15px', 
                backgroundColor: '#1a3a1a', 
                border: '1px solid #f4d03f', 
                borderRadius: '6px', 
                color: '#f4d03f',
                marginBottom: '20px'
              }}>
                ⚠️ No questions found for {department?.name}
                <br />
                Debug: dept="{dept}", matching key exists={dept in departmentQuestions}
              </div>
            ) : (
              questions.map((question, index) => (
                <div key={index} className="question-item">
                  <label htmlFor={`q${index}`}>
                    {index + 1}. {question} *
                  </label>
                  <textarea
                    id={`q${index}`}
                    value={answers[`q${index}`] || ''}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    placeholder="Your answer here..."
                  />
                </div>
              ))
            )}
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={loading || !canSubmit}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </main>
  );
}
