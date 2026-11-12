import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CodeTerminalModal } from './components/CodeTerminalModal';
import { CertificateModal } from './components/CertificateModal';
import { ResumeModal } from './components/ResumeModal';
import { Project, Certification } from './types';

export default function App() {
  const [selectedProjectDemo, setSelectedProjectDemo] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Top Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Page Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects onSelectProjectForDemo={(proj) => setSelectedProjectDemo(proj)} />
        <Certifications onSelectCert={(cert) => setSelectedCert(cert)} />
        <Education />
        <ResumeSection onOpenResumeModal={() => setResumeOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CodeTerminalModal
        project={selectedProjectDemo}
        onClose={() => setSelectedProjectDemo(null)}
      />

      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
