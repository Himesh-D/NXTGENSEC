import React from 'react';

const RegisteredTeams = () => {
  const stats = [
    { label: 'Total Registrations', value: '450', color: '#3498db' },
    { label: 'Verified Teams', value: '380', color: '#2ecc71' },
    { label: 'Pending Verification', value: '70', color: '#f1c40f' }
  ];

  const teams = [
    { id: 1, name: 'Cyber Sentinels', members: 2, status: 'Verified', date: '2026-03-12' },
    { id: 2, name: 'Neural Knights', members: 2, status: 'Verified', date: '2026-03-13' },
    { id: 3, name: 'Bit Busters', members: 1, status: 'Pending', date: '2026-03-14' },
    { id: 4, name: 'Logic Lords', members: 2, status: 'Verified', date: '2026-03-14' },
    { id: 5, name: 'Data Wizards', members: 2, status: 'Verified', date: '2026-03-15' },
    { id: 6, name: 'NXT Hackers', members: 2, status: 'Pending', date: '2026-03-15' },
  ];

  return (
    <div className="page-container">
      <div className="container" style={{ paddingTop: '2rem' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Registered Teams</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Meet the innovative teams participating in the VibeCoding Hackathon.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          {stats.map((stat, i) => (
            <div key={i} className="glass-card" style={{ padding: 'var(--spacing-xl)', textAlign: 'center', borderTop: `4px solid ${stat.color}` }}>
              <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-xs)', color: stat.color }}>{stat.value}</h3>
              <p style={{ color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.75rem' }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Teams List */}
        <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ padding: 'var(--spacing-lg) var(--spacing-xl)', borderBottom: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Participant List</h3>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
              <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.8rem', borderRadius: 'var(--radius-full)', background: 'rgba(46, 204, 113, 0.1)', color: '#2ecc71', border: '1px solid #2ecc7144', fontWeight: 600 }}>● Verified</span>
              <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.8rem', borderRadius: 'var(--radius-full)', background: 'rgba(241, 196, 15, 0.1)', color: '#f1c40f', border: '1px solid #f1c40f44', fontWeight: 600 }}>● Pending</span>
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  <th style={{ padding: '1rem var(--spacing-xl)', fontWeight: 600, textTransform: 'uppercase' }}>Team Name</th>
                  <th style={{ padding: '1rem var(--spacing-xl)', fontWeight: 600, textTransform: 'uppercase' }}>Members</th>
                  <th style={{ padding: '1rem var(--spacing-xl)', fontWeight: 600, textTransform: 'uppercase' }}>Reg. Date</th>
                  <th style={{ padding: '1rem var(--spacing-xl)', fontWeight: 600, textTransform: 'uppercase' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team) => (
                  <tr key={team.id} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background 0.2s' }}>
                    <td style={{ padding: '1.2rem var(--spacing-xl)', fontWeight: 600 }}>{team.name}</td>
                    <td style={{ padding: '1.2rem var(--spacing-xl)' }}>{team.members} / 2</td>
                    <td style={{ padding: '1.2rem var(--spacing-xl)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{team.date}</td>
                    <td style={{ padding: '1.2rem 2rem' }}>
                      <span style={{ 
                        padding: '0.4rem 1rem', 
                        borderRadius: '2rem', 
                        fontSize: '0.8rem', 
                        fontWeight: 700,
                        background: team.status === 'Verified' ? 'rgba(46, 204, 113, 0.1)' : 'rgba(241, 196, 15, 0.1)',
                        color: team.status === 'Verified' ? '#2ecc71' : '#f1c40f',
                        border: team.status === 'Verified' ? '1px solid #2ecc7144' : '1px solid #f1c40f44'
                      }}>
                        {team.status.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisteredTeams;
