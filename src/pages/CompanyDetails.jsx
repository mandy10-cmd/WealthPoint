import React, { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Globe,
  Download,
  Send,
  CheckCircle,
  ChevronRight,
  FileText,
} from "lucide-react";
import jsPDF from "jspdf";

const CompanyDetails = () => {
  const company = {
    name: "Wealth Point",
    tagline: "Financial Consultant",
    phone: "+919028480694",
    whatsapp: "919028480694",
    email: "wealthpoint.finance@gmail.com",
    website: "https://wealth-point.vercel.app/",
    address:
      "Block No.- 5, Nagar Akhada Complex, Near Jain Kalar Samaj Bhavan, Reshimbagh Chowk, Nagpur, Maharashtra 440013",
    founderName: "Mr. Kunal Peshne",
    founderDesignation: "Founder & Financial Consultant",
    founderPhoto: "/founder photo.jpeg",
  };

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxiywTIrNiJ1O4bNOC25_LkZ_pGuUovuSFwbLvqOaRCClW0_F-Fb-ssOurg6nOCQHYWGg/exec";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.requirement.trim()) {
      setStatus("validation-error");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          message: form.requirement.trim(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", requirement: "" });
      } else {
        console.error("Google Sheets Error:", result.error);
        setStatus("error");
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const saveContact = () => {
    const vCard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${company.name}`,
      `ORG:${company.name}`,
      `TITLE:${company.tagline}`,
      `TEL;TYPE=CELL:${company.phone}`,
      `EMAIL:${company.email}`,
      `URL:${company.website}`,
      `ADR;TYPE=WORK:;;${company.address};;;;`,
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Wealth-Point.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Also download the company brief PDF
    downloadCompanyBrief();
  };

  // ===============================================================
  // GENERATE COMPANY BRIEF PDF
  // ===============================================================
  const downloadCompanyBrief = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    let yPos = 0;

    // ============ HEADER BANNER ============
    doc.setFillColor(23, 37, 84);
    doc.rect(0, 0, pageWidth, 50, "F");

    doc.setFillColor(255, 255, 255);
    doc.setGState(new doc.GState({ opacity: 0.05 }));
    doc.circle(pageWidth - 10, 10, 25, "F");
    doc.setGState(new doc.GState({ opacity: 1 }));

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.text(company.name, pageWidth / 2, 22, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(191, 219, 254);
    doc.text(company.tagline.toUpperCase(), pageWidth / 2, 30, {
      align: "center",
    });

    doc.setFontSize(9);
    doc.text(
      "Trusted Financial Guidance for a Secure Future",
      pageWidth / 2,
      38,
      { align: "center" }
    );

    yPos = 60;

    // ============ ABOUT US ============
    doc.setTextColor(30, 64, 175);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("ABOUT US", margin, yPos);

    yPos += 5;
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(16);
    doc.text("Your Financial Future, Planned Better.", margin, yPos);

    yPos += 8;
    doc.setDrawColor(30, 64, 175);
    doc.setLineWidth(0.5);
    doc.line(margin, yPos, margin + 40, yPos);

    yPos += 8;
    doc.setTextColor(51, 65, 85);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const aboutText =
      "At Wealth Point, we believe financial planning is not simply about numbers. It is about understanding your goals, managing risks, and creating a strategy that supports your future. Our approach focuses on providing practical and personalized financial guidance for individuals, families, and businesses.";
    const aboutLines = doc.splitTextToSize(aboutText, pageWidth - margin * 2);
    doc.text(aboutLines, margin, yPos);
    yPos += aboutLines.length * 5 + 8;

    // ============ SERVICES ============
    doc.setTextColor(30, 64, 175);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("WHAT WE DO", margin, yPos);

    yPos += 5;
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(16);
    doc.text("Financial Consulting Services", margin, yPos);

    yPos += 8;
    doc.setDrawColor(30, 64, 175);
    doc.line(margin, yPos, margin + 40, yPos);
    yPos += 8;

    const servicesList = [
      {
        title: "Investment Planning",
        desc: "Strategic investment guidance designed around your financial goals.",
      },
      {
        title: "Wealth Management",
        desc: "Build, protect and manage your wealth with a structured approach.",
      },
      {
        title: "Financial Planning",
        desc: "Create a clear financial roadmap for your personal and business needs.",
      },
      {
        title: "Risk Management",
        desc: "Identify financial risks and plan effectively for a secure future.",
      },
    ];

    servicesList.forEach((service) => {
      doc.setFillColor(239, 246, 255);
      doc.roundedRect(margin, yPos, pageWidth - margin * 2, 18, 2, 2, "F");

      doc.setFillColor(30, 64, 175);
      doc.circle(margin + 5, yPos + 9, 1.5, "F");

      doc.setTextColor(15, 23, 42);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(service.title, margin + 10, yPos + 7);

      doc.setTextColor(71, 85, 105);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.text(service.desc, margin + 10, yPos + 13);

      yPos += 22;
    });

    yPos += 5;

    // ============ FOUNDER ============
    if (yPos > pageHeight - 80) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFillColor(15, 23, 42);
    doc.roundedRect(margin, yPos, pageWidth - margin * 2, 40, 3, 3, "F");

    doc.setTextColor(147, 197, 253);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("FOUNDER", margin + 8, yPos + 10);

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.text(company.founderName, margin + 8, yPos + 18);

    doc.setTextColor(191, 219, 254);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(company.founderDesignation, margin + 8, yPos + 25);

    doc.setTextColor(203, 213, 225);
    doc.setFontSize(9);
    const founderDesc =
      "Dedicated to helping clients understand their financial options and make informed decisions with clarity and confidence.";
    const founderLines = doc.splitTextToSize(
      founderDesc,
      pageWidth - margin * 2 - 16
    );
    doc.text(founderLines, margin + 8, yPos + 32);

    yPos += 48;

    // ============ CONTACT INFORMATION ============
    if (yPos > pageHeight - 80) {
      doc.addPage();
      yPos = 20;
    }

    doc.setTextColor(30, 64, 175);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("GET IN TOUCH", margin, yPos);

    yPos += 5;
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(16);
    doc.text("Contact Information", margin, yPos);

    yPos += 8;
    doc.setDrawColor(30, 64, 175);
    doc.line(margin, yPos, margin + 40, yPos);
    yPos += 8;

    const contactItems = [
      { label: "Phone", value: company.phone },
      { label: "WhatsApp", value: `wa.me/${company.whatsapp}` },
      { label: "Email", value: company.email },
      { label: "Website", value: company.website },
      { label: "Address", value: company.address },
    ];

    contactItems.forEach((item) => {
      doc.setFillColor(248, 250, 252);
      const itemHeight = item.label === "Address" ? 18 : 12;
      doc.roundedRect(
        margin,
        yPos,
        pageWidth - margin * 2,
        itemHeight,
        2,
        2,
        "F"
      );

      doc.setTextColor(100, 116, 139);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.text(item.label.toUpperCase(), margin + 5, yPos + 5);

      doc.setTextColor(15, 23, 42);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);

      if (item.label === "Address") {
        const addressLines = doc.splitTextToSize(
          item.value,
          pageWidth - margin * 2 - 10
        );
        doc.text(addressLines, margin + 5, yPos + 10);
      } else {
        doc.text(item.value, margin + 5, yPos + 10);
      }

      yPos += itemHeight + 3;
    });

    // ============ FOOTER ============
    const footerY = pageHeight - 15;
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(margin, footerY - 5, pageWidth - margin, footerY - 5);

    doc.setTextColor(100, 116, 139);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(
      `© ${new Date().getFullYear()} ${company.name}. All rights reserved.`,
      pageWidth / 2,
      footerY,
      { align: "center" }
    );

    doc.save("Wealth-Point-Company-Brief.pdf");
  };

  const services = [
    {
      image: "/icons/investment-planning.jfif",
      title: "Investment Planning",
      description:
        "Strategic investment guidance designed around your financial goals.",
    },
    {
      image: "/icons/wealth-management.jfif",
      title: "Wealth Management",
      description:
        "Build, protect and manage your wealth with a structured approach.",
    },
    {
      image: "/icons/financial-planning.jfif",
      title: "Financial Planning",
      description:
        "Create a clear financial roadmap for your personal and business needs.",
    },
    {
      image: "/icons/risk-management.png",
      title: "Risk Management",
      description:
        "Identify financial risks and plan effectively for a secure future.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-3xl">
        <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-2xl">

          {/* =====================================================
              HEADER SECTION
          ===================================================== */}
          <div className="relative overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-indigo-700 px-6 py-10 text-white sm:px-10 sm:py-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5" />

            <div className="relative z-10 text-center">
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-3xl bg-white p-3 shadow-2xl ring-4 ring-white/10">
                <img
                  src="/peshne logo.png"
                  alt="Wealth Point Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
                Trusted Financial Guidance
              </p>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {company.name}
              </h1>

              <p className="mt-2 text-lg font-medium text-blue-100">
                {company.tagline}
              </p>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Helping individuals, families and businesses make informed
                financial decisions, manage wealth effectively and work towards
                a financially secure future.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>

                <a
                  href={`tel:${company.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <Phone size={18} />
                  Call Us
                </a>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-8">

            {/* =====================================================
                ABOUT US
            ===================================================== */}
            <section className="mb-10">
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                  About Us
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Your Financial Future,
                  <span className="text-blue-800"> Planned Better.</span>
                </h2>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-linear-to-br from-blue-50 to-indigo-50 p-5 sm:p-7">
                <p className="text-sm leading-7 text-slate-700 sm:text-base">
                  At <strong>Wealth Point</strong>, we believe financial
                  planning is not simply about numbers. It is about
                  understanding your goals, managing risks and creating a
                  strategy that supports your future.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                  Our approach focuses on providing practical and personalized
                  financial guidance for individuals, families and businesses.
                </p>
              </div>
            </section>

            {/* =====================================================
                SERVICES
            ===================================================== */}
            <section className="mb-10">
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                  What We Do
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Financial Consulting Services
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Professional guidance to help you make confident financial
                  decisions.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 p-2 transition group-hover:bg-blue-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <h3 className="text-base font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* =====================================================
                FOUNDER
            ===================================================== */}
            <section className="mb-10">
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                  Leadership
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Meet Our Founder
                </h2>
              </div>

              <div className="overflow-hidden rounded-2xl bg-linear-to-br from-slate-900 to-blue-950 p-6 text-white sm:p-8">
                <div className="flex flex-col items-center gap-6 sm:flex-row">
                  <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-white/20 bg-slate-700 shadow-xl sm:h-40 sm:w-40">
                    <img
                      src={company.founderPhoto}
                      alt={company.founderName}
                      className="h-full w-full object-cover"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="text-center sm:text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                      Founder
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                      {company.founderName}
                    </h3>

                    <p className="mt-1 font-medium text-blue-200">
                      {company.founderDesignation}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      Dedicated to helping clients understand their financial
                      options and make informed decisions with clarity and
                      confidence.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =====================================================
                COMPANY INFORMATION
            ===================================================== */}
            <section className="mb-10">
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                  Get In Touch
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Company Information
                </h2>
              </div>

              <div className="space-y-3">
                {/* Phone */}
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    <Phone size={21} className="text-blue-800" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-slate-500">Phone</p>
                    <p className="mt-1 text-base font-bold text-slate-900">
                      {company.phone}
                    </p>
                  </div>

                  <ChevronRight size={18} className="text-slate-400" />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-green-200 hover:bg-green-50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100">
                    <MessageCircle size={21} className="text-green-700" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-slate-500">
                      WhatsApp
                    </p>
                    <p className="mt-1 text-base font-bold text-slate-900">
                      Chat with Wealth Point
                    </p>
                  </div>

                  <ChevronRight size={18} className="text-slate-400" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-red-200 hover:bg-red-50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100">
                    <Mail size={21} className="text-red-600" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-slate-500">Email</p>
                    <p className="mt-1 break-all text-base font-bold text-slate-900">
                      {company.email}
                    </p>
                  </div>

                  <ChevronRight size={18} className="text-slate-400" />
                </a>

                {/* Website */}
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-indigo-200 hover:bg-indigo-50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100">
                    <Globe size={21} className="text-indigo-700" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-slate-500">
                      Website
                    </p>
                    <p className="mt-1 truncate text-base font-bold text-slate-900">
                      wealth-point.vercel.app
                    </p>
                  </div>

                  <ChevronRight size={18} className="text-slate-400" />
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100">
                    <MapPin size={21} className="text-orange-600" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-500">
                      Office Address
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">
                      {company.address}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =====================================================
                ACTION BUTTONS (3 buttons)
            ===================================================== */}
            <section className="mb-10 grid gap-3 sm:grid-cols-3">
              <button
                type="button"
                onClick={saveContact}
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-950 py-4 font-semibold text-white shadow-md transition hover:bg-blue-900"
              >
                <Download size={18} />
                Save Contact
              </button>

              <button
                type="button"
                onClick={downloadCompanyBrief}
                className="flex items-center justify-center gap-2 rounded-xl bg-indigo-700 py-4 font-semibold text-white shadow-md transition hover:bg-indigo-800"
              >
                <FileText size={18} />
                Download Brief
              </button>

              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-4 font-semibold text-slate-800 transition hover:border-blue-900 hover:bg-blue-50"
              >
                <Globe size={18} />
                Visit Website
              </a>
            </section>

            {/* =====================================================
                ENQUIRY FORM
            ===================================================== */}
            <section className="rounded-3xl bg-slate-50 p-5 sm:p-7">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                  Let's Connect
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Discuss Your Financial Goals
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Tell us what you are looking for and our team will get in
                  touch with you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    autoComplete="tel"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    How Can We Help? *
                  </label>
                  <textarea
                    name="requirement"
                    value={form.requirement}
                    onChange={handleChange}
                    placeholder="Tell us about your financial requirement..."
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-950 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send size={18} />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>

              {status === "success" && (
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                  <CheckCircle size={20} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold">
                      Enquiry Submitted Successfully
                    </p>
                    <p className="mt-1">
                      Thank you for contacting Wealth Point. We will get in
                      touch with you shortly.
                    </p>
                  </div>
                </div>
              )}

              {status === "validation-error" && (
                <div className="mt-5 rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-700">
                  Please fill in your name, phone number and requirement before
                  submitting.
                </div>
              )}

              {status === "error" && (
                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                  Unable to submit your enquiry right now. Please try again or
                  contact us directly.
                </div>
              )}
            </section>
          </div>

          {/* =====================================================
              FOOTER
          ===================================================== */}
          <div className="border-t border-slate-100 bg-slate-50 px-6 py-6 text-center">
            <p className="text-sm font-bold text-slate-700">{company.name}</p>
            <p className="mt-1 text-xs text-slate-500">{company.tagline}</p>
            <p className="mt-4 text-xs text-slate-400">
              © {new Date().getFullYear()} Wealth Point. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;