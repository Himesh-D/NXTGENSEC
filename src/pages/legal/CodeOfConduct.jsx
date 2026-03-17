import React from 'react';
import { Heart, MessageSquare, PlusCircle, UserCheck } from 'lucide-react';

const CodeOfConduct = () => {
  return (
    <div className="page-container">
      <div className="container max-w-lg mx-auto" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--bg-tertiary)', border: '1px solid var(--accent-primary)', borderRadius: '2rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
            Hackathon Rules
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Code of <span className="text-gradient">Conduct</span></h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Our community is dedicated to providing a harassment-free experience for everyone.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '3rem', marginBottom: 'var(--spacing-3xl)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <section>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Heart size={24} className="text-accent" /> 1. Be Respectful
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Treat all participants with respect and kindness. Harassment of any form will not be tolerated.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MessageSquare size={24} className="text-accent" /> 2. Inclusive Language
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Use inclusive language and avoid comments that could be seen as exclusionary or offensive.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <UserCheck size={24} className="text-accent" /> 3. Help Others
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Collaboration and mentorship are encouraged. If you see someone struggling, offer a helping hand if you can.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <PlusCircle size={24} className="text-accent" /> 4. Reporting Issues
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                If you experience or witness harassment, please report it to the organizers immediately.
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

export default CodeOfConduct;
