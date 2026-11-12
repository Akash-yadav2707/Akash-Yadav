import React, { useState } from 'react';
import { X, Terminal, Code, Copy, Check, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface CodeTerminalModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CodeTerminalModal: React.FC<CodeTerminalModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'code'>('terminal');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="bg-[#0a0a0a] border border-[#222222] rounded-lg w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-black px-4 py-3 border-b border-[#222222] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5 mr-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            </div>
            <span className="text-sm font-mono font-bold text-gray-200">{project.title}</span>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
              Java CLI Demo
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white rounded hover:bg-[#1a1a1a] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="bg-[#0a0a0a] px-4 py-2 border-b border-[#1a1a1a] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('terminal')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded transition-colors cursor-pointer ${
                activeTab === 'terminal'
                  ? 'bg-cyan-950 text-cyan-400 border border-cyan-700'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Console Output Demo</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded transition-colors cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-cyan-950 text-cyan-400 border border-cyan-700'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Java Source Code</span>
            </button>
          </div>

          {activeTab === 'code' && project.codeSnippet && (
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-gray-300 hover:text-white bg-black border border-[#222222] rounded cursor-pointer"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm bg-black text-gray-200 flex-1">
          {activeTab === 'terminal' ? (
            <div className="space-y-3">
              <div className="text-gray-500 text-xs">
                # Running {project.title} on Java Runtime (JDK 21)...
              </div>
              <pre className="bg-[#050505] p-4 rounded border border-[#1a1a1a] text-cyan-300 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
                {project.terminalOutput || 'No terminal output available.'}
              </pre>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="text-gray-500 text-xs">
                // {project.title} - Core Java Implementation
              </div>
              <pre className="bg-[#050505] p-4 rounded border border-[#1a1a1a] text-emerald-400 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
                {project.codeSnippet || '// Source code snippet available on request.'}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#0a0a0a] px-4 py-3 border-t border-[#222222] flex items-center justify-between text-xs font-mono">
          <span className="text-gray-400">
            Tech Stack: {project.tech.join(', ')}
          </span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
            >
              <span>View Repository on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
