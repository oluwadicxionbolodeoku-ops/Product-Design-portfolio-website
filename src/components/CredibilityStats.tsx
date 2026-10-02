import React from 'react';
import { CREDIBILITY_METRICS } from '../data/portfolioData';

export const CredibilityStats: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-start">
          {CREDIBILITY_METRICS.map((metric, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center sm:items-start text-center sm:text-left group"
            >
              {/* Top subtle category highlight pill/text */}
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-orange-500 transition-colors mb-2">
                {metric.highlight}
              </span>

              {/* Large bold number with subtle blue / deep navy accent */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] tracking-tight tabular-nums leading-none">
                <span className="group-hover:text-[#013FD0] transition-colors">
                  {metric.value}
                </span>
              </div>

              {/* Short supporting label */}
              <p className="mt-2.5 text-xs sm:text-sm font-medium text-slate-600 leading-snug max-w-[200px]">
                {metric.label}
              </p>

              {/* Subtle hairline bottom indicator */}
              <div className="w-8 h-0.5 bg-slate-200 mt-4 group-hover:w-12 group-hover:bg-[#013FD0] transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
