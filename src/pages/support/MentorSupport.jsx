import React, { useState } from 'react';
import { User, MessageSquare, Video, Calendar, Star, Search } from 'lucide-react';

const MentorSupport = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mentors = [
    { id: 1, name: 'Dr. Sarah Chen', specialty: 'AI & Machine Learning', company: 'DeepMind', rating: 4.9, bio: 'Expert in NLP and large language models. Helping teams with architecture and optimization.', available: 'Available Now' },
    { id: 2, name: 'Mark Rifkind', specialty: 'Full Stack & Scaling', company: 'Stripe', rating: 4.8, bio: 'Specialist in building secure and scalable fintech APIs. Ask me about system design.', available: 'Busy till 3 PM' },
    { id: 3, name: 'Elena Rodriguez', specialty: 'UI/UX & Product Design', company: 'Airbnb', rating: 5.0, bio: 'Passionate about human-centric design. I help teams polish their demos and prototypes.', available: 'Offline' },
    { id: 4, name: 'James Wilson', specialty: 'Cybersecurity', company: 'CrowdStrike', rating: 4.7, bio: 'Focused on threat modeling and secure code reviews. Let’s make your project bulletproof.', available: 'Available Now' }
  ];

  return (
    <div className="page-container">
      <div className="container" style={{ padding: '2rem 1rem' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Mentor <span className="text-gradient">Support</span></h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Get guidance from industry experts to take your project to the next level.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-2xl)' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input type="text" placeholder="Search by specialty or company..." className="input-field" style={{ paddingLeft: '2.75rem' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--spacing-xl)' }}>
          {mentors.map(mentor => (
            <div key={mentor.id} className="glass-card" style={{ padding: 'var(--spacing-xl)', position: 'relative' }}>
              <div style={{ display: 'flex', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <User size={32} style={{ color: 'var(--accent-primary)' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{mentor.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#f1c40f', fontWeight: 700, fontSize: '0.9rem' }}>
                      <Star size={14} fill="currentColor" /> {mentor.rating}
                    </div>
                  </div>
                  <p style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.1rem' }}>{mentor.specialty}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{mentor.company}</p>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 'var(--spacing-xl)', minHeight: '3.2em' }}>{mentor.bio}</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: 'var(--spacing-lg)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', fontSize: '0.75rem', color: mentor.available === 'Available Now' ? '#10b981' : 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: 'var(--radius-full)', background: mentor.available === 'Available Now' ? '#10b981' : 'var(--text-secondary)', boxShadow: mentor.available === 'Available Now' ? '0 0 10px #10b981' : 'none' }} />
                  {mentor.available}
                </div>
                <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                  <button className="btn btn-secondary" style={{ padding: '0.5rem' }} aria-label="Chat"><MessageSquare size={16} /></button>
                  <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Book Session <Calendar size={16} style={{ marginLeft: '0.4rem' }} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MentorSupport;
