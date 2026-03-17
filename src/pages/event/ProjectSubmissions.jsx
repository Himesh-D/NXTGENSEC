import React, { useState } from 'react';
import { Upload, Github, Link as LinkIcon, Video, AlertCircle } from 'lucide-react';

const ProjectSubmissions = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Project submitted successfully!');
    }, 1500);
  };

  return (
    <div className="page-container">
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '800px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Submit Your <span className="text-gradient">Project</span></h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
            Finalize your project details, upload the demo, and link your repository before the deadline.
          </p>
        </div>

        <div className="glass-card" style={{ padding: 'var(--spacing-2xl)', position: 'relative' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'rgba(236, 72, 153, 0.05)', border: '1px solid var(--accent-tertiary)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-2xl)', color: 'var(--accent-tertiary)' }}>
            <AlertCircle size={20} />
            <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>Deadline: Sunday, March 29 at 20:00 UTC. You can edit your submission until the deadline.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-label" htmlFor="projectName">Project Name *</label>
              <input type="text" id="projectName" className="input-field" placeholder="e.g. VibeNet AI" required />
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="tagline">Tagline *</label>
              <input type="text" id="tagline" className="input-field" placeholder="A one-sentence summary of your project" required />
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="description">Full Description *</label>
              <textarea id="description" className="input-field" placeholder="Explain what it does, how you built it, and the challenges you faced..." style={{ minHeight: '150px', resize: 'vertical' }} required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
              <div className="input-group" style={{ marginBottom: 0 }}>
                <label className="input-label" htmlFor="github">GitHub Repository *</label>
                <div style={{ position: 'relative' }}>
                  <Github size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input type="url" id="github" className="input-field" placeholder="https://github.com/..." style={{ paddingLeft: '2.75rem' }} required />
                </div>
              </div>

              <div className="input-group" style={{ marginBottom: 0 }}>
                <label className="input-label" htmlFor="demoLink">Live Demo (Optional)</label>
                <div style={{ position: 'relative' }}>
                  <LinkIcon size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input type="url" id="demoLink" className="input-field" placeholder="https://vibenet.app..." style={{ paddingLeft: '2.75rem' }} />
                </div>
              </div>
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="video">Demo Video URL *</label>
              <div style={{ position: 'relative' }}>
                <Video size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input type="url" id="video" className="input-field" placeholder="YouTube or Vimeo link (Max 3 mins)" style={{ paddingLeft: '2.75rem' }} required />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Project Cover Image</label>
              <div style={{ border: '2px dashed var(--border-color)', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-3xl) var(--spacing-xl)', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s', background: 'var(--bg-tertiary)' }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.background = 'rgba(139, 92, 246, 0.05)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.background = 'var(--bg-tertiary)'; }}>
                <Upload size={32} style={{ color: 'var(--accent-primary)', margin: '0 auto var(--spacing-md)' }} />
                <p style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.25rem' }}>Click to upload or drag and drop</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>SVG, PNG, JPG (Max 5MB)</p>
              </div>
            </div>

            <div style={{ marginTop: 'var(--spacing-2xl)', display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-md)' }}>
              <button type="button" className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>Save Draft</button>
              <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontWeight: 700 }} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Project'}
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default ProjectSubmissions;
