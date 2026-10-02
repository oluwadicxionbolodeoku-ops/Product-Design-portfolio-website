import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden rounded-3xl mx-2 sm:mx-6 my-10">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading referencing image */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 mb-2 uppercase tracking-widest">
            Client Endorsements ✦
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Testimonials That <br />
            Speak to <span className="text-blue-500">My Results</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Collaborating with venture-backed startups and engineering teams who prioritize design excellence.
          </p>
        </div>

        {/* Testimonials Grid matching the image cards with large quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="relative bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 shadow-md group"
            >
              {/* Giant watermark quote mark in corner */}
              <div className="absolute top-5 right-5 text-slate-800 group-hover:text-slate-700 transition-colors pointer-events-none">
                <Quote className="w-10 h-10 fill-current opacity-40" />
              </div>

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-300 ml-1.5 tabular-nums">
                    {t.rating}.0
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* Author attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
