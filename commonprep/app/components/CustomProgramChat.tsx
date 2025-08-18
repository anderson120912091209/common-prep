'use client';

import { useState } from 'react';
import { Plus, Paperclip, Globe, ArrowUp } from 'lucide-react';
import { useRouter } from 'next/navigation';

const examplePrompts = [
  "I want to learn IB Biology in 4 months with connections to topics in Olympiad Biology",
  "Help me master AP Chemistry while building foundations for research competitions",
  "Create a SAT Math prep plan that also covers AMC 12 problem-solving strategies",
  "Design a physics curriculum from IB HL to International Physics Olympiad level"
];

export default function CustomProgramChat() {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!inputValue.trim() || isLoading) return;
    setIsLoading(true);
    try {
      const res = await fetch('/api/generate-curriculum', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal: inputValue })
      });
      if (!res.ok) throw new Error('Failed to generate curriculum');
      const { id, curriculum } = await res.json();
      if (typeof window !== 'undefined') {
        localStorage.setItem(`curriculum:${id}`, JSON.stringify(curriculum));
      }
      router.push(`/product/${id}`);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-4">
      {/* Main Chat Container */}
      <div className="relative">
        {/* Input Bar */}
        <div className={`bg-black/60 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl transition-all duration-300 ${
          isFocused ? 'border-white/30 shadow-xl' : ''
        }`}>
          {/* Top Section with Input */}
          <div className="flex items-center p-4 gap-3">
            <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <Plus className="w-5 h-5 text-white/70" />
            </button>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit(); }}
              placeholder="Describe your perfect learning program..."
              className="flex-1 bg-transparent text-white placeholder:text-white/50 
                focus:outline-none text-lg"
            />
            <button 
              onClick={handleSubmit}
              className={`p-2 rounded-lg transition-all duration-200 ${
                inputValue && !isLoading
                  ? 'bg-white text-black hover:bg-white/90' 
                  : 'text-white/30'
              }`}
              disabled={!inputValue || isLoading}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <ArrowUp className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Bottom Action Bar */}
          <div className="border-t border-white/10 px-4 py-3 flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/10 rounded-lg transition-colors text-sm">
              <Paperclip className="w-4 h-4" />
              <span>Attach</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/10 rounded-lg transition-colors text-sm">
              <Globe className="w-4 h-4" />
              <span>Public</span>
            </button>
          </div>
        </div>

        {/* Example Tags */}
        <div className="mt-4 space-y-2">
          <p className="text-xs py-4 text-white/50 font-medium tracking-wider"> Try these examples: </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {examplePrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => setInputValue(prompt)}
                className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 
                  rounded-xl text-sm text-white/70 hover:bg-white/10 hover:text-white/90 
                  transition-all duration-200 text-left group"
              >
                <span className="line-clamp-2 group-hover:text-white transition-colors">
                  {prompt}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}