'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Clock, Users, BookOpen, Star, ChevronDown, ChevronRight, Target, Award, Calendar, FileText, X } from 'lucide-react';
import programsData from '../../programs/programdata/programs.json';
import syllabusData from '../../syllabus/ib-math-ai/ib-math-ai.json';
import { chapterNotes, getChapterNote } from '../../syllabus/ib-math-ai/chapter-notes';
import Navigation from '../../components/navigation';
import MathRenderer, { shouldRenderMath } from '../../components/MathRenderer';
import MarkdownRenderer from '../../components/MarkdownRenderer';

type Tab = 'overview' | 'syllabus' | 'roadmap' | 'assessment';

interface SyllabusUnit {
  code: string;
  content: string[];
}

interface SyllabusTopic {
  id: number;
  name: string;
  SL?: {
    recommended_hours: number;
    notes?: string;
    units: SyllabusUnit[];
  };
  AHL?: {
    recommended_hours?: number;
    aim?: string;
    units: SyllabusUnit[];
  };
}

export default function ProgramDetails() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [expandedTopics, setExpandedTopics] = useState<Set<number>>(new Set());
  const [expandedUnits, setExpandedUnits] = useState<Set<string>>(new Set());
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const program = programsData.programs.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  const isIBMathAI = params.slug === 'ib-ai-hl-math';
  const syllabus = isIBMathAI ? syllabusData : null;

  if (!program) {
    return <div className="page-container">Program not found</div>;
  }

  const toggleTopic = (topicId: number) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId);
    } else {
      newExpanded.add(topicId);
    }
    setExpandedTopics(newExpanded);
  };

  const toggleUnit = (unitCode: string) => {
    const newExpanded = new Set(expandedUnits);
    if (newExpanded.has(unitCode)) {
      newExpanded.delete(unitCode);
    } else {
      newExpanded.add(unitCode);
    }
    setExpandedUnits(newExpanded);
  };

  const renderSyllabusContent = () => {
    if (!syllabus) return <div>Syllabus not available for this program.</div>;

    return (
      <div className="flex h-[calc(100vh-200px)]">
        {/* Left Panel - Syllabus */}
        <div className="w-1/2 pr-4 overflow-y-auto space-y-6">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">{syllabus.course}</h3>
            <p className="text-sm opacity-80">Complete curriculum breakdown with recommended hours and detailed content</p>
          </div>

          {syllabus.structure.topics.map((topic: SyllabusTopic) => (
          <div key={topic.id} className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
            <button
              onClick={() => toggleTopic(topic.id)}
              className="w-full p-6 text-left hover:bg-white/5 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-semibold">{topic.id}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{topic.name}</h3>
                  <div className="flex items-center space-x-4 text-sm opacity-70 mt-1">
                    {topic.SL && (
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>SL: {topic.SL.recommended_hours}h</span>
                      </span>
                    )}
                    {topic.AHL && topic.AHL.recommended_hours && (
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>AHL: +{topic.AHL.recommended_hours}h</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {expandedTopics.has(topic.id) ? (
                <ChevronDown className="w-5 h-5 opacity-60" />
              ) : (
                <ChevronRight className="w-5 h-5 opacity-60" />
              )}
            </button>

            {expandedTopics.has(topic.id) && (
              <div className="border-t border-white/10 p-6 space-y-4">
                {/* View Notes Button */}
                <div className="mb-4">
                  <button
                    onClick={() => setSelectedChapter(topic.id)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
                      hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/30 rounded-lg 
                      transition-all duration-200 text-cyan-300 hover:text-cyan-200"
                  >
                    <FileText className="w-4 h-4" />
                    <span className="text-sm font-medium">View Chapter Notes</span>
                  </button>
                </div>
                {topic.SL && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                        Standard Level (SL)
                      </div>
                      {topic.SL.notes && (
                        <span className="text-xs opacity-60">{topic.SL.notes}</span>
                      )}
                    </div>
                    {topic.SL.units.map((unit: SyllabusUnit) => (
                      <div key={unit.code} className="ml-4 border-l-2 border-blue-500/30 pl-4">
                        <button
                          onClick={() => toggleUnit(unit.code)}
                          className="flex items-center space-x-2 text-left hover:opacity-80 transition-opacity"
                        >
                          {expandedUnits.has(unit.code) ? (
                            <ChevronDown className="w-4 h-4 opacity-60" />
                          ) : (
                            <ChevronRight className="w-4 h-4 opacity-60" />
                          )}
                          <span className="font-medium text-blue-400">{unit.code}</span>
                        </button>
                        {expandedUnits.has(unit.code) && (
                          <ul className="mt-2 space-y-1 ml-6">
                            {unit.content.map((item: string, idx: number) => (
                              <li key={idx} className="text-sm opacity-80 leading-relaxed">
                                • {shouldRenderMath(item) ? (
                                    <MathRenderer content={item} inline={true} />
                                  ) : (
                                    item
                                  )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {topic.AHL && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                        Additional Higher Level (AHL)
                      </div>
                      {topic.AHL.aim && (
                        <span className="text-xs opacity-60">{topic.AHL.aim}</span>
                      )}
                    </div>
                    {topic.AHL.units.map((unit: SyllabusUnit) => (
                      <div key={unit.code} className="ml-4 border-l-2 border-purple-500/30 pl-4">
                        <button
                          onClick={() => toggleUnit(unit.code)}
                          className="flex items-center space-x-2 text-left hover:opacity-80 transition-opacity"
                        >
                          {expandedUnits.has(unit.code) ? (
                            <ChevronDown className="w-4 h-4 opacity-60" />
                          ) : (
                            <ChevronRight className="w-4 h-4 opacity-60" />
                          )}
                          <span className="font-medium text-purple-400">{unit.code}</span>
                        </button>
                        {expandedUnits.has(unit.code) && (
                          <ul className="mt-2 space-y-1 ml-6">
                            {unit.content.map((item: string, idx: number) => (
                              <li key={idx} className="text-sm opacity-80 leading-relaxed">
                                • {shouldRenderMath(item) ? (
                                    <MathRenderer content={item} inline={true} />
                                  ) : (
                                    item
                                  )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        </div>

        {/* Right Panel - Notes */}
        <div className="w-1/2 pl-4 border-l border-white/10">
          <div className="h-full bg-white/5 rounded-xl border border-white/10 overflow-hidden flex flex-col">
            {selectedChapter ? (
              <>
                {/* Notes Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-semibold">
                      {getChapterNote(selectedChapter)?.title || `Chapter ${selectedChapter} Notes`}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedChapter(null)}
                    className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 opacity-60 hover:opacity-80" />
                  </button>
                </div>

                {/* Notes Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  {getChapterNote(selectedChapter) ? (
                    <MarkdownRenderer 
                      content={getChapterNote(selectedChapter)!.content}
                      className="prose prose-invert max-w-none"
                    />
                  ) : (
                    <div className="text-center py-12">
                      <FileText className="w-12 h-12 text-white/30 mx-auto mb-4" />
                      <p className="text-white/60 mb-2">No notes available</p>
                      <p className="text-white/40 text-sm">Notes for Chapter {selectedChapter} are coming soon.</p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* Empty State */
              <div className="flex-1 flex items-center justify-center text-center p-6">
                <div>
                  <BookOpen className="w-16 h-16 text-white/20 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white/60 mb-2">Select a Chapter</h3>
                  <p className="text-white/40 text-sm max-w-sm">
                    Click "View Chapter Notes" on any expanded topic to see detailed notes, examples, and explanations.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderAssessmentContent = () => {
    if (!syllabus?.structure.external_assessment_HL) return <div>Assessment information not available.</div>;

    const assessment = syllabus.structure.external_assessment_HL;

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-green-400 mb-2">External Assessment - Higher Level</h3>
          <p className="text-sm opacity-80">Comprehensive breakdown of exam structure and requirements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assessment.papers.map((paper, idx) => (
            <div key={idx} className="border border-white/10 rounded-xl p-6 bg-white/5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 font-bold">P{paper.paper || idx + 1}</span>
                </div>
                <div>
                  <h4 className="font-semibold">Paper {paper.paper || idx + 1}</h4>
                  <p className="text-sm opacity-60">{paper.weighting} of total grade</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4 opacity-60" />
                  <span>{paper.duration}</span>
                </div>
                
                <p className="text-sm opacity-80 leading-relaxed">{paper.type}</p>
                
                {paper.notes && (
                  <p className="text-xs opacity-60 italic">{paper.notes}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {syllabus.structure.internal_assessment && (
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>Internal Assessment</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2">Component</h5>
                <p className="text-sm opacity-80 mb-4">{syllabus.structure.internal_assessment.component}</p>
                
                <h5 className="font-medium mb-2">Time Allocation</h5>
                <p className="text-sm opacity-80">{syllabus.structure.internal_assessment.time_allocation}</p>
              </div>
              
              <div>
                <h5 className="font-medium mb-2">Length Guidance</h5>
                <p className="text-sm opacity-80 mb-4">{syllabus.structure.internal_assessment.length_guidance}</p>
                
                <h5 className="font-medium mb-2">Assessment</h5>
                <p className="text-sm opacity-80">{syllabus.structure.internal_assessment.assessment_criteria}</p>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <h5 className="font-medium text-amber-400 mb-2">Purpose</h5>
              <p className="text-sm opacity-80">{syllabus.structure.internal_assessment.purpose}</p>
            </div>
          </div>
        )}

        {assessment.general && (
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h4 className="text-lg font-semibold mb-4">General Information</h4>
            <ul className="space-y-2">
              {assessment.general.map((item, idx) => (
                <li key={idx} className="text-sm opacity-80 flex items-start space-x-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="page-container">
      <Navigation />
      
      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">{program.title}</h1>
            <p className="text-lg opacity-70 max-w-3xl mx-auto">{program.description}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <Users className="w-6 h-6 mx-auto mb-2 opacity-60" />
              <div className="text-2xl font-bold">{program.stats.students}</div>
              <div className="text-sm opacity-60">Students</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <Star className="w-6 h-6 mx-auto mb-2 opacity-60" />
              <div className="text-2xl font-bold">{program.stats.rating}</div>
              <div className="text-sm opacity-60">Rating</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <BookOpen className="w-6 h-6 mx-auto mb-2 opacity-60" />
              <div className="text-2xl font-bold">{program.stats.lessons}</div>
              <div className="text-sm opacity-60">Lessons</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <Calendar className="w-6 h-6 mx-auto mb-2 opacity-60" />
              <div className="text-2xl font-bold">{program.tags.duration}</div>
              <div className="text-sm opacity-60">Duration</div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex justify-center flex-wrap gap-3">
            <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
              {program.tags.pacing}
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
              {program.tags.benefit}
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
              {program.tags.field}
            </span>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="max-w-7xl mx-auto px-6 mb-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 bg-white/5 rounded-xl p-1 border border-white/10">
              {[
                { id: 'overview', label: 'Overview', icon: Target },
                { id: 'syllabus', label: 'Syllabus', icon: BookOpen },
                { id: 'roadmap', label: 'Roadmap', icon: Calendar },
                { id: 'assessment', label: 'Assessment', icon: Award }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white/10 text-white'
                      : 'text-white/60 hover:text-white/80 hover:bg-white/5'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border border-white/10 rounded-xl p-6 bg-white/5">
                    <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                        <span className="text-sm opacity-80">Complete IB Mathematics AI Higher Level curriculum</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                        <span className="text-sm opacity-80">Advanced mathematical modeling and interpretation</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                        <span className="text-sm opacity-80">Statistical analysis and probability theory</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                        <span className="text-sm opacity-80">Calculus applications in real-world contexts</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border border-white/10 rounded-xl p-6 bg-white/5">
                    <h3 className="text-xl font-semibold mb-4">Course Features</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-cyan-500/10 rounded-lg">
                        <div className="text-lg font-semibold text-cyan-400">24</div>
                        <div className="text-xs opacity-60">Lessons</div>
                      </div>
                      <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                        <div className="text-lg font-semibold text-purple-400">1 Month</div>
                        <div className="text-xs opacity-60">Duration</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border border-white/10 rounded-xl p-6 bg-white/5">
                    <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
                    <ul className="space-y-2">
                      <li className="text-sm opacity-80">• Strong foundation in algebra and geometry</li>
                      <li className="text-sm opacity-80">• Basic understanding of functions and graphs</li>
                      <li className="text-sm opacity-80">• Completed pre-calculus or equivalent</li>
                    </ul>
                  </div>

                  <div className="border border-white/10 rounded-xl p-6 bg-white/5">
                    <h3 className="text-xl font-semibold mb-4">Learning Outcomes</h3>
                    <ul className="space-y-2">
                      <li className="text-sm opacity-80">• Master IB HL mathematics concepts</li>
                      <li className="text-sm opacity-80">• Develop mathematical reasoning skills</li>
                      <li className="text-sm opacity-80">• Excel in IB assessments and exams</li>
                      <li className="text-sm opacity-80">• Build foundation for university mathematics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'syllabus' && renderSyllabusContent()}
          
          {activeTab === 'roadmap' && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">Learning Roadmap</h3>
              <p className="opacity-60">Detailed learning roadmap coming soon...</p>
            </div>
          )}

          {activeTab === 'assessment' && renderAssessmentContent()}
        </section>
      </main>
    </div>
  );
}