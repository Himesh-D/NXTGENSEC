import React from 'react';
import { Target, Zap, Layout, Terminal } from 'lucide-react';

const Guides = () => {
  return (
    <div className="page-container">
      <div className="container max-w-lg mx-auto" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--bg-tertiary)', border: '1px solid var(--accent-primary)', borderRadius: '2rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
            Resources
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>User <span className="text-gradient">Guides</span></h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Learn how to use our platform and build your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem', marginBottom: 'var(--spacing-3xl)' }}>
          {[
            { icon: <Target size={24} />, title: 'Team Formation Guide', desc: 'Find teammates, invite members, and build your perfect crew.' },
            { icon: <Zap size={24} />, title: 'Submission Checklist', desc: 'Everything you need to check before submitting your project.' },
            { icon: <Layout size={24} />, title: 'Project Design Guide', desc: 'Tips and tricks for creating visually stunning projects.' },
            { icon: <Terminal size={24} />, title: 'Developer Workflow', desc: 'Best practices for organizing your code and workflows.' }
          ].map((guide, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '2.5rem' }}>
              <div style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }}>{guide.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{guide.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{guide.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-panel" style={{ padding: '4rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))', border: '1px solid var(--accent-secondary)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '200px', height: '200px', background: 'var(--accent-secondary)', filter: 'blur(100px)', opacity: 0.1, pointerEvents: 'none' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--bg-tertiary)', border: '1px solid var(--accent-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>
              <Zap size={32} />
            </div>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>New to Hackathons?</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
                We've curated a list of essential resources and tools to help you build your project from scratch.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button className="btn btn-secondary" style={{ padding: '0.8rem 2rem' }}>Explore Resources</button>
              <button className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>Join Discord</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
