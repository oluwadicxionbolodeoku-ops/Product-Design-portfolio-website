import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WHAT_I_DO_SERVICES, ServiceItem } from '../data/portfolioData';

interface WhatIDoProps {
  onSelectService: (serviceTitle: string) => void;
}

export const WhatIDo: React.FC<WhatIDoProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden rounded-3xl mx-2 sm:mx-6 my-10 shadow-2xl">
      {/* Subtle ambient lighting inspired by the reference image */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#013FD0]/10 blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-orange-500/5 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading & Supporting Statement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#013FD0] mb-3">
              <span>Capabilities & Craft</span>
              <span className="text-orange-500">✦</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              What I <span className="text-[#013FD0]">Do</span>
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              "I turn ideas, problems and business requirements into clear, usable and scalable digital experiences."
            </p>
          </div>
        </div>

        {/* 4 Premium Service Cards in a 2x2 or 4-column responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {WHAT_I_DO_SERVICES.map((service: ServiceItem) => (
            <div
              key={service.number}
              onClick={() => onSelectService(service.title)}
              className="group relative bg-slate-900/90 hover:bg-slate-900 border border-slate-800/90 hover:border-[#013FD0]/60 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <div>
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-extrabold text-slate-600 group-hover:text-orange-400 transition-colors tabular-nums">
                    {service.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-[#013FD0] transition-colors" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#013FD0] transition-colors tracking-tight">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Deliverables Bullet List */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-800">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#013FD0]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Small Visual / Mockup Screen container inspired by reference image */}
              <div className="relative mt-2 rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 aspect-16/10">
                <img
                  src={service.mockupImage}
                  alt={service.title}
                  className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Circular Arrow Icon button matching reference image */}
                <div
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-slate-950/90 text-white group-hover:bg-[#013FD0] flex items-center justify-center border border-slate-700 group-hover:border-[#013FD0] transition-all shadow-md group-hover:scale-110"
                  aria-label={`Explore ${service.title}`}
                >
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:text-orange-300 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Carousel / Dots indicator referencing the reference image bottom */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <span className="w-6 h-2 rounded-full bg-[#013FD0]" />
          <span className="w-2 h-2 rounded-full bg-slate-700" />
          <span className="w-2 h-2 rounded-full bg-slate-700" />
          <span className="w-2 h-2 rounded-full bg-slate-700" />
        </div>
      </div>
    </section>
  );
};
