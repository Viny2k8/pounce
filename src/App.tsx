/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { ColorStudioInteractive } from './components/ColorStudioInteractive';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedArtworkId, setSelectedArtworkId] = useState<string | null>(null);

  const handleOpenBooking = (service?: string) => {
    setSelectedService(service || 'General Studio Inquiry');
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const handleSelectArtwork = (artworkId: string) => {
    setSelectedArtworkId(artworkId);
  };

  const handleCloseSelectedArtwork = () => {
    setSelectedArtworkId(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#240A10] font-sans selection:bg-[#FF3366] selection:text-white relative">
      {/* Top Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onSelectArtwork={handleSelectArtwork}
        />

        {/* 2. Featured Artwork / Gallery Grid */}
        <GallerySection
          onOpenBooking={handleOpenBooking}
          selectedArtworkId={selectedArtworkId}
          onCloseSelectedArtwork={handleCloseSelectedArtwork}
          onSelectArtwork={handleSelectArtwork}
        />

        {/* 3. About / Artist Statement */}
        <AboutSection />

        {/* 4. Workshops & Studio Services */}
        <WorkshopsSection onOpenBooking={handleOpenBooking} />

        {/* 5. Interactive Poppy Color Lab & Virtual Canvas */}
        <ColorStudioInteractive />

        {/* 6. Testimonials / Press Quotes */}
        <TestimonialsSection />

        {/* 7. Contact & Studio Visit */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Booking & Acquisition Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        serviceName={selectedService}
      />
    </div>
  );
}
