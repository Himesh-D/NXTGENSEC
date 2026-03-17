import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Award, Download, ShieldCheck, Share2, Printer, Calendar, Zap, ChevronRight, ExternalLink, Info } from 'lucide-react';
import html2canvas from 'html2canvas';

const Certificates = () => {
  const { user } = useAuth();
  const [isGenerating, setIsGenerating] = useState(false);
  const certificateRef = useRef(null);

  const availableCertificates = [
    { 
      id: 'PART-2026-NXT-01', 
      type: 'Participation', 
      event: 'NXTGEN Hackathon Season 4', 
      date: 'March 15-17, 2026', 
      status: 'Available',
      accent: 'var(--accent-primary)',
      description: 'Awarded for active participation and contribution to the NXTGEN Hackathon community.'
    },
    { 
      id: 'WIN-2026-AI-TRACK', 
      type: 'Winner - AI Track', 
      event: 'NXTGEN Hackathon Season 4', 
      date: 'March 15-17, 2026', 
      status: 'Locked',
      accent: 'var(--accent-tertiary)',
      description: 'Awarded for securing the top position in the AI & Machine Learning innovation track.'
    }
  ];

  const handleDownload = async () => {
    if (!certificateRef.current) return;
    
    setIsGenerating(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const canvas = await html2canvas(certificateRef.current, {
        scale: 3, // Higher resolution
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      });
      
      const image = canvas.toDataURL("image/png", 1.0);
      const link = document.createElement('a');
      link.download = `Certificate_${user?.name.replace(/\s+/g, '_')}_${availableCertificates[0].id}.png`;
      link.href = image;
      link.click();
    } catch (err) {
      console.error('Failed to generate certificate:', err);
      alert('Failed to generate certificate. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleShare = () => {
    const shareData = {
      title: 'NXTGEN Hackathon Certificate',
      text: `Check out my official certificate from NXTGEN Hackathon!`,
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!user) return (
    <div className="page-container">
      <div className="container" style={{ textAlign: 'center', padding: '10rem 1rem' }}>
        <ShieldCheck size={64} style={{ color: 'var(--accent-primary)', opacity: 0.5, marginBottom: '2rem' }} />
        <h2>Access Restricted</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Please log in to view and download your certificates.</p>
        <Link to="/auth" className="btn btn-primary">Log In Now</Link>
      </div>
    </div>
  );

  return (
    <div className="page-container" style={{ background: 'var(--bg-primary)', minHeight: 'calc(100vh - 80px)' }}>
      <div className="container" style={{ padding: '3rem 1rem' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', padding: '0.4rem 1rem', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: 'var(--radius-full)', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.75rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
             <Award size={14} style={{ marginRight: '0.5rem' }} /> Verification Hub
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1rem', fontWeight: 800 }}>
            Official <span className="text-gradient">Recognition</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Each achievement is a milestone. Your cryptographically signed certificates are ready for your portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: '3rem', alignItems: 'start' }}>
          
          {/* Certificate Selection Area - 5 columns */}
          <div className="lg:col-span-4" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                <Award size={20} style={{ color: 'var(--accent-primary)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Awards Repository</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {availableCertificates.map(cert => (
                  <div key={cert.id} style={{ 
                    padding: '1.25rem', 
                    background: cert.status === 'Available' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.1)',
                    borderRadius: 'var(--radius-md)',
                    border: cert.status === 'Available' ? `1px solid ${cert.accent}30` : '1px solid var(--border-color)',
                    opacity: cert.status === 'Locked' ? 0.6 : 1,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    cursor: cert.status === 'Available' ? 'pointer' : 'not-allowed'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: cert.accent }}>{cert.type}</span>
                      <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>#{cert.id}</span>
                    </div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>{cert.event}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.4 }}>{cert.description}</p>
                    
                    {cert.status === 'Locked' ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                        <Info size={12} /> Complete track to unlock
                      </div>
                    ) : (
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button className="btn btn-primary" style={{ flex: 1, padding: '0.5rem', fontSize: '0.75rem' }} onClick={handleDownload} disabled={isGenerating}>
                          {isGenerating ? <Zap size={14} className="animate-pulse" /> : <Download size={14} />} 
                          {isGenerating ? 'Processing...' : 'PNG'}
                        </button>
                        <button className="btn btn-secondary" style={{ padding: '0.5rem' }} onClick={handleShare}>
                          <Share2 size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(59, 130, 246, 0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <ShieldCheck size={18} color="var(--accent-secondary)" />
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700 }}>Security Protocol</h4>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                All credentials generated on this platform are cryptographically signed. 
                Tampering with the visual elements will invalidate the signature check.
              </p>
              <div style={{ padding: '0.75rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.7rem', fontFamily: 'monospace', color: 'var(--accent-secondary)', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                HASH: 8f2b1c...9e3a7f
              </div>
            </div>

          </div>

          {/* Live Studio Preview - 8 columns */}
          <div className="lg:col-span-8" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div className="glass-card" style={{ padding: '2rem', background: 'rgba(0,0,0,0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Printer size={20} style={{ color: 'var(--accent-secondary)' }} />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Preview Studio</h3>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                   <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                   <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                   <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                </div>
              </div>

              {/* Certificate Outer Frame */}
              <div style={{ 
                background: '#1a1a2e', 
                padding: '2.5rem', 
                borderRadius: '8px', 
                boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <div 
                  ref={certificateRef}
                  style={{ 
                    width: '100%',
                    aspectRatio: '1.414 / 1',
                    background: '#ffffff', 
                    color: '#0f172a', 
                    padding: '3rem', 
                    position: 'relative', 
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ position: 'absolute', top: '15px', left: '15px', right: '15px', bottom: '15px', border: '1px solid #e2e8f0', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', top: '22px', left: '22px', right: '22px', bottom: '22px', border: '5px double #cbd5e1', pointerEvents: 'none' }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                       <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Award size={36} color="white" />
                       </div>
                    </div>
                    
                    <h2 style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'serif', letterSpacing: '1px', marginBottom: '0.25rem', color: '#1e293b' }}>CERTIFICATE</h2>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '2rem' }}>Of Professional Achievement</p>
                    
                    <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>This certificate is proudly presented to</p>
                    
                    <div style={{ margin: '0 auto 2rem', width: 'fit-content' }}>
                      <h3 style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', color: '#0f172a', borderBottom: '2px solid #6366f1', padding: '0 2rem' }}>
                        {user?.name || 'Authorized Hacker'}
                      </h3>
                    </div>
                    
                    <p style={{ color: '#334155', maxWidth: '540px', margin: '0 auto 3rem', lineHeight: 1.5, fontSize: '0.9rem' }}>
                      For successful participation in the <strong>NXTGEN Hackathon Season 4</strong>. 
                      Recognized for exceptional contribution to technical innovation, secure coding, 
                      and agile development within a 48-hour competitive environment.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', marginTop: '1rem' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontFamily: 'cursive', fontSize: '1rem', marginBottom: '0.25rem', color: '#1e293b' }}>VibeDirector</div>
                        <div style={{ width: '120px', borderTop: '1px solid #94a3b8', margin: '0 auto 0.25rem' }} />
                        <p style={{ fontSize: '0.6rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Event Director</p>
                      </div>
                      
                      <div style={{ width: '80px', height: '80px', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <ShieldCheck size={40} color="rgba(99, 102, 241, 0.2)" />
                      </div>

                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontFamily: 'cursive', fontSize: '1rem', marginBottom: '0.25rem', color: '#1e293b' }}>TechLeadAI</div>
                        <div style={{ width: '120px', borderTop: '1px solid #94a3b8', margin: '0 auto 0.25rem' }} />
                        <p style={{ fontSize: '0.6rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Technical Head</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <Printer size={18} color="var(--accent-secondary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700 }}>Ready to Print?</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>The downloaded PNG is optimized for A4 landscape printing.</p>
                </div>
              </div>
              <button className="btn btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }} onClick={handleDownload} disabled={isGenerating}>
                 <Download size={16} /> Get PDF Quality
              </button>
            </div>

          </div>
        </div>

        {/* Action Call for Others */}
        <div className="glass-card animate-flyIn" style={{ marginTop: '5rem', padding: '4rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800 }}>Expand Your <span className="text-gradient">Portfolio</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '650px', margin: '0 auto 3.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Ready to push your limits? Explore new challenges, compete in specialized tracks, and unlock more high-value certifications.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
             <Link to="/ai-ideas" className="btn btn-primary" style={{ minWidth: '200px', padding: '1rem' }}>
                View Challenges <ChevronRight size={18} />
             </Link>
             <Link to="/about" className="btn btn-secondary" style={{ minWidth: '200px', padding: '1rem' }}>
                How to Qualify <ExternalLink size={18} />
             </Link>
          </div>
        </div>

      </div>

      <style>{`
        @font-face {
          font-family: 'serif';
          src: local('Times New Roman'), local('Georgia');
        }
        @font-face {
          font-family: 'cursive';
          src: local('Brush Script MT'), local('Comic Sans MS');
        }
      `}</style>
    </div>
  );
};

export default Certificates;
