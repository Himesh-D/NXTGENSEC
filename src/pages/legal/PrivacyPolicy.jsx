import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <div className="container max-w-lg mx-auto" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--bg-tertiary)', border: '1px solid var(--accent-primary)', borderRadius: '2rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
            Legal Center
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Privacy <span className="text-gradient">Policy</span></h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            We value your privacy and are committed to protecting your personal data. This policy explains how we handle your information.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '3rem', marginBottom: 'var(--spacing-3xl)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <section>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Shield size={24} className="text-accent" /> 1. Information We Collect
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                We collect information that you provide directly to us, such as when you create an account, register for a hackathon, or communicate with us. This may include your name, email address, and project details.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Lock size={24} className="text-accent" /> 2. How We Use Your Information
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                We use the information we collect to provide, maintain, and improve our services, including to facilitate team formation, projects submissions, and judging processes.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Eye size={24} className="text-accent" /> 3. Data Protection
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FileText size={24} className="text-accent" /> 4. Your Rights
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                You have the right to access, correct, or delete your personal data. Contact us if you wish to exercise these rights or have questions about our privacy practices.
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

export default PrivacyPolicy;
