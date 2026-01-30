
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const HealthAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Hello! I am your Health Assistant. How can I help you with your physiotherapy questions today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: 'You are an expert women\'s health physiotherapist assistant named Shakthi AI. Provide helpful, safe, and professional advice about physiotherapy topics like prenatal, postpartum, pelvic health, and general wellness. Always advise consulting a doctor for clinical diagnosis. Keep responses concise and friendly.',
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm sorry, I couldn't process that. Please try again." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "Technical error. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#2d5a5a] text-white p-4 rounded-full shadow-2xl hover:bg-[#d4a574] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </button>
      ) : (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#b8a27e]/20 animate-slideIn">
          <div className="bg-[#2d5a5a] p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#d4a574] rounded-full flex items-center justify-center">✨</div>
              <span className="font-semibold">Health Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f8f5f2]/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-[#2d5a5a] text-white' : 'bg-white text-[#2c3e50] shadow-sm'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-xs text-[#6b7280]">Assistant is thinking...</div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-[#f8f5f2] flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 text-sm border-none focus:ring-0 placeholder-[#6b7280]"
            />
            <button 
              onClick={handleSend}
              className="text-[#2d5a5a] hover:text-[#d4a574] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthAssistant;
