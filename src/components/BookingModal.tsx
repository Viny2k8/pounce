import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Sparkles, Send } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  serviceName,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedService: serviceName || 'Canvas Masterclass: Impasto & Layered Florals',
    timeframe: 'Next 30 Days',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (serviceName) {
      setFormData((prev) => ({ ...prev, selectedService: serviceName }));
    }
  }, [serviceName]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#38040E]/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#4A0E17]/20 p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleResetAndClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-[#FF3366] hover:text-white text-[#38040E] rounded-full shadow-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#D0E1FD] text-[#38040E] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#FF3366]" />
            </div>
            <h3 className="text-2xl font-extrabold font-display text-[#38040E]">
              Reservation Confirmed
            </h3>
            <p className="text-sm text-[#4A0E17]/80 max-w-sm mx-auto leading-relaxed">
              We have reserved your inquiry slot for <span className="font-semibold text-[#FF3366]">{formData.selectedService}</span>. A studio coordinator will follow up directly at <span className="font-mono text-xs text-[#38040E]">{formData.email}</span> with preparation notes and scheduling options.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-7 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#38040E] hover:bg-[#FF3366] rounded-full transition-all"
              >
                Return to Studio
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#FF3366]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STUDIO BOOKING & INQUIRY</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#38040E] font-display">
                Reserve Your Session
              </h3>
              <p className="text-xs text-[#4A0E17]/75">
                Complete your details below and our studio director will confirm availability.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#38040E] mb-1">
                  Service / Piece of Interest *
                </label>
                <input
                  type="text"
                  required
                  value={formData.selectedService}
                  onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#4A0E17]/15 text-[#38040E] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#38040E] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rosalind Mercer"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#4A0E17]/15 text-[#38040E] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#38040E] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rosalind@gallery.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#4A0E17]/15 text-[#38040E] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#38040E] mb-1">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 234-5678"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#4A0E17]/15 text-[#38040E] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#38040E] mb-1">
                  Desired Timeline / Date Preference
                </label>
                <select
                  value={formData.timeframe}
                  onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#4A0E17]/15 text-[#38040E] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366]"
                >
                  <option value="Next 30 Days">Immediate (Next 30 Days)</option>
                  <option value="Upcoming November Masterclass">Upcoming November Masterclass</option>
                  <option value="Q1 2027 Commission Slot">Q1 2027 Commission Slot</option>
                  <option value="Flexible / General Inquiry">Flexible / General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#38040E] mb-1">
                  Specific Requirements or Questions
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention framing, preferred palette notes, or experience level..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#4A0E17]/15 text-[#38040E] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366] resize-none"
                />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#FF3366] hover:bg-[#E60050] rounded-full shadow-md transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Reserving Slot...</span>
                ) : (
                  <>
                    <span>Confirm Session Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
