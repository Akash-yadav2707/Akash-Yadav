import React from 'react';
import { FolderGit2, ExternalLink, Github, Terminal, Clock, CheckCircle2, Code } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProjectForDemo: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProjectForDemo }) => {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-black border-b border-[#222222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded bg-[#111111] border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <FolderGit2 className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Practical applications built in HTML, CSS, and Java OOP</p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-[#0a0a0a] border border-[#222222] hover:border-gray-500/60 rounded-lg p-6 flex flex-col justify-between transition-all duration-200"
            >
              <div>
                {/* Header & Status Tag */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400">
                    {project.title}
                  </h3>
                  
                  {project.status === 'live' && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 shrink-0">
                      <CheckCircle2 className="w-3 h-3" /> Live Demo
                    </span>
                  )}
                  {project.status === 'coming_soon' && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/60 shrink-0">
                      <Clock className="w-3 h-3" /> On Request
                    </span>
                  )}
                  {project.status === 'repo_available' && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 shrink-0">
                      <Code className="w-3 h-3" /> CLI / Java
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-xs font-mono text-cyan-300 bg-black border border-[#222222] rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#1a1a1a] flex items-center gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.type === 'java' && (
                  <button
                    onClick={() => onSelectProjectForDemo(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-400 bg-black hover:bg-[#111111] border border-cyan-500/40 rounded transition-colors cursor-pointer"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>View Terminal Code & Output</span>
                  </button>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white bg-black hover:bg-[#111111] border border-[#222222] rounded transition-colors ml-auto"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}

                {project.status === 'coming_soon' && !project.link && (
                  <span className="text-xs text-gray-500 font-mono italic">
                    Repository push in progress
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
