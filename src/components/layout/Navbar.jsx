import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code2, Moon, Sun, Bell, Settings, User, ChevronDown } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [theme, setTheme] = useState('dark');
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardPath = () => {
    if (!user) return '/auth';
    if (user.role === 'Organizer' || user.role === 'Admin') return '/admin';
    if (user.role === 'Judge') return '/judge';
    return '/dashboard';
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const closeMenu = () => setIsOpen(false);

  const allNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Teams', path: '/teams', roles: ['Participant', 'Organizer', 'Admin', 'Mentor'] },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Community', path: '/community' },
    { name: 'Admin Feed', path: '/admin', roles: ['Organizer', 'Admin'] },
    { name: 'Judging', path: '/judge', roles: ['Judge', 'Organizer', 'Admin'] },
    { name: 'Registered Teams', path: '/registered-teams', roles: ['Organizer', 'Admin'] },
    { name: 'AI Ideas', path: '/ai-ideas' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Mentors', path: '/mentors', roles: ['Participant', 'Organizer', 'Admin', 'Mentor'] },
    { name: 'Certificates', path: '/certificates', roles: ['Participant', 'Organizer', 'Admin'] },
  ];

  const navLinks = allNavLinks.filter(link => {
    if (!link.roles) return true;
    return user && link.roles.includes(user.role);
  });
  const [showMore, setShowMore] = useState(false);

  const [notifications, setNotifications] = useState([
    { id: 1, text: '[REMINDER] Final submission deadline in 48 hours!', time: 'Just now', unread: true, color: 'var(--accent-tertiary)' },
    { id: 2, text: 'Hackathon starts in 5 days!', time: '2 hours ago', unread: true, color: 'var(--accent-primary)' },
    { id: 3, text: 'New mentor joined the platform.', time: '5 hours ago', unread: false, color: 'var(--accent-secondary)' }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllAsRead = (e) => {
    e.preventDefault();
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  return (
    <nav className="navbar">
      <div className="container" onClick={() => { setShowMore(false); setShowNotifications(false); }}>
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <Logo />
        </Link>
        
        {/* Desktop Nav */}
        <div className="nav-links">
          {navLinks.slice(0, 5).map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Enhanced Dropdown */}
          {navLinks.length > 5 && (
            <div className="nav-dropdown-parent" style={{ position: 'relative' }} onClick={(e) => e.stopPropagation()}>
              <span 
                className={`nav-link ${showMore ? 'active' : ''}`}
                onClick={() => { setShowMore(!showMore); setShowNotifications(false); }}
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
              >
                More <ChevronDown size={14} />
              </span>
              {showMore && (
                <div className="glass-panel nav-dropdown" style={{ 
                  position: 'absolute', 
                  top: 'calc(100% + 15px)', 
                  left: '0', 
                  width: '200px', 
                  padding: 'var(--spacing-sm)', 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-xs)',
                  zIndex: 1000,
                  boxShadow: 'var(--shadow-card)',
                  animation: 'fadeIn 0.2s ease-out'
                }}>
                  {navLinks.slice(5).map((link) => (
                    <Link 
                      key={link.path} 
                      to={link.path} 
                      className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                      style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', display: 'block' }}
                      onClick={() => setShowMore(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
          {user && (
            <div style={{ position: 'relative' }} onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => { setShowNotifications(!showNotifications); setShowMore(false); }} 
                className="btn-icon" 
                aria-label="Notifications"
                style={{ position: 'relative' }}
              >
                <Bell size={20} />
                {unreadCount > 0 && (
                  <span style={{ 
                    position: 'absolute', 
                    top: '4px', 
                    right: '4px', 
                    width: '10px', 
                    height: '10px', 
                    background: 'var(--accent-tertiary)', 
                    borderRadius: 'var(--radius-full)',
                    border: '2px solid var(--bg-primary)',
                    boxShadow: '0 0 10px var(--accent-tertiary)'
                  }}></span>
                )}
              </button>
              
              {showNotifications && (
                <div className="notification-dropdown glass-panel" style={{ width: '300px' }}>
                  <div className="notification-header" style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700 }}>Notifications ({unreadCount})</span>
                    <button onClick={() => setShowNotifications(false)} className="btn-icon" style={{ padding: '4px' }}><X size={16} /></button>
                  </div>
                  
                  <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {notifications.length > 0 ? (
                      notifications.map(notif => (
                        <div 
                          key={notif.id} 
                          className={`notification-item ${notif.unread ? 'unread' : ''}`}
                          onClick={() => markAsRead(notif.id)}
                          style={{ 
                            padding: '1rem', 
                            borderBottom: '1px solid var(--border-color)', 
                            display: 'flex', 
                            gap: '0.75rem',
                            cursor: 'pointer',
                            background: notif.unread ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
                            transition: 'all 0.2s'
                          }}
                        >
                          <div style={{ 
                            width: '8px', 
                            height: '8px', 
                            borderRadius: '50%', 
                            background: notif.unread ? notif.color : 'rgba(255,255,255,0.1)', 
                            marginTop: '0.4rem', 
                            flexShrink: 0,
                            boxShadow: notif.unread ? `0 0 8px ${notif.color}` : 'none'
                          }}></div>
                          <div>
                            <p style={{ fontSize: '0.875rem', marginBottom: '0.25rem', color: notif.unread ? 'white' : 'var(--text-secondary)' }}>{notif.text}</p>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{notif.time}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                        No notifications yet.
                      </div>
                    )}
                  </div>

                  <div style={{ padding: '0.75rem', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
                    <button 
                      onClick={markAllAsRead} 
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        fontSize: '0.875rem', 
                        color: 'var(--accent-secondary)', 
                        fontWeight: 600, 
                        cursor: 'pointer',
                        padding: '0.5rem',
                        width: '100%'
                      }}
                    >
                      Mark all as read
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          <button onClick={toggleTheme} className="btn-icon" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="nav-actions hide-mobile">
            {user ? (
              <>
                <Link to="/profile" className="btn-icon" aria-label="Profile">
                  <User size={20} />
                </Link>
                <Link to={getDashboardPath()} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Dashboard</Link>
                <button onClick={handleLogout} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Log out</button>
              </>
            ) : (
              <>
                <Link to="/auth" state={{ mode: 'login' }} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Log in</Link>
                <Link to="/auth" state={{ mode: 'signup' }} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Register</Link>
              </>
            )}
          </div>

          <button className="mobile-toggle btn-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu" style={{ display: 'flex' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="nav-link" 
              onClick={closeMenu}
              style={{ fontSize: '1.2rem', padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {user ? (
              <>
                <Link to={getDashboardPath()} className="btn btn-secondary" onClick={closeMenu}>Dashboard</Link>
                <button onClick={() => { handleLogout(); closeMenu(); }} className="btn btn-primary">Log out</button>
              </>
            ) : (
              <>
                <Link to="/auth" className="btn btn-secondary" onClick={closeMenu}>Log in</Link>
                <Link to="/auth" className="btn btn-primary" onClick={closeMenu}>Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
