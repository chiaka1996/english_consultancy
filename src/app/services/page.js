import Link from "next/link";
import { CheckCircle2, ArrowRight, Laptop, MapPin, Globe, Clock, HelpCircle, PhoneCall } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";

export const metadata = {
  title: "Services & Programmes | English Lab Consultancy",
  description:
    "Comprehensive English language programmes including In-Person & Virtual Tutoring, Grammar & Eloquence, SSCE/UTME Exam Preparation, and Educational Consultation.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-0">
      {/* 1. SERVICES HERO */}
      <section className="bg-sand-50 border-b border-sand-200/80 py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-800 bg-white border border-sand-200 px-3 py-1 rounded-full">
            Specialized Programmes
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 tracking-tight leading-tight">
            Our Educational &amp; Consultancy Services
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            From targeted one-on-one school mentorship and intensive national examination preparation to corporate
            communication advisory, every English Lab service is built upon personalized pedagogical excellence.
          </p>
        </div>
      </section>

      {/* 2. DELIVERY MODES STRIP */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-md bg-navy-950 text-white flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent-300" />
              </div>
              <div>
                <h3 className="text-base font-serif font-bold text-navy-950 mb-1">
                  In-Person Tutoring &amp; Workshops (Lagos)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dedicated in-person sessions conducted across select locations in Lagos for learners who thrive on direct, face-to-face mentorship and hands-on paper-based practice.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-md bg-navy-950 text-white flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-accent-300" />
              </div>
              <div>
                <h3 className="text-base font-serif font-bold text-navy-950 mb-1">
                  Interactive Virtual Classrooms (Worldwide)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  High-engagement virtual instruction using structured digital whiteboards, real-time shared document critique, and recorded review modules for students across Nigeria and internationally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN SERVICE SECTIONS */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            tag="Curriculum Breakdown"
            title="Detailed Programme Architecture"
            subtitle="Review the specific target audience, curriculum inclusions, and anticipated milestones for each offering."
            centered={true}
          />

          <div className="space-y-10">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} mode="detailed" />
            ))}
          </div>
        </div>
      </section>

      {/* 4. ADVISORY & PLACEMENT SUPPORT */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sand-50 border border-sand-200 rounded-xl p-8 sm:p-12 text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-white border border-sand-300 text-accent-800 mx-auto flex items-center justify-center">
              <HelpCircle className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              Not Sure Which Service is Right for You?
            </h3>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
              Our educational advisors provide diagnostic consultations to assess your child&apos;s or organization&apos;s
              current communication level and recommend the most effective, cost-efficient learning track.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact?service=Diagnostic+Consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md text-sm font-semibold text-white bg-accent-800 hover:bg-accent-700 shadow-sm transition-all"
              >
                <span>Book a Diagnostic Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+2348146450315"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-navy-950 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-accent-800" />
                <span>Call +234 814 645 0315</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <CTASection
        title="Elevate Your English Competence Today"
        subtitle="Get in touch to confirm tutor availability, explore tailored group schedules, or request an institutional training syllabus."
        primaryAction={{ text: "Contact Us for Enrollment", href: "/contact" }}
        secondaryAction={{ text: "Browse Study Materials", href: "/docs" }}
      />
    </div>
  );
}
