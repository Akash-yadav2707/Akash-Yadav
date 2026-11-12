import React from 'react';
import { X, ShieldCheck, Calendar, Award, Building2, CheckCircle2, Copy, Check } from 'lucide-react';
import { Certification } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certification, onClose }) => {
  const [copiedId, setCopiedId] = React.useState(false);

  if (!certification) return null;

  const handleCopyId = () => {
    navigator.clipboard.writeText(certification.certificateId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="bg-[#0a0a0a] border border-[#222222] rounded-lg w-full max-w-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-black px-5 py-4 border-b border-[#222222] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Credential Details</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white rounded hover:bg-[#1a1a1a] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Card Preview Header */}
        <div className="p-6 space-y-5 bg-[#0a0a0a]">
          
          <div className="border border-cyan-500/30 bg-black rounded-lg p-5 space-y-4 relative">
            
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-wider block">Official Credential</span>
                <h4 className="text-lg font-bold text-white mt-0.5">{certification.title}</h4>
                <p className="text-xs text-gray-300 font-medium mt-1">{certification.issuer}</p>
              </div>

              <div className="w-10 h-10 rounded-full bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>

            {certification.initiative && (
              <p className="text-xs text-gray-400 italic border-t border-[#1a1a1a] pt-2">
                Under {certification.initiative}
              </p>
            )}

            <div className="grid grid-cols-2 gap-3 text-xs pt-2 font-mono">
              <div className="bg-[#0a0a0a] p-2.5 rounded border border-[#1a1a1a]">
                <span className="text-gray-500 block text-[10px]">RECIPIENT</span>
                <span className="text-gray-200 font-semibold">{PERSONAL_INFO.name}</span>
              </div>

              <div className="bg-[#0a0a0a] p-2.5 rounded border border-[#1a1a1a]">
                <span className="text-gray-500 block text-[10px]">DATE ISSUED</span>
                <span className="text-gray-200 font-semibold">{certification.date}</span>
              </div>
            </div>

            {/* Certificate ID section */}
            <div className="bg-[#0a0a0a] p-3 rounded border border-[#1a1a1a] flex items-center justify-between gap-2">
              <div>
                <span className="text-[10px] text-gray-500 font-mono block">UNIQUE CERTIFICATE ID</span>
                <span className="text-xs font-mono font-bold text-cyan-300">{certification.certificateId}</span>
              </div>
              <button
                onClick={handleCopyId}
                className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-mono text-gray-300 hover:text-white bg-black border border-[#222222] rounded cursor-pointer"
              >
                {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

          </div>

          {/* Details & Skills */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase text-gray-400">Credential Overview</h5>
            <p className="text-xs text-gray-300 leading-relaxed">
              {certification.details}
            </p>

            <div className="pt-2">
              <span className="text-xs font-mono uppercase text-gray-400 block mb-2">Verified Competencies</span>
              <div className="flex flex-wrap gap-1.5">
                {certification.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-[11px] font-mono text-cyan-300 bg-black border border-[#222222] rounded"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-black px-5 py-3 border-t border-[#222222] flex items-center justify-between">
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Verified Credentials Record</span>
          </span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-semibold text-gray-200 bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] rounded cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
