import React from 'react';
import { Layers, Users, Network, ArrowUpRight, Compass, HeartHandshake, Sparkles } from 'lucide-react';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

interface AboutImpactProps {
  onOpenContactModal: () => void;
}

export const AboutImpact: React.FC<AboutImpactProps> = ({ onOpenContactModal }) => {
  const { photoUrl } = useProfilePhoto();

  const impactAreas = [
    {
      number: '01',
      title: 'Product Design',
      description: 'Creating intuitive and useful digital experiences.',
      icon: <Layers className="w-5 h-5 text-[#013FD0]" />,
      pill: 'Digital Craft',
      details: 'Human-centered user journeys, behavioral ergonomics, design systems, and rapid prototypes that validate product-market fit.'
    },
    {
      number: '02',
      title: 'Mentorship',
      description: 'Helping aspiring designers and technology professionals become more confident and job-ready.',
      icon: <Users className="w-5 h-5 text-orange-500" />,
      pill: '100+ Learners',
      details: 'Hands-on practical critiques, real-world sprint projects, portfolio curation, and career trajectory guidance for next-gen talent.'
    },
    {
      number: '03',
      title: 'Ecosystem Building',
      description: 'Supporting technology, innovation, startup and MSME development through programs, partnerships and community initiatives.',
      icon: <Network className="w-5 h-5 text-emerald-600" />,
      pill: 'Community & Tech Hubs',
      details: 'Facilitating regional tech hubs, government partnerships (3MTT, Bayelsa Tech Hub), and MSME incubation initiatives.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50/70 border-y border-slate-100 relative overflow-hidden">
      {/* Subtle architectural ambient accents */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#013FD0]/4 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#013FD0] mb-3">
            <span>About & Impact</span>
            <span className="text-orange-500">✦</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A1128] leading-[1.12]">
            Designing Products.{' '}
            <span className="text-[#013FD0]">Building People.</span>{' '}
            <span className="relative inline-block text-orange-600">
              Growing Ecosystems.
              <span className="absolute -top-3 -right-5 text-orange-500 font-handwriting text-2xl select-none" aria-hidden="true">
                ✦
              </span>
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal">
            "Beyond designing interfaces, I work at the intersection of technology, people and opportunity. Through product design, mentoring and ecosystem development, I help turn ideas into useful digital products while helping emerging talents build practical skills and careers."
          </p>
        </div>

        {/* 2-Column Editorial Composition: Portrait & Narrative Left, 3 Impact Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Portrait & Human Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group">
              {/* Backing decorative architectural frame */}
              <div
                className="absolute -top-3 -left-3 w-full h-full rounded-3xl border-2 border-dashed border-[#013FD0]/25 -z-10"
                aria-hidden="true"
              />

              {/* Professional Portrait */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-amber-400 border-4 border-white aspect-4/5 sm:aspect-square lg:aspect-4/5">
                <img
                  src={photoUrl}
                  alt="Dicxion Bolodeoku - Product Designer, Mentor & Ecosystem Builder"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/Dicxion Profile picture.jpg';
                  }}
                />

                {/* Scrim with human context overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold tracking-tight">Dicxion Bolodeoku</h4>
                      <p className="text-xs text-slate-300">Design Lead • Educator • Community Builder</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold text-white border border-white/25">
                      Lagos ⇄ Global
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Manifesto Card */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#013FD0]">
                <HeartHandshake className="w-4 h-4 text-orange-500" />
                <span className="uppercase tracking-wider">Human-First Philosophy</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                True digital impact isn't just about pixel fidelity; it's about whether software opens real doors for people. Whether coaching a first-time UX learner or architecting a multi-platform app, my approach is collaborative, empathetic, and grounded in practical outcomes.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenContactModal}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#013FD0] hover:text-[#0034B3] group cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: The 3 Impact Areas */}
          <div className="lg:col-span-7 space-y-5">
            {impactAreas.map((area) => (
              <div
                key={area.number}
                className="group bg-white hover:bg-slate-50/80 p-6 sm:p-7 rounded-2xl border border-slate-200/90 hover:border-[#013FD0]/50 shadow-xs hover:shadow-md transition-all duration-200 relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-extrabold text-[#013FD0] bg-blue-50 px-2.5 py-1 rounded-md">
                      {area.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A1128] tracking-tight group-hover:text-[#013FD0] transition-colors">
                      {area.title}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full w-fit">
                    {area.icon}
                    <span>{area.pill}</span>
                  </span>
                </div>

                <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug mb-2">
                  {area.description}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {area.details}
                </p>

                {/* Subtle indicator bar on hover */}
                <div className="w-0 group-hover:w-16 h-0.5 bg-[#013FD0] mt-4 transition-all duration-300" />
              </div>
            ))}

            {/* Bottom Proof Strip */}
            <div className="p-6 bg-gradient-to-r from-blue-50/80 via-white to-amber-50/50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-slate-900 block">
                  Available for Keynotes, Design Leadership & Advisory
                </span>
                <span className="text-[11px] text-slate-500">
                  Collaborating with growth teams, hubs, and institutions globally.
                </span>
              </div>

              <button
                type="button"
                onClick={onOpenContactModal}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#013FD0] hover:bg-[#0034B3] text-white text-xs font-bold shadow-xs transition-colors shrink-0 cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-orange-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
