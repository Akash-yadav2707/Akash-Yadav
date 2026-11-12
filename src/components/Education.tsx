import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 bg-black border-b border-[#222222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded bg-[#111111] border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Education</h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Academic background and current coursework</p>
          </div>
        </div>

        {/* Education Timeline / Cards */}
        <div className="space-y-6">
          {EDUCATION.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0a0a0a] border border-[#222222] rounded-lg p-6 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                    {item.field}
                  </p>
                  <p className="text-sm text-gray-300 font-medium mt-1">
                    {item.institution}
                  </p>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                  <span className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded bg-black text-gray-300 border border-[#1a1a1a]">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {item.year}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                    <CheckCircle2 className="w-3 h-3" /> {item.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-400 mb-4">
                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                <span>{item.location}</span>
              </div>

              <div className="pt-4 border-t border-[#1a1a1a]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  Key Highlights & Focus:
                </h4>
                <ul className="space-y-1.5">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-cyan-400 font-mono text-xs mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
