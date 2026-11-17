import React, { useState } from 'react';
import { Send, Mail, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading matching the image */}
        <div className="mb-8">
          <span className="text-xs font-bold text-[#013FD0] uppercase tracking-widest">
            Let's Build Something Memorable
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A1128] mt-2 leading-tight">
            Have an Awesome Project <br className="hidden sm:inline" />
            Idea? <span className="text-[#013FD0]">Let's Discuss</span>
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            Drop your email to receive my current project availability deck, rate card, and case study walk-throughs.
          </p>
        </div>

        {/* Email Inquiry Capsule matching the image input bar */}
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center gap-3 text-blue-900 text-sm font-semibold animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-[#013FD0] shrink-0" />
              <span>Thank you! We've dispatched the discovery guide to {email}.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative flex items-center shadow-lg rounded-full bg-white border border-slate-200/90 p-1.5 focus-within:ring-2 focus-within:ring-[#013FD0] focus-within:border-transparent transition-all">
              <div className="pl-4 text-slate-400">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 sm:py-3 rounded-full bg-[#013FD0] hover:bg-[#0034B3] active:bg-[#002B94] text-white font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer shrink-0 disabled:opacity-75"
              >
                {isSending ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
