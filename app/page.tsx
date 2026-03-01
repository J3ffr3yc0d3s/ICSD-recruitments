'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { departments } from '@/data/departments';
import { socialMedia } from '@/config/images';
import GalleryCarousel from '@/components/GalleryCarousel';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);

    // Check localStorage first to avoid repeated HEAD requests
    const cached = localStorage.getItem('icsd-logo-path');
    if (cached === 'none') {
      setLogoSrc(null);
      return;
    }
    if (cached) {
      setLogoSrc(cached);
      return;
    }

    // attempt to load logo - try png then jpeg
    const tryLogo = async () => {
      const candidates = [
        '/images/icsd-logo.png',
        '/images/icsd-logo.jpeg',
        '/icsd-logo.png',
        '/icsd-logo.jpeg',
      ];
      for (const path of candidates) {
        try {
          const res = await fetch(path, { method: 'HEAD' });
          if (res.ok) {
            localStorage.setItem('icsd-logo-path', path);
            setLogoSrc(path);
            return;
          }
        } catch {
          // ignore
        }
      }
      // Logo not found - cache this result
      localStorage.setItem('icsd-logo-path', 'none');
      setLogoSrc(null);
    };

    tryLogo();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero hero-section">
        <div className="hero-content">
          <div className="hero-heading">
            {logoSrc && (
              <Image
                src={logoSrc}
                alt="ICSD"
                className="hero-logo"
                width={120}
                height={120}
                priority
              />
            )}
            <h1 className="hero-title">ICSD</h1>
          </div>
          {/* new recruitment banner below title - add a break line */}
          <br className="hero-break" />
          <div className="hero-subtag">We Are Recruiting!</div>

          <div className="hero-carousel">
            {isClient && (
              <div className="hero-carousel-inner">
                <GalleryCarousel />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="departments-section">
        <h2 className="section-title">OUR DEPARTMENTS</h2>
        <div className="departments-grid">
          {departments.map((dept, index) => (
            <div key={dept.id} className="department-card">
              <Image
                src={dept.image}
                alt={dept.name}
                className="department-card-image"
                width={500}
                height={400}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="department-card-content">
                <h3>{dept.name}</h3>
                <p>{dept.description}</p>
                <Link href={`/verify?dept=${dept.id}`} className="apply-button">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h3>ICSD Recruitment</h3>
        <div className="social-links">
          {socialMedia
            .filter((social) => social.name === 'Instagram' || social.name === 'LinkedIn')
            .map((social) => (
            <a
              key={social.name}
              href={social.url}
              aria-label={social.label}
              title={social.label}
              className="social-link-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Display icon if available, otherwise show text */}
              {social.icon ? (
                <Image src={social.icon} alt={social.label} className="social-icon" width={24} height={24} />
              ) : (
                social.label
              )}
            </a>
          ))}
        </div>
        <p> Hurry up and Apply!</p>
      </footer>
    </main>
  );
}
