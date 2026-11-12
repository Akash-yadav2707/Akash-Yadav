import React, { useState } from 'react';
import { ArrowRight, Code2, Mail, ShieldCheck, Github, Linkedin, FileText, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { generateWordResumeBlob } from '../utils/generateWordResume';

export const Hero: React.FC = () => {
  const [isGeneratingWord, setIsGeneratingWord] = useState(false);

  const handleDownloadWord = async () => {
    try {
      setIsGeneratingWord(true);
      const blob = await generateWordResumeBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Akash_Yadav_Resume.docx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating MS Word document:', error);
      alert('Failed to generate Word document. Please try again.');
    } finally {
      setIsGeneratingWord(false);
    }
  };

  return (
    <section id="top" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-black border-b border-[#222222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#0d0d0d] border border-[#222222] text-cyan-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>B.Tech CSE (Data Science & AI) Student • 3rd Year</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-3">
          Hi, I'm <span className="text-cyan-400">{PERSONAL_INFO.name}</span>
        </h1>

        {/* Tagline */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
          {PERSONAL_INFO.title}
        </h2>

        {/* Supporting Line */}
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
          {PERSONAL_INFO.subtitle}
        </p>

        {/* CTAs & Social Links */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-colors"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleDownloadWord}
            disabled={isGeneratingWord}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded transition-colors cursor-pointer disabled:opacity-50"
          >
            {isGeneratingWord ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <FileText className="w-4 h-4" />
            )}
            <span>{isGeneratingWord ? 'Generating...' : 'Download Resume (.docx)'}</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-200 bg-[#0d0d0d] hover:bg-[#1a1a1a] border border-[#222222] hover:border-gray-500 rounded transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </a>

          <div className="flex items-center gap-2 ml-auto sm:ml-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#222222] w-full sm:w-auto">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-400 hover:text-cyan-400 bg-[#0d0d0d] border border-[#222222] rounded hover:bg-[#1a1a1a] transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-400 hover:text-cyan-400 bg-[#0d0d0d] border border-[#222222] rounded hover:bg-[#1a1a1a] transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Key Focus Tags */}
        <div className="mt-12 pt-6 border-t border-[#222222] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-gray-400 font-mono">
          <div className="flex items-center gap-2 bg-[#0d0d0d] p-2.5 rounded border border-[#222222]">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>Full-Stack Web</span>
          </div>
          <div className="flex items-center gap-2 bg-[#0d0d0d] p-2.5 rounded border border-[#222222]">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Cybersecurity Interest</span>
          </div>
          <div className="flex items-center gap-2 bg-[#0d0d0d] p-2.5 rounded border border-[#222222]">
            <span className="text-cyan-400 font-bold text-sm">Java</span>
            <span>OOP Systems</span>
          </div>
          <div className="flex items-center gap-2 bg-[#0d0d0d] p-2.5 rounded border border-[#222222]">
            <span className="text-cyan-400 font-bold text-sm">Go</span>
            <span>Learning Go & AI</span>
          </div>
        </div>

      </div>
    </section>
  );
};
