import React from 'react';
import { ArrowDown, Palette, Sparkles, Eye } from 'lucide-react';
import { HERO_IMAGE, STUDIO_STATS } from '../data/studioData';

interface HeroProps {
  onOpenBooking: (service?: string) => void;
  onSelectArtwork: (artworkId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onSelectArtwork }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background soft geometric color accent */}
      <div className="absolute top-12 -right-32 w-96 h-96 rounded-full bg-[#D0E1FD]/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-[#FF3366]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Block */}
          <div className="lg:col-span-7 space-y-6">
            {/* Editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#4A0E17] uppercase">
              <span className="w-6 h-[2px] bg-[#FF3366]" />
              <span>Contemporary Painting & Fine Art Studio</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#FF3366]">New York</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#38040E] font-display leading-[1.12] text-balance">
              Where Bold Colors Meet <span className="text-[#FF3366] italic font-semibold tracking-normal inline-block">Raw Expression</span>
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-[#4A0E17]/85 max-w-xl leading-relaxed">
              Sculptural palette-knife oils, electric pink botanicals, and velvety wine shadows. 
              Studio Pounce explores chromatic tension and the fearless poetry of modern floral expressionism.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#gallery"
                className="px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#FF3366] hover:bg-[#E60050] rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>Explore The Collection</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#38040E] bg-transparent border-2 border-[#38040E] hover:bg-[#38040E] hover:text-white rounded-full transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>Artist Statement</span>
              </a>
            </div>

            {/* Color Swatch Bar preview */}
            <div className="pt-6 border-t border-[#4A0E17]/10 flex flex-wrap items-center gap-4 text-xs text-[#4A0E17]/70">
              <span className="font-semibold text-[#38040E]">The Poppy Palette:</span>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#4A0E17] border border-white shadow-xs" title="Deep Maroon (#4A0E17)" />
                <span className="w-5 h-5 rounded-full bg-[#FF3366] border border-white shadow-xs" title="Hot Pink (#FF3366)" />
                <span className="w-5 h-5 rounded-full bg-[#D0E1FD] border border-[#38040E]/20 shadow-xs" title="Powder Blue (#D0E1FD)" />
                <span className="w-5 h-5 rounded-full bg-[#FAF8F5] border border-[#38040E]/20 shadow-xs" title="Clean Cream (#FAF8F5)" />
              </div>
              <span className="hidden sm:inline-block text-[#4A0E17]/50">|</span>
              <span className="text-xs">Original Oils on Heavy Archival Linen</span>
            </div>
          </div>

          {/* Right Visual Element: Artistic Collage with Geometric Color Blocks */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft Light Blue Backdrop Block */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#D0E1FD] rounded-2xl -z-10 transform -rotate-1 transition-transform duration-300 hover:rotate-0" />

              {/* Offset Deep Maroon Framing Accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#4A0E17] rounded-2xl -z-20 transform rotate-1" />

              {/* Primary Painting Canvas Frame */}
              <div className="relative bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-[#4A0E17]/10 overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#38040E]/5">
                  <img
                    src={HERO_IMAGE}
                    alt="Crimson Awakening No. 1 — Bold Poppy Oil Painting by Viviane Vance"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* High impact overlay badge */}
                  <div className="absolute bottom-3 left-3 bg-[#38040E]/90 text-white backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF3366]" />
                    <span>Crimson Awakening No. 1</span>
                    <span className="text-[#D0E1FD] font-mono text-[11px]">48×36″</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectArtwork('crimson-awakening')}
                    className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-[#FF3366] hover:text-white text-[#38040E] rounded-full shadow-md transition-all duration-200"
                    aria-label="View piece details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Sub-card details strip */}
                <div className="mt-3 flex items-center justify-between text-xs text-[#4A0E17]/80 px-1">
                  <div className="flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-[#FF3366]" />
                    <span className="font-semibold text-[#38040E]">Palette-Knife Impasto</span>
                  </div>
                  <span className="text-[#38040E]/60">Available for Acquisition</span>
                </div>
              </div>

              {/* Overlapping Floating Artwork Seal */}
              <div className="absolute -bottom-6 -left-6 bg-[#38040E] text-white p-3 sm:p-4 rounded-xl shadow-lg border border-[#FF3366]/40 hidden sm:block">
                <div className="text-[10px] uppercase tracking-wider text-[#D0E1FD] font-semibold">
                  Atelier Verified
                </div>
                <div className="text-sm font-bold font-display text-white mt-0.5">
                  100% Belgian Linen
                </div>
                <div className="text-[11px] text-[#FF3366] font-medium">
                  Hand-ground mineral oils
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Ticker / Stats Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#4A0E17]/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {STUDIO_STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#38040E] font-display tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#4A0E17]/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
