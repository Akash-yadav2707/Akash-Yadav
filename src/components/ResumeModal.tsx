import React, { useState } from 'react';
import { X, Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Printer, FileText, Loader2, Award } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, CERTIFICATIONS, EDUCATION, SKILL_CATEGORIES, HONORS_AWARDS } from '../data/portfolioData';
import { generateWordResumeBlob } from '../utils/generateWordResume';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [isGeneratingWord, setIsGeneratingWord] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

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
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div
        className="bg-[#0a0a0a] border border-[#222222] rounded-lg w-full max-w-3xl my-auto overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="bg-black px-4 py-3 border-b border-[#222222] flex items-center justify-between shrink-0 flex-wrap gap-2">
          <span className="text-sm font-mono font-bold text-white flex items-center gap-2">
            <span>{PERSONAL_INFO.name} — Resume Preview</span>
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadWord}
              disabled={isGeneratingWord}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded transition-colors cursor-pointer disabled:opacity-50"
            >
              {isGeneratingWord ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <FileText className="w-3.5 h-3.5" />
              )}
              <span>{isGeneratingWord ? 'Generating .docx...' : 'Download MS Word (.docx)'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-[#1a1a1a] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Printable Paper View */}
        <div className="p-6 sm:p-8 overflow-y-auto bg-black text-gray-200 text-xs sm:text-sm font-sans space-y-6 print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-[#222222] pb-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h1>
            <p className="text-cyan-400 font-semibold text-sm sm:text-base mt-0.5">{PERSONAL_INFO.title}</p>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400 mt-3 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 text-xs font-mono mt-2 pt-2 border-t border-[#1a1a1a]">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                GitHub: Akash-yadav2707
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                LinkedIn: akash-yadav-166981297
              </a>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 border-b border-[#1a1a1a] pb-1 mb-2 tracking-wider">
              Education
            </h2>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between font-semibold text-white">
                  <span>{edu.degree} — {edu.field}</span>
                  <span className="font-mono text-xs text-gray-400">{edu.year}</span>
                </div>
                <p className="text-xs text-gray-300">{edu.institution}, {edu.location}</p>
              </div>
            ))}
          </div>

          {/* Technical Skills Section */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 border-b border-[#1a1a1a] pb-1 mb-2 tracking-wider">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="bg-[#0a0a0a] p-2 rounded border border-[#1a1a1a]">
                  <span className="font-semibold text-gray-200 block mb-0.5">{cat.category}:</span>
                  <span className="text-gray-400 font-mono">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects Section */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 border-b border-[#1a1a1a] pb-1 mb-2 tracking-wider">
              Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="bg-[#0a0a0a] p-3 rounded border border-[#1a1a1a]">
                  <div className="flex justify-between items-baseline font-semibold text-white">
                    <span>{proj.title}</span>
                    <span className="text-[11px] font-mono text-cyan-400">{proj.tech.join(' | ')}</span>
                  </div>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 border-b border-[#1a1a1a] pb-1 mb-2 tracking-wider">
              Certifications & Training
            </h2>
            <div className="space-y-1.5">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="text-xs flex justify-between items-center border-b border-[#1a1a1a] pb-1">
                  <span className="font-semibold text-white">{cert.title} <span className="text-gray-400 font-normal">— {cert.issuer}</span></span>
                  <span className="font-mono text-cyan-300 shrink-0 text-[11px] ml-2">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Awards Section */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 border-b border-[#1a1a1a] pb-1 mb-2 tracking-wider">
              Honors & Awards
            </h2>
            <div className="space-y-1.5">
              {HONORS_AWARDS.map((award) => (
                <div key={award.id} className="text-xs flex justify-between items-center border-b border-[#1a1a1a] pb-1">
                  <span className="font-semibold text-white">{award.title} <span className="text-gray-400 font-normal">— {award.event}</span></span>
                  <span className="font-mono text-cyan-300 shrink-0 text-[11px] ml-2">{award.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#0a0a0a] px-4 py-3 border-t border-[#222222] flex justify-between items-center shrink-0">
          <button
            onClick={handleDownloadWord}
            disabled={isGeneratingWord}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded transition-colors cursor-pointer disabled:opacity-50"
          >
            {isGeneratingWord ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <FileText className="w-3.5 h-3.5" />
            )}
            <span>Download .docx File</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-gray-300 hover:text-white bg-black border border-[#222222] rounded cursor-pointer"
          >
            Close Resume
          </button>
        </div>
      </div>
    </div>
  );
};

