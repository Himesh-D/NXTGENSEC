import React, { useState } from 'react';
import { Star, FileText, Send, Clock, CheckCircle2, ChevronRight, BarChart } from 'lucide-react';

const JudgingPanel = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  
  const projects = [
    { id: 1, name: 'VibeNet AI', category: 'AI & Machine Learning', status: 'Pending Review', score: null },
    { id: 2, name: 'EcoChain Tracker', category: 'Tech for Good', status: 'Reviewed', score: 85 },
    { id: 3, name: 'DeFi Swap Protocol', category: 'Web3 & Blockchain', status: 'Pending Review', score: null },
    { id: 4, name: 'StudyBuddy Helper', category: 'Tech for Good', status: 'Reviewed', score: 92 },
  ];

  const currentProject = projects[selectedProject];

  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 80px)', overflow: 'hidden' }}>
      
      {/* Header */}
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)', padding: 'var(--spacing-md) var(--spacing-2xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', fontWeight: 800 }}>
            <BarChart size={20} style={{ color: 'var(--accent-primary)' }} /> Judging <span className="text-gradient">Portal</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 500 }}>Phase 1 Review • 20 Assigned</p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>2 / 20 Reviewed</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--accent-secondary)', fontWeight: 600 }}>18 REMAINING</div>
          </div>
          <div style={{ width: '160px', height: '6px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            <div style={{ width: '10%', height: '100%', background: 'var(--gradient-primary)' }} />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* Sidebar Project List */}
        <div style={{ width: '300px', borderRight: '1px solid var(--border-color)', background: 'var(--bg-primary)', overflowY: 'auto' }}>
          <div style={{ padding: 'var(--spacing-md) var(--spacing-lg)', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-tertiary)' }}>
            <h3 style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800 }}>Queue</h3>
          </div>
          
          {projects.map((proj, idx) => (
            <div 
              key={proj.id} 
              onClick={() => setSelectedProject(idx)}
              style={{ 
                padding: 'var(--spacing-lg) var(--spacing-md)', 
                borderBottom: '1px solid var(--border-color)', 
                cursor: 'pointer',
                background: selectedProject === idx ? 'rgba(139, 92, 246, 0.05)' : 'transparent',
                borderLeft: selectedProject === idx ? '3px solid var(--accent-primary)' : '3px solid transparent',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: selectedProject === idx ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{proj.name}</h4>
                {proj.status === 'Reviewed' ? (
                  <CheckCircle2 size={14} color="#10b981" />
                ) : (
                  <Clock size={14} color="var(--text-secondary)" />
                )}
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xs)', fontWeight: 500 }}>{proj.category}</p>
              
              {proj.score !== null && (
                <div style={{ fontSize: '0.65rem', padding: '0.1rem 0.5rem', background: 'var(--bg-tertiary)', color: 'var(--accent-tertiary)', borderRadius: 'var(--radius-full)', display: 'inline-block', fontWeight: 700, border: '1px solid var(--border-color)' }}>
                  SCORE: {proj.score}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main Grading Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--bg-secondary)', overflowY: 'auto' }}>
          
          <div style={{ padding: 'var(--spacing-xl) var(--spacing-2xl)', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-2xl)' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-secondary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 'var(--spacing-xs)', display: 'block' }}>
                  Track: {currentProject.category}
                </span>
                <h2 style={{ fontSize: '2.25rem', marginBottom: 'var(--spacing-sm)', fontWeight: 800 }}>{currentProject.name}</h2>
                <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                  <button 
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                    className="nav-link" 
                    onClick={() => alert('Opening Submission Documents...')}
                  >
                    <FileText size={16} style={{ color: 'var(--accent-primary)' }} /> Submission Docs
                  </button>
                  <button 
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                    className="nav-link" 
                    onClick={() => alert('Opening Repository...')}
                  >
                    <FileText size={16} style={{ color: 'var(--accent-tertiary)' }} /> Repository
                  </button>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Current Score</div>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: currentProject.score ? 'var(--accent-primary)' : 'var(--text-secondary)', lineHeight: 1, textShadow: currentProject.score ? 'var(--shadow-glow)' : 'none' }}>
                  {currentProject.score || '--'}
                </div>
              </div>
            </div>

            {/* Rubric */}
            <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-xl)', fontWeight: 700, borderBottom: '1px solid var(--border-color)', paddingBottom: 'var(--spacing-sm)' }}>Evaluation Rubric</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              {[
                { title: 'Innovation', desc: 'Is the solution unique and creative?', weight: '25%' },
                { title: 'Technical', desc: 'How robust is the implementation?', weight: '25%' },
                { title: 'Design', desc: 'UX quality and visual appeal.', weight: '20%' },
                { title: 'Impact', desc: 'Real-world relevance and polish.', weight: '30%' }
              ].map((criteria, i) => (
                <div key={i} className="glass-card" style={{ padding: 'var(--spacing-lg)', display: 'flex', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <h4 style={{ fontWeight: 700, fontSize: '1rem' }}>{criteria.title}</h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent-secondary)', fontWeight: 800 }}>{criteria.weight}</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.4 }}>{criteria.desc}</p>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', width: '220px' }}>
                    <input type="range" min="1" max="10" className="input-field" style={{ padding: 0, height: '4px', cursor: 'pointer', flex: 1 }} />
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, width: '40px', textAlign: 'center', color: 'var(--accent-primary)' }}>10</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Feedback */}
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Overall Feedback (Optional)</h3>
              <textarea className="input-field" placeholder="Constructive feedback for the team..." style={{ minHeight: '120px', resize: 'vertical' }}></textarea>
            </div>
            
          </div>

          {/* Action Footer */}
          <div style={{ padding: 'var(--spacing-lg) var(--spacing-2xl)', borderTop: '1px solid var(--border-color)', background: 'var(--bg-primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button className="btn btn-secondary" style={{ padding: '0.6rem 1.5rem' }} onClick={() => alert('Draft saved successfully!')}>Save Draft</button>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <button className="btn btn-primary" style={{ padding: '0.6rem 2rem', fontWeight: 700 }}>
                <Send size={18} /> Submit Review
              </button>
              <button className="btn-icon" style={{ padding: '0.6rem 1rem' }} disabled={selectedProject === projects.length - 1} onClick={() => setSelectedProject(prev => prev + 1)}>
                Next Project <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JudgingPanel;
