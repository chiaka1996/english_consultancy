import { Suspense } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
  Calendar,
  Globe,
  Share2,
} from "lucide-react";

import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | English Lab Consultancy",
  description:
    "Get in touch with English Lab Consultancy to arrange an English diagnostic assessment, discuss tutoring schedules, or enquire about corporate consultancy.",
};

export default function ContactPage({ searchParams }) {
  const service = searchParams?.service || "";
  const subject = searchParams?.subject || "";

  return (
    <div className="space-y-0">
      {/* 1. CONTACT HERO */}
      <section className="bg-sand-50 border-b border-sand-200/80 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-800 bg-white border border-sand-200 px-3 py-1 rounded-full">
            Admissions &amp; Advisory
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 tracking-tight leading-tight">
            Let&apos;s Talk
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Have questions about our tutoring schedules, national examination preparation, or institutional consultancy?
            Our educational advisory team is here to guide you toward the right programme.
          </p>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN CONTACT LAYOUT */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent-800 bg-accent-50 border border-accent-100 px-3 py-1 rounded-full">
                  Direct Inquiries
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 mt-3 mb-3">
                  Reach Our Academic Desk
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We welcome enquiries from parents, secondary school candidates, adult professionals, and school administrators. Connect with us via telephone, WhatsApp, or email.
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-6 pt-2">
                {/* Telephone */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-md bg-navy-950 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent-300" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                      Phone &amp; WhatsApp
                    </h3>
                    <a
                      href="tel:+2348146450315"
                      className="text-base font-semibold text-navy-950 hover:text-accent-800 transition-colors block"
                    >
                      +234 814 645 0315
                    </a>
                    <span className="text-xs text-slate-500">
                      Direct voice calls &amp; WhatsApp messaging
                    </span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-md bg-navy-950 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent-300" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                      Email Advisory
                    </h3>
                    <a
                      href="mailto:englishlabconsultancy@gmail.com"
                      className="text-base font-semibold text-navy-950 hover:text-accent-800 transition-colors block break-all"
                    >
                      englishlabconsultancy@gmail.com
                    </a>
                    <span className="text-xs text-slate-500">
                      Replies typically provided within 24 hours
                    </span>
                  </div>
                </div>

                {/* Physical Base & Global Delivery */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-md bg-navy-950 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent-300" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                      Location &amp; Delivery
                    </h3>
                    <p className="text-sm font-semibold text-navy-950">
                      Lagos, Nigeria
                    </p>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      In-Person Sessions across Lagos • Virtual Classrooms Worldwide
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-md bg-navy-950 text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent-300" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                      Consultation Hours
                    </h3>
                    <p className="text-sm font-semibold text-navy-950">
                      Monday – Saturday: 8:00 AM – 6:00 PM WAT
                    </p>
                    <span className="text-xs text-slate-500">
                      Flexible evening virtual tutoring available by appointment
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-3 flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5 text-accent-800" />
                  <span>Connect On Social Media</span>
                </h3>
                <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-700">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading form...</div>}>
                <ContactForm initialService={service} initialSubject={subject} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
