import React, { useState } from 'react';
import { ArrowUp, Mail, Send } from 'lucide-react';

interface FooterProps {
  onOpenContactModal: () => void;
}

// Custom Behance Bē SVG Icon
const BehanceIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.25 0-5.625-3.078-5.625-5.969 0-3.219 1.797-6.031 5.547-6.031 4.141 0 5.188 3.125 4.875 6.094h-7.797c.078 1.875 1.156 3.094 3.109 3.094 1.484 0 2.297-.688 2.688-1.406l2.303 1.218zm-7.688-4.5h5.188c-.062-1.562-.922-2.5-2.5-2.5-1.781 0-2.562 1.109-2.688 2.5zm-9.038-7.5h-7v14h7.453c3.703 0 5.547-1.781 5.547-4.484 0-1.891-1.078-3.094-2.562-3.562 1.234-.516 2.062-1.656 2.062-3.156 0-2.422-1.719-2.798-5.5-2.798zm-4.328 5.609h3.766c1.172 0 2.062.359 2.062 1.5 0 1.062-.906 1.5-2.062 1.5h-3.766v-3zm0 5.469h4.094c1.391 0 2.281.438 2.281 1.625 0 1.25-.969 1.688-2.281 1.688h-4.094v-3.313z" />
  </svg>
);

// Custom LinkedIn In SVG Icon
const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
  </svg>
);

// Custom X / Twitter SVG Icon
const XTwitterIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom Upwork / Paperplane Icon
const UpworkSendIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onOpenContactModal }) => {
  const [legalModalTitle, setLegalModalTitle] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0B1224] text-white pt-20 pb-12 sm:pt-28 sm:pb-16 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#013FD0]/10 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Scroll-to-top arrow button in upper right */}
        <div className="flex justify-end mb-4 sm:mb-8">
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer group"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Central Headline & Subtitle matching the reference layout */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
            <span className="text-white">Have a project </span>
            <span className="text-slate-400 font-semibold">in mind?</span>
            <br />
            <span className="text-white">Let’s get to </span>
            <span className="text-slate-400 font-semibold">work.</span>
          </h2>
        </div>

        {/* Action Buttons: Reach out on Linkedin & Hire me on Upwork */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-20 sm:mb-24">
          {/* Button 1: Reach out on Linkedin */}
          <a
            href="https://www.linkedin.com/in/dicxion-bolodeoku"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-9 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#0E172E]/90 hover:bg-[#152347] border border-blue-400/40 shadow-[0_0_20px_rgba(1,63,208,0.25)] hover:shadow-[0_0_25px_rgba(1,63,208,0.4)] transition-all duration-200 active:scale-98 cursor-pointer"
          >
            <span>Reach out on Linkedin</span>
          </a>

          {/* Button 2: Hire me on Upwork (opens inquiry modal / client direct booking) */}
          <button
            type="button"
            onClick={onOpenContactModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#0088FF] to-[#00A2FF] hover:from-[#0077E6] hover:to-[#0092E6] shadow-[0_4px_20px_rgba(0,149,255,0.4)] hover:shadow-[0_6px_25px_rgba(0,149,255,0.55)] transition-all duration-200 active:scale-98 cursor-pointer"
          >
            <UpworkSendIcon className="w-4 h-4 text-white" />
            <span>Hire me on Upwork</span>
          </button>
        </div>

        {/* Subtle Horizontal Divider Line */}
        <div className="border-t border-slate-800/80 mb-10 sm:mb-12" />

        {/* Bottom Bar: Left Socials & Policy / Right Contact Info & Copyright */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-xs text-slate-400">
          {/* Left Column: Social Links & Legal */}
          <div className="space-y-4">
            {/* Social Icons matching image order: LinkedIn, X, Behance, Email */}
            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/dicxion-bolodeoku"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="X / Twitter"
                title="X / Twitter"
              >
                <XTwitterIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.behance.net/dicxionbolodeoku"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Behance profile"
                title="Behance"
              >
                <BehanceIcon className="w-5 h-5" />
              </a>

              <a
                href="mailto:oluwadicxionbolodeoku@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Send Email"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Privacy Policy & Terms of Use */}
            <div className="flex items-center gap-3 text-slate-400 text-xs">
              <button
                type="button"
                onClick={() => setLegalModalTitle('Privacy Policy')}
                className="hover:text-slate-200 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-slate-600">|</span>
              <button
                type="button"
                onClick={() => setLegalModalTitle('Terms of Use')}
                className="hover:text-slate-200 transition-colors cursor-pointer"
              >
                Terms of Use
              </button>
            </div>
          </div>

          {/* Right Column: Contact Details & Copyright matching reference image */}
          <div className="space-y-1.5 md:text-right">
            <div className="text-xs">
              <span className="text-slate-400 font-medium">CONTACT ME: </span>
              <a
                href="tel:+2347031368028"
                className="font-bold text-white hover:text-blue-400 transition-colors"
              >
                +2347031368028
              </a>
            </div>

            <div className="text-xs">
              <span className="text-slate-400 font-medium">EMAIL: </span>
              <a
                href="mailto:oluwadicxionbolodeoku@gmail.com"
                className="font-bold text-white hover:text-blue-400 transition-colors"
              >
                oluwadicxionbolodeoku@gmail.com
              </a>
            </div>

            <p className="text-slate-400 text-xs pt-1.5">
              Dicxion Bolodeoku © {new Date().getFullYear()} | All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      {legalModalTitle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white text-slate-900 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <h3 className="text-xl font-bold text-slate-900 mb-3">{legalModalTitle}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              All portfolio works, design systems, and client case study representations are intellectual property of Dicxion Bolodeoku and respective client organizations. Information submitted through this portfolio is treated with strict confidentiality and never shared with third parties.
            </p>
            <div className="text-right">
              <button
                type="button"
                onClick={() => setLegalModalTitle(null)}
                className="px-5 py-2 bg-[#013FD0] hover:bg-[#0034B3] text-white text-xs font-bold rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
