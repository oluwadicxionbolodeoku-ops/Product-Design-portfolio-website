import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Calendar, Clock, X } from 'lucide-react';
import { ARTICLES_DATA, Article } from '../data/portfolioData';

export const Insights: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="insights" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching the image */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Design Systems & Product Craft
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-1">
              From my <span className="text-blue-600">Insights</span>
            </h2>
          </div>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <span>Subscribe for Updates</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3 Articles Grid matching the image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Thumbnail with overlay arrow button */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-slate-900/90 text-white group-hover:bg-blue-600 flex items-center justify-center shadow-md transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Card Meta & Title */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
                    <span className="font-semibold text-blue-600">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-medium text-slate-700">{article.author}</span>
                    <span>·</span>
                    <span className="tabular-nums">{article.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {article.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">
                  {article.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95">
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                {selectedArticle.category} · {selectedArticle.readTime}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {selectedArticle.title}
              </h3>

              <div className="text-xs text-slate-500 flex items-center gap-2 pb-2 border-b border-slate-100">
                <span>By {selectedArticle.author}</span>
                <span>·</span>
                <span>Published on {selectedArticle.date}</span>
              </div>

              <div className="rounded-xl overflow-hidden aspect-16/9 bg-slate-100 border border-slate-200">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 pt-2">
                <p>
                  High-converting digital product design is never an accident. In this breakdown, we examine how subtle architectural choices—such as visual hierarchy, micro-interactions, and reducing decision paralysis—directly impact user engagement and retention.
                </p>
                <p>
                  When building for enterprise software or high-velocity fintech applications, clarity outranks ornamentation every time. Every pixel and interaction token must serve an explicit affordance.
                </p>
                <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-blue-600 text-xs text-slate-800 italic">
                  "Good design is not what you see; it is what you understand immediately without having to pause."
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Share this article</span>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close Reader
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
