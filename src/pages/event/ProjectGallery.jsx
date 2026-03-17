import React, { useState } from 'react';
import { Search, Filter, ThumbsUp, MessageSquare, ExternalLink, Github } from 'lucide-react';

const ProjectGallery = () => {
  const [filter, setFilter] = useState('All');
  
  const submissions = [
    { id: 1, name: 'VibeNet AI', tagline: 'Neural network for social sentiment analysis', track: 'AI', stack: ['React', 'Python', 'PyTorch'], likes: 124, comments: 18, image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'EcoChain', tagline: 'Decentralized carbon credit tracking', track: 'Sustainability', stack: ['Solidity', 'Next.js'], likes: 89, comments: 7, image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'MediConnect', tagline: 'Blockchain-based patient data portal', track: 'Healthcare', stack: ['Flutter', 'Ethereum'], likes: 56, comments: 12, image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80' },
    { id: 4, name: 'SafeAuth', tagline: 'Zero-knowledge proof authentication', track: 'Cybersecurity', stack: ['Rust', 'Wasm'], likes: 210, comments: 45, image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80' }
  ];

  const filteredSubmissions = filter === 'All' ? submissions : submissions.filter(s => s.track === filter);

  return (
    <div className="page-container">
      <div className="container" style={{ padding: '2rem 1rem' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Project <span className="text-gradient">Showcase</span></h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Check out the incredible projects built by our community during Season 4.</p>
        </div>

        {/* Filters & Search */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-2xl)', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-xs)', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {['All', 'AI', 'Sustainability', 'Healthcare', 'Cybersecurity'].map(t => (
              <button 
                key={t}
                onClick={() => setFilter(t)}
                className={filter === t ? 'btn btn-primary' : 'btn btn-secondary'}
                style={{ padding: '0.4rem 1.25rem', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }}
              >
                {t}
              </button>
            ))}
          </div>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input type="text" placeholder="Search projects..." className="input-field" style={{ paddingLeft: '2.75rem' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--spacing-xl)' }}>
          {filteredSubmissions.map(proj => (
            <div key={proj.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }}>
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img src={proj.image} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', padding: '0.2rem 0.6rem', background: 'var(--accent-primary)', borderRadius: 'var(--radius-sm)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{proj.track}</div>
              </div>
              
              <div style={{ padding: 'var(--spacing-lg)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', fontWeight: 700 }}>{proj.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: 'var(--spacing-md)', flex: 1, lineHeight: 1.5 }}>{proj.tagline}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-xs)', marginBottom: 'var(--spacing-lg)' }}>
                  {proj.stack.map(s => (
                    <span key={s} style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontWeight: 600 }}>{s}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: 'var(--spacing-md)' }}>
                  <div style={{ display: 'flex', gap: 'var(--spacing-md)', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><ThumbsUp size={14} style={{ color: 'var(--accent-primary)' }} /> <span style={{ fontWeight: 600 }}>{proj.likes}</span></span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MessageSquare size={14} style={{ color: 'var(--accent-secondary)' }} /> <span style={{ fontWeight: 600 }}>{proj.comments}</span></span>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                    <button className="btn-icon" style={{ padding: '0.4rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}><Github size={16} /></button>
                    <button className="btn-icon" style={{ padding: '0.4rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', color: 'var(--accent-primary)' }}><ExternalLink size={16} /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectGallery;
