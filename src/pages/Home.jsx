import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Users, Trophy, Code2, ArrowRight } from 'lucide-react';
import HyperspeedBackground from '@/components/features/HyperspeedBackground';
import ScrollReveal from '@/components/utils/ScrollReveal';

const Home = () => {
  return (
    <div className="page-container">
      {/* Hero Section - No ScrollReveal needed as it is the first section */}
      <section style={{ 
        position: 'relative', 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'radial-gradient(circle at center, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        overflow: 'hidden'
      }}>
        <HyperspeedBackground />
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'var(--accent-primary)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%', top: '-10%', left: '-10%' }} />
        <div style={{ position: 'absolute', width: '500px', height: '500px', background: 'var(--accent-secondary)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%', bottom: '-10%', right: '-10%' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="animate-flyIn" style={{ 
            display: 'inline-block', 
            padding: '0.6rem 1.8rem', 
            background: 'rgba(230, 126, 34, 0.12)', 
            border: '1px solid rgba(230, 126, 34, 0.4)', 
            borderRadius: '2rem', 
            marginBottom: '2rem', 
            fontSize: '0.875rem', 
            fontWeight: 800, 
            color: '#e67e22',
            letterSpacing: '1px',
            animationDelay: '0.1s',
            opacity: 0
          }}>
            ● ONLINE HACKATHON
          </div>

          <h1 className="animate-flyIn" style={{ 
            fontSize: 'clamp(4rem, 12vw, 8.5rem)', 
            marginBottom: '0.2rem', 
            lineHeight: 1,
            letterSpacing: '-0.04em',
            fontFamily: 'var(--font-display)',
            background: 'linear-gradient(to right, #3498db, #2ecc71, #f1c40f, #e67e22, #e74c3c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textTransform: 'uppercase',
            animationDelay: '0.3s',
            opacity: 0,
            textShadow: '0 0 40px rgba(52, 152, 219, 0.3)'
          }}>
            NXTGENSEC
          </h1>

          <h2 className="animate-flyIn" style={{ 
            fontSize: 'clamp(1.2rem, 3vw, 2rem)', 
            color: 'white', 
            marginBottom: '3.5rem', 
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            animationDelay: '0.5s',
            opacity: 0
          }}>
            Securing Digital Assets
          </h2>
          
          <div className="animate-flyIn glass-panel" style={{ 
            padding: '1.2rem 3rem', 
            background: 'rgba(230, 126, 34, 0.08)', 
            border: '1px solid rgba(230, 126, 34, 0.3)', 
            borderRadius: '1rem',
            marginBottom: '2.5rem',
            animationDelay: '0.7s',
            opacity: 0
          }}>
            <h3 style={{ color: '#e67e22', fontSize: '1.5rem', margin: 0, fontWeight: 700 }}>
              VibeCoding Hackathon | March 2k26
            </h3>
          </div>

          <div className="animate-flyIn" style={{ animationDelay: '0.9s', opacity: 0 }}>
            <a href="https://www.ignitioninaiera.space/" target="_blank" rel="noopener noreferrer" style={{ 
              fontSize: '1rem', 
              color: '#2ecc71', 
              marginBottom: '2rem', 
              textDecoration: 'none', 
              display: 'inline-block',
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}>
              In collaboration with Ignition In AI Era
            </a>
          </div>

          <p className="animate-flyIn" style={{ 
            fontStyle: 'italic', 
            fontSize: '1.1rem', 
            color: 'var(--text-secondary)', 
            maxWidth: '600px', 
            marginBottom: '4rem',
            animationDelay: '1.1s',
            opacity: 0
          }}>
            "Code with purpose. Build secure digital products."
          </p>
          
          <div className="animate-flyIn" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.2rem', 
            alignItems: 'center',
            width: '100%',
            animationDelay: '1.3s',
            opacity: 0
          }}>
            <div style={{ 
              width: '100%', 
              maxWidth: '420px', 
              padding: '1.1rem', 
              borderRadius: 'var(--radius-md)', 
              background: 'var(--bg-tertiary)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-color)',
              fontWeight: '800',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'not-allowed'
            }}>
              <Trophy size={20} /> REGISTRATIONS CLOSED
            </div>
            
            <Link to="/about" style={{ 
              width: '100%', 
              maxWidth: '420px', 
              padding: '1.1rem', 
              borderRadius: '12px', 
              background: 'transparent',
              border: '2px solid #e67e22',
              color: 'white',
              fontWeight: '800',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.3s ease'
            }}>
              <Terminal size={22} /> VIEW CHALLENGES
            </Link>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            marginTop: '4rem', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            padding: '1rem',
            borderTop: '1px solid var(--border-color)',
            width: '100%',
            maxWidth: '800px'
          }}>
            {[
              { label: 'ONLINE', color: '#3498db' },
              { label: 'MAX 2 MEMBERS', color: '#2ecc71' },
              { label: 'REGISTRATIONS CLOSED', color: '#e67e22' },
              { label: 'ASSIGNED PS AT KICKOFF', color: '#e74c3c' }
            ].map((badge, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-secondary)', letterSpacing: '1px' }}>
                <span style={{ color: badge.color, fontSize: '1rem' }}>●</span> {badge.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollReveal>
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: 'var(--spacing-lg)' }}>About the <span className="text-gradient">March Edition</span></h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: 'var(--spacing-xl)' }}>
                  VibeCoding is not just a hackathon; it's a high-octane development experience. In our March edition, we're pushing the boundaries of security and innovation. Build real-world solutions under pressure and prove your team's mettle.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
                  {['#SecurityFirst', '#Innovation', '#HighOctane'].map(tag => (
                    <span key={tag} style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.9rem' }}>{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 grid-tight">
                {[
                  { title: 'Code the Vibe', desc: 'Focus on pure dev energy.' },
                  { title: 'Live Problem Statements', desc: 'Real challenges at kickoff.' },
                  { title: 'Team-Only Format', desc: 'Strictly 2 members max.' },
                  { title: 'Time-Bound Execution', desc: '48 hours to deliver.' }
                ].map((card, i) => (
                  <div key={i} className="glass-card" style={{ padding: 'var(--spacing-lg)' }}>
                    <h4 style={{ color: 'var(--accent-secondary)', marginBottom: 'var(--spacing-xs)' }}>{card.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats Section */}
      <ScrollReveal>
        <section style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: '2rem', textAlign: 'center' }}>
              {[
                { label: 'Total Prize Pool', value: '$50,000+' },
                { label: 'Participants', value: '10,000+' },
                { label: 'Projects Built', value: '1,200+' },
                { label: 'Countries', value: '120+' }
              ].map((stat, i) => (
                <div key={i} className="glass-panel" style={{ padding: '2rem', border: 'none', background: 'transparent' }}>
                  <h3 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.value}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Live Stream Section */}
      <ScrollReveal>
        <section style={{ padding: '2rem 0', background: 'var(--accent-primary)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', animation: 'shimmer 2s infinite' }} />
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '0.4rem 0.8rem', background: '#fff', color: 'var(--accent-primary)', borderRadius: '4px', fontWeight: 800, fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', animation: 'pulse 1.5s infinite' }} /> LIVE NOW
              </div>
              <h3 style={{ color: '#fff', fontWeight: 600 }}>Demo Day: Season 4 Final Presentations</h3>
            </div>
            <button className="btn" style={{ background: '#fff', color: 'var(--accent-primary)', fontWeight: 700, padding: '0.5rem 1.5rem', borderRadius: '8px' }} onClick={() => alert('Opening live stream...')}>Watch Stream</button>
          </div>
        </section>
      </ScrollReveal>

      {/* Tracks Section */}
      <ScrollReveal>
        <section className="section-padding">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--spacing-sm)' }}>Hackathon Tracks</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Choose your domain and build innovative solutions using cutting-edge technologies.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {[
                { icon: <Terminal size={32} />, title: 'Web3 & Blockchain', desc: 'Build decentralized applications, smart contracts, and infrastructure.' },
                { icon: <Code2 size={32} />, title: 'AI & Machine Learning', desc: 'Create intelligent systems, generative AI tools, and data pipelines.' },
                { icon: <Users size={32} />, title: 'Tech for Good', desc: 'Solve real-world problems relating to climate, education, or healthcare.' },
              ].map((track, i) => (
                <div key={i} className="glass-card" style={{ padding: 'var(--spacing-xl)' }}>
                  <div style={{ background: 'var(--bg-secondary)', width: '64px', height: '64px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--spacing-lg)', color: 'var(--accent-primary)', border: '1px solid var(--border-color)' }}>
                    {track.icon}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>{track.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{track.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Timeline Section */}
      <ScrollReveal>
        <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hackathon Timeline</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Mark your calendars for the key phases of the competition.</p>
            </div>
            <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '100%', background: 'var(--gradient-glow)', opacity: 0.3 }} />
              {[
                { date: 'March 10', title: 'Registration Starts', desc: 'Secure your spot and form your team for the March edition.' },
                { date: 'March 15-17', title: 'Hackathon Days', desc: '48 hours of intense coding, collaboration, and building.' },
                { date: 'March 18-20', title: 'Filtration Phase', desc: 'Our judges review submissions based on impact and security.' },
                { date: 'March 21', title: 'Final Results', desc: 'Winners and runners-up announced on the main stage.' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', marginBottom: '4rem', width: '100%', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '16px', background: 'var(--accent-primary)', borderRadius: '50%', border: '4px solid var(--bg-primary)', zIndex: 5, top: '10px' }} />
                  <div className="glass-panel" style={{ width: '42%', padding: '1.5rem', textAlign: i % 2 === 0 ? 'right' : 'left' }}>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase' }}>{item.date}</span>
                    <h3 style={{ margin: '0.5rem 0', fontSize: '1.25rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Rules Section */}
      <ScrollReveal>
        <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Rules & Process</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Ensuring a fair and impactful competition for everyone.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
              <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-primary)' }}>
                  <Trophy size={24} /> Official Rules
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>●</span> Maximum of 2 members per team for this edition.
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>●</span> All code must be original and written during the hackathon.
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>●</span> Use of pre-built modules is allowed but must be disclosed.
                  </li>
                </ul>
              </div>
              <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-secondary)' }}>
                  <Terminal size={24} /> Execution Process
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-secondary)' }}>●</span> Problem statements are assigned precisely at kickoff.
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-secondary)' }}>●</span> Teams have 48 hours to submit their final repository.
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-secondary)' }}>●</span> Virtual judging via video demos and code review.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sponsors Section */}
      <ScrollReveal>
        <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our <span className="text-gradient">Sponsors</span></h2>
              <p style={{ color: 'var(--text-secondary)' }}>Backing the next generation of digital innovators.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', alignItems: 'center', opacity: 0.7 }}>
              {['Google', 'Microsoft', 'AWS', 'Meta', 'Tesla', 'SpaceX'].map(sponsor => (
                <div key={sponsor} style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-secondary)', letterSpacing: '2px', filter: 'grayscale(100%) brightness(1.5)' }}>
                  {sponsor}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Past Hackathons Section */}
      <ScrollReveal>
        <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Past Hackathons</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Celebrating the brilliance and innovation of our previous winners.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '3rem' }}>
              {[
                { month: 'February 2026', winners: 'Team Logic-X', project: 'SecureFlow AI', runners: 'The CodeBreakers' },
                { month: 'January 2026', winners: 'ZeroDay Knights', project: 'AuthSentinel', runners: 'Script Wizards' }
              ].map((hack, i) => (
                <div key={i} className="glass-panel" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '0.8rem', fontWeight: 800, color: 'rgba(255,255,255,0.1)' }}>{hack.month}</div>
                  <h3 style={{ marginBottom: '2rem' }}>{hack.month}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ padding: '0.5rem', background: 'rgba(241, 196, 15, 0.1)', borderRadius: '8px', color: '#f1c40f' }}>
                        <Trophy size={20} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>Winner</p>
                        <h4 style={{ margin: 0 }}>{hack.winners} — <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>{hack.project}</span></h4>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ padding: '0.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', color: '#bdc3c7' }}>
                        <Users size={20} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>Runner Up</p>
                        <h4 style={{ margin: 0, color: '#bdc3c7' }}>{hack.runners}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: '100%', height: '1px', background: 'var(--gradient-text)', top: 0 }} />
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: 'var(--spacing-md)' }}>Ready to hack?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: 'var(--spacing-2xl)', maxWidth: '600px', margin: '0 auto var(--spacing-2xl)' }}>
              Form a team, build a project, and show it to the world. The next big thing starts here.
            </p>
            <Link to="/teams" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.2rem' }}>
              Find Teammates <Users size={20} />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Home;
