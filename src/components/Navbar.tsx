import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Color Lab', href: '#color-lab' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#4A0E17]/10 py-3 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#home"
              className="group flex items-center gap-2 text-xl sm:text-2xl font-extrabold tracking-tight text-[#38040E] font-display whitespace-nowrap shrink-0"
            >
              <span>STUDIO POUNCE</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF3366] inline-block transition-transform duration-300 group-hover:scale-125" />
            </a>

            {/* Zone 2: Clean single-line text navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A0E17]/80">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#FF3366] transition-colors duration-200 whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF3366] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenBooking('Studio Inquiry')}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF3366] hover:bg-[#E60050] rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 active:scale-95"
              >
                <span>Book a Session</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile hamburger trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                className="md:hidden p-2 text-[#38040E] hover:text-[#FF3366] transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3366]"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#38040E]/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#FAF8F5] border-l border-[#4A0E17]/20 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#4A0E17]/10">
              <span className="font-display font-extrabold text-lg text-[#38040E]">
                STUDIO POUNCE
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
                className="p-2 text-[#4A0E17] hover:text-[#FF3366] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#38040E] hover:text-[#FF3366] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#4A0E17]/10 space-y-4">
            <div className="p-3 rounded-xl bg-[#D0E1FD]/40 text-xs text-[#38040E]">
              <span className="font-semibold block mb-0.5">Soho Studio, NYC</span>
              <span>Open for collector previews by appointment.</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('Studio Inquiry');
              }}
              className="w-full py-3 px-4 text-center text-sm font-bold uppercase tracking-wider text-white bg-[#FF3366] hover:bg-[#E60050] rounded-full shadow-sm transition-all"
            >
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
