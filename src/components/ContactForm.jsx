import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { GOOGLE_SHEETS_URL, EMAILJS_CONFIG } from "../config/config";

// Change this to 'wealthpoint.finance@gmail.com' when ready for production
const RECIPIENT_EMAIL = "wanjarimandar@gmail.com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    const templateParams = {
      // FIX: Matches EmailJS dashboard 'To Email' field set to {{email}} or {{to_email}}
      email: RECIPIENT_EMAIL,
      to_email: RECIPIENT_EMAIL,
      to_name: "Wealth Point",

      // User details (who filled the form)
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      reply_to: formData.email, // Allows direct reply to client in Gmail

      // Extra aliases in case template uses {{name}} or {{phone}}
      name: formData.name,
      phone: formData.phone,
      service: formData.service || "General Inquiry",
      message: formData.message,
      submitted_at: new Date().toLocaleString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    return await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY,
    );
  };

  const sendToGoogleSheets = async () => {
    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          recipient: RECIPIENT_EMAIL,
          submittedAt: new Date().toISOString(),
        }),
      });
      return { success: true };
    } catch (error) {
      console.error("Google Sheets Error:", error);
      return { success: false, error };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // 1. Send Email via EmailJS
      const emailResult = await sendEmail();
      console.log("EmailJS Success:", emailResult);

      // 2. Save to Google Sheets
      sendToGoogleSheets();

      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error("EmailJS Failed:", error);
      const errorText = error?.text || error?.message || "Check console";
      setStatus({
        type: "error",
        message: `Failed to send email (${errorText}). Please try again or contact us directly.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-linear-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-900/10 text-blue-900 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your financial journey? Fill out the form below and
            our expert will get in touch with you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-linear-to-br from-blue-900 to-indigo-600 p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Call Us</p>
                    <a
                      href="tel:+919028480694"
                      className="font-semibold hover:underline"
                    >
                      +91-9028480694
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Email Us</p>
                    <a
                      href="mailto:wealthpoint.finance@gmail.com"
                      className="font-semibold hover:underline break-all"
                    >
                      wealthpoint.finance@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Visit Us</p>
                    <p className="font-semibold">
                      Block No.- 5, Nagar Akhada Complex, Near Jain Kalar Samaj
                      Bhavan, Reshimbagh Chowk, Nagpur, Maharashtra 440013
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/80 text-sm mb-2">Business Hours</p>
                <p className="font-semibold">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="font-semibold">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100">
              {status.message && (
                <div
                  className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
                    status.type === "success"
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle
                      className="text-green-600 shrink-0 mt-0.5"
                      size={22}
                    />
                  ) : (
                    <AlertCircle
                      className="text-red-600 shrink-0 mt-0.5"
                      size={22}
                    />
                  )}
                  <p
                    className={`text-sm font-medium ${
                      status.type === "success"
                        ? "text-green-800"
                        : "text-red-800"
                    }`}
                  >
                    {status.message}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Rohit Sharma"
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="xyz@gmail.com"
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 12345 67890"
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="Mutual Funds">Mutual Funds</option>
                      <option value="Fixed Deposits">Fixed Deposits</option>
                      <option value="P2P Lending">P2P Lending</option>
                      <option value="PMS">PMS</option>
                      <option value="NCDs/Bonds">NCDs/Bonds</option>
                      <option value="NPS">NPS</option>
                      <option value="Gift City">Gift City</option>
                      <option value="Insurance">Insurance</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-4 top-4 text-gray-400"
                      size={18}
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell us about your financial goals or any specific queries you have..."
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-linear-to-r from-blue-900 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
