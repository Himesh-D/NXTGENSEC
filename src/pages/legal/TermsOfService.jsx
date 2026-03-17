import React from 'react';
import { FileText, CheckCircle, AlertTriangle, Scale } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="page-container">
      <div className="container max-w-lg mx-auto" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--bg-tertiary)', border: '1px solid var(--accent-primary)', borderRadius: '2rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
            Legal Center
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Terms of <span className="text-gradient">Service</span></h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Please read these terms carefully before using our platform.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '3rem', marginBottom: 'var(--spacing-3xl)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <section>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle size={24} className="text-accent" /> 1. Acceptance of Terms
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                By using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <AlertTriangle size={24} className="text-accent" /> 2. User Responsibilities
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                You are responsible for your account and any activity that occurs on it. You must provide accurate information when creating an account.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Scale size={24} className="text-accent" /> 3. Governing Law
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                These terms will be governed by and construed in accordance with the laws of the jurisdiction in which the hackathon is hosted.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FileText size={24} className="text-accent" /> 4. Modifications
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                We reserve the right to modify these terms at any time and will provide notice if changes are made.
              </p>
            </section>
          </div>
        </div>

        <div className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Last updated: March 17, 2026
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
