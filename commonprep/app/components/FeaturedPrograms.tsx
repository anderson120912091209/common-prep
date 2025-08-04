'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface Program {
  id: number;
  title: string;
  description: string;
  tags: {
    pacing: string;
    duration: string;
    benefit: string;
    field:string;
  };
  accentColor: 'cyan' | 'purple' | 'green';
}

const programs: Program[] = [
  {
    id: 1,
    title: 'IB AI HL Math',
    description: 'A concentrated course covering the full IB Higher Level AI Mathematics curriculum.',
    tags: {
      pacing: 'Intensive',
      duration: '1 Month',
      benefit: 'Score Boost',
      field: 'IB Math',
    },
    accentColor: 'cyan',
  },
  {
    id: 2,
    title: 'SAT Math Dash',
    description: 'A targeted sprint program designed to rapidly improve your SAT Math score.',
    tags: {
      pacing: 'Sprint',
      duration: 'Few Weeks',
      benefit: 'Score Boost',
      field: 'SAT Math',
    },
    accentColor: 'purple',
  },
  {
    id: 3,
    title: 'AP Physics C Prep',
    description: 'A comprehensive review of both Mechanics and E&M for the AP exam.',
    tags: {
      pacing: 'Slow Paced',
      duration: '3 Months',
      benefit: 'In-depth',
      field: 'IB Physics',
    },
    accentColor: 'green',
  },
];

const colorClasses = {
  cyan: {
    border: 'hover:border-cyan-400/50',
    bg: 'hover:bg-cyan-900/10',
    gradient: 'from-cyan-500/10',
    bullet: 'bg-cyan-400',
    tagBg: 'bg-cyan-500/20',
    tagText: 'text-cyan-300',
  },
  purple: {
    border: 'hover:border-purple-400/50',
    bg: 'hover:bg-purple-900/10',
    gradient: 'from-purple-500/10',
    bullet: 'bg-purple-400',
    tagBg: 'bg-purple-500/20',
    tagText: 'text-purple-300',
  },
  green: {
    border: 'hover:border-green-400/50',
    bg: 'hover:bg-green-900/10',
    gradient: 'from-green-500/10',
    bullet: 'bg-green-400',
    tagBg: 'bg-green-500/20',
    tagText: 'text-green-300',
  },
};

interface ProgramCardProps {
  program: Program;
}

const ProgramCard = ({ program }: ProgramCardProps) => {
  const colors = colorClasses[program.accentColor];

  return (
    <motion.div
      className={`group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 ${colors.border} ${colors.bg}`}
    >
      <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${colors.gradient} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}></div>
      <div className="relative">
        <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
        <p className="text-white/60 text-sm mb-5">{program.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className={`px-2.5 py-1 ${colors.tagBg} ${colors.tagText} text-xs rounded-full`}>{program.tags.pacing}</span>
          <span className={`px-2.5 py-1 ${colors.tagBg} ${colors.tagText} text-xs rounded-full`}>{program.tags.duration}</span>
          <span className={`px-2.5 py-1 ${colors.tagBg} ${colors.tagText} text-xs rounded-full`}>{program.tags.benefit}</span>
          <span className={`px-2.5 py-1 ${colors.tagBg} ${colors.tagText} text-xs rounded-full`}>{program.tags.field}</span>
        </div>
        
        <ul className="text-sm space-y-2 text-white/70">
          <li className="flex items-start gap-2.5">
            <span className={`w-1.5 h-1.5 ${colors.bullet} rounded-full mt-1.5 flex-shrink-0`}></span>
            <span>Feature one description</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className={`w-1.5 h-1.5 ${colors.bullet} rounded-full mt-1.5 flex-shrink-0`}></span>
            <span>Feature two description</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default function FeaturedPrograms() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(programs.map(p => p.tags.field))];

  const filteredPrograms = programs.filter(program => {
    const matchesCategory = selectedCategory === 'All' || program.tags.field === selectedCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) || program.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl sm:text-5xl lg:text-5xl font-serif mb-4">Browse Our 
          Programs</h2>
        <p className="text-lg text-white/70 font-light leading-relaxed max-w-3xl mx-auto">Standardized programs, customizable learning experiences.</p>
      </div>
      
      <div className="mb-10 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 
            flex items-center pl-5">
              <Search className="text-zinc-200 z-10" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search our 100+ programs by name or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 py-4 pl-12 pr-5 text-white placeholder-white/50 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-12 px-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 text-sm rounded-full transition-all 
              duration-300 ease-in-out ${
              selectedCategory === category
                ? 'bg-emerald-400 text-white shadow-lg'
                : 'bg-white/5 hover:bg-white/10 text-white/70'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPrograms.map((program) => (
          <ProgramCard
            key={program.id}
            program={program}
          />
        ))}
      </div>
      {filteredPrograms.length === 0 && (
        <div className="text-center py-16 col-span-full">
          <p className="text-white/70">No programs found. 
          Try a different search or category.</p>
        </div>
      )}
    </div>
  );
} 