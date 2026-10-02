import React from 'react';
import { EXPERIENCE_ENTRIES } from '../data/portfolioData';
import { Briefcase, Calendar, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#013FD0] mb-3">
            <span>Career & Leadership Journey</span>
            <span className="text-orange-500">✦</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A1128]">
            My <span className="text-[#013FD0]">Experience</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            My experience sits at the intersection of product design, digital skills development, mentoring and technology ecosystem building.
          </p>
        </div>

        {/* Sophisticated Vertical Timeline referencing the supplied image */}
        <div className="relative">
          {/* Vertical central spine line */}
          <div
            className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#013FD0] via-orange-400 to-slate-200 hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCE_ENTRIES.map((entry, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={entry.id}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-12"
                >
                  {/* Left Column: Organization & Period */}
                  <div
                    className={`w-full sm:w-[45%] ${
                      isEven ? 'sm:text-right' : 'sm:order-2 sm:text-left'
                    }`}
                  >
                    <div className="inline-block">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A1128] tracking-tight">
                        {entry.organization}
                      </h3>
                      {entry.period && (
                        <div
                          className={`flex items-center gap-1.5 mt-1.5 text-xs font-semibold text-slate-500 ${
                            isEven ? 'sm:justify-end' : 'sm:justify-start'
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5 text-orange-500" />
                          <span className="tabular-nums text-slate-700">{entry.period}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Node: Concentric circular dot referencing the reference image */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-[#013FD0] flex items-center justify-center shadow-sm">
                      <div className="w-4 h-4 rounded-full bg-[#013FD0] ring-4 ring-blue-100" />
                    </div>
                  </div>

                  {/* Right Column: Role Title & Focus Description */}
                  <div
                    className={`w-full sm:w-[45%] bg-slate-50/80 hover:bg-slate-50 p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all ${
                      isEven ? 'sm:order-2' : 'sm:order-1'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1 rounded-md bg-blue-50 text-[#013FD0]">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-[#0A1128] tracking-tight">
                        {entry.role}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      <strong className="font-semibold text-slate-900">Focus:</strong> {entry.focus}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
