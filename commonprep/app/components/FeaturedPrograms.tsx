'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Image from 'next/image';
import programsData from '../programs/programdata/programs.json';

type AccentColor = 'cyan' | 'purple' | 'green';

interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  stats: {
    students: number;
    rating: number | "N/A";
    lessons: number;
  };
  tags: {
    pacing: string;
    duration: string;
    benefit: string;
    field: string;
  };
  accentColor: AccentColor;
}


const colorClasses = {
  cyan: {
    border: 'dark:hover:border-cyan-400/50 hover:border-cyan-500',
    bg: 'dark:hover:bg-cyan-900/10 hover:bg-cyan-50',
    gradient: 'dark:from-cyan-500/10 from-cyan-100/50',
    bullet: 'dark:bg-cyan-400 bg-cyan-600',
    tagBg: 'dark:bg-cyan-500/20 bg-cyan-100',
    tagText: 'dark:text-cyan-300 text-cyan-700',
  },
  purple: {
    border: 'dark:hover:border-purple-400/50 hover:border-purple-500',
    bg: 'dark:hover:bg-purple-900/10 hover:bg-purple-50',
    gradient: 'dark:from-purple-500/10 from-purple-100/50',
    bullet: 'dark:bg-purple-400 bg-purple-600',
    tagBg: 'dark:bg-purple-500/20 bg-purple-100',
    tagText: 'dark:text-purple-300 text-purple-700',
  },
  green: {
    border: 'dark:hover:border-green-400/50 hover:border-green-500',
    bg: 'dark:hover:bg-green-900/10 hover:bg-green-50',
    gradient: 'dark:from-green-500/10 from-green-100/50',
    bullet: 'dark:bg-green-400 bg-green-600',
    tagBg: 'dark:bg-green-500/20 bg-green-100',
    tagText: 'dark:text-green-300 text-green-700',
  },
};

interface ProgramCardProps {
  program: Program;
}

const ProgramCard = ({ program }: ProgramCardProps) => {
  const colors = colorClasses[program.accentColor];

  return (
    <motion.div
      className={`group relative rounded-2xl dark:bg-white/5 bg-white border dark:border-white/10 border-gray-200 shadow-lg hover:shadow-xl dark:shadow-none backdrop-blur-md overflow-hidden transition-all duration-300 hover:scale-[1.02] ${colors.border} ${colors.bg}`}
    >
      {/* Image Section */}
      <div className="relative h-40 overflow-hidden">
        <Image 
          src={program.image} 
          alt={program.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-[center_30%] transition-transform 
          duration-300 group-hover:scale-100"
          priority={program.id <= 3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className={`px-2 py-0.5 ${colors.tagBg} ${colors.tagText} text-[10px] font-medium rounded-full`}>
            {program.tags.field}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1.5">{program.title}</h3>
        <p className="dark:text-white/60 text-black/60 text-xs mb-3 line-clamp-2">{program.description}</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y dark:border-white/10 border-gray-100">
          <div className="text-center">
            <div className="text-base font-semibold dark:text-white text-gray-900">{program.stats.students}</div>
            <div className="text-[10px] dark:text-white/60 text-gray-600">Students</div>
          </div>
          <div className="text-center">
            <div className="text-base font-semibold dark:text-white text-gray-900">{program.stats.rating}</div>
            <div className="text-[10px] dark:text-white/60 text-gray-600">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-base font-semibold dark:text-white text-gray-900">{program.stats.lessons}</div>
            <div className="text-[10px] dark:text-white/60 text-gray-600">Lessons</div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className={`px-2 py-0.5 ${colors.tagBg} ${colors.tagText} text-[10px] font-medium rounded-full`}>{program.tags.pacing}</span>
          <span className={`px-2 py-0.5 ${colors.tagBg} ${colors.tagText} text-[10px] font-medium rounded-full`}>{program.tags.duration}</span>
          <span className={`px-2 py-0.5 ${colors.tagBg} ${colors.tagText} text-[10px] font-medium rounded-full`}>{program.tags.benefit}</span>
        </div>

        {/* Learn More Button */}
        <button className={`w-full py-2 rounded-lg dark:bg-white/10 bg-gray-50 dark:text-white text-gray-900 text-xs font-medium hover:bg-opacity-90 transition-colors ${colors.border.replace('border', 'bg')} hover:text-white`}>
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default function FeaturedPrograms() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const orderedCategories = ['Math', 'Physics', 'Chemistry', 'Biology', 'Social Science', 'College Apps'];
  const categories = ['All', ...orderedCategories];

  const programs = programsData.programs as Program[];
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
        <p className="text-lg dark:text-white/70 text-black/70 font-light leading-relaxed max-w-3xl mx-auto">Standardized and transparent programs, with customizable learning experiences.</p>
      </div>
      
      <div className="mb-10 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 
            flex items-center pl-5">
              <Search className="dark:text-zinc-200 text-zinc-700 z-10" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search our programs by name or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border 
              dark:border-white/10 border-gray-300 dark:bg-white/5 bg-white py-4 pl-12 pr-5 dark:text-white text-gray-900 
              dark:placeholder-white/50 placeholder-gray-500 backdrop-blur-md transition-all 
              duration-300 focus:outline-none focus:ring-2  
              dark:focus:ring-white/50 focus:ring-emerald-400"
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
                : 'dark:bg-white/5 bg-gray-100 dark:hover:bg-white/10 hover:bg-gray-200 dark:text-white/70 text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPrograms.map((program) => (
          <ProgramCard
            key={program.id}
            program={program}
          />
        ))}
      </div>
      {filteredPrograms.length === 0 && (
        <div className="text-center py-16 col-span-full">
          <p className="dark:text-white/70 text-black/70">No programs found. 
          Try a different search or category.</p>
        </div>
      )}
    </div>
  );
} 