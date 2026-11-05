import React from 'react';
import { ARTIST_PORTRAIT } from '../data/studioData';
import { Layers, Sparkles, Compass, Feather } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F5EFEB] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-1/4 -right-24 w-80 h-80 rounded-full bg-[#D0E1FD]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 rounded-full bg-[#FF3366]/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Artistic Portrait with Geometric Blocks */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Soft Light Blue Backdrop Block */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#D0E1FD] rounded-2xl -z-10 transform -rotate-2" />

              {/* Offset Maroon Border Block */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#38040E] rounded-2xl -z-20 transform rotate-2" />

              {/* Portrait Frame */}
              <div className="relative bg-white p-3 rounded-xl shadow-xl overflow-hidden group">
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-[#38040E]/5">
                  <img
                    src={ARTIST_PORTRAIT}
                    alt="Viviane Vance in her Soho Art Studio"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Portrait Caption */}
                <div className="p-3 bg-white text-center">
                  <div className="font-display font-bold text-base text-[#38040E]">
                    Viviane Vance
                  </div>
                  <div className="text-xs text-[#FF3366] font-semibold mt-0.5">
                    Painter, Colorist & Studio Founder
                  </div>
                  <div className="text-[11px] text-[#4A0E17]/60 mt-0.5">
                    Soho, New York City
                  </div>
                </div>
              </div>

              {/* Floating Artistic Quote Seal */}
              <div className="absolute -bottom-6 -right-6 bg-[#FF3366] text-white p-4 rounded-xl shadow-lg border border-white/20 hidden sm:block max-w-[200px]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#FAF8F5]/80">
                  Core Creed
                </div>
                <div className="text-xs font-semibold mt-1 leading-snug">
                  "Color is not an ornament; it is physical energy."
                </div>
              </div>
            </div>
          </div>

          {/* Right: Compelling Artist Statement & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF3366] uppercase">
              <span className="w-5 h-[2px] bg-[#FF3366]" />
              <span>ARTIST STATEMENT & PHILOSOPHY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#38040E] font-display tracking-tight text-balance leading-tight">
              The Alchemy of Chromatic Tension
            </h2>

            {/* Pull Quote */}
            <div className="p-6 bg-white rounded-2xl border-l-4 border-[#FF3366] shadow-xs">
              <p className="text-base sm:text-lg font-display italic text-[#38040E] leading-relaxed">
                “I treat color as an emotional catalyst. The poppy isn’t merely botanical; it is fragile yet fiercely resilient, explosive in carmine and softened by whispers of powder blue.”
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#4A0E17]/85 leading-relaxed">
              <p>
                My work originates from an obsession with contrast. Deep, velvety maroons and dark oxblood grounds provide the structural silence against which hot pinks, fiery vermilions, and airy powder blues erupt.
              </p>
              <p>
                Working predominantly with large stainless palette knives and custom oil-wax formulations, I sculpt three-dimensional impasto textures directly onto heavy Belgian linen. Up close, the surface is an architectural topography of paint; from across the room, the composition resolves into an evocative explosion of living floral energy.
              </p>
            </div>

            {/* 3 Pillars / Studio Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white/70 rounded-xl border border-[#4A0E17]/10">
                <div className="w-8 h-8 rounded-lg bg-[#38040E] text-white flex items-center justify-center mb-2">
                  <Feather className="w-4 h-4 text-[#FF3366]" />
                </div>
                <h4 className="font-display font-bold text-sm text-[#38040E]">
                  Raw Mineral Oils
                </h4>
                <p className="text-xs text-[#4A0E17]/70 mt-1">
                  Pure French pigments hand-ground with cold-pressed walnut oil for generational light-fastness.
                </p>
              </div>

              <div className="p-4 bg-white/70 rounded-xl border border-[#4A0E17]/10">
                <div className="w-8 h-8 rounded-lg bg-[#D0E1FD] text-[#38040E] flex items-center justify-center mb-2">
                  <Layers className="w-4 h-4 text-[#38040E]" />
                </div>
                <h4 className="font-display font-bold text-sm text-[#38040E]">
                  Sculptural Impasto
                </h4>
                <p className="text-xs text-[#4A0E17]/70 mt-1">
                  Layered palette knife ridges that capture dynamic shadows as ambient natural light shifts.
                </p>
              </div>

              <div className="p-4 bg-white/70 rounded-xl border border-[#4A0E17]/10">
                <div className="w-8 h-8 rounded-lg bg-[#FF3366] text-white flex items-center justify-center mb-2">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-sm text-[#38040E]">
                  Architectural Scale
                </h4>
                <p className="text-xs text-[#4A0E17]/70 mt-1">
                  Canvases engineered to define modern interior spaces, private residences, and institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
