import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Target,
  Eye,
  CheckCircle2,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  HeartHandshake,
} from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About Us | English Lab Consultancy",
  description:
    "Learn about English Lab Consultancy's educational mission, methodology, and dedication to accessible, enjoyable, and rigorous English tutoring.",
};

export default function AboutPage() {
  const differentiators = [
    {
      title: "Diagnostic-Led Instruction",
      description:
        "We never apply generic templates. Every learner begins with an evaluation of their linguistic strengths, grammatical gaps, and communicative goals.",
      icon: Compass,
    },
    {
      title: "Active Practice Over Passive Theory",
      description:
        "True language mastery requires vocal and written application. Our sessions prioritize active conversation, composition, and immediate corrective guidance.",
      icon: BookOpen,
    },
    {
      title: "Curriculum & Examination Alignment",
      description:
        "We bridge foundational literacy directly into national and international standards, including SSCE (WAEC/NECO) and UTME Use of English.",
      icon: Award,
    },
    {
      title: "Flexible Dual-Mode Delivery",
      description:
        "High-touch in-person sessions in Lagos combined with modern, interactive virtual classrooms that serve students globally.",
      icon: Users,
    },
    {
      title: "Empathetic, Patient Mentorship",
      description:
        "Language anxiety is the greatest impediment to fluency. Our educators build safe, encouraging environments where learners flourish without fear of judgment.",
      icon: HeartHandshake,
    },
  ];

  const whoWeServe = [
    {
      title: "School Students & Young Learners",
      description:
        "Children and teenagers needing foundational phonics, reading fluency, grammar confidence, and school academic reinforcement.",
      icon: GraduationCap,
      outcomes: [
        "Overcoming classroom reading hesitation",
        "Mastering grammatical syntax and spelling",
        "Developing expressive spoken vocabulary",
      ],
    },
    {
      title: "Examination Candidates",
      description:
        "Students preparing for high-stakes national and qualifying examinations including WAEC, NECO, GCE, UTME (JAMB), and Post-UTME.",
      icon: Award,
      outcomes: [
        "Syllabus-wide question pattern mastery",
        "Timed comprehension and summary techniques",
        "Lexis, structure, and oral English scoring strategies",
      ],
    },
    {
      title: "Working Professionals & Executives",
      description:
        "Career-driven adults, managers, and entrepreneurs seeking articulate workplace speech, persuasive writing, and commanding poise.",
      icon: Briefcase,
      outcomes: [
        "Executive-level business correspondence",
        "Confident public speaking and boardroom presentations",
        "Elimination of grammatical uncertainty in formal settings",
      ],
    },
    {
      title: "Schools & Educational Institutions",
      description:
        "School administrators and curriculum leaders seeking to elevate English teaching standards, staff communication, and student pass rates.",
      icon: ShieldCheck,
      outcomes: [
        "Institutional language diagnostic audits",
        "Modernized English curriculum development",
        "Teacher development and pedagogical workshops",
      ],
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. ABOUT HERO */}
      <section className="bg-sand-50 border-b border-sand-200/80 py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-800 bg-white border border-sand-200 px-3 py-1 rounded-full">
            Our Purpose &amp; Story
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 tracking-tight leading-tight">
            About English Lab Consultancy
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Dedicated to making English learning accessible, enjoyable, and genuinely effective.
            We combine rigorous linguistic pedagogy with personalized mentorship that opens doors to new opportunities.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-800 bg-accent-50 border border-accent-100 px-3 py-1 rounded-full">
                Our Story
              </span>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 leading-tight">
                Born From a Passion for Accessible, Transformative English Education.
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  English Lab Consultancy was founded by a team of passionate English educators who recognized
                  a widespread gap in language education: too many learners were subjected to mechanical memorization
                  without developing the confidence or practical competence to communicate articulate thoughts.
                </p>
                <p>
                  Whether working with a young learner struggling with reading hesitation, a secondary school
                  senior aiming for top marks in WAEC and UTME, or a corporate professional navigating high-stakes
                  workplace correspondence, we believe that education must meet learners exactly where they are.
                </p>
                <p>
                  By prioritizing interactive, practical lessons that feel relevant and engaging, we transform language
                  learning from a daunting chore into an empowering life skill. At English Lab Consultancy, you are not just
                  learning English—you are building skills that open lasting doors to academic, career, and personal achievement.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-6">
                <div>
                  <div className="font-serif font-bold text-navy-950 text-xl">Lagos, Nigeria</div>
                  <div className="text-xs text-slate-500">Consultancy Headquarters</div>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <div className="font-serif font-bold text-navy-950 text-xl">Global Reach</div>
                  <div className="text-xs text-slate-500">Virtual Interactive Delivery</div>
                </div>
              </div>
            </div>

            {/* Right Story Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?auto=format&fit=crop&w=1000&q=80"
                  alt="Educator and student reviewing learning material together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. MISSION & VISION */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent-50 text-accent-800 flex items-center justify-center border border-accent-100">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-950">
                  Our Mission
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  To deliver accessible, enjoyable, and rigorous English language instruction that equips learners
                  of all backgrounds with articulate expression, grammatical mastery, and the communicative confidence
                  needed to excel in academics, examinations, and global professional environments.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-accent-800">
                <CheckCircle2 className="w-4 h-4" />
                <span>Learner-Centered • Practical • Results-Oriented</span>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-navy-950 text-white flex items-center justify-center border border-navy-800">
                  <Eye className="w-6 h-6 text-accent-300" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-950">
                  Our Vision
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  To be a premier, trusted international English language consultancy recognized for academic excellence,
                  empowering individuals to communicate with authority, articulate complex ideas with ease, and confidently
                  seize opportunities across borders.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-navy-900">
                <CheckCircle2 className="w-4 h-4" />
                <span>International Standards • Lifelong Competence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR PEDAGOGICAL APPROACH */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Educational Philosophy"
            title="How We Approach English Education"
            subtitle="Our structured methodology moves beyond superficial tips into deep, permanent language development."
            centered={true}
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-sand-50 border border-sand-200/80 rounded-lg space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-800">Pillar 01</span>
              <h4 className="text-lg font-serif font-bold text-navy-950">Diagnostic Pacing</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We assess the learner first. Identifying specific phonetic, syntactic, or confidence bottlenecks ensures every hour of study targets high-impact improvements.
              </p>
            </div>

            <div className="p-6 bg-sand-50 border border-sand-200/80 rounded-lg space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-800">Pillar 02</span>
              <h4 className="text-lg font-serif font-bold text-navy-950">Interactive Rigor</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lecturing alone does not build language fluency. We engage students in constant verbal exchange, structured debates, essay critique, and real-time corrections.
              </p>
            </div>

            <div className="p-6 bg-sand-50 border border-sand-200/80 rounded-lg space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-800">Pillar 03</span>
              <h4 className="text-lg font-serif font-bold text-navy-950">Syntactic Foundations</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We demystify the underlying architecture of English grammar—clauses, tenses, concord, and lexis—so students understand why rules exist, rather than memorizing blindly.
              </p>
            </div>

            <div className="p-6 bg-sand-50 border border-sand-200/80 rounded-lg space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-800">Pillar 04</span>
              <h4 className="text-lg font-serif font-bold text-navy-950">Contextual Fluency</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every concept is anchored in real-world use: an examination essay, a workplace email, a presentation, or classroom discourse. Language is taught for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE ENGLISH LAB */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Key Differentiators"
            title="Why Learners Choose English Lab"
            subtitle="Five core commitments that define our educational standards and ensure lasting student growth."
            centered={true}
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm flex flex-col space-y-3"
                >
                  <div className="w-10 h-10 rounded bg-navy-950 text-accent-300 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-navy-950">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. WHO WE SERVE */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Learner Communities"
            title="Who We Serve"
            subtitle="Our educational programmes are tailored specifically to meet the distinct challenges of our learner groups."
            centered={true}
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whoWeServe.map((group, idx) => {
              const IconComp = group.icon;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl p-6 sm:p-8 bg-white hover:border-slate-300 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-md bg-accent-50 text-accent-800 flex items-center justify-center border border-accent-100">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-navy-950">
                      {group.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {group.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Key Focus Areas
                    </div>
                    {group.outcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. ABOUT CTA */}
      <CTASection
        title="Let's Start Your English Journey"
        subtitle="Schedule a consultation with our educational team to assess your goals, choose the right programme, and begin learning with purpose."
        primaryAction={{ text: "Book an Advisory Consultation", href: "/contact" }}
        secondaryAction={{ text: "View All Programmes", href: "/services" }}
      />
    </div>
  );
}
