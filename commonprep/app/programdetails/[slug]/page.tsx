'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  CreditCard, 
  Users, 
  HelpCircle, 
  BarChart3,
  Calculator,
  Brain,
  Target,
  Clock
} from 'lucide-react';
import programsData from '../../programs/programdata/programs.json';
import syllabusData from '../../syllabus/ib-math-ai/ib-math-ai.json';
import { chapterNotes, getChapterNote } from '../../syllabus/ib-math-ai/chapter-notes';
import VerticalSidebar from '../../components/VerticalSidebar';
import { SidebarProvider, useSidebar } from '../../components/SidebarContext';
import MarkdownEditor from '../../components/MarkdownEditor';
import MarkdownRenderer from '../../components/MarkdownRenderer';

type LeftPanelView = 'overview' | 'questionbank' | 'notes' | 'flashcards' | 'syllabus' | 'progress';

interface CourseCard {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  count?: number;
}

function ProgramDetailsContent() {
  const params = useParams();
  const { isCollapsed } = useSidebar();
  const [leftPanelView, setLeftPanelView] = useState<LeftPanelView>('overview');
  const [noteContent, setNoteContent] = useState('# My Study Notes\n\nStart taking notes here...');

  const program = programsData.programs.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!program) {
    return <div className="page-container">Program not found</div>;
  }

  // Course information cards
  const courseCards: CourseCard[] = [
    {
      id: 'questionbank',
      title: 'Question Bank',
      description: 'Practice problems and exercises organized by topic',
      icon: HelpCircle,
      color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
      count: 245
    },
    {
      id: 'notes',
      title: 'Study Notes',
      description: 'Comprehensive notes covering all course material',
      icon: FileText,
      color: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
      count: 18
    },
    {
      id: 'flashcards',
      title: 'Flashcards',
      description: 'Interactive flashcards for key concepts and formulas',
      icon: CreditCard,
      color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
      count: 126
    },
    {
      id: 'syllabus',
      title: 'Syllabus Guide',
      description: 'Official IB curriculum breakdown and requirements',
      icon: BookOpen,
      color: 'from-orange-500/20 to-red-500/20 border-orange-500/30'
    },
    {
      id: 'progress',
      title: 'Progress Tracker',
      description: 'Track your learning progress and achievements',
      icon: BarChart3,
      color: 'from-indigo-500/20 to-blue-500/20 border-indigo-500/30'
    }
  ];

  // Render left panel content based on current view
  const renderLeftPanelContent = () => {
    switch (leftPanelView) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courseCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => setLeftPanelView(card.id as LeftPanelView)}
                  className={`p-6 rounded-xl bg-gradient-to-br ${card.color} border hover:scale-105 transition-all duration-200 text-left group`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors`}>
                      <card.icon className="w-6 h-6" />
                    </div>
                    {card.count && (
                      <span className="text-2xl font-bold opacity-60">{card.count}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm opacity-80">{card.description}</p>
                </button>
              ))}
            </div>

            {/* Course Overview */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Course Overview</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-cyan-500/10 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400">150+</div>
                  <div className="text-sm opacity-60">Study Hours</div>
                </div>
                <div className="text-center p-4 bg-purple-500/10 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">5</div>
                  <div className="text-sm opacity-60">Topics</div>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Master the complete IB Mathematics Applications & Interpretations HL curriculum. 
                This comprehensive course covers advanced mathematical concepts, statistical analysis, 
                and real-world problem solving techniques.
              </p>
            </div>
          </div>
        );

      case 'questionbank':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setLeftPanelView('overview')}
                className="text-zinc-400 hover:text-white transition-colors text-sm"
              >
                ← Back to Overview
              </button>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Question Bank</h3>
              <p className="text-sm opacity-80">Practice with 245+ carefully curated problems</p>
            </div>
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-blue-400/50 mx-auto mb-4" />
              <p className="text-white/60">Question bank coming soon...</p>
            </div>
          </div>
        );

      case 'flashcards':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setLeftPanelView('overview')}
                className="text-zinc-400 hover:text-white transition-colors text-sm"
              >
                ← Back to Overview
              </button>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Flashcards</h3>
              <p className="text-sm opacity-80">126 interactive flashcards for key concepts</p>
            </div>
            <div className="text-center py-12">
              <CreditCard className="w-16 h-16 text-purple-400/50 mx-auto mb-4" />
              <p className="text-white/60">Flashcards coming soon...</p>
            </div>
          </div>
        );

      case 'syllabus':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setLeftPanelView('overview')}
                className="text-zinc-400 hover:text-white transition-colors text-sm"
              >
                ← Back to Overview
              </button>
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-400 mb-2">Syllabus Guide</h3>
              <p className="text-sm opacity-80">Official IB curriculum breakdown</p>
            </div>
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-orange-400/50 mx-auto mb-4" />
              <p className="text-white/60">Syllabus guide coming soon...</p>
            </div>
          </div>
        );

      case 'progress':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setLeftPanelView('overview')}
                className="text-zinc-400 hover:text-white transition-colors text-sm"
              >
                ← Back to Overview
              </button>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">Progress Tracker</h3>
              <p className="text-sm opacity-80">Track your learning journey</p>
            </div>
            <div className="text-center py-12">
              <BarChart3 className="w-16 h-16 text-indigo-400/50 mx-auto mb-4" />
              <p className="text-white/60">Progress tracker coming soon...</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };



  return (
    <div className="page-container">
      <VerticalSidebar />
      
      <main className={`${isCollapsed ? 'pl-16' : 'pl-64'} transition-all duration-300`}>
        {/* Title Section */}
        <div className="p-6 border-b border-white/10">
          <h1 className="text-3xl font-bold font-inter text-white">
            {program.title}
          </h1>
        </div>

        {/* Split Screen Layout */}
        <div className="flex h-[calc(100vh-120px)]">
          {/* Left Panel */}
          <div className="w-1/2 border-r border-white/10 overflow-y-auto">
            <div className="p-6">
              {renderLeftPanelContent()}
            </div>
          </div>

          {/* Right Panel - Markdown Note Editor */}
          <div className="w-1/2 p-6">
            <MarkdownEditor
              initialContent={noteContent}
              onSave={(content) => setNoteContent(content)}
              placeholder="Take notes while studying..."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ProgramDetails() {
  return (
    <SidebarProvider>
      <ProgramDetailsContent />
    </SidebarProvider>
  );
}