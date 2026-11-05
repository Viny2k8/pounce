import React, { useState, useMemo } from 'react';
import { Artwork, ArtworkCategory } from '../types';
import { ARTWORKS } from '../data/studioData';
import { Eye, ArrowUpRight, Check, Copy, X, Sparkles } from 'lucide-react';

interface GallerySectionProps {
  onOpenBooking: (artworkTitle?: string) => void;
  selectedArtworkId?: string | null;
  onCloseSelectedArtwork?: () => void;
  onSelectArtwork: (artworkId: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenBooking,
  selectedArtworkId,
  onCloseSelectedArtwork,
  onSelectArtwork,
}) => {
  const [activeCategory, setActiveCategory] = useState<ArtworkCategory>('All');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const categories: ArtworkCategory[] = ['All', 'Abstract', 'Portraits', 'Pastels', 'Bold Pop'];

  const filteredArtworks = useMemo(() => {
    if (activeCategory === 'All') return ARTWORKS;
    return ARTWORKS.filter((art) => art.category === activeCategory);
  }, [activeCategory]);

  const activeModalArtwork = useMemo(() => {
    if (!selectedArtworkId) return null;
    return ARTWORKS.find((a) => a.id === selectedArtworkId) || null;
  }, [selectedArtworkId]);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="gallery" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF3366] uppercase">
              <span className="w-5 h-[2px] bg-[#FF3366]" />
              <span>THE COLLECTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#38040E] font-display tracking-tight text-balance">
              Featured Paintings & Studies
            </h2>
            <p className="text-sm sm:text-base text-[#4A0E17]/75 max-w-xl">
              Original oils and mixed media on archival linen, exploring botanical forms through sculpted impasto and high-chroma contrasts.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#FAF8F5] border border-[#4A0E17]/15 rounded-full overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#38040E] text-white shadow-xs'
                      : 'text-[#4A0E17] hover:text-[#FF3366] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Artwork Grid (Bento/Masonry feel) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((art, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={art.id}
                className={`group relative bg-white rounded-2xl overflow-hidden border border-[#4A0E17]/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                  isFeatured ? 'lg:col-span-2 md:col-span-2' : ''
                }`}
              >
                {/* Image Container with Zoom effect */}
                <div
                  className={`relative overflow-hidden bg-[#38040E]/5 cursor-pointer ${
                    isFeatured ? 'aspect-[16/10]' : 'aspect-[4/3]'
                  }`}
                  onClick={() => onSelectArtwork(art.id)}
                >
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Top Status & Category Tags (quiet unboxed metadata) */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="bg-[#38040E]/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                      {art.category}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs ${
                        art.status === 'Available'
                          ? 'bg-[#D0E1FD]/90 text-[#38040E]'
                          : art.status === 'Reserved'
                          ? 'bg-[#FF3366]/90 text-white'
                          : 'bg-[#FAF8F5]/90 text-[#4A0E17]'
                      }`}
                    >
                      {art.status}
                    </span>
                  </div>

                  {/* Hover Overlay with "View Piece" link */}
                  <div className="absolute inset-0 bg-[#38040E]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectArtwork(art.id);
                      }}
                      className="px-5 py-2.5 bg-white text-[#38040E] font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 inline-flex items-center gap-2 hover:bg-[#FF3366] hover:text-white"
                    >
                      <span>View Piece</span>
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3
                        onClick={() => onSelectArtwork(art.id)}
                        className="text-lg sm:text-xl font-bold text-[#38040E] font-display hover:text-[#FF3366] transition-colors cursor-pointer"
                      >
                        {art.title}
                      </h3>
                      {art.price && (
                        <span className="text-sm font-semibold text-[#4A0E17] font-mono tabular-nums">
                          {art.price}
                        </span>
                      )}
                    </div>

                    <div className="mt-1 flex items-center gap-2 text-xs text-[#4A0E17]/70">
                      <span>{art.medium}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{art.dimensions}</span>
                    </div>

                    <p className="mt-2 text-xs text-[#4A0E17]/80 line-clamp-2">
                      {art.curatorNote}
                    </p>
                  </div>

                  {/* Palette mini swatch row */}
                  <div className="pt-3 border-t border-[#4A0E17]/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {art.palette.map((swatch, idx) => (
                        <span
                          key={idx}
                          className="w-4 h-4 rounded-full border border-black/10 shadow-xs"
                          style={{ backgroundColor: swatch.hex }}
                          title={`${swatch.name} (${swatch.hex})`}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(`Acquisition Inquiry: ${art.title}`)}
                      className="text-xs font-bold text-[#FF3366] hover:text-[#38040E] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Artwork Detail Modal */}
      {activeModalArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#38040E]/80 backdrop-blur-md transition-opacity">
          <div
            className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-2xl shadow-2xl overflow-hidden border border-[#4A0E17]/20 max-h-[90vh] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onCloseSelectedArtwork}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-[#FF3366] hover:text-white text-[#38040E] rounded-full shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Column */}
            <div className="md:w-1/2 bg-[#38040E]/5 relative flex items-center justify-center p-4">
              <img
                src={activeModalArtwork.image}
                alt={activeModalArtwork.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[50vh] md:max-h-[80vh] object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Modal Content Column */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FF3366] uppercase tracking-wider">
                  <span>{activeModalArtwork.category} Collection</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeModalArtwork.year}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#38040E] font-display">
                  {activeModalArtwork.title}
                </h3>

                <div className="text-sm text-[#4A0E17]/80 space-y-1">
                  <div>
                    <span className="font-semibold text-[#38040E]">Medium:</span> {activeModalArtwork.medium}
                  </div>
                  <div>
                    <span className="font-semibold text-[#38040E]">Dimensions:</span> {activeModalArtwork.dimensions}
                  </div>
                  <div>
                    <span className="font-semibold text-[#38040E]">Status:</span>{' '}
                    <span className="font-bold text-[#FF3366]">{activeModalArtwork.status}</span>
                    {activeModalArtwork.price && (
                      <span className="text-[#38040E] font-mono ml-2 font-bold tabular-nums">
                        ({activeModalArtwork.price})
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#4A0E17]/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#38040E] mb-2">
                    Curatorial Statement
                  </h4>
                  <p className="text-sm text-[#4A0E17]/85 leading-relaxed">
                    {activeModalArtwork.curatorNote}
                  </p>
                </div>

                {/* Color Swatches Breakdown */}
                <div className="pt-3 border-t border-[#4A0E17]/10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#38040E]">
                      Featured Pigments
                    </h4>
                    <span className="text-[11px] text-[#4A0E17]/60">Click swatch to copy HEX</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {activeModalArtwork.palette.map((swatch, idx) => {
                      const isCopied = copiedHex === swatch.hex;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleCopyHex(swatch.hex)}
                          className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-[#4A0E17]/10 hover:border-[#FF3366] text-left transition-all group"
                        >
                          <span
                            className="w-5 h-5 rounded-md border border-black/10 shrink-0 shadow-xs"
                            style={{ backgroundColor: swatch.hex }}
                          />
                          <div className="min-w-0 flex-1">
                            <span className="block text-xs font-semibold text-[#38040E] truncate">
                              {swatch.name}
                            </span>
                            <span className="block text-[10px] font-mono text-[#4A0E17]/60">
                              {isCopied ? 'Copied!' : swatch.hex}
                            </span>
                          </div>
                          {isCopied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          ) : (
                            <Copy className="w-3 h-3 text-[#4A0E17]/30 group-hover:text-[#FF3366] shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#4A0E17]/10 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onCloseSelectedArtwork && onCloseSelectedArtwork();
                    onOpenBooking(`Artwork Acquisition: ${activeModalArtwork.title}`);
                  }}
                  className="flex-1 py-3 px-6 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#FF3366] hover:bg-[#E60050] rounded-full shadow-sm hover:shadow-md transition-all"
                >
                  Inquire About This Piece
                </button>
                <button
                  type="button"
                  onClick={onCloseSelectedArtwork}
                  className="py-3 px-6 text-center text-xs font-bold uppercase tracking-wider text-[#38040E] bg-white border border-[#38040E]/20 hover:bg-[#FAF8F5] rounded-full transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
