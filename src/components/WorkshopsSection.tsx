import React from 'react';
import { WORKSHOPS } from '../data/studioData';
import { Check, Calendar, Users, Clock, ArrowRight } from 'lucide-react';

interface WorkshopsSectionProps {
  onOpenBooking: (serviceName: string) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="workshops" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF3366] uppercase">
            <span className="w-5 h-[2px] bg-[#FF3366]" />
            <span>WORKSHOPS & STUDIO SERVICES</span>
            <span className="w-5 h-[2px] bg-[#FF3366]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#38040E] font-display tracking-tight text-balance">
            Learn the Craft or Commission Bespoke Work
          </h2>
          <p className="text-sm sm:text-base text-[#4A0E17]/75">
            Step into the studio for hands-on pigment mastery, commission an architectural scale statement canvas, or consult on color direction.
          </p>
        </div>

        {/* 3-Column Alternating Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WORKSHOPS.map((item) => {
            if (item.theme === 'maroon') {
              // Card 1: Deep Maroon card with white text
              return (
                <div
                  key={item.id}
                  className="relative bg-[#38040E] text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl border border-[#4A0E17] transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 bg-[#FF3366] text-white rounded-full">
                        Intensive Workshop
                      </span>
                      <span className="text-xs text-[#D0E1FD] font-medium flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {item.capacity}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold font-display leading-tight text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#FAF8F5]/80 mt-2 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-2 pt-2 border-t border-white/10">
                      <span className="text-3xl font-extrabold font-display text-white tabular-nums">
                        {item.price}
                      </span>
                      <span className="text-xs text-[#D0E1FD] font-medium">all materials included</span>
                    </div>

                    <div className="space-y-2 text-xs text-[#FAF8F5]/90">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#FF3366] shrink-0" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#FF3366] shrink-0" />
                        <span>{item.nextDate}</span>
                      </div>
                    </div>

                    {/* Syllabus points */}
                    <div className="space-y-2 pt-4 border-t border-white/10">
                      <span className="text-[11px] uppercase tracking-wider text-[#D0E1FD] font-semibold block">
                        Included in Session:
                      </span>
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#FAF8F5]/90">
                          <Check className="w-3.5 h-3.5 text-[#FF3366] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => onOpenBooking(`Workshop: ${item.title}`)}
                      className="w-full py-3.5 px-6 text-center text-xs font-bold uppercase tracking-wider text-[#38040E] bg-[#FF3366] hover:bg-white text-white hover:text-[#38040E] rounded-full shadow-md transition-all duration-200 inline-flex items-center justify-center gap-2 group"
                    >
                      <span>Reserve Workshop Spot</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            }

            if (item.theme === 'blue') {
              // Card 2: Light Blue card with dark wine text
              return (
                <div
                  key={item.id}
                  className="relative bg-[#D0E1FD] text-[#38040E] rounded-3xl p-8 flex flex-col justify-between shadow-xl border border-[#38040E]/15 transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 bg-[#38040E] text-white rounded-full">
                        Custom Commissions
                      </span>
                      <span className="text-xs text-[#4A0E17] font-semibold flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {item.capacity}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold font-display leading-tight text-[#38040E]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#4A0E17]/85 mt-2 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-2 pt-2 border-t border-[#38040E]/15">
                      <span className="text-3xl font-extrabold font-display text-[#38040E] tabular-nums">
                        {item.price}
                      </span>
                      <span className="text-xs text-[#4A0E17]/80 font-medium">tailored dimensions</span>
                    </div>

                    <div className="space-y-2 text-xs text-[#4A0E17]/90">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#FF3366] shrink-0" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#FF3366] shrink-0" />
                        <span>{item.nextDate}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 pt-4 border-t border-[#38040E]/15">
                      <span className="text-[11px] uppercase tracking-wider text-[#38040E] font-bold block">
                        Commission Process:
                      </span>
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#4A0E17]/90">
                          <Check className="w-3.5 h-3.5 text-[#38040E] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-[#38040E]/15">
                    <button
                      type="button"
                      onClick={() => onOpenBooking(`Commission: ${item.title}`)}
                      className="w-full py-3.5 px-6 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#38040E] hover:bg-[#FF3366] rounded-full shadow-md transition-all duration-200 inline-flex items-center justify-center gap-2 group"
                    >
                      <span>Inquire for Commission</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            }

            // Card 3: Cream card with pink highlights and wine borders
            return (
              <div
                key={item.id}
                className="relative bg-white text-[#38040E] rounded-3xl p-8 flex flex-col justify-between shadow-xl border-2 border-[#4A0E17]/15 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 bg-[#FAF8F5] border border-[#4A0E17]/20 text-[#38040E] rounded-full">
                      Curation & Advisory
                    </span>
                    <span className="text-xs text-[#FF3366] font-semibold flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {item.capacity}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold font-display leading-tight text-[#38040E]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4A0E17]/85 mt-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2 pt-2 border-t border-[#4A0E17]/10">
                    <span className="text-3xl font-extrabold font-display text-[#38040E] tabular-nums">
                      {item.price}
                    </span>
                    <span className="text-xs text-[#4A0E17]/70 font-medium">virtual or in-studio</span>
                  </div>

                  <div className="space-y-2 text-xs text-[#4A0E17]/90">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#FF3366] shrink-0" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#FF3366] shrink-0" />
                      <span>{item.nextDate}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-4 border-t border-[#4A0E17]/10">
                    <span className="text-[11px] uppercase tracking-wider text-[#38040E] font-bold block">
                      Consultation Deliverables:
                    </span>
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#4A0E17]/90">
                        <Check className="w-3.5 h-3.5 text-[#FF3366] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-[#4A0E17]/10">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(`Consultation: ${item.title}`)}
                    className="w-full py-3.5 px-6 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#FF3366] hover:bg-[#38040E] rounded-full shadow-md transition-all duration-200 inline-flex items-center justify-center gap-2 group"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
