import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2, Phone } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: initialService || 'Original Acquisition',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: 'Original Acquisition',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Info & Location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF3366] uppercase">
                <span className="w-5 h-[2px] bg-[#FF3366]" />
                <span>STUDIO VISIT & INQUIRIES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#38040E] font-display tracking-tight text-balance">
                Get in Touch with the Studio
              </h2>
              <p className="text-sm sm:text-base text-[#4A0E17]/75">
                Whether you wish to acquire an available canvas, commission custom dimensions, or reserve an upcoming masterclass seat, our studio team is here to assist.
              </p>
            </div>

            {/* Studio Details Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#4A0E17]/10 shadow-xs">
                <div className="p-2.5 rounded-xl bg-[#38040E] text-white shrink-0">
                  <MapPin className="w-5 h-5 text-[#FF3366]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#38040E]">
                    Soho Atelier
                  </div>
                  <div className="text-sm text-[#4A0E17]/80 mt-0.5">
                    484 Broome Street, 3rd Floor<br />
                    New York, NY 10013
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#4A0E17]/10 shadow-xs">
                <div className="p-2.5 rounded-xl bg-[#D0E1FD] text-[#38040E] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#38040E]">
                    Visiting Hours
                  </div>
                  <div className="text-sm text-[#4A0E17]/80 mt-0.5">
                    Tuesday – Saturday: 11:00 AM – 6:00 PM<br />
                    <span className="text-xs text-[#FF3366] font-medium">Private viewings strictly by appointment</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#4A0E17]/10 shadow-xs">
                <div className="p-2.5 rounded-xl bg-[#FAF8F5] text-[#38040E] border border-[#4A0E17]/15 shrink-0">
                  <Mail className="w-5 h-5 text-[#38040E]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#38040E]">
                    Direct Correspondence
                  </div>
                  <div className="text-sm text-[#4A0E17]/80 mt-0.5 font-mono">
                    atelier@studiopounce.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#4A0E17]/10 relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#D0E1FD] text-[#38040E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#FF3366]" />
                  </div>
                  <h3 className="text-2xl font-extrabold font-display text-[#38040E]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#4A0E17]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#38040E]">{formData.name}</span>. Viviane and the studio manager have received your inquiry regarding <span className="font-semibold text-[#FF3366]">{formData.interest}</span>. We will respond within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#38040E] bg-[#FAF8F5] border border-[#38040E]/20 hover:bg-[#38040E] hover:text-white rounded-full transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#38040E] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Althea Sterling"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#4A0E17]/15 text-[#38040E] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#38040E] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@collector.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#4A0E17]/15 text-[#38040E] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#38040E] mb-1.5">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#4A0E17]/15 text-[#38040E] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#38040E] mb-1.5">
                        Primary Interest *
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#4A0E17]/15 text-[#38040E] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366] focus:bg-white transition-all"
                      >
                        <option value="Original Acquisition">Acquiring an Original Canvas</option>
                        <option value="Private Architectural Commission">Private Architectural Commission</option>
                        <option value="Canvas Masterclass Spot">Canvas Masterclass Reservation</option>
                        <option value="Color Direction Consultation">Color Direction & Spatial Curation</option>
                        <option value="Gallery Exhibition / Press">Gallery Exhibition / Press Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#38040E] mb-1.5">
                      Message or Project Brief *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the canvas you have in mind, room dimensions, or any specific questions..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#4A0E17]/15 text-[#38040E] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#FF3366] hover:bg-[#E60050] rounded-full shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Inquiry...</span>
                      ) : (
                        <>
                          <span>Transmit Studio Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
