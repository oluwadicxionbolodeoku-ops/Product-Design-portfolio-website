import React, { useRef } from 'react';
import { ArrowUpRight, Star, Quote, Camera, Check } from 'lucide-react';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

interface HeroProps {
  onOpenContactModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal }) => {
  const { photoUrl, updatePhoto } = useProfilePhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const workElement = document.getElementById('work');
    if (workElement) {
      const headerOffset = 80;
      const elementPosition = workElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updatePhoto(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      updatePhoto(file);
    }
  };

  return (
    <section id="home" className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 overflow-hidden bg-white">
      {/* Background subtle ambient glows in #013FD0 and warm amber */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-[#013FD0]/5 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top "Hello!" greeting pill referencing the reference layout */}
        <div className="flex justify-center mb-3">
          <div className="relative inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-xs">
            <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-wide">
              Hello! 👋
            </span>
            <span
              className="absolute -top-2 -right-2 text-orange-500 text-xs font-bold transform rotate-12"
              aria-hidden="true"
            >
              ✦
            </span>
          </div>
        </div>

        {/* Big Bold Headline referencing the reference typography */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A1128] leading-[1.08]">
            I'm <span className="text-[#013FD0]">Dicxion</span>,
            <br />
            Product Designer
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            I'm Dicxion Bolodeoku, a Product Designer and UI/UX Design Lead focused on creating intuitive digital experiences for startups, businesses and organizations.
          </p>
        </div>

        {/* Hero Visual Composition referencing the reference layout with Dicxion Profile picture */}
        <div className="mt-10 sm:mt-14 max-w-5xl mx-auto relative flex flex-col items-center">
          {/* Left Floating Quote Card */}
          <div className="hidden lg:flex absolute left-4 top-20 flex-col max-w-[240px] bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 shadow-[0_10px_30px_-5px_rgba(10,17,40,0.08)] text-left z-20 animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="text-[#013FD0] mb-2">
              <Quote className="w-5 h-5 fill-[#013FD0]/15" />
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">
              "Dicxion's exceptional product design ensured our digital platform's 3x growth. Highly Recommended."
            </p>
            <span className="text-[11px] font-semibold text-slate-900 mt-2">
              — Tech Hub Ecosystem Lead
            </span>
          </div>

          {/* Right Floating Experience Card */}
          <div className="hidden lg:flex absolute right-4 top-20 flex-col items-start bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 shadow-[0_10px_30px_-5px_rgba(10,17,40,0.08)] text-left z-20 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex items-center gap-1 text-amber-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-2xl font-extrabold text-[#0A1128] tabular-nums">
              5+ Years
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Product & UI/UX Experience
            </span>
          </div>

          {/* Center Portrait Container with Arch/Circle Backdrop */}
          <div className="relative w-72 sm:w-88 md:w-96 flex flex-col items-center group">
            {/* Hidden file input for uploading the original HD Dicxion Profile picture.jpg */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
              aria-label="Upload original HD photo"
            />

            {/* Rounded Arch Backdrop */}
            <div className="absolute inset-0 rounded-t-full bg-gradient-to-b from-amber-200/70 via-amber-100/40 to-white -z-10 translate-y-6 transform scale-105" />

            {/* Circular Profile Picture Frame */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-amber-400 cursor-pointer transition-transform hover:scale-[1.01]"
              title="Click to select your original HD 'Dicxion Profile picture.jpg' without any AI compression"
            >
              <img
                src={photoUrl}
                alt="Dicxion Bolodeoku - Product Designer"
                className="w-full h-full object-cover object-center"
                style={{ imageRendering: 'auto' }}
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = '/src/assets/images/dicxion_profile_picture.jpg';
                }}
              />

              {/* Hover Overlay for direct HD photo select */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center backdrop-blur-xs">
                <Camera className="w-6 h-6 mb-1 text-white" />
                <span className="text-xs font-bold">Select Original HD Photo</span>
                <span className="text-[10px] text-amber-200 mt-0.5">Click or drop "Dicxion Profile picture.jpg"</span>
              </div>
            </div>

            {/* Small HD verification badge */}
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-slate-200/80 shadow-xs text-[11px] font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Original HD Portrait</span>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-[#013FD0] hover:underline text-[10px] font-bold ml-1 cursor-pointer"
              >
                (Upload original)
              </button>
            </div>

            {/* Overlapping Hero Action Capsule referencing the reference pill buttons */}
            <div className="relative mt-2 z-20 flex items-center gap-2 p-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-slate-200">
              <a
                href="#work"
                onClick={handleScrollToWork}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#013FD0] hover:bg-[#0034B3] text-white font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4 text-orange-300" />
              </a>

              <button
                type="button"
                onClick={onOpenContactModal}
                className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>

        {/* Mobile metrics strip for small screens */}
        <div className="mt-8 flex lg:hidden items-center justify-center gap-6 text-center pt-4 border-t border-slate-100">
          <div>
            <div className="text-xl font-bold text-slate-900 tabular-nums">5+ Years</div>
            <div className="text-[11px] text-slate-500">Experience</div>
          </div>
          <div className="w-px h-8 bg-slate-200" />
          <div>
            <div className="text-xl font-bold text-[#013FD0] tabular-nums">100+</div>
            <div className="text-[11px] text-slate-500">Learners</div>
          </div>
          <div className="w-px h-8 bg-slate-200" />
          <div>
            <div className="text-xl font-bold text-orange-600 tabular-nums">Mobile & Web</div>
            <div className="text-[11px] text-slate-500">Shipped UX</div>
          </div>
        </div>
      </div>
    </section>
  );
};
