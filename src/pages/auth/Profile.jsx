import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { User, Github, Mail, Shield, Award, Zap, Code, Save, Plus, X, Star, Users, Clock } from 'lucide-react';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    bio: user?.bio || '',
    github: user?.github || '',
    skills: user?.skills || []
  });
  const [newSkill, setNewSkill] = useState('');

  const badges = [
    { title: 'Early Hacker', icon: <Clock size={20} />, color: '#3498db' },
    { title: 'Team Builder', icon: <Users size={20} />, color: '#2ecc71' },
    { title: 'Top Innovator', icon: <Award size={20} />, color: '#f1c40f' }
  ];

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  const addSkill = () => {
    if (newSkill && !formData.skills.includes(newSkill)) {
      setFormData({ ...formData, skills: [...formData.skills, newSkill] });
      setNewSkill('');
    }
  };

  const removeSkill = (skill) => {
    setFormData({ ...formData, skills: formData.skills.filter(s => s !== skill) });
  };

  if (!user) return <div className="page-container"><div className="container">Please log in to view your profile.</div></div>;

  return (
    <div className="page-container">
      <div className="container max-w-lg mx-auto" style={{ padding: '2rem 1rem' }}>
        
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '2rem' }}>
          
          {/* Sidebar Info */}
          <div className="glass-card" style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: 'var(--radius-full)', background: 'var(--bg-tertiary)', margin: '0 auto var(--spacing-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-primary)', border: '2px solid var(--border-color)', boxShadow: 'var(--shadow-glow)' }}>
              {user.name.charAt(0)}
            </div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)', fontWeight: 700 }}>{user.name}</h2>
            <div style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.8rem', marginBottom: 'var(--spacing-md)', textTransform: 'uppercase', letterSpacing: '1px' }}>{user.role}</div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: 'var(--spacing-xl)', lineHeight: 1.6 }}>
              {user.bio || 'No bio yet. Tell the community about yourself!'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', textAlign: 'left', marginBottom: 'var(--spacing-xl)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                <Mail size={16} style={{ color: 'var(--accent-secondary)' }} /> {user.email}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                <Github size={16} style={{ color: 'var(--accent-primary)' }} /> {user.github || 'github.com/notlinked'}
              </div>
            </div>

            <button className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem' }} onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {/* Main Content */}
          <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Gamification Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: 'var(--spacing-md)' }}>
              {[
                { label: 'Activity Points', value: '1,250', icon: <Zap size={18} color="#f1c40f" /> },
                { label: 'Hackathons', value: '4', icon: <Shield size={18} color="#3498db" /> },
                { label: 'Reputation', value: '4.9', icon: <Star size={18} color="#2ecc71" /> }
              ].map((stat, i) => (
                <div key={i} className="glass-card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center', borderBottom: '3px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-xs)' }}>{stat.icon}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>{stat.label}</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="glass-card" style={{ padding: 'var(--spacing-xl)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-xl)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', fontWeight: 700 }}>
                <Award size={20} style={{ color: 'var(--accent-primary)' }} /> Achievements & Badges
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-xl)' }}>
                {badges.map((badge, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: 'var(--radius-full)', background: `${badge.color}10`, border: `2px solid ${badge.color}`, color: badge.color, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 15px ${badge.color}20` }}>
                      {badge.icon}
                    </div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>{badge.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Edit / View Skills & Bio */}
            <div className="glass-card" style={{ padding: 'var(--spacing-xl)' }}>
              {isEditing ? (
                <form onSubmit={handleSave}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-xl)', fontWeight: 700 }}>Update Hacker Profile</h3>
                  <div className="input-group">
                    <label className="input-label">Bio</label>
                    <textarea 
                      className="input-field" 
                      value={formData.bio} 
                      onChange={e => setFormData({ ...formData, bio: e.target.value })}
                      placeholder="Share your experience and interests..."
                      style={{ minHeight: '120px' }}
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">GitHub URL</label>
                    <div style={{ position: 'relative' }}>
                      <Github size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                      <input 
                        type="url" 
                        className="input-field" 
                        value={formData.github} 
                        onChange={e => setFormData({ ...formData, github: e.target.value })}
                        placeholder="https://github.com/your-username" 
                        style={{ paddingLeft: '2.75rem' }}
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Skills & Tech Stack</label>
                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                      <input 
                        type="text" 
                        className="input-field" 
                        value={newSkill} 
                        onChange={e => setNewSkill(e.target.value)}
                        placeholder="Add skill (e.g. Next.js)" 
                      />
                      <button type="button" className="btn btn-secondary" onClick={addSkill} style={{ padding: '0 1rem' }}><Plus size={18} /></button>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {formData.skills.map(skill => (
                        <span key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.8rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', fontWeight: 600 }}>
                          {skill} <X size={14} style={{ cursor: 'pointer', color: 'var(--accent-secondary)' }} onClick={() => removeSkill(skill)} />
                        </span>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem', marginTop: 'var(--spacing-md)' }}>
                    <Save size={18} /> Save Changes
                  </button>
                </form>
              ) : (
                <>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-xl)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', fontWeight: 700 }}>
                    <Code size={20} style={{ color: 'var(--accent-secondary)' }} /> Skills & Expertise
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
                    {user.skills.length > 0 ? user.skills.map((skill, i) => (
                      <span key={i} style={{ padding: '0.4rem 1.25rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {skill}
                      </span>
                    )) : <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>No skills added yet.</p>}
                  </div>
                </>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
