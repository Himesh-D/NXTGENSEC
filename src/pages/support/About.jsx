import React from 'react';
import { Calendar, MapPin, Clock, Trophy, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="page-container">
      <div className="container max-w-lg mx-auto" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--bg-tertiary)', border: '1px solid var(--accent-primary)', borderRadius: '2rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
            Season 4 Details
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>About <span className="text-gradient">VibeCoding</span></h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            A 48-hour global hackathon challenging creators to build innovative solutions to modern problems. Connect, build, and win.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ marginBottom: 'var(--spacing-3xl)' }}>
          {[
            { icon: <Calendar size={20} />, title: 'When', desc: 'March 27-29, 2026' },
            { icon: <MapPin size={20} />, title: 'Where', desc: 'Global / Online' },
            { icon: <Trophy size={20} />, title: 'Prizes', desc: '$50,000 Total Pool' }
          ].map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: 'var(--spacing-lg)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
              <div style={{ background: 'var(--bg-tertiary)', color: 'var(--accent-primary)', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>Event Schedule</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {[
              { day: 'Day 1: Friday', time: '18:00 UTC', event: 'Opening Ceremony & Keynote' },
              { day: 'Day 1: Friday', time: '20:00 UTC', event: 'Team Formation & Hacking Begins' },
              { day: 'Day 2: Saturday', time: '12:00 UTC', event: 'Mentor Office Hours' },
              { day: 'Day 2: Saturday', time: '18:00 UTC', event: 'Midpoint Check-in & Mini Events' },
              { day: 'Day 3: Sunday', time: '20:00 UTC', event: 'Hacking Ends & Submissions Due' },
              { day: 'Day 3: Sunday', time: '22:00 UTC', event: 'Closing Ceremony & Winners Announced' }
            ].map((schedule, idx) => (
              <div key={idx} className="glass-card" style={{ padding: 'var(--spacing-md) var(--spacing-lg)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                  <div style={{ color: 'var(--accent-primary)' }}><Clock size={18} /></div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{schedule.day}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{schedule.time}</div>
                  </div>
                </div>
                <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)' }}>{schedule.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Rules & Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
            {[
              { icon: <Target size={24} />, title: 'Fresh Code', desc: 'All project code must be written during the hackathon period. Pre-existing code is not allowed outside of open-source boilerplate.' },
              { icon: <Zap size={24} />, title: 'Team Size', desc: 'Teams can consist of 1 to 4 members. You can form teams before or during the first day of the event.' }
            ].map((rule, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '2.5rem' }}>
                <div style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }}>{rule.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{rule.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
