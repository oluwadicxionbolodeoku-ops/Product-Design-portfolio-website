import React, { useState } from 'react';
import { ArrowUpRight, Send, Check } from 'lucide-react';
import { NAV_LINKS } from '../data/portfolioData';

interface FooterProps {
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContactModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-slate-950 text-white rounded-t-3xl pt-16 pb-8 border-t border-slate-900 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-Footer Banner matching the image */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-12 mb-12 border-b border-slate-800 gap-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white text-center sm:text-left">
            Lets Connect <span className="text-blue-500">there</span>
          </h2>

          <button
            type="button"
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>Hire me</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4-Column Footer matching the image layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                DB
              </div>
              <span className="text-base font-extrabold tracking-tight text-white uppercase">
                DICXION BOLODEOKU
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Senior Product Designer partnering with fast-growing venture startups, SMEs, and digital product teams to build memorable software experiences.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {['LinkedIn', 'Dribbble', 'Twitter', 'GitHub'].map((net) => (
                <a
                  key={net}
                  href={`#${net.toLowerCase()}`}
                  onClick={(e) => e.preventDefault()}
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center text-xs font-bold transition-colors"
                  aria-label={net}
                >
                  {net[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p>
                <span className="text-slate-500 block text-[11px]">Email</span>
                <a
                  href="mailto:oluwadicxionbolodeoku@gmail.com"
                  className="text-white hover:text-blue-400 font-medium"
                >
                  oluwadicxionbolodeoku@gmail.com
                </a>
              </p>
              <p>
                <span className="text-slate-500 block text-[11px]">Location</span>
                <span className="text-slate-300">London, UK & Worldwide Remote</span>
              </p>
              <p>
                <span className="text-slate-500 block text-[11px]">Availability</span>
                <span className="text-emerald-400 font-medium">Accepting Selected Q2 Projects</span>
              </p>
            </div>
          </div>

          {/* Col 4: Newsletter Input matching image */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
              Get the latest insights
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Quarterly articles on product UX metrics and design systems.
            </p>

            {subscribed ? (
              <div className="p-2.5 bg-blue-950/70 border border-blue-800 rounded-xl text-xs text-blue-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 focus-within:border-blue-500 transition-colors">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full px-3 py-1.5 text-xs text-white placeholder:text-slate-500 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shrink-0 cursor-pointer"
                  aria-label="Submit newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Dicxion Bolodeoku. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </a>
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#cookies" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
