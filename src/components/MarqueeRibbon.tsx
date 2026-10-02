import React from 'react';

export const MarqueeRibbon: React.FC = () => {
  const items = [
    'UX Design',
    'App Design',
    'Dashboard',
    'Wireframe',
    'User Research',
    'Design Systems',
    'Micro-Interactions',
    'Interactive Prototypes',
    'Product Strategy'
  ];

  return (
    <div className="w-full bg-blue-600 text-white py-4 overflow-hidden shadow-inner transform -rotate-0.5 my-8">
      <div className="flex items-center whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-6 mx-3">
            <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider">
              {item}
            </span>
            <span className="text-blue-200 text-xs font-bold" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
