import React from 'react';
import { Users, Trello, Award, Settings, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const Admin = () => {
  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 80px)', overflow: 'hidden' }}>
      
      {/* Header */}
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)', padding: 'var(--spacing-lg) var(--spacing-2xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', fontWeight: 800 }}>
            <Settings size={20} style={{ color: 'var(--accent-primary)' }} /> Organizer <span className="text-gradient">Center</span>
            <select style={{ marginLeft: 'var(--spacing-md)', background: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '0.25rem 0.5rem', fontSize: '0.75rem', outline: 'none', cursor: 'pointer', fontWeight: 600 }}>
              <option>Season 4 (Current)</option>
              <option>Winter 2025</option>
              <option>Global AI 2025</option>
            </select>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 500 }}>Management Dashboard • NXTGENSEC</p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
          <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={() => alert('Exporting event data...')}>Export</button>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={() => alert('Accessing event management settings...')}>Manage Event</button>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* Sidebar */}
        <div style={{ width: '240px', borderRight: '1px solid var(--border-color)', background: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)', padding: 'var(--spacing-xl) var(--spacing-sm)' }}>
          {[
            { name: 'Overview', icon: <Trello size={18} />, active: true },
            { name: 'Participants', icon: <Users size={18} />, active: false },
            { name: 'Submissions', icon: <CheckCircle size={18} />, active: false },
            { name: 'Judging', icon: <Award size={18} />, active: false },
            { name: 'Settings', icon: <Settings size={18} />, active: false }
          ].map((item, i) => (
            <button 
              key={i} 
              style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: 'none', background: item.active ? 'var(--bg-tertiary)' : 'transparent', color: item.active ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: item.active ? 700 : 500, cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left', fontSize: '0.9rem' }}
            >
              <span style={{ color: item.active ? 'var(--accent-primary)' : 'inherit' }}>{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
          
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Event Overview</h2>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-2xl)' }}>
            {[
              { label: 'Registrations', value: '1,452', trend: '+12%', color: 'var(--accent-primary)' },
              { label: 'Formed Teams', value: '345', trend: '+5%', color: 'var(--accent-secondary)' },
              { label: 'Submissions', value: '280', trend: 'Finalizing', color: 'var(--accent-tertiary)' },
              { label: 'Judging', value: '45%', trend: 'On Track', color: '#10b981' }
            ].map((kpi, i) => (
              <div key={i} className="glass-card" style={{ padding: 'var(--spacing-lg)', borderLeft: `3px solid ${kpi.color}`, textAlign: 'left' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', marginBottom: '0.25rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{kpi.label}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>{kpi.value}</span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', padding: '0.1rem 0.4rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontWeight: 600 }}>{kpi.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Analytics Chart Simulation */}
          <div className="glass-card" style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xl)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-xl)', fontWeight: 700 }}>Registration Trend (Last 7 Days)</h3>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--spacing-md)', height: '180px', padding: '0 0.5rem' }}>
              {[65, 80, 45, 90, 120, 150, 180].map((v, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                  <div style={{ 
                    width: '100%', 
                    height: `${(v / 200) * 100}%`, 
                    background: i === 6 ? 'var(--accent-primary)' : 'var(--bg-tertiary)', 
                    borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
                    transition: 'all 0.5s ease-out',
                    position: 'relative',
                    border: '1px solid var(--border-color)',
                    borderBottom: 'none'
                  }}>
                    <div style={{ position: 'absolute', top: '-22px', width: '100%', textAlign: 'center', fontSize: '0.7rem', fontWeight: 700, color: i === 6 ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>{v}</div>
                  </div>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Day {i+1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
            
            {/* Recent Activity */}
            <div className="glass-card" style={{ padding: 'var(--spacing-xl)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-xl)', fontWeight: 700 }}>Live Feed</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                {[
                  { icon: <CheckCircle size={16} color="#10b981" />, text: 'Team NeuralKnights submitted project', time: '10m ago' },
                  { icon: <Users size={16} color="var(--accent-secondary)" />, text: '5 participants joined', time: '1h ago' },
                  { icon: <AlertCircle size={16} color="#f59e0b" />, text: 'Sarah W. requested judge extension', time: '3h ago' },
                  { icon: <Award size={16} color="var(--accent-primary)" />, text: 'Phase 1 judging initiated', time: '5h ago' }
                ].map((act, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-full)', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid var(--border-color)' }}>
                      {act.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: '0.9rem', marginBottom: '0.1rem', fontWeight: 500 }}>{act.text}</p>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>{act.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions & Status */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
              <div className="glass-card" style={{ padding: 'var(--spacing-xl)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-xl)', fontWeight: 700 }}>Actions</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                  <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', fontSize: '0.85rem' }}>Send Announcement</button>
                  <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', fontSize: '0.85rem' }}>Export Submissions</button>
                  <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', fontSize: '0.85rem' }}>Manage Judges</button>
                </div>
              </div>

              <div className="glass-card" style={{ padding: 'var(--spacing-xl)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-xl)', fontWeight: 700 }}>System</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}><Clock size={14} /> Uptime</span>
                    <span style={{ fontWeight: 700, color: '#10b981', fontSize: '0.85rem' }}>99.99%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}><AlertCircle size={14} /> Critical Tickets</span>
                    <span style={{ fontWeight: 700, color: '#f59e0b', fontSize: '0.85rem' }}>12</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Admin;
