import React, { useState } from 'react';
import { Send, Star, Award, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';

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
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            Let's Build Something Memorable
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2 leading-tight">
            Have an Awesome Project <br className="hidden sm:inline" />
            Idea? <span className="text-blue-600">Let's Discuss</span>
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            Drop your email to receive my current project availability deck, rate card, and case study walk-throughs.
          </p>
        </div>

        {/* Email Inquiry Capsule matching the image input bar */}
        <div className="max-w-xl mx-auto mb-10">
          {submitted ? (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center gap-3 text-blue-900 text-sm font-semibold animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Thank you! We've dispatched the discovery guide to {email}.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative flex items-center shadow-lg rounded-full bg-white border border-slate-200/90 p-1.5 focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-transparent transition-all">
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
                className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 sm:py-3 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs cursor-pointer shrink-0 disabled:opacity-75"
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

        {/* Trust Badges matching image: 4.9/5 Average Ratings, 25+ Winning Awards, Certified Product Designer */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>4.9/5 Average Ratings</span>
          </div>

          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600" />
            <span>25+ Winning Awards</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Certified Product Designer</span>
          </div>
        </div>
      </div>
    </section>
  );
};
