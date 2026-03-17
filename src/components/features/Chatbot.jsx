import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { chatbotData } from '@/data/chatbotData';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hey! I'm VibeBot, your NXTGENSEC assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const getBotResponse = (message) => {
    const lowerMsg = message.toLowerCase().trim();
    
    if (!lowerMsg) return "I didn't quite catch that. Could you try rephrasing?";

    // 1. Check for Greetings
    const greetings = ["hello", "hi", "hey", "greetings", "yo"];
    if (greetings.some(g => lowerMsg === g || lowerMsg.startsWith(g + " "))) {
      return "Hello! I'm VibeBot, here to help with all your NXTGENSEC questions. What's on your mind?";
    }

    // 2. Search in chatbotData for keyword matches
    // We'll calculate a score for each question based on how many triggers match
    let bestMatch = null;
    let highestScore = 0;

    chatbotData.forEach(category => {
      category.questions.forEach(q => {
        let score = 0;
        q.triggers.forEach(trigger => {
          if (lowerMsg.includes(trigger)) {
            score += 1;
          }
        });

        // Exact question match gets a huge boost
        if (lowerMsg.includes(q.question.toLowerCase())) {
          score += 10;
        }

        if (score > highestScore) {
          highestScore = score;
          bestMatch = q;
        }
      });
    });

    // If we have a good enough match, return it
    if (bestMatch && highestScore > 0) {
      return bestMatch.answer;
    }

    // 3. Fallback for specific common terms if no data match
    if (lowerMsg.includes("help") || lowerMsg.includes("support")) {
      return "I can help with registration, teams, schedule, tracks, and more! Just ask me things like 'how to register' or 'what are the prizes?'.";
    }

    if (lowerMsg.includes("thanks") || lowerMsg.includes("thank you")) {
      return "You're very welcome! Good luck with your project! 🚀";
    }

    return "That's a great question! I'm still learning, but you can find more detailed info on our '/about' page or by asking in our Discord community.";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'you', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Generate response locally with a delay to feel "natural"
    setTimeout(() => {
      const reply = getBotResponse(userMessage);
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 1000 }}>
      {isOpen ? (
        <div className="glass-panel animate-flyIn" style={{ 
          width: '350px', 
          height: '480px', 
          display: 'flex', 
          flexDirection: 'column', 
          overflow: 'hidden', 
          boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px'
        }}>
          {/* Header */}
          <div style={{ 
            padding: '1.25rem', 
            background: 'rgba(255, 255, 255, 0.03)', 
            borderBottom: '1px solid var(--border-color)',
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'var(--gradient-glow)', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                    <MessageCircle size={18} color="white" style={{ margin: 'auto' }} />
                </div>
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-2px', 
                  right: '-2px', 
                  width: '8px', 
                  height: '8px', 
                  background: '#10b981', 
                  borderRadius: '50%', 
                  border: '2px solid var(--bg-secondary)',
                  animation: 'pulse 2s infinite'
                }} />
              </div>
              <div>
                <span style={{ fontWeight: 600, color: 'white', display: 'block', fontSize: '0.95rem' }}>VibeBot AI</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Online Support</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: 'white', cursor: 'pointer', padding: '6px', borderRadius: '50%', display: 'flex' }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="custom-scrollbar" style={{ 
            flex: 1, 
            padding: '1.25rem', 
            overflowY: 'auto', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.75rem',
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ 
                alignSelf: msg.role === 'you' ? 'flex-end' : 'flex-start', 
                background: msg.role === 'you' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)', 
                padding: '0.8rem 1.1rem', 
                borderRadius: msg.role === 'you' ? '18px 18px 2px 18px' : '18px 18px 18px 2px', 
                maxWidth: '80%', 
                fontSize: '0.875rem',
                color: 'white',
                boxShadow: msg.role === 'you' ? '0 4px 15px rgba(139, 92, 246, 0.2)' : 'none',
                lineHeight: '1.4'
              }}>
                {msg.text}
              </div>
            ))}
            
            {isTyping && (
                <div style={{ 
                    alignSelf: 'flex-start', 
                    background: 'rgba(255,255,255,0.05)', 
                    padding: '0.8rem 1.1rem', 
                    borderRadius: '18px 18px 18px 2px', 
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center'
                }}>
                    <div className="typing-dot" />
                    <div className="typing-dot" style={{ animationDelay: '0.2s' }} />
                    <div className="typing-dot" style={{ animationDelay: '0.4s' }} />
                </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} style={{ 
            padding: '1.25rem', 
            background: 'rgba(255, 255, 255, 0.02)', 
            borderTop: '1px solid var(--border-color)', 
            display: 'flex', 
            gap: '0.75rem' 
          }}>
            <input 
              type="text" 
              value={input} 
              onChange={e => setInput(e.target.value)} 
              placeholder="Ask anything..." 
              style={{ 
                flex: 1, 
                padding: '0.75rem 1.25rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-color)',
                borderRadius: '14px',
                color: 'white',
                fontSize: '0.9rem',
                outline: 'none'
              }} 
            />
            <button 
                type="submit" 
                disabled={!input.trim() || isTyping}
                style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '12px', 
                    background: input.trim() ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                    border: 'none',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: input.trim() ? 'pointer' : 'default',
                    transition: 'all 0.2s'
                }}
            >
              <Send size={18} />
            </button>
          </form>

          {/* Scoped Styles */}
          <style>{`
            .typing-dot {
                width: 6px;
                height: 6px;
                background: var(--text-secondary);
                borderRadius: 50%;
                animation: bounce 1.4s infinite ease-in-out;
            }
            @keyframes bounce {
                0%, 80%, 100% { transform: scale(0); opacity: 0.3; }
                40% { transform: scale(1); opacity: 1; }
            }
            @keyframes pulse {
                0% { transform: scale(0.95); opacity: 0.7; }
                50% { transform: scale(1.05); opacity: 1; }
                100% { transform: scale(0.95); opacity: 0.7; }
            }
            .custom-scrollbar::-webkit-scrollbar {
                width: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(255,255,255,0.1);
                border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(255,255,255,0.2);
            }
          `}</style>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)} 
          className="btn-primary" 
          style={{ 
            width: '64px', 
            height: '64px', 
            borderRadius: '20px', 
            padding: 0, 
            boxShadow: '0 8px 30px rgba(139, 92, 246, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <MessageCircle size={30} color="white" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
