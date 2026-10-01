import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Users,
  Compass,
  Award,
  Sparkles,
  Layers,
  GraduationCap,
  CalendarCheck,
  FileText,
} from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { createClient } from "@/lib/supabase/server";
import { normalizeDocument } from "@/lib/normalizeDocument";

export const metadata = {
  title: "English Lab Consultancy | Premium English Education & Tutoring",
  description:
    "An established English language consultancy providing structured in-person and virtual tutoring, examination preparation, and communication mastery for school students and professionals.",
};

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let featuredDocs = [];
  try {
    const supabase = await createClient();
    const { data: dbDocs } = await supabase
      .from("documents")
      .select("*")
      .order("created_at", { ascending: false });

    if (dbDocs && Array.isArray(dbDocs)) {
      const normalized = dbDocs.map(normalizeDocument).filter(Boolean);
      const featured = normalized.filter((d) => d.featured);
      featuredDocs = (featured.length > 0 ? featured : normalized).slice(0, 3);
    }
  } catch (err) {
    console.error("Error fetching featured documents for homepage:", err);
  }

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative bg-white border-b border-slate-200 overflow-hidden pt-12 pb-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sand-100 border border-sand-200 text-xs font-semibold text-navy-900 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-accent-700" />
                <span>Specialized English Education &amp; Advisory</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 tracking-tight leading-[1.15]">
                Master the Art of Articulate, Fluent English with Purposeful Guidance.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                English Lab Consultancy provides personalized, curriculum-aligned
                tutoring and communication training. From foundational literacy and national
                examination excellence (SSCE, NECO, UTME) to executive eloquence, we meet each learner where they are.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button href="/contact" variant="primary" size="lg">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  Explore Our Services
                </Button>
              </div>

              {/* Delivery Footnote */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>In-Person Tutoring (Lagos)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Interactive Virtual Classes Worldwide</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Personalized Diagnostics</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                    alt="Students and educator collaborating in a focused English learning session"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-950/10" />
                </div>

                {/* Floating Credibility Pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200/80 p-4 rounded-lg shadow-md flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-accent-50 text-accent-800 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-950">
                      Personalized Learning Methodology
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Tailored specifically to individual pace and communicative goals.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / CREDIBILITY SECTION */}
      <section className="bg-sand-50 border-b border-sand-200/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center text-navy-900 shrink-0">
                <Compass className="w-5 h-5 text-accent-800" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy-950">Diagnostic First</h3>
                <p className="text-xs text-slate-500">Targeted assessment before lessons</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center text-navy-900 shrink-0">
                <Users className="w-5 h-5 text-accent-800" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy-950">Dedicated Educators</h3>
                <p className="text-xs text-slate-500">Passionate, supportive mentorship</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center text-navy-900 shrink-0">
                <Award className="w-5 h-5 text-accent-800" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy-950">Proven Curriculum</h3>
                <p className="text-xs text-slate-500">WAEC, UTME, and business standards</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center text-navy-900 shrink-0">
                <Layers className="w-5 h-5 text-accent-800" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy-950">Dual Delivery</h3>
                <p className="text-xs text-slate-500">Lagos in-person &amp; virtual online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW SECTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
                  alt="English educator guiding a young learner with study material"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-800 bg-accent-50 border border-accent-100 px-3 py-1 rounded-full">
                About English Lab Consultancy
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-950 leading-tight">
                Dedicated to Making English Learning Accessible, Engaging, and Impactful.
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Founded by a team of passionate English educators, English Lab Consultancy specializes in creating
                personalized tutoring experiences that focus on each student&apos;s unique goals and learning style.
                We bridge the gap between abstract textbook grammar and confident real-world communication.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                From children building foundational reading and speaking confidence to examination candidates mastering
                SSCE and UTME syllabi, and professionals refining their executive communication—our learners build skills
                that unlock lasting opportunities.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm font-semibold text-accent-800 hover:text-accent-700 transition-colors group"
                >
                  <span>Read our full story &amp; educational approach</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Core Offerings"
            title="Comprehensive English Programmes"
            subtitle="Explore our specialized services structured for school learners, examination candidates, and ambitious communicators."
            centered={true}
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} mode="compact" />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/services" variant="navy" size="md">
              <span>View Detailed Programme Curricula</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Why English Lab"
            title="The Principles That Drive Our Student Outcomes"
            subtitle="We replace rote memorization with deep linguistic understanding, patient mentorship, and measurable milestones."
            centered={true}
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-md bg-navy-950 text-accent-300 font-serif font-bold flex items-center justify-center text-lg">
                01
              </div>
              <h3 className="text-lg font-serif font-bold text-navy-950">
                Personalized Learning
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No two students learn alike. We evaluate strengths, address specific bottlenecks, and craft bespoke learning pacing.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-md bg-navy-950 text-accent-300 font-serif font-bold flex items-center justify-center text-lg">
                02
              </div>
              <h3 className="text-lg font-serif font-bold text-navy-950">
                Practical Application
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We emphasize active usage over passive memorization. Students practice speaking, composing, and editing in every session.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-md bg-navy-950 text-accent-300 font-serif font-bold flex items-center justify-center text-lg">
                03
              </div>
              <h3 className="text-lg font-serif font-bold text-navy-950">
                Examination Acumen
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Deep familiarity with official WAEC, NECO, and UTME test patterns, lexis conventions, and time-management strategies.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-md bg-navy-950 text-accent-300 font-serif font-bold flex items-center justify-center text-lg">
                04
              </div>
              <h3 className="text-lg font-serif font-bold text-navy-950">
                Flexible Delivery
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seamless scheduling across in-person sessions in Lagos and high-engagement digital classrooms accessible anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-16 sm:py-24 bg-sand-50 border-b border-sand-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Process"
            title="A Clear, Structured Path to Mastery"
            subtitle="From initial enquiry to visible communicative eloquence, our structured 4-step workflow ensures focused progress."
            centered={true}
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm relative">
              <span className="text-2xl font-serif font-bold text-accent-800 mb-2 block">
                01
              </span>
              <h3 className="text-base font-serif font-bold text-navy-950 mb-2">
                Tell Us Your Goals
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Submit an initial enquiry detailing your target examinations, learning difficulties, or communication ambitions.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm relative">
              <span className="text-2xl font-serif font-bold text-accent-800 mb-2 block">
                02
              </span>
              <h3 className="text-base font-serif font-bold text-navy-950 mb-2">
                Diagnostic &amp; Programme Plan
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We conduct an initial baseline assessment and recommend the exact tutoring structure or curriculum track best suited for you.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm relative">
              <span className="text-2xl font-serif font-bold text-accent-800 mb-2 block">
                03
              </span>
              <h3 className="text-base font-serif font-bold text-navy-950 mb-2">
                Start Structured Learning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Begin dedicated in-person or virtual sessions with experienced educators - -- utilizing interactive, practical coursework.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm relative">
              <span className="text-2xl font-serif font-bold text-accent-800 mb-2 block">
                04
              </span>
              <h3 className="text-base font-serif font-bold text-navy-950 mb-2">
                Track Measurable Progress
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Receive regular milestone reports, mock examination reviews, and ongoing feedback that demonstrates tangible improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. STUDY MATERIALS / DOCS PREVIEW */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeading
              tag="English Lab Publications"
              title="Curated Study Materials &amp; Guides"
              subtitle="Access comprehensive digital study guides, worksheets, and examination preparation notes crafted by veteran educators."
              centered={false}
              className="max-w-2xl"
            />

            <Link
              href="/docs"
              className="inline-flex items-center text-sm font-semibold text-accent-800 hover:text-accent-700 transition-colors shrink-0"
            >
              <span>Explore All Study Materials</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          {featuredDocs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  <div>
                    <div className="relative h-44 w-full bg-navy-950">
                      <Image
                        src={doc.thumbnail}
                        alt={doc.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 text-navy-950 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                        {doc.category}
                      </div>
                      <div className="absolute top-3 right-3 bg-navy-950/90 text-white text-xs font-bold px-2 py-0.5 rounded border border-navy-800">
                        {doc.priceFormatted}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="text-xs text-slate-500 mb-1">
                        {doc.format} • {doc.pages} pages • Level: {doc.level}
                      </div>
                      <h3 className="text-base font-serif font-bold text-navy-950 mb-2 leading-snug group-hover:text-accent-800 transition-colors line-clamp-2">
                        {doc.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {doc.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      Digital Download
                    </span>
                    <Link
                      href="/docs"
                      className="text-xs font-bold text-accent-800 hover:text-accent-700 flex items-center gap-1"
                    >
                      <span>View in Store</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg text-slate-500 text-sm">
              New study materials are currently being prepared. Visit our{" "}
              <Link href="/docs" className="text-accent-800 font-semibold underline">
                Study Materials library
              </Link>{" "}
              to explore all available publications.
            </div>
          )}

          <div className="mt-10 p-5 bg-sand-50 border border-sand-200/80 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-accent-800 shrink-0" />
              <span>
                Looking for customized curriculum packets or institutional bulk licenses?
              </span>
            </div>
            <Link
              href="/contact?subject=Institutional+Material+Licensing"
              className="font-bold text-accent-800 hover:text-accent-700 underline shrink-0"
            >
              Contact Our Publishing Desk &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Learner Experiences"
            title="Voices from Our Students &amp; Families"
            subtitle="Read verified feedback from parents and professionals whose English fluency and confidence were transformed through our programmes."
            centered={true}
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          <div className="mt-10 text-center text-xs text-slate-500">
            All testimonials reflect verified experiences from active English Lab Consultancy learners.
          </div>
        </div>
      </section>

      {/* 9. FINAL CONVERSION CTA */}
      <CTASection
        title="Ready to Improve Your English?"
        subtitle="Take the decisive step toward articulate communication, higher examination scores, and genuine English confidence. Arrange an initial consultation with our academic team today."
        primaryAction={{ text: "Get Started Today", href: "/contact" }}
        secondaryAction={{ text: "Explore Our Services", href: "/services" }}
      />
    </div>
  );
}
