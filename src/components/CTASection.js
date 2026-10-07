import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function CTASection({
  title = "Ready to Improve Your English?",
  subtitle = "Whether preparing for crucial examinations, seeking articulate workplace eloquence, or wanting tailored one-on-one mentorship, English Lab Consultancy is ready to guide your journey.",
  primaryAction = { text: "Get Started", href: "/contact" },
  secondaryAction = { text: "Explore Our Services", href: "/services" },
  className = "",
}) {
  return (
    <section className={`py-16 sm:py-20 bg-navy-950 text-white relative overflow-hidden ${className}`}>
      <FadeIn className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-300 bg-navy-900 border border-navy-800 px-3 py-1 rounded-full mb-4">
          Admissions &amp; Consultation
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-6">
          {title}
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryAction.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md text-base font-semibold text-white bg-accent-800 hover:bg-accent-700 shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-950 focus:ring-accent-800"
          >
            <span>{primaryAction.text}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href={secondaryAction.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md text-base font-semibold text-slate-200 hover:text-white bg-navy-900 hover:bg-navy-800 border border-navy-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-950 focus:ring-slate-400"
          >
            <span>{secondaryAction.text}</span>
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-navy-900/80 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-400">
          <span>Need immediate advice? Speak with an education advisor:</span>
          <a
            href="tel:+2348146450315"
            className="inline-flex items-center gap-1.5 text-accent-300 hover:text-white font-semibold transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>+234 814 645 0315</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
