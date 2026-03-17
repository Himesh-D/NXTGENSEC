import React, { useState } from 'react';
import { Lightbulb, Sparkles, Code2, Rocket, ArrowRight } from 'lucide-react';

const AIProjectIdeas = () => {
  const [theme, setTheme] = useState('AI');
  const [ideas, setIdeas] = useState([]);

  const themes = ['AI', 'Cybersecurity', 'Healthcare', 'Education', 'Sustainability', 'Smart Cities'];

  const projectSeeds = {
    'AI': [
      { id: 1, title: 'Sentiment-Based News Filter', stack: 'Python, React, NLP', features: 'Real-time news scraping, Hate speech detection, Bias analysis', steps: '1. Scrape RSS feeds. 2. Pass text through BERT. 3. Visualize bias scores in Dashboard.' },
      { id: 2, title: 'AI Code Reviewer Bot', stack: 'Node.js, OpenAI API, GitHub Actions', features: 'Automated PR comments, Security vulnerability scanning, Code style suggestions', steps: '1. Listen to GitHub Webhooks. 2. Fetch diff files. 3. Use GPT-4 to analyze. 4. Post comment.' }
    ],
    'Cybersecurity': [
      { id: 3, title: 'Phishing Shield Browser Ext', stack: 'JavaScript, ML, Chrome API', features: 'Real-time URL checking, Visual risk scores, Sandboxed preview', steps: '1. Hook into chrome.webRequest. 2. Analyze URL patterns. 3. Alert user if score is high.' }
    ],
    'Sustainability': [
      { id: 4, title: 'Carbon Footprint Tracker', stack: 'React Native, Python, AWS', features: 'Receipt scanning, Transport logging, Gamified offset challenges', steps: '1. Use OCR for receipts. 2. Calculate CO2 based on product types. 3. Display leaderboard.' }
    ]
  };

  const generateIdeas = () => {
    setIdeas(projectSeeds[theme] || [{ id: 0, title: 'Custom Idea for ' + theme, stack: 'Varies', features: 'Dynamic features based on ' + theme, steps: '1. Research problem in ' + theme + '. 2. Prototype solution.' }]);
  };

  return (
    <div className="page-container">
      <div className="container" style={{ padding: '2rem 1rem' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>AI Project <span className="text-gradient">Idea Generator</span></h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Need inspiration? Let our AI suggest innovative projects for your hackathon track.</p>
        </div>

        <div className="glass-card" style={{ padding: 'var(--spacing-2xl)', marginBottom: 'var(--spacing-2xl)' }}>
          <h3 style={{ marginBottom: 'var(--spacing-lg)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', fontWeight: 700 }}>
            <Sparkles size={20} style={{ color: 'var(--accent-primary)' }} /> Select a Track
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-lg)' }}>
            {themes.map(t => (
              <button 
                key={t}
                onClick={() => setTheme(t)}
                className={theme === t ? 'btn btn-primary' : 'btn btn-secondary'}
                style={{ 
                  padding: '0.5rem 1.25rem', 
                  borderRadius: 'var(--radius-full)', 
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                {t}
              </button>
            ))}
          </div>
          <button className="btn btn-primary" onClick={generateIdeas} style={{ width: '100%', padding: '1rem', fontWeight: 700 }}>
            Generate Innovation Ideas <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--spacing-xl)' }}>
          {ideas.map(idea => (
            <div key={idea.id} className="glass-card" style={{ padding: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
                <div style={{ padding: '0.6rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', color: 'var(--accent-primary)', border: '1px solid var(--border-color)' }}>
                  <Lightbulb size={20} />
                </div>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Premium Idea</span>
              </div>
              
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 'var(--spacing-md)' }}>{idea.title}</h3>
              
              <div style={{ marginBottom: 'var(--spacing-lg)', flex: 1 }}>
                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, textTransform: 'uppercase' }}>
                    <Code2 size={14} /> Recommended Stack
                  </h4>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{idea.stack}</p>
                </div>

                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: 700, textTransform: 'uppercase' }}>Key Features</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{idea.features}</p>
                </div>

                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: 700, textTransform: 'uppercase' }}>Implementation</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.5, background: 'var(--bg-tertiary)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent-primary)' }}>{idea.steps}</p>
                </div>
              </div>

              <button className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--spacing-md)' }}>Adopt Idea <Rocket size={16} style={{ marginLeft: '0.5rem' }} /></button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AIProjectIdeas;
