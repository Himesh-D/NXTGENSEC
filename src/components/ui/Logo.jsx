import React from 'react';

const Logo = ({ size = 24, showText = true, footer = false }) => {
  const brandName = "NXTGENSEC";
  const subtitle = "SECURING DIGITAL ASSETS";

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '0.75rem',
      cursor: 'pointer'
    }}>
      {/* New PNG Logo */}
      <div style={{ 
        position: 'relative', 
        width: `${size * 2}px`, 
        height: `${size * 2}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
      }}>
        <img 
          src="/logo.png" 
          alt="NXTGENSEC" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain'
          }} 
        />
      </div>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ 
            fontSize: footer ? '1.5rem' : '1.25rem', 
            fontWeight: '800',
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.5px',
            background: 'linear-gradient(to right, #3498db, #2ecc71, #f1c40f, #e67e22, #e74c3c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {brandName}
          </span>
          <span style={{ 
            fontSize: footer ? '0.7rem' : '0.6rem', 
            fontWeight: '600',
            color: 'var(--text-secondary)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginTop: '2px'
          }}>
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
