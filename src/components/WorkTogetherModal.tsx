import React, { useState } from 'react';
import { X, CheckCircle2, Send, ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';

interface WorkTogetherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkTogetherModal: React.FC<WorkTogetherModalProps> = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState('SaaS / Web App');
  const [timeline, setTimeline] = useState('1-3 Months');
  const [budget, setBudget] = useState('$5k - $15k');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-blue-50 text-[#013FD0] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Inquiry Received!
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{name || 'there'}</strong>. Dicxion will review your project parameters ({projectType}, {timeline}) and respond to <strong className="text-slate-900">{email}</strong> within 24 hours.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#013FD0] hover:bg-[#0034B3] text-white text-sm font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#013FD0] mb-1.5 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                <span>Start a Project</span>
              </div>
              <h3 id="modal-title" className="text-2xl font-bold text-slate-900 tracking-tight">
                Let's Work Together
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Tell me about your product vision, challenges, and timeline.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Project Type Picker */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  What kind of project is this?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['SaaS / Web App', 'Mobile App', 'Design System', 'Landing Page'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`px-3 py-2 text-xs rounded-lg border text-center transition-all cursor-pointer font-medium ${
                        projectType === type
                          ? 'bg-blue-50 border-[#013FD0] text-[#013FD0] font-semibold shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Target Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Urgent (< 1 Month)">Urgent (&lt; 1 Month)</option>
                    <option value="1-3 Months">1-3 Months (Recommended)</option>
                    <option value="3-6 Months">3-6 Months (Full System)</option>
                    <option value="Flexible / Advisory">Flexible / Design Advisory</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="$3k - $5k">$3,000 - $5,000</option>
                    <option value="$5k - $15k">$5,000 - $15,000</option>
                    <option value="$15k - $30k">$15,000 - $30,000</option>
                    <option value="$30k+">$30,000+ Enterprise</option>
                  </select>
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maya Lin"
                    className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Project Brief & Objectives *
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your current product state, key bottlenecks, or what success looks like..."
                  className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>

              {/* Guarantees */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  24h Response Time
                </span>
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Strict NDA Standard
                </span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-sm bg-[#013FD0] hover:bg-[#0034B3] active:bg-[#002B94] transition-colors shadow-xs cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Sending Proposal...</span>
                  ) : (
                    <>
                      <span>Send Project Brief</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
