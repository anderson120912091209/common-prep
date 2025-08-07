'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import programsData from '../../programs/programdata/programs.json';
import Navigation from '../../components/navigation';

type Tab = 'all' | 'program roadmap' | 'syllabus' | 'flashcards' | 'tutors';

export default function ProgramDetails() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState<Tab>('all');

  const program = programsData.programs.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!program) {
    return <div className="page-container">Program not found</div>;
  }

  return (
    <div className="page-container">
      <Navigation />    
      <main className= "flex flex-col">
        {/* Hero Section */}
        <section className = "min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 md:pt-0">
            {/* Top Section for Program Title and Description */}
            <div> 

            </div>
        </section>
      </main>
    </div>
  );
}