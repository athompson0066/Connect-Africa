import React, { useState, useRef, useEffect } from 'react';
import { Icons } from './Icons';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am the report assistant. Ask me anything about mobile connectivity in Africa, the Usage Gap, or the Nigeria Pilot strategies.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userMessage);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const profileImage = "http://aiolosmedia.42web.io/wp-content/uploads/2025/11/lindas.jpeg";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
          {/* Pulsing Rings for Attention */}
          <span className="absolute -inset-2 rounded-full bg-brand-lightBlue/40 animate-ping duration-[2000ms]"></span>
          <span className="absolute -inset-1 rounded-full bg-brand-blue/20 animate-pulse duration-1000"></span>
          
          <button
            className="relative bg-white text-white p-0.5 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center justify-center border-2 border-brand-blue overflow-hidden w-16 h-16"
            aria-label="Open Chat Assistant"
          >
             <img 
               src={profileImage}
               alt="AI Assistant"
               className="w-full h-full object-cover rounded-full"
             />
          </button>
        </div>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[90vw] md:w-[400px] h-[500px] flex flex-col border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-brand-darkBlue p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                    src={profileImage} 
                    alt="AI Avatar" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-brand-darkBlue"></div>
              </div>
              <div>
                <span className="font-bold text-sm block">Report AI Assistant</span>
                <span className="text-xs text-brand-lightBlue">Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <Icons.X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-brand-blue text-white rounded-br-none'
                      : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl border border-slate-200 rounded-bl-none shadow-sm flex items-center gap-2">
                  <Icons.Loader2 className="w-4 h-4 animate-spin text-brand-blue" />
                  <span className="text-xs text-slate-400">Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about the Usage Gap..."
                className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue/50 text-sm transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 p-1.5 bg-brand-blue text-white rounded-lg disabled:opacity-50 hover:bg-brand-darkBlue transition-colors"
              >
                <Icons.Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;