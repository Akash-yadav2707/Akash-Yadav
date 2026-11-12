import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-[#1a1a1a] py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left branding & copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-gray-400 font-mono">
            &copy; 2026 {PERSONAL_INFO.name}. Built with dedication.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            B.Tech CSE (DS & AI) • Shri Ramswaroop Memorial University, Lucknow
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-[#0a0a0a] border border-[#222222] rounded transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-[#0a0a0a] border border-[#222222] rounded transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-[#0a0a0a] border border-[#222222] rounded transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-[#0a0a0a] border border-[#222222] rounded transition-colors ml-2 cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
