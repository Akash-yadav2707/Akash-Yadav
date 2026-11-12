import React, { useState } from 'react';
import { FileText, Download, Eye, GraduationCap, Award, Code2, ShieldCheck, CheckCircle2, Loader2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, CERTIFICATIONS, HONORS_AWARDS } from '../data/portfolioData';
import { generateWordResumeBlob } from '../utils/generateWordResume';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
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
    <section id="resume" className="py-16 sm:py-20 bg-[#050505] border-b border-[#222222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded bg-[#111111] border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Curriculum Vitae / Resume</h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Comprehensive career summary, education, certifications, and skills overview</p>
          </div>
        </div>

        {/* Resume Card Preview Banner */}
        <div className="bg-[#0a0a0a] border border-[#222222] hover:border-cyan-500/40 rounded-lg p-6 sm:p-8 space-y-6 shadow-xl transition-all">
          
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1a1a1a] pb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">Official CV Preview</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{PERSONAL_INFO.name}</h3>
              <p className="text-sm font-semibold text-gray-300 mt-0.5">{PERSONAL_INFO.title}</p>
              <p className="text-xs text-gray-400 mt-1">{PERSONAL_INFO.location} • {PERSONAL_INFO.email}</p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>View Full CV</span>
              </button>

              <button
                onClick={handleDownloadWord}
                disabled={isGeneratingWord}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded transition-colors cursor-pointer disabled:opacity-50"
              >
                {isGeneratingWord ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                <span>{isGeneratingWord ? 'Generating...' : 'Download MS Word (.docx)'}</span>
              </button>
            </div>
          </div>

          {/* Key CV Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            
            {/* Education Highlight */}
            <div className="bg-black p-4 rounded border border-[#1a1a1a]">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION</span>
              </div>
              <p className="text-xs font-bold text-white">B.Tech CSE (DS & AI)</p>
              <p className="text-[11px] text-gray-400">Shri Ramswaroop Memorial University</p>
              <p className="text-[11px] font-mono text-cyan-300/80 mt-1">2022 – 2026 (3rd Year)</p>
            </div>

            {/* Certifications Highlight */}
            <div className="bg-black p-4 rounded border border-[#1a1a1a]">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs mb-2">
                <Award className="w-4 h-4" />
                <span>CERTIFICATIONS</span>
              </div>
              <p className="text-xs font-bold text-white">SIH 2024 & TCS iON</p>
              <p className="text-[11px] text-gray-400">Smart India Hackathon + AI & Cybersecurity</p>
              <p className="text-[11px] font-mono text-cyan-300/80 mt-1">3 Verified Credentials</p>
            </div>

            {/* Core Competencies */}
            <div className="bg-black p-4 rounded border border-[#1a1a1a]">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs mb-2">
                <Code2 className="w-4 h-4" />
                <span>TECHNICAL FOCUS</span>
              </div>
              <p className="text-xs font-bold text-white">Java OOP & Full-Stack</p>
              <p className="text-[11px] text-gray-400">HTML5, CSS3, JS, REST APIs, Git</p>
              <p className="text-[11px] font-mono text-cyan-300/80 mt-1">Cybersecurity & Cloud Basics</p>
            </div>

          </div>

          {/* Quick Notice */}
          <div className="flex items-center justify-between gap-2 pt-2 text-xs font-mono text-gray-400 text-center sm:text-left flex-wrap">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Includes Internal Smart India Hackathon (SIH) 2024 & Academic Distinctions</span>
            </span>
            <button
              onClick={onOpenResumeModal}
              className="text-cyan-400 hover:underline cursor-pointer font-sans text-xs font-medium"
            >
              Click here to read full interactive resume →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
