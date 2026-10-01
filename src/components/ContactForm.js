"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Database } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactForm({ initialService = "", initialSubject = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: initialSubject || "",
    service: initialService || "",
    learningLevel: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);
  const [isRlsError, setIsRlsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    "In-Person Tutoring (Lagos)",
    "Virtual Tutoring (Worldwide)",
    "English Grammar, Diction & Eloquence",
    "SSCE / GCE / NECO Examination Prep",
    "UTME / JAMB / Post-UTME Preparation",
    "Institutional / School Consultation",
    "Corporate Language Training",
    "Study Materials & Digital Publications",
    "General Enquiry / Other",
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone or WhatsApp contact number is required.";
    } else {
      const digits = formData.phone.replace(/\D/g, "");
      if (!digits) {
        newErrors.phone = "Please enter a valid phone number with digits.";
      }
    }

    if (!formData.service) {
      newErrors.service = "Please select a programme or reason for enquiry.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please provide details regarding your learning goals or enquiry.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters to help us understand your needs.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) {
      setServerError(null);
      setIsRlsError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError(null);
    setIsRlsError(false);

    try {
      console.log(formData)
      const result = await submitContactForm(formData);

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setServerError(result.error);
        if (result.isRlsError) {
          setIsRlsError(true);
        }
      }
    } catch (err) {
      console.error("Submission error:", err);
      setServerError(
        err.message || "Unable to send enquiry. Please check your network connection."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      service: "",
      learningLevel: "",
      message: "",
    });
    setErrors({});
    setServerError(null);
    setIsRlsError(false);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white border border-emerald-200 rounded-xl p-8 sm:p-10 shadow-sm text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center mb-5 border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-navy-950 mb-2">
          Thank You, {formData.fullName.split(" ")[0]}!
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-6">
          Your enquiry has been successfully saved to our database. Our advisory team will review your message and respond to <span className="font-semibold text-navy-950">{formData.email}</span> within 24 hours.
        </p>
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-500 max-w-md mx-auto mb-6 text-left">
          <p className="font-semibold text-slate-700 mb-1">Enquiry Summary:</p>
          <p>&bull; Programme: {formData.service}</p>
          <p>&bull; Contact Phone: {formData.phone}</p>
          <p>&bull; Status: Saved to Supabase</p>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-md text-sm font-semibold text-navy-950 bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-6"
      noValidate
    >
      <div>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 mb-1">
          Send an Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          Complete the form below to connect with English Lab Consultancy.
        </p>
      </div>

      {/* Server Error Alert Banner */}
      {serverError && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-sm text-red-800 space-y-2">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-red-900">Submission Notice</p>
              <p className="text-xs sm:text-sm text-red-700 leading-relaxed mt-0.5">
                {serverError}
              </p>
            </div>
          </div>

          {/* Special guidance for RLS configuration */}
          {isRlsError && (
            <div className="mt-2 pt-2 border-t border-red-200 text-xs text-red-900 space-y-1.5 bg-white/60 p-2.5 rounded">
              <p className="font-semibold flex items-center gap-1.5">
                <Database className="w-4 h-4 text-accent-800" />
                <span>How to fix this in Supabase:</span>
              </p>
              <p className="text-slate-600">
                Go to your <strong>Supabase Dashboard &rarr; SQL Editor</strong> and run:
              </p>
              <pre className="bg-slate-900 text-slate-100 p-2 rounded text-[11px] overflow-x-auto font-mono">
                {`create policy "Allow public to insert contact forms"
  on public.contact_form
  for insert
  to anon, authenticated
  with check (true);`}
              </pre>
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
            Full Name <span className="text-accent-700">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Adebayo Ogunlesi"
            className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-800 ${
              errors.fullName ? "border-red-500 bg-red-50/20" : "border-slate-300"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
            Email Address <span className="text-accent-700">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. adebayo@example.com"
            className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-800 ${
              errors.email ? "border-red-500 bg-red-50/20" : "border-slate-300"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone / WhatsApp */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
            Phone / WhatsApp Number <span className="text-accent-700">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +234 814 645 0315"
            className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-800 ${
              errors.phone ? "border-red-500 bg-red-50/20" : "border-slate-300"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Programme / Service (mapped to reason in Supabase) */}
        <div>
          <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
            Programme / Reason <span className="text-accent-700">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-accent-800 bg-white ${
              errors.service ? "border-red-500 bg-red-50/20" : "border-slate-300"
            }`}
          >
            <option value="">Select a programme or reason...</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.service}</span>
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
          Your Goals or Message <span className="text-accent-700">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your current challenges, upcoming examination dates, or specific communication goals..."
          className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-800 ${
            errors.message ? "border-red-500 bg-red-50/20" : "border-slate-300"
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md text-sm font-semibold text-white bg-accent-800 hover:bg-accent-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-800 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting to Database...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
