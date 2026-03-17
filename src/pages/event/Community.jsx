import React from 'react';
import { MessageSquare, Users, Edit3, Link as LinkIcon, ThumbsUp } from 'lucide-react';

const Community = () => {
  const posts = [
    { id: 1, author: 'Alex R.', role: 'Frontend', time: '2 hours ago', title: 'Anyone looking for a React developer?', content: "I'm looking for a team building something in Web3. I have 3 years of experience with React and Tailwind.", tags: ['LFG', 'Web3', 'React'], likes: 12, comments: 4 },
    { id: 2, author: 'Sarah W.', role: 'Organizer', time: '5 hours ago', title: 'Welcome to VibeCoding Season 4!', content: "We are thrilled to launch the 4th season. Please remember to review the rules and join our Discord channel for real-time announcements.", tags: ['Announcement', 'Official'], likes: 89, comments: 15 },
    { id: 3, author: 'David K.', role: 'Backend', time: '1 day ago', title: 'Free API for weather data', content: "If anyone is building a tech-for-good project around climate, check out this free API I found. It doesn't require an authentication key.", tags: ['Resources', 'Tech for Good'], likes: 45, comments: 8 },
  ];

  return (
    <div className="page-container" style={{ background: 'var(--bg-primary)' }}>
      <div className="container max-w-lg mx-auto" style={{ padding: '2rem 1rem', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        
        {/* Main Feed */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <h1 style={{ fontSize: '2.25rem', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', fontWeight: 800 }}>
              <MessageSquare size={32} style={{ color: 'var(--accent-secondary)' }} /> <span className="text-gradient">Community</span>
            </h1>
            <button className="btn btn-primary" style={{ padding: '0.6rem 1.25rem' }} onClick={() => alert('Create new post modal coming soon!')}>
              <Edit3 size={18} /> New Post
            </button>
          </div>

          <div style={{ display: 'flex', gap: 'var(--spacing-md)', borderBottom: '1px solid var(--border-color)', marginBottom: 'var(--spacing-xl)', overflowX: 'auto', paddingBottom: '2px' }}>
            {['Latest', 'Top', 'Announcements', 'Resources', 'LFG'].map((tab, i) => (
              <button 
                key={i} 
                style={{ 
                  padding: '1rem 0.5rem', 
                  background: 'none', 
                  border: 'none', 
                  borderBottom: i === 0 ? '2px solid var(--accent-primary)' : '2px solid transparent', 
                  color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontWeight: i === 0 ? 700 : 500,
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}>
                {tab}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {posts.map(post => (
              <div key={post.id} className="glass-card" style={{ padding: 'var(--spacing-xl)', cursor: 'pointer' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-full)', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid var(--border-color)' }}>
                    <Users size={24} style={{ color: 'var(--accent-primary)' }} />
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xs)' }}>
                      <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{post.author}</span>
                      <span style={{ color: 'var(--accent-tertiary)', fontSize: '0.7rem', padding: '0.1rem 0.5rem', background: 'rgba(236, 72, 153, 0.1)', borderRadius: 'var(--radius-sm)', fontWeight: 600 }}>{post.role}</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>• {post.time}</span>
                    </div>
                    
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 'var(--spacing-xs)' }}>{post.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--spacing-md)', fontSize: '0.95rem' }}>{post.content}</p>
                    
                    <div style={{ display: 'flex', gap: 'var(--spacing-xs)', marginBottom: 'var(--spacing-lg)' }}>
                      {post.tags.map((tag, j) => (
                        <span key={j} style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontWeight: 600 }}>
                          {tag}
                        </span>
                      ))}
                    </div>
 
                    <div style={{ display: 'flex', gap: 'var(--spacing-xl)', borderTop: '1px solid var(--border-color)', paddingTop: 'var(--spacing-md)' }}>
                      <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'color 0.2s', fontSize: '0.85rem' }}>
                        <ThumbsUp size={16} /> <span style={{ fontWeight: 600 }}>{post.likes}</span>
                      </button>
                      <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'color 0.2s', fontSize: '0.85rem' }}>
                        <MessageSquare size={16} /> <span style={{ fontWeight: 600 }}>{post.comments} Comments</span>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }} className="hide-mobile">
          
          <div className="glass-card" style={{ padding: 'var(--spacing-xl)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-lg)', fontWeight: 700 }}>Popular Tags</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-xs)' }}>
              {['#Announcements', '#LFG', '#Web3', '#AI', '#Help', '#React', '#Python'].map((tag, i) => (
                <button 
                  key={i} 
                  type="button" 
                  style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'all 0.2s', border: '1px solid var(--border-color)', fontWeight: 600, cursor: 'pointer' }} 
                  onClick={() => alert(`Filtering by tag: ${tag}`)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card" style={{ padding: 'var(--spacing-xl)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-lg)', fontWeight: 700 }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer', padding: 0 }} onClick={() => alert('Redirecting to external resource...')}>
                <LinkIcon size={16} style={{ color: 'var(--accent-primary)' }} /> Official Discord
              </button>
              <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer', padding: 0, marginTop: 'var(--spacing-md)' }} onClick={() => alert('Opening Hacker Guide...')}>
                <LinkIcon size={16} style={{ color: 'var(--accent-secondary)' }} /> Hacker Guide
              </button>
              <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer', padding: 0, marginTop: 'var(--spacing-md)' }} onClick={() => alert('Accessing API Directory...')}>
                <LinkIcon size={16} style={{ color: 'var(--accent-tertiary)' }} /> API Directory
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Community;
