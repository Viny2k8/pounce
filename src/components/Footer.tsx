import React, { useState } from 'react';
import { ArrowUp, CheckCircle, Send, Instagram, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#230308] text-white pt-20 pb-12 border-t border-[#4A0E17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Banner / Color Club */}
        <div className="bg-[#38040E] rounded-3xl p-8 sm:p-12 border border-[#4A0E17] mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#FF3366]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF3366]">
                EXCLUSIVE STUDIO ACCESS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                Join the Color Club
              </h3>
              <p className="text-sm text-[#FAF8F5]/75 max-w-md">
                Receive private collector catalog previews 48 hours before public release, pigment chemistry essays, and priority masterclass dates.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#4A0E17] border border-[#FF3366]/40 text-sm text-[#D0E1FD]">
                  <CheckCircle className="w-5 h-5 text-[#FF3366] shrink-0" />
                  <span>Welcome to the Color Club. You will receive our seasonal monograph preview shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your collector email"
                    className="flex-1 px-5 py-3.5 rounded-full bg-[#230308] border border-[#4A0E17] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366] placeholder:text-[#FAF8F5]/40"
                  />
                  <button
                    type="submit"
                    className="px-7 py-3.5 bg-[#FF3366] hover:bg-[#E60050] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all shrink-0 inline-flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#4A0E17]/60">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xl font-extrabold font-display tracking-tight text-white">
              <span>STUDIO POUNCE</span>
              <span className="w-2 h-2 rounded-full bg-[#FF3366]" />
            </div>
            <p className="text-xs text-[#FAF8F5]/70 max-w-sm leading-relaxed">
              Contemporary painting studio in Soho, New York. Specializing in high-chroma floral expressionism, architectural scale canvases, and palette knife impasto masterclasses.
            </p>
            <div className="text-xs text-[#D0E1FD] pt-1">
              484 Broome St, Soho, New York City
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF3366] block">
              Atelier Navigation
            </span>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/70">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home & Statement</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">The Collection</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Artist Statement</a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-white transition-colors">Masterclasses & Commissions</a>
              </li>
              <li>
                <a href="#color-lab" className="hover:text-white transition-colors">Poppy Color Lab</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Inquiries & Studio Visits</a>
              </li>
            </ul>
          </div>

          {/* Social & Presence */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF3366] block">
              Representations & Social
            </span>
            <p className="text-xs text-[#FAF8F5]/70 leading-relaxed">
              Represented in New York, Paris, and Zurich. Follow daily studio processes and raw linen preparations.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#gallery"
                className="px-3 py-1.5 rounded-lg bg-[#38040E] border border-[#4A0E17] text-xs text-[#D0E1FD] hover:text-white hover:border-[#FF3366] transition-colors flex items-center gap-1.5"
              >
                <span>Instagram @studiopounce</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="#gallery"
                className="px-3 py-1.5 rounded-lg bg-[#38040E] border border-[#4A0E17] text-xs text-[#D0E1FD] hover:text-white hover:border-[#FF3366] transition-colors flex items-center gap-1.5"
              >
                <span>Artsy Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/60">
          <div>
            © {new Date().getFullYear()} Studio Pounce. All rights reserved. Original artworks protected under copyright.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-xs text-[#FAF8F5]/80 hover:text-[#FF3366] transition-colors"
          >
            <span>Return to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
