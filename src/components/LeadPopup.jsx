import { useEffect, useState } from 'react';
import { X, MessageCircle, Send, Phone, User, Mail } from 'lucide-react';

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLauncher, setShowLauncher] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // 👉 WhatsApp number (country code, no + or spaces)
  const WHATSAPP_NUMBER = '919028480694';

  useEffect(() => {
    const dismissed = sessionStorage.getItem('leadPopupDismissed');

    // If user already closed it earlier in this session,
    // show left WhatsApp icon immediately (no auto popup again)
    if (dismissed) {
      setShowLauncher(true);
      return;
    }

    // First visit: open popup after 3s
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setShowLauncher(true); // show left WhatsApp icon after close
    sessionStorage.setItem('leadPopupDismissed', 'true');
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Hi Wealth Point !!\n\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email || 'N/A'}\n` +
        `Message: ${formData.message || 'I want to know more about your services.'}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    closePopup();
  };

  return (
    <>
      {/* LEFT SIDE WHATSAPP LAUNCHER */}
      {showLauncher && !isOpen && (
        <button
          onClick={openPopup}
          aria-label="Open enquiry form"
          className="fixed left-4 bottom-6 sm:left-5 sm:bottom-8 z-9998 group"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 "></span>

          {/* Main button */}
          <span className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-2xl shadow-green-600/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <MessageCircle size={28} className="sm:w-7 sm:h-7" fill="currentColor" />
          </span>

          {/* Tooltip */}
          <span className="pointer-events-none absolute left-16 sm:left-20 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-blue-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Chat / Enquiry
          </span>
        </button>
      )}

      {/* POPUP MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-blue-950/70 backdrop-blur-sm"
            onClick={closePopup}
          />

          {/* Modal */}
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-[fadeInUp_0.4s_ease-out]">
            {/* Header */}
            <div className="relative bg-linear-to-br from-blue-900 via-blue-800 to-indigo-700 px-6 pt-6 pb-8 text-white">
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
                <MessageCircle size={24} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold leading-tight mb-1">
                Let’s Plan Your Wealth
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Get a free consultation — fill in your details and we’ll get back to you.
              </p>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              <form onSubmit={handleEnquirySubmit} className="space-y-3.5">
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <Phone
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email (optional)"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you? (optional)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                />

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-900 to-indigo-700 hover:from-blue-800 hover:to-indigo-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-900/25"
                >
                  <Send size={16} />
                  Send Enquiry
                </button>
              </form>

              <p className="text-center text-[11px] text-gray-400 mt-4">
                AMFI & IRDAI Registered · Free consultation · No spam
              </p>
            </div>
          </div>

          <style>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(16px) scale(0.98); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default LeadPopup;