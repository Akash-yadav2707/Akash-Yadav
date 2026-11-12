import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-black border-b border-[#222222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded bg-[#111111] border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Contact Me</h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Get in touch for opportunities, collaborations, or questions</p>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          
          {/* Direct Contact Cards (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            
            {/* Email Card */}
            <div className="bg-[#0a0a0a] border border-[#222222] rounded-lg p-5">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs uppercase font-mono text-gray-400">Email Address</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-gray-400 hover:text-cyan-400 hover:bg-black rounded transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-semibold text-white hover:text-cyan-400 break-all transition-colors block"
              >
                {PERSONAL_INFO.email}
              </a>
              {copiedEmail && (
                <span className="text-[11px] font-mono text-emerald-400 mt-1 block">Copied to clipboard!</span>
              )}
            </div>

            {/* Phone Card */}
            <div className="bg-[#0a0a0a] border border-[#222222] rounded-lg p-5">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs uppercase font-mono text-gray-400">Phone Number</span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 text-gray-400 hover:text-cyan-400 hover:bg-black rounded transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors block"
              >
                {PERSONAL_INFO.phone}
              </a>
              {copiedPhone && (
                <span className="text-[11px] font-mono text-emerald-400 mt-1 block">Copied to clipboard!</span>
              )}
            </div>

            {/* Social Links */}
            <div className="bg-[#0a0a0a] border border-[#222222] rounded-lg p-5 space-y-3">
              <span className="text-xs uppercase font-mono text-gray-400 block mb-2">Online Profiles</span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 bg-black border border-[#1a1a1a] hover:border-cyan-500/50 rounded transition-colors group"
              >
                <Github className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                <span className="text-xs font-mono text-gray-200 group-hover:text-white">GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 bg-black border border-[#1a1a1a] hover:border-cyan-500/50 rounded transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                <span className="text-xs font-mono text-gray-200 group-hover:text-white">LinkedIn Profile</span>
              </a>
            </div>

          </div>

          {/* Contact Form (3 cols) */}
          <div className="md:col-span-3 bg-[#0a0a0a] border border-[#222222] rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Send a Message</span>
            </h3>

            {formSubmitted ? (
              <div className="p-6 bg-black border border-emerald-500/40 rounded-lg text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Message Received!</h4>
                <p className="text-xs text-gray-300">
                  Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>. Akash will get back to you at <span className="text-cyan-400">{formData.email}</span> as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-2 text-xs font-mono text-cyan-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-black border border-[#222222] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400 placeholder-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-black border border-[#222222] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400 placeholder-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">Subject (Optional)</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Opportunity"
                    className="w-full bg-black border border-[#222222] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400 placeholder-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Akash, I'd like to talk about..."
                    className="w-full bg-black border border-[#222222] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400 placeholder-gray-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
