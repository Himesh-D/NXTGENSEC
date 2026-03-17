import React, { useState } from 'react';
import { Trophy, Medal, Star, Target, Search } from 'lucide-react';

const Leaderboard = () => {
  const [track, setTrack] = useState('All');

  const rankings = [
    { rank: 1, team: 'NeuralKnights', project: 'VibeNet AI', score: 98, track: 'AI & Machine Learning', members: 4 },
    { rank: 2, team: 'EcoBuilders', project: 'GreenChain', score: 95, track: 'Web3 & Blockchain', members: 3 },
    { rank: 3, team: 'HealthSync', project: 'MediConnect', score: 91, track: 'Tech for Good', members: 4 },
    { rank: 4, team: 'CodeCrafters', project: 'DevFlow Hub', score: 88, track: 'Open Innovation', members: 2 },
    { rank: 5, team: 'DataDojo', project: 'Insight Engine', score: 85, track: 'AI & Machine Learning', members: 3 },
  ];

  const filteredRankings = track === 'All' ? rankings : rankings.filter(r => r.track === track);

  const getRankStyle = (rank) => {
    switch(rank) {
      case 1: return { color: '#fbbf24', bg: 'rgba(251, 191, 36, 0.1)', icon: <Trophy size={24} /> }; // Gold
      case 2: return { color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.1)', icon: <Medal size={24} /> };   // Silver
      case 3: return { color: '#b45309', bg: 'rgba(180, 83, 9, 0.1)', icon: <Medal size={24} /> };    // Bronze
      default: return { color: 'var(--text-secondary)', bg: 'var(--bg-tertiary)', icon: <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>#{rank}</span> };
    }
  };

  return (
    <div className="page-container">
      <div className="container" style={{ padding: '2rem 1rem' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>Global <span className="text-gradient">Leaderboard</span></h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            The most innovative solutions built during the hackathon. See who took home the top prizes!
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-xs)', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {['All', 'AI & Machine Learning', 'Web3 & Blockchain', 'Tech for Good', 'Open Innovation'].map((t) => (
              <button 
                key={t}
                onClick={() => setTrack(t)}
                className={track === t ? 'btn btn-primary' : 'btn btn-secondary'}
                style={{ 
                  padding: '0.4rem 1.25rem', 
                  borderRadius: 'var(--radius-full)', 
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap'
                }}>
                {t}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input type="text" placeholder="Search teams..." className="input-field" style={{ paddingLeft: '2.5rem' }} />
          </div>
        </div>

        {/* Leaderboard List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {filteredRankings.map((team, idx) => {
            const rankStyle = getRankStyle(team.rank);
            return (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  padding: 'var(--spacing-lg) var(--spacing-xl)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 'var(--spacing-xl)',
                  animation: `fadeIn 0.5s ease-out ${idx * 0.1}s forwards`,
                  opacity: 0,
                  borderLeft: `4px solid ${team.rank <= 3 ? rankStyle.color : 'transparent'}`
                }}
              >
                
                {/* Rank Badge */}
                <div style={{ width: '54px', height: '54px', borderRadius: 'var(--radius-full)', background: rankStyle.bg, color: rankStyle.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${team.rank <= 3 ? rankStyle.color : 'var(--border-color)'}` }}>
                   {rankStyle.icon}
                </div>

                {/* Team Info */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xs)' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{team.team}</h3>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{team.members} Members</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{team.project}</span>
                    <span style={{ color: 'var(--accent-secondary)', fontSize: '0.8rem', background: 'var(--bg-tertiary)', padding: '0.1rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>{team.track}</span>
                  </div>
                </div>

                {/* Score */}
                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', color: 'var(--accent-primary)', justifyContent: 'flex-end' }}>
                    <Star size={18} fill="currentColor" />
                    <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>{team.score}</span>
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Points</div>
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default Leaderboard;
