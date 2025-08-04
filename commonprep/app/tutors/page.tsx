'use client';

import { useState } from 'react';
import Navigation from "@/app/components/navigation";
import "./tutors.css";

interface Tutor {
  name: string;
  university: string;
  role: string;
  experience: string;
  tags: string[];
}

const tutors: (Tutor | null)[] = [
  {
    name: 'Anderson Chen',
    university: 'NTU & EPFL Chemical Engineering',
    role: 'Founder',
    experience: 'Predicted 34/45, Improved final score to 40/45 in 3 months, and 7/7 in Mathematics, Biology, History and English Literature Exams.',
    tags: [''],
  },
  {
    name: 'Daniel Zhang',
    university: 'NUS Computer Science & Mathematics',
    role: 'Olympiad/IB/AP STEM Tutor',
    experience: '',
    tags: ['STEM', 'Olympiad', 'IB/AP'],
  },
  {
    name: 'Jesse Wang',
    university: 'HKU LKS School of Medicine',
    role: 'IB/AP STEM Subject Tutor',
    experience: 'IB: 45/45',
    tags: ['STEM', 'Medicine', 'IB/AP'],
  },
  {
    name: 'Hannah Chen',
    university: "University of Toronto",
    role: 'China Area Partner',
    experience: '',
    tags: ['Partner'],
  },
  null, null, null, null, null
];

export default function TutorsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          
          <div className="text-left mb-16">
            <h1 className="text-5xl font-serif mb-4">Our Team</h1>
            <p className="text-white/70 text-lg max-w-2xl">
              An interactive directory of our elite consultants. Hover to reveal more.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tutors.map((tutor, index) => (
              tutor ? (
                <div key={tutor.name} className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer">
                  {/* Placeholder for photo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white/10 text-xs font-mono">Photo Placeholder</p>
                  </div>
                  
                  {/* Default State: Tags Only */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                      <div className="flex flex-wrap justify-start gap-2">
                        {tutor.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 text-[10px] bg-white/10 text-white/80 rounded-full">{tag}</span>
                        ))}
                      </div>
                  </div>

                  {/* Hover State: Glass Pane Reveal */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-center text-center bg-black/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      <div className="particle-overlay"></div>
                      <div className="relative z-10 space-y-4">
                        <h3 className="text-2xl font-serif text-white">{tutor.name}</h3>
                        <p className="text-sm text-white/80">{tutor.role} <br /> <br/>
                        <span className="font-medium text-white">{tutor.university}</span></p>
                        <p className="text-xs text-white/60 px-0">{tutor.experience}</p>
                      </div>
                  </div>

                </div>
              ) : (
                <div key={`placeholder-${index}`} className="aspect-[3/4] rounded-lg bg-black border border-white/5" />
              )
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 