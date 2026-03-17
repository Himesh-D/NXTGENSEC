import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, ArrowRight, Shield, Sparkles, Zap, Code, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const Auth = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location.state?.mode !== 'signup');
  const [role, setRole] = useState('Participant');
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const { login, signup, loginWithGoogle, logout } = useAuth();
  const [error, setError] = useState('');

  useEffect(() => {
    if (location.state?.mode === 'signup') setIsLogin(false);
    if (location.state?.mode === 'login') setIsLogin(true);
  }, [location.state]);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const getErrorMessage = (err) => {
    if (err.code === 'auth/invalid-credential') return 'Invalid email or password. Please try again.';
    if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') return 'Invalid email or password.';
    if (err.code === 'auth/email-already-in-use') return 'This email is already registered. Try logging in.';
    if (err.code === 'auth/weak-password') return 'Password should be at least 6 characters.';
    if (err.code === 'auth/too-many-requests') return 'Too many attempts. Please try again later.';
    return err.message || 'An error occurred during authentication';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsEmailLoading(true);
    setError('');

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name ? e.target.name.value : '';

    try {
      let resolvedRole = role;

      if (isLogin) {
        const { userData } = await login(email, password);
        if (userData && userData.role) {
          if (userData.role !== role) {
            // Disconnect Auth if they logged in with the wrong role to prevent bad session state
            await logout(); 
            throw new Error(`This account is registered as a ${userData.role}, not a ${role}.`);
          }
          resolvedRole = userData.role;
        }
      } else {
        await signup(email, password, name, role);
      }

      setIsEmailLoading(false);
      setIsSuccess(true);

      setTimeout(() => {
        if (resolvedRole === 'Organizer' || resolvedRole === 'Admin') navigate('/admin');
        else if (resolvedRole === 'Judge') navigate('/judge');
        else if (resolvedRole === 'Mentor') navigate('/mentors');
        else navigate('/dashboard');
      }, 800);
    } catch (err) {
      console.error(err);
      setError(getErrorMessage(err));
      setIsEmailLoading(false);
      setTimeout(() => setError(''), 5000); // Auto-dismiss toast
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    setError('');
    try {
      const { userData } = await loginWithGoogle(role);
      setIsGoogleLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        const userRole = userData?.role || 'Participant';
        if (userRole === 'Organizer' || userRole === 'Admin') navigate('/admin');
        else if (userRole === 'Judge') navigate('/judge');
        else if (userRole === 'Mentor') navigate('/mentors');
        else navigate('/dashboard');
      }, 800);
    } catch (err) {
      console.error(err);
      setError(getErrorMessage(err));
      setIsGoogleLoading(false);
      setTimeout(() => setError(''), 5000);
    }
  };

  return (
    <div className="page-container" style={{ padding: 0, minHeight: '100vh', display: 'flex', position: 'relative' }}>

      {/* Smooth Toast Notification */}
      {error && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          background: 'var(--bg-tertiary)',
          border: '1px solid #ef4444',
          boxShadow: '0 10px 30px rgba(239, 68, 68, 0.2)',
          padding: '1rem 1.5rem',
          borderRadius: 'var(--radius-md)',
          color: 'var(--text-primary)',
          fontWeight: 500,
          animation: 'slideDownFade 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}>
          <style>{`
            @keyframes slideDownFade {
              0% { opacity: 0; transform: translate(-50%, -20px); }
              100% { opacity: 1; transform: translate(-50%, 0); }
            }
          `}</style>
          <div style={{ background: '#ef444420', padding: '0.4rem', borderRadius: '50%', color: '#ef4444', display: 'flex' }}>
            <AlertCircle size={20} />
          </div>
          {error}
        </div>
      )}


      {/* Left Decoration Side (Hidden on Mobile) */}
      <div style={{
        flex: 1,
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'var(--spacing-3xl)',
        borderRight: '1px solid var(--border-color)'
      }} className="hide-mobile">
        {/* Animated Background Blobs */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'var(--accent-primary)', filter: 'blur(150px)', opacity: 0.15, borderRadius: 'var(--radius-full)' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '400px', height: '400px', background: 'var(--accent-tertiary)', filter: 'blur(150px)', opacity: 0.15, borderRadius: 'var(--radius-full)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', padding: '0.4rem 1rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-full)', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.75rem', marginBottom: 'var(--spacing-xl)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <Sparkles size={14} style={{ marginRight: '0.5rem' }} /> Join the Future
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: 'var(--spacing-lg)', fontWeight: 800, lineHeight: 1.1 }}>
            Build the Next <br /> <span className="text-gradient">Big Thing.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', lineHeight: 1.6, marginBottom: 'var(--spacing-2xl)' }}>
            Connect with top developers, hackers, and industry mentors. Solve real-world challenges and win amazing prizes.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            {[
              { icon: <Zap color="var(--accent-primary)" size={20} />, text: 'High-speed environment for innovation' },
              { icon: <Shield color="var(--accent-secondary)" size={20} />, text: 'Secure and verified project hosting' },
              { icon: <Code color="var(--accent-tertiary)" size={20} />, text: 'Modern tech stacks and APIs' }
            ].map((feature, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1rem' }}>
                <div style={{ width: '44px', height: '44px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                  {feature.icon}
                </div>
                {feature.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Form Side */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary)',
        padding: '2rem'
      }}>
        <div className="container" style={{ maxWidth: '480px', width: '100%' }}>

          <div key={isLogin ? 'login' : 'signup'} className="animate-flyIn">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                {isLogin ? `Welcome Back, ${role}` : `Join as a ${role}`}
              </h1>
              <p style={{ color: 'var(--text-secondary)' }}>
                {isLogin ? `Log in to your ${role.toLowerCase()} account` : `Create your ${role.toLowerCase()} profile today`}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="input-group">
                  <label className="input-label" htmlFor="name">Full Name</label>
                  <div style={{ position: 'relative' }}>
                    <User size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                    <input type="text" id="name" className="input-field" placeholder="John Doe" style={{ paddingLeft: '3rem' }} required />
                  </div>
                </div>
              )}

              <div className="input-group">
                <label className="input-label">Role</label>
                <div style={{ display: 'flex', gap: 'var(--spacing-xs)', flexWrap: 'wrap' }}>
                  {['Participant', 'Judge', 'Mentor', 'Organizer'].map(r => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      style={{
                        flex: 1,
                        padding: '0.6rem 0.4rem',
                        background: role === r ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                        border: `1px solid ${role === r ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                        borderRadius: 'var(--radius-sm)',
                        color: role === r ? 'white' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="input-group">
                <label className="input-label" htmlFor="email">Email address</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input type="email" id="email" className="input-field" placeholder="hacker@vibecoding.com" style={{ paddingLeft: '3rem' }} required />
                </div>
              </div>

              <div className="input-group">
                <label className="input-label" htmlFor="password">Password</label>
                <div style={{ position: 'relative' }}>
                  <Lock size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input type="password" id="password" className="input-field" placeholder="••••••••" style={{ paddingLeft: '3rem' }} required />
                </div>
              </div>




              <button
                type="submit"
                className="btn btn-primary"
                disabled={isEmailLoading || isGoogleLoading || isSuccess}
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1.1rem',
                  marginTop: !isLogin ? '1rem' : '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  opacity: (isEmailLoading || isSuccess) ? 0.8 : 1,
                  cursor: (isEmailLoading || isSuccess) ? 'not-allowed' : 'pointer'
                }}
              >
                {isSuccess ? (
                  <>Success <CheckCircle2 size={20} /></>
                ) : isEmailLoading ? (
                  <><Loader2 size={20} className="animate-spin" /> Processing...</>
                ) : (
                  <>{isLogin ? 'Log In' : 'Create Account'} <ArrowRight size={20} /></>
                )}
              </button>
            </form>

            <div style={{ margin: '2rem 0', display: 'flex', alignItems: 'center', textAlign: 'center', color: 'var(--text-secondary)' }}>
              <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></div>
              <span style={{ margin: '0 1rem', fontSize: '0.75rem', fontWeight: 600 }}>OR LOGIN WITH</span>
              <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></div>
            </div>

            <button
              type="button"
              disabled={isEmailLoading || isGoogleLoading || isSuccess}
              onClick={handleGoogleLogin}
              className="btn btn-secondary"
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: (isGoogleLoading || isSuccess) ? 0.8 : 1,
                cursor: (isGoogleLoading || isSuccess) ? 'not-allowed' : 'pointer'
              }}
            >
              {isGoogleLoading ? (
                <><Loader2 size={18} className="animate-spin" style={{ marginRight: '8px' }} /> Connecting...</>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 4.59 2.18 7.07 4.53L10.73 7.37c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg> Google
                </>
              )}
            </button>

            <div style={{ textAlign: 'center', marginTop: '2.5rem', fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button
                type="button"
                onClick={toggleAuthMode}
                style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
