import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/studioData';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-[#4A0E17]/10">
      {/* Soft color blush */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FF3366]/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF3366] uppercase">
            <span className="w-5 h-[2px] bg-[#FF3366]" />
            <span>COLLECTOR & PRESS WORDS</span>
            <span className="w-5 h-[2px] bg-[#FF3366]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#38040E] font-display tracking-tight mt-2 text-balance">
            Praise from Collectors & Curators
          </h2>
        </div>

        {/* Testimonial Box */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl border border-[#4A0E17]/10">
          {/* Large Stylized Hot Pink Quotation Mark */}
          <div className="text-6xl sm:text-7xl font-serif text-[#FF3366] font-bold leading-none select-none -mt-4 mb-2">
            “
          </div>

          <p className="text-lg sm:text-2xl md:text-2xl text-[#38040E] font-display leading-relaxed italic text-balance min-h-[120px] flex items-center">
            {activeTestimonial.quote}
          </p>

          <div className="mt-8 pt-6 border-t border-[#4A0E17]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-display font-bold text-base sm:text-lg text-[#38040E]">
                {activeTestimonial.author}
              </div>
              <div className="text-xs sm:text-sm text-[#4A0E17]/75">
                {activeTestimonial.title}
                <span aria-hidden="true" className="mx-1.5">·</span>
                <span className="text-[#FF3366] font-semibold">{activeTestimonial.location}</span>
              </div>
              {activeTestimonial.artworkReferenced && (
                <div className="text-xs text-[#4A0E17]/60 mt-0.5">
                  Reference: <span className="italic">{activeTestimonial.artworkReferenced}</span>
                </div>
              )}
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="p-3 rounded-full bg-[#FAF8F5] hover:bg-[#38040E] hover:text-white text-[#38040E] border border-[#4A0E17]/15 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5 px-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === currentIndex ? 'w-6 bg-[#FF3366]' : 'w-2 bg-[#4A0E17]/20 hover:bg-[#4A0E17]/50'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="p-3 rounded-full bg-[#FAF8F5] hover:bg-[#38040E] hover:text-white text-[#38040E] border border-[#4A0E17]/15 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
