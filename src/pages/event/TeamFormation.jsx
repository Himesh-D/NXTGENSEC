import React, { useState } from 'react';
import { UserPlus, Search, Code, Key, Users, MessageSquare, Plus, CheckCircle, Send, ArrowRight, Trophy } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const TeamFormation = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('find-hackers'); // 'find-hackers' or 'my-team'
  
  // Team State Simulation
  const [myTeam, setMyTeam] = useState(null); 
  // e.g. { name: 'VibeCoders', code: 'VIBE-2026', members: [{name: 'Hacker', role: 'Frontend'}] }
  
  const [teamNameInput, setTeamNameInput] = useState('');
  const [joinCodeInput, setJoinCodeInput] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [teamChat, setTeamChat] = useState([]);

  const hackers = [
    { name: 'Alex Rivera', role: 'Frontend Developer', skills: ['React', 'CSS', 'Figma'], status: 'Looking for Team', bio: 'Passionate about creating beautiful user interfaces.' },
    { name: 'Sam Chen', role: 'AI Specialist', skills: ['Python', 'PyTorch', 'OpenAI'], status: 'Looking for Team', bio: 'Building intelligent systems that solve real problems.' },
    { name: 'Jordan Smith', role: 'Blockchain Dev', skills: ['Solidity', 'Web3.js', 'Ethereum'], status: 'Found Team', bio: 'Decentralizing the world, one block at a time.' },
    { name: 'Taylor Swift', role: 'Data Scientist', skills: ['Python', 'SQL', 'Pandas'], status: 'Looking for Team', bio: 'I speak fluent Data.' },
    { name: 'Morgan Lee', role: 'Cybersecurity Expert', skills: ['Ethical Hacking', 'Rust', 'Linux'], status: 'Looking for Team', bio: 'Securing the future of digital assets.' },
    { name: 'Casey Jones', role: 'Full Stack Dev', skills: ['Next.js', 'PostgreSQL', 'Node.js'], status: 'Looking for Team', bio: 'End-to-end product development specialist.' },
  ];

  const handleCreateTeam = (e) => {
    e.preventDefault();
    if (!teamNameInput) return;
    const code = `${teamNameInput.substring(0,4).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setMyTeam({
      name: teamNameInput,
      code,
      members: [{ name: user?.name || 'You', role: user?.role || 'Team Lead' }],
      maxSize: 2, // As per rules: Max 2 members
      techStack: []
    });
    setTeamNameInput('');
  };

  const handleJoinTeam = (e) => {
    e.preventDefault();
    if (!joinCodeInput) return;
    // Mock joining
    setMyTeam({
      name: 'Hackathon Legends',
      code: joinCodeInput,
      members: [
        { name: 'Alex R.', role: 'Frontend' },
        { name: user?.name || 'You', role: 'Full Stack' }
      ]
    });
    setJoinCodeInput('');
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatMessage) return;
    setTeamChat([...teamChat, { sender: user?.name || 'You', msg: chatMessage }]);
    setChatMessage('');
  };

  return (
    <div className="page-container" style={{ background: 'var(--bg-primary)', minHeight: 'calc(100vh - 80px)' }}>
      <div className="container" style={{ padding: '2rem 1rem' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>Find Your <span className="text-gradient">Dream Team</span></h1>
        </div>

        {/* Tab Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', background: 'var(--bg-secondary)', padding: '0.25rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <button 
              onClick={() => setActiveTab('find-hackers')}
              style={{ padding: '0.75rem 2rem', background: activeTab === 'find-hackers' ? 'var(--bg-primary)' : 'transparent', border: 'none', borderRadius: '8px', color: activeTab === 'find-hackers' ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s', boxShadow: activeTab === 'find-hackers' ? 'var(--shadow-glow)' : 'none' }}>
              Find Hackers
            </button>
            <button 
              onClick={() => setActiveTab('my-team')}
              style={{ padding: '0.75rem 2rem', background: activeTab === 'my-team' ? 'var(--bg-primary)' : 'transparent', border: 'none', borderRadius: '8px', color: activeTab === 'my-team' ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s', boxShadow: activeTab === 'my-team' ? 'var(--shadow-glow)' : 'none' }}>
              My Team
            </button>
          </div>
        </div>

        {/* Find Hackers View */}
        {activeTab === 'find-hackers' && (
          <div className="animate-flyIn">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
                <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input type="text" placeholder="Search by name, role, or skill..." className="input-field" style={{ paddingLeft: '3rem' }} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--spacing-lg)' }}>
              {hackers.map((hacker, i) => (
                <div key={i} className="glass-card" style={{ padding: 'var(--spacing-lg)', opacity: hacker.status === 'Found Team' ? 0.6 : 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-md)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-full)', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <UserPlus size={22} style={{ color: 'var(--accent-primary)' }} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{hacker.name}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{hacker.role}</p>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.7rem', padding: '0.25rem 0.6rem', background: hacker.status === 'Looking for Team' ? 'rgba(59, 130, 246, 0.15)' : 'var(--bg-tertiary)', color: hacker.status === 'Looking for Team' ? '#60a5fa' : 'var(--text-secondary)', borderRadius: 'var(--radius-full)', fontWeight: 600, border: '1px solid var(--border-color)' }}>
                      {hacker.status}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)', lineHeight: 1.5, minHeight: '3rem' }}>
                    {hacker.bio}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-xs)', marginBottom: 'var(--spacing-lg)' }}>
                    {hacker.skills.map((skill, j) => (
                      <span key={j} style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontWeight: 500 }}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                    <button className="btn btn-primary" style={{ flex: 1, padding: '0.5rem', fontSize: '0.875rem' }} disabled={hacker.status === 'Found Team' || !myTeam}>
                      Invite Hacker
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* My Team View */}
        {activeTab === 'my-team' && (
          <div>
            {!myTeam ? (
              <div className="grid grid-cols-1 md:grid-cols-2 max-w-md mx-auto" style={{ gap: 'var(--spacing-xl)' }}>
                
                {/* Create Team Form */}
                <div className="glass-card" style={{ padding: 'var(--spacing-3xl) var(--spacing-xl)', textAlign: 'center' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-full)', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-xl)', border: '1px solid var(--accent-primary)' }}>
                    <Users size={32} style={{ color: 'var(--accent-primary)' }} />
                  </div>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>Create a New Team</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)', fontSize: '0.95rem' }}>Start your own team and invite others to join you.</p>
                  <form onSubmit={handleCreateTeam} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    <input type="text" value={teamNameInput} onChange={e => setTeamNameInput(e.target.value)} placeholder="Team Name" className="input-field" required />
                    <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem' }}>
                      <Plus size={18} /> Create Team
                    </button>
                  </form>
                </div>

                {/* Join Team Form */}
                <div className="glass-card" style={{ padding: 'var(--spacing-3xl) var(--spacing-xl)', textAlign: 'center' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-full)', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-xl)', border: '1px solid var(--accent-secondary)' }}>
                    <Key size={32} style={{ color: 'var(--accent-secondary)' }} />
                  </div>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>Join an Existing Team</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)', fontSize: '0.95rem' }}>Have an invite code? Enter it below to join.</p>
                  <form onSubmit={handleJoinTeam} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    <input type="text" value={joinCodeInput} onChange={e => setJoinCodeInput(e.target.value)} placeholder="Invite Code (e.g. VIBE-1234)" className="input-field" required />
                    <button type="submit" className="btn btn-secondary" style={{ padding: '0.75rem' }}>
                      <ArrowRight size={18} /> Join Team
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              // Team Profile & Dashboard View
              <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '2rem' }}>
                
                {/* Team Details & Members */}
                <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  
                  {/* Team Header */}
                  <div className="glass-panel" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        {myTeam.name} <CheckCircle size={24} color="#10b981" />
                      </h2>
                      <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Invite Code: <span style={{ padding: '0.2rem 0.5rem', background: 'var(--bg-tertiary)', borderRadius: '4px', border: '1px solid var(--border-color)', fontWeight: 'mono', color: 'var(--text-primary)' }}>{myTeam.code}</span>
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{myTeam.members.length}/{myTeam.maxSize}</span>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Members</p>
                    </div>
                  </div>

                  {/* Team Dashboard Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '1rem' }}>
                    {[
                      { label: 'Project Status', value: 'Not Started', icon: <Code size={18} /> },
                      { label: 'Tasks Done', value: '0/12', icon: <CheckCircle size={18} /> },
                      { label: 'Submissions', value: '0', icon: <Send size={18} /> },
                      { label: 'Team Quality', value: '9.2', icon: <Trophy size={18} /> },
                    ].map((stat, i) => (
                      <div key={i} className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
                        <div style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{stat.label}</div>
                        <div style={{ fontWeight: 700, fontSize: '1rem' }}>{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Members List */}
                  <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Team Members</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1rem' }}>
                      {myTeam.members.map((m, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gradient-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600 }}>
                            {m.name.charAt(0)}
                          </div>
                          <div>
                            <div style={{ fontWeight: 600 }}>{m.name}</div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--accent-secondary)' }}>{m.role}</div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Empty Slots */}
                      {Array.from({ length: 4 - myTeam.members.length }).map((_, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: '12px', border: '1px dashed var(--border-color)', opacity: 0.6 }}>
                          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                            <Plus size={20} />
                          </div>
                          <div style={{ color: 'var(--text-secondary)' }}>Open Role</div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Team Chat Section */}
                <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '600px' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                    <MessageSquare size={20} color="var(--accent-primary)" /> Team Chat
                  </h3>
                  
                  <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem 0' }}>
                    {teamChat.length === 0 ? (
                      <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '2rem' }}>Say hello to your team!</p>
                    ) : (
                      teamChat.map((msg, i) => (
                        <div key={i} style={{ alignSelf: msg.sender === (user?.name || 'You') ? 'flex-end' : 'flex-start', background: msg.sender === (user?.name || 'You') ? 'var(--accent-primary)' : 'var(--bg-tertiary)', padding: '0.75rem 1rem', borderRadius: '12px', maxWidth: '85%', fontSize: '0.9rem' }}>
                          <span style={{ display: 'block', fontSize: '0.75rem', opacity: 0.8, marginBottom: '0.2rem' }}>{msg.sender}</span>
                          {msg.msg}
                        </div>
                      ))
                    )}
                  </div>

                  <form onSubmit={handleSendChat} style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                    <input type="text" value={chatMessage} onChange={e => setChatMessage(e.target.value)} placeholder="Type a message..." className="input-field" style={{ flex: 1 }} />
                    <button type="submit" className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }} aria-label="Send message">
                      <Send size={18} />
                    </button>
                  </form>
                </div>

                {/* Networking / Find Collaborators Sidebar */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Users size={20} color="var(--accent-secondary)" /> Network & Collaborate
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Find hackers with specific skills to join your team.</p>
                    <div className="input-group">
                      <input type="text" className="input-field" placeholder="Search skills (e.g. AI, Rust)..." />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {hackers.filter(h => h.status === 'Looking for Team').slice(0, 3).map((h, i) => (
                        <div key={i} style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                          <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{h.name}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{h.role}</div>
                          <button className="btn btn-secondary" style={{ width: '100%', fontSize: '0.75rem', padding: '0.4rem' }}>Send Invite</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default TeamFormation;
