import React from 'react';
import { Book, Code, Globe, HelpCircle } from 'lucide-react';

const Documentation = () => {
  return (
    <div className="page-container">
      <div className="container max-w-lg mx-auto" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--bg-tertiary)', border: '1px solid var(--accent-primary)', borderRadius: '2rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
            Resources
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Platform <span className="text-gradient">Documentation</span></h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Everything you need to know to get started and succeed on our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem', marginBottom: 'var(--spacing-3xl)' }}>
          {[
            { icon: <Book size={24} />, title: 'Getting Started', desc: 'Learn how to register, form a team, and submit your first project.' },
            { icon: <Code size={24} />, title: 'Submission Guide', desc: 'Detailed requirements and instructions for submitting your project code.' },
            { icon: <Globe size={24} />, title: 'Judging Criteria', desc: 'Understand how projects will be evaluated and what the judges look for.' },
            { icon: <HelpCircle size={24} />, title: 'FAQ', desc: 'Answers to frequently asked questions about the hackathon process.' }
          ].map((doc, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '2.5rem' }}>
              <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>{doc.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{doc.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{doc.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-panel" style={{ padding: '4rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))', border: '1px solid var(--accent-primary)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '200px', height: '200px', background: 'var(--accent-primary)', filter: 'blur(100px)', opacity: 0.1, pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '200px', height: '200px', background: 'var(--accent-secondary)', filter: 'blur(100px)', opacity: 0.1, pointerEvents: 'none' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--bg-tertiary)', border: '1px solid var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
              <HelpCircle size={32} />
            </div>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Still need help?</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
                Our support team is available 24/7 to help you with any technical issues or hackathon-related queries.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button className="btn btn-primary" style={{ padding: '0.8rem 2rem' }} onClick={() => window.location.href = 'mailto:support@nxtgensec.com'}>Contact Support</button>
              <button className="btn btn-secondary" style={{ padding: '0.8rem 2rem' }} onClick={() => alert('Redirecting to full FAQ portal...')}>View FAQ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
