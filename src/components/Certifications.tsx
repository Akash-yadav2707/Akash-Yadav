import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';

interface CertificationsProps {
  onSelectCert: (cert: Certification) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onSelectCert }) => {
  return (
    <section id="certifications" className="py-16 sm:py-20 bg-black border-b border-[#222222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded bg-[#111111] border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Certifications & Achievements</h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Verified credentials in AI, Cybersecurity, STEM, and Hackathons</p>
          </div>
        </div>

        {/* Certifications Cards */}
        <div className="space-y-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#0a0a0a] border border-[#222222] hover:border-cyan-500/50 rounded-lg p-5 sm:p-6 transition-all duration-150"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">
                      {cert.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                      <ShieldCheck className="w-3 h-3" /> Verified
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400 mt-1">
                    <span className="flex items-center gap-1 text-gray-300 font-medium">
                      <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                      {cert.issuer}
                    </span>
                    {cert.initiative && (
                      <span className="text-gray-400">
                        • {cert.initiative}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-mono text-gray-400 bg-black px-2.5 py-1 rounded border border-[#1a1a1a] self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                {cert.details}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#1a1a1a]">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <span className="text-gray-500">Certificate ID:</span>
                  <span className="text-cyan-300 bg-black px-2 py-0.5 rounded border border-[#1a1a1a]">
                    {cert.certificateId}
                  </span>
                </div>

                <button
                  onClick={() => onSelectCert(cert)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-cyan-400 bg-cyan-950/30 hover:bg-cyan-900/50 border border-cyan-500/40 rounded transition-colors cursor-pointer"
                >
                  <span>View Credential Sheet</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
