import React from 'react';
import { Cpu, Code, Wrench, Bot, Sparkles, BookOpen } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code className="w-4 h-4 text-cyan-400" />;
      case 'Concepts & CS Fundamentals':
        return <BookOpen className="w-4 h-4 text-cyan-400" />;
      case 'Developer Tools':
        return <Wrench className="w-4 h-4 text-cyan-400" />;
      case 'AI & Developer Platforms':
        return <Bot className="w-4 h-4 text-cyan-400" />;
      case 'Currently Learning':
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
      default:
        return <Cpu className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-black border-b border-[#222222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded bg-[#111111] border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Technical Skills</h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Core stack, tools, and ongoing learning path</p>
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((cat) => {
            const isLearning = cat.category === 'Currently Learning';
            return (
              <div
                key={cat.category}
                className={`bg-[#0a0a0a] border rounded-lg p-5 transition-all ${
                  isLearning ? 'border-cyan-500/40 bg-[#0a0a0a]' : 'border-[#222222]'
                }`}
              >
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#1a1a1a]">
                  {getCategoryIcon(cat.category)}
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
                    {cat.category}
                  </h3>
                  {isLearning && (
                    <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                      In Progress
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono border ${
                        isLearning
                          ? 'bg-black text-cyan-300 border-cyan-500/30'
                          : 'bg-black text-gray-200 border-[#222222] hover:border-cyan-500/50 hover:text-cyan-400'
                      } transition-colors`}
                    >
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
