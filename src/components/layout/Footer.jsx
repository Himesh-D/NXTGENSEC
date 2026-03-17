import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Code2 } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const Footer = () => {
  return (
    <footer style={{ marginTop: 'auto', borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }} className="section-padding">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-5" style={{ marginBottom: 'var(--spacing-3xl)' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', gridColumn: 'span 2' }}>
            <Link to="/" className="nav-brand">
              <Logo footer={true} />
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '300px', lineHeight: 1.6 }}>
              The modern platform for hackathon organizers and participants to build the future of technology together.
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-sm)' }}>
              <button 
                type="button"
                className="btn-icon" 
                aria-label="Github" 
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                onClick={() => alert('Opening GitHub profile...')}
              >
                <Github size={20} />
              </button>
              <button 
                type="button"
                className="btn-icon" 
                aria-label="Twitter" 
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                onClick={() => alert('Opening Twitter profile...')}
              >
                <Twitter size={20} />
              </button>
              <button 
                type="button"
                className="btn-icon" 
                aria-label="LinkedIn" 
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                onClick={() => alert('Opening LinkedIn profile...')}
              >
                <Linkedin size={20} />
              </button>
              <a href="mailto:contact@nxtgensec.com" className="btn-icon" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--text-primary)' }}>Platform</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <li><Link to="/about" className="nav-link">About Hackathon</Link></li>
              <li><Link to="/teams" className="nav-link">Team Formation</Link></li>
              <li><Link to="/submit" className="nav-link">Project Submissions</Link></li>
              <li><Link to="/leaderboard" className="nav-link">Leaderboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--text-primary)' }}>Resources</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <li><Link to="/docs" className="nav-link">Documentation</Link></li>
              <li><Link to="/community" className="nav-link">Community Forum</Link></li>
              <li><Link to="/guides" className="nav-link">Guides</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--text-primary)' }}>Legal</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <li><Link to="/privacy" className="nav-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="nav-link">Terms of Service</Link></li>
              <li><Link to="/conduct" className="nav-link">Code of Conduct</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div style={{ paddingTop: 'var(--spacing-xl)', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} NXTGENSEC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
