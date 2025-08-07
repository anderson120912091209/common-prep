'use client';

import { useState } from 'react';
import { Image, Plus, Globe } from 'lucide-react';

const exampleSuggestions = [
  "Hacker News top 100",
  "Social media dashboard",
  "Developer portfolio",
  "Expense tracker"
];

export default function CustomProgramChat() {
  const [inputValue, setInputValue] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Main Input Bar */}
        <div className="relative">
          <div className={`bg-emerald-900/75 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10
            transition-all duration-200 ${isInputFocused ? 'ring-1 ring-white/20' : ''}`}>
            {/* Top Section with Input */}
            <div className="flex items-center p-4 gap-3">
              <Plus className="w-5 h-5 text-white/40" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                placeholder="What do you want to study?"
                className="flex-1 bg-transparent text-white placeholder:text-white/40 
                  focus:outline-none text-lg"
              />
            </div>

            {/* Bottom Action Bar */}
            <div className="border-t border-white/10 p-3 flex items-center gap-2">
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Image className="w-5 h-5 text-white/40" />
                <span className="sr-only">Attach</span>
              </button>
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Globe className="w-5 h-5 text-white/40" />
                <span className="sr-only">Public</span>
              </button>
            </div>
          </div>

          {/* Suggestions */}
          {isInputFocused && (
            <div className="absolute w-full mt-2 bg-[#1C1C1C] rounded-xl border border-white/10 
              shadow-xl overflow-hidden divide-y divide-white/10">
              {exampleSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setInputValue(suggestion)}
                  className="w-full px-4 py-3 text-left text-white/70 hover:bg-white/5 
                    transition-colors flex items-center gap-3"
                >
                  <Plus className="w-4 h-4" />
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}