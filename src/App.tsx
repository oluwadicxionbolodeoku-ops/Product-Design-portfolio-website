/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredibilityStats } from './components/CredibilityStats';
import { WhatIDo } from './components/WhatIDo';
import { Experience } from './components/Experience';
import { AboutImpact } from './components/AboutImpact';
import { SelectedWork } from './components/SelectedWork';
import { Testimonials } from './components/Testimonials';
import { MarqueeRibbon } from './components/MarqueeRibbon';
import { Insights } from './components/Insights';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WorkTogetherModal } from './components/WorkTogetherModal';
import { ProfilePhotoProvider } from './context/ProfilePhotoContext';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenContactModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectService = (_serviceTitle: string) => {
    setIsModalOpen(true);
  };

  return (
    <ProfilePhotoProvider>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#013FD0] selection:text-white">
        {/* 
          Sticky Navigation Bar
          - Name: DICXION BOLODEOKU
          - Items: Home, About, What I Do, Work, Experience, Insights, Contact
          - CTA: "Let's Work Together"
          - White background, dark text, subtle borders, #013FD0 blue accent
          - Slight glassmorphism effect on scroll
        */}
        <Navbar onOpenContactModal={handleOpenContactModal} />

        {/* Main Content Area */}
        <main className="flex-1">
          {/* 1. Hero Section - Centered layout with Dicxion Profile picture.jpg */}
          <Hero onOpenContactModal={handleOpenContactModal} />

          {/* 2. Compact Credibility Statistics Section */}
          <CredibilityStats />

          {/* 3. What I Do Section (4 Premium Service Cards) */}
          <WhatIDo onSelectService={handleSelectService} />

          {/* 4. About & Impact Section */}
          <AboutImpact onOpenContactModal={handleOpenContactModal} />

          {/* 5. Selected Work Showcase (6 Featured Projects) */}
          <SelectedWork onOpenContactModal={handleOpenContactModal} />

          {/* 6. My Experience Section (Vertical Editorial Timeline) */}
          <Experience />

          {/* 7. Client Testimonials */}
          <Testimonials />

          {/* 8. Capability Ribbon */}
          <MarqueeRibbon />

          {/* 9. Insights & Articles */}
          <Insights />

          {/* 10. Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onOpenContactModal={handleOpenContactModal} />

        {/* Interactive 'Let's Work Together' Modal */}
        <WorkTogetherModal
          isOpen={isModalOpen}
          onClose={handleCloseContactModal}
        />
      </div>
    </ProfilePhotoProvider>
  );
}
