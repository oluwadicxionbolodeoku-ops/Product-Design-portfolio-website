import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'services',
    question: 'What services do you offer?',
    answer: 'I offer UI/UX design, brand design, and no-code development. This includes wireframing, user flows, design systems, website/app design, branding, and building MVPs with tools like Framer, and more.'
  },
  {
    id: 'process',
    question: "What’s your design process like?",
    answer: 'My process is grounded in discovery, user research, wireframing, rapid visual prototyping, testing, and meticulous developer handoff with complete design tokens and component specs.'
  },
  {
    id: 'clients',
    question: 'Do you only work with startups or also with established brands?',
    answer: 'I collaborate with early-stage venture-backed startups, growth-stage SMEs, corporate teams, and public sector organizations seeking modern, scalable digital product experiences.'
  },
  {
    id: 'tools',
    question: 'What tools do you use?',
    answer: 'Figma is my primary workspace for UI/UX design, design systems, and prototyping. I also leverage Framer, Webflow, FigJam, Notion for technical specs, and standard frontend collaboration tools.'
  },
  {
    id: 'timeline',
    question: 'How long does a typical project take?',
    answer: 'Timelines depend on complexity and scope. A standard mobile or web MVP typically takes 3 to 6 weeks, while extensive enterprise SaaS platforms or multi-brand design systems can take 8 to 12 weeks.'
  },
  {
    id: 'existing-brand',
    question: 'Can you work with my existing brand or design system?',
    answer: 'Yes, absolutely. I can audit, refine, and expand your current component libraries and brand guidelines, or architect a fresh, modular system tailored to your scaling product needs.'
  },
  {
    id: 'revisions',
    question: 'Do you offer revisions?',
    answer: 'Yes. Every phase includes structured feedback loops during wireframing and high-fidelity visual design to ensure the final product meets your business objectives and user needs.'
  },
  {
    id: 'pricing',
    question: 'How much do you charge for a project?',
    answer: 'Projects are priced either on a transparent fixed-scope basis or via flexible monthly retainers for ongoing product leadership and design advisory. We discuss budget and scope upfront during discovery.'
  },
  {
    id: 'getting-started',
    question: 'What do you need from me to get started?',
    answer: 'A brief summary of your product concept, target audience, key pain points, and any existing brand assets or wireframes. An initial discovery consultation helps us align on timeline and goals.'
  },
  {
    id: 'no-code',
    question: 'Can you build the design using no-code tools?',
    answer: 'Yes. I can build responsive, high-performance websites and MVPs in Framer or Webflow, complete with CMS collections, clean animations, and custom domain configuration.'
  },
  {
    id: 'team',
    question: 'Do you work solo or with a team?',
    answer: 'While I handle most projects independently, I collaborate with a trusted network of developers, writers, and researchers if the project requires a larger scope.'
  }
];

// Dual-chevron icon matching the reference design
const DualChevron: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <div className="flex flex-col items-center justify-center text-slate-400 group-hover:text-white transition-colors shrink-0">
    {isOpen ? (
      <div className="flex flex-col -space-y-1">
        <ChevronUp className="w-4 h-4" />
        <ChevronUp className="w-4 h-4 opacity-60" />
      </div>
    ) : (
      <div className="flex flex-col -space-y-1">
        <ChevronDown className="w-4 h-4 opacity-60" />
        <ChevronDown className="w-4 h-4" />
      </div>
    )}
  </div>
);

export const FAQSection: React.FC = () => {
  // First item open by default as shown in the reference image
  const [openIds, setOpenIds] = useState<string[]>(['services']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#090E1D] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#013FD0]/10 blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Tag: Frequently Asked Questions */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111A2E] border border-slate-700/60 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-medium text-slate-300 tracking-wide">
              Frequently Asked Questions
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Everything you need to know{' '}
            <span className="text-slate-400 font-semibold block sm:inline">
              before we start
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="group bg-[#10182B]/85 hover:bg-[#121B30] border border-slate-800/80 hover:border-slate-700/80 rounded-2xl transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013FD0]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-white transition-colors pr-4">
                    {item.question}
                  </span>
                  <DualChevron isOpen={isOpen} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 animate-in fade-in duration-200">
                    <div className="border-t border-dashed border-slate-700/60 mb-3.5" />
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
