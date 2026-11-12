import React from 'react';
import { User, GraduationCap, MapPin, Target, Shield, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-black border-b border-[#222222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded bg-[#111111] border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <User className="w-4 h-4" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">About Me</h2>
        </div>

        {/* Content Box - Google Sites Card Style */}
        <div className="bg-[#0a0a0a] border border-[#222222] rounded-lg p-6 sm:p-8 space-y-6">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-[#222222]">
            <div className="flex items-start gap-3 p-3 bg-black border border-[#1a1a1a] rounded">
              <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-gray-400 uppercase font-mono tracking-wider block">Education</span>
                <span className="text-sm font-medium text-white block">3rd Year B.Tech CSE (DS & AI)</span>
                <span className="text-xs text-gray-400">Shri Ramswaroop Memorial University</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-black border border-[#1a1a1a] rounded">
              <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-gray-400 uppercase font-mono tracking-wider block">Location</span>
                <span className="text-sm font-medium text-white block">Lucknow, Uttar Pradesh</span>
                <span className="text-xs text-gray-400">Open to Remote & On-site Opportunities</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-black border border-[#1a1a1a] rounded">
              <Target className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-gray-400 uppercase font-mono tracking-wider block">Core Approach</span>
                <span className="text-sm font-medium text-white block">Learning by Building</span>
                <span className="text-xs text-gray-400">UI Clones, Java Tools, Full-Stack Apps</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-black border border-[#1a1a1a] rounded">
              <Shield className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-gray-400 uppercase font-mono tracking-wider block">Focus Areas</span>
                <span className="text-sm font-medium text-white block">Software & Cybersecurity</span>
                <span className="text-xs text-gray-400">TCS iON Certified in AI & Cyber Security</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
