import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Bell, Activity, FolderGit2, Calendar, Trophy, ArrowRight, MessageCircle, X, Send, Users } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 14, mins: 30, secs: 0 });
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([{ sender: 'Mentor', text: 'Hi there! How can I help with your project?' }]);
  const [chatInput, setChatInput] = useState('');

  // Countdown Timer Simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, mins, secs } = prev;
        if (secs > 0) secs--;
        else {
          secs = 59;
          if (mins > 0) mins--;
          else {
            mins = 59;
            if (hours > 0) hours--;
            else { hours = 23; if (days > 0) days--; }
          }
        }
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSendMsg = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatMessages([...chatMessages, { sender: 'You', text: chatInput }]);
    setChatInput('');
    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: 'Mentor', text: 'Thanks for reaching out! A mentor will review this shortly.' }]);
    }, 1000);
  };

  return (
    <div className="page-container" style={{ background: 'var(--bg-primary)' }}>
      <div className="container" style={{ padding: '2rem 1rem' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Participant Dashboard</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Welcome back, {user?.name || 'Hacker'}! Here's your current status.</p>
          </div>
          <button className="btn btn-secondary">
            <Bell size={18} /> Notifications
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Main Info Column (Left 2/3) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }} className="lg:col-span-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 grid-tight">
              {/* Leaderboard Shortcut */}
              <Link to="/leaderboard" className="glass-card" style={{ padding: 'var(--spacing-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                  <Trophy size={24} style={{ color: '#fbbf24' }} />
                  <div>
                    <h3 style={{ fontSize: '1.1rem' }}>Global Leaderboard</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Check current standings</p>
                  </div>
                </div>
                <ArrowRight size={20} style={{ color: 'var(--text-secondary)' }} />
              </Link>

              {/* My Team (Simplified placeholder) */}
              <Link to="/teams" className="glass-card" style={{ padding: 'var(--spacing-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                  <Users size={24} style={{ color: 'var(--accent-secondary)' }} />
                  <div>
                    <h3 style={{ fontSize: '1.1rem' }}>Team Status</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>No team joined yet</p>
                  </div>
                </div>
                <ArrowRight size={20} style={{ color: 'var(--text-secondary)' }} />
              </Link>
            </div>

            {/* Status Card */}
            <div className="glass-card animate-flyIn" style={{ padding: 'var(--spacing-xl)', borderLeft: '4px solid var(--accent-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                <Activity size={24} style={{ color: 'var(--accent-primary)' }} />
                <h2 style={{ fontSize: '1.25rem' }}>Current Phase: Team Formation</h2>
              </div>
              
              <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-sm)' }}>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Registration</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Team Formation</span>
                  <span>Hacking</span>
                  <span>Judging</span>
                </div>
                <div className="progress-container" style={{ '--progress': '40%' }}>
                  <div className="progress-bar"></div>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)', lineHeight: 1.6 }}>
                You have not joined a team yet. The hackathon begins in 5 days. We recommend finding teammates before the hacking starts to ensure a smooth kickoff.
              </p>
              <Link to="/teams" className="btn btn-primary">Find a Team <ArrowRight size={18} /></Link>
            </div>

            {/* My Project */}
            <div className="glass-card animate-flyIn" style={{ padding: 'var(--spacing-xl)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                  <FolderGit2 size={24} style={{ color: 'var(--accent-secondary)' }} />
                  My Project
                </h2>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>NO SUBMISSION</span>
              </div>
              
              <div style={{ textAlign: 'center', padding: 'var(--spacing-3xl) 0', border: '1px dashed var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>You haven't submitted a project yet.</p>
                <Link to="/submit" className="btn btn-secondary">Submit Project</Link>
              </div>
            </div>

          </div>

          {/* Sidebar Column (Right 1/3) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }} className="lg:col-span-4">
            
            {/* Profile Summary */}
            <div className="glass-card" style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-full)', background: 'var(--gradient-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-md)' }}>
                <User size={40} color="white" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-xs)' }}>{user?.name || 'Hacker'}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 'var(--spacing-lg)' }}>{user?.role || 'Participant'}</p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-xs)', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontWeight: 500 }}>React</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontWeight: 500 }}>Node.js</span>
              </div>
            </div>

            {/* Deadline Timer */}
            <div className="glass-card" style={{ padding: 'var(--spacing-xl)', textAlign: 'center', borderLeft: '4px solid var(--accent-tertiary)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Submission Deadline</h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-md)' }}>
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hrs' },
                  { value: timeLeft.mins, label: 'Min' },
                  { value: timeLeft.secs, label: 'Sec' }
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--accent-tertiary)', width: '36px' }}>
                      {String(t.value).padStart(2, '0')}
                    </div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Schedule */}
            <div className="glass-card" style={{ padding: 'var(--spacing-xl)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-lg)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <Calendar size={18} style={{ color: 'var(--accent-secondary)' }} />
                Upcoming Events
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                {[
                  { time: 'In 5 days', event: 'Opening Ceremony', active: true },
                  { time: 'In 5 days', event: 'Hacking Begins', active: false }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'flex-start' }}>
                    <div style={{ minWidth: '8px', height: '8px', borderRadius: '50%', background: item.active ? 'var(--accent-primary)' : 'var(--border-color)', marginTop: '0.5rem', boxShadow: item.active ? '0 0 10px var(--accent-primary)' : 'none' }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.event}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Mentor Chat Widget */}
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 50 }}>
          {isChatOpen ? (
            <div className="glass-panel" style={{ width: '320px', height: '400px', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
              <div style={{ padding: '1rem', background: 'var(--accent-primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 600, color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MessageCircle size={18}/> Mentor Chat</span>
                <button onClick={() => setIsChatOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><X size={20}/></button>
              </div>
              <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg-primary)' }}>
                {chatMessages.map((msg, i) => (
                  <div key={i} style={{ alignSelf: msg.sender === 'You' ? 'flex-end' : 'flex-start', background: msg.sender === 'You' ? 'var(--accent-secondary)' : 'var(--bg-secondary)', padding: '0.75rem 1rem', borderRadius: '12px', maxWidth: '85%', fontSize: '0.9rem' }}>
                    {msg.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMsg} style={{ padding: '1rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '0.5rem' }}>
                <input type="text" value={chatInput} onChange={e => setChatInput(e.target.value)} placeholder="Type a message..." className="input-field" style={{ flex: 1, padding: '0.5rem 1rem' }} />
                <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}><Send size={18}/></button>
              </form>
            </div>
          ) : (
            <button onClick={() => setIsChatOpen(true)} className="btn btn-primary" style={{ width: '60px', height: '60px', borderRadius: '50%', padding: 0, boxShadow: '0 4px 20px rgba(139, 92, 246, 0.5)' }}>
              <MessageCircle size={28} />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
