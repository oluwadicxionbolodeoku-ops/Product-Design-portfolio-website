import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, X, ChevronRight, CheckCircle2, Layers, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';

interface SelectedWorkProps {
  onOpenContactModal: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenContactModal }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Healthcare / Mobile App',
    'Travel / Mobile App',
    'Digital Wellbeing / Mobile App',
    'Health / Mobile App',
    'Government / Web',
    'Mobility / Mobile App'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 sm:mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#013FD0] mb-3">
              <span>Curated Portfolio</span>
              <span className="text-orange-500">✦</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A1128]">
              Selected <span className="text-[#013FD0]">Work</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A collection of digital products and experiences I've designed across healthcare, mobility, aviation, wellbeing, government services, commerce and emerging technology.
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#013FD0] hover:bg-[#0034B3] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-[#013FD0]/25 transition-all cursor-pointer group shrink-0"
            >
              <span>Commission a Project</span>
              <ArrowUpRight className="w-4 h-4 text-orange-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === category
                  ? 'bg-[#013FD0] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Asymmetrical High-End Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            // Asymmetrical grid column spans (e.g. 7 + 5, 5 + 7, 6 + 6)
            let colSpanClass = 'lg:col-span-6';
            if (index % 4 === 0) colSpanClass = 'lg:col-span-7';
            else if (index % 4 === 1) colSpanClass = 'lg:col-span-5';
            else if (index % 4 === 2) colSpanClass = 'lg:col-span-5';
            else if (index % 4 === 3) colSpanClass = 'lg:col-span-7';

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`${colSpanClass} group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer`}
              >
                {/* Large Device/Browser Mockup */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-white uppercase tracking-wider border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Circular Hover Arrow Button */}
                  <div className="absolute bottom-4 right-4 z-10 w-11 h-11 rounded-full bg-white/95 text-[#0A1128] group-hover:bg-[#013FD0] group-hover:text-white flex items-center justify-center shadow-lg transition-all transform group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5 text-current group-hover:text-orange-300 transition-colors" />
                  </div>
                </div>

                {/* Case Study Metadata & Storytelling */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1128] group-hover:text-[#013FD0] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact & Tags */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/70 text-[11px] font-semibold text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Case Study CTA link */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#013FD0] group-hover:text-[#0034B3]">
                        <span>View Case Study</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>

                      <span className="text-[11px] font-medium text-slate-400">
                        {project.client}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Full Lightbox / Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-150">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              {/* Header */}
              <div>
                <span className="text-xs font-bold text-[#013FD0] uppercase tracking-widest block mb-1">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Large Mockup Showcase */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-16/10 bg-slate-950 shadow-md">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Project Metadata Table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Role</span>
                  <span className="font-bold text-slate-900">{selectedProject.role}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Client</span>
                  <span className="font-bold text-slate-900">{selectedProject.client}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-400 block font-medium">Measurable Impact</span>
                  <span className="font-bold text-emerald-700">{selectedProject.impact}</span>
                </div>
              </div>

              {/* Case Study Architectural Narrative */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  The Design Problem & Solution
                </h4>
                <p>
                  To address friction in user onboarding and core task completion, the interface was reimagined around clear progressive disclosure, accessible contrast ratios, and tactile micro-interactions.
                </p>
                <p>
                  A unified component design system was established from day one, allowing the engineering team to deploy features 2.8x faster while maintaining 100% WCAG AA visual compliance.
                </p>
              </div>

              {/* Tags & Action CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-semibold text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenContactModal();
                  }}
                  className="px-6 py-3 bg-[#013FD0] hover:bg-[#0034B3] text-white rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowUpRight className="w-4 h-4 text-orange-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
