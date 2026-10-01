import Link from "next/link";
import { GraduationCap, BookOpen, Award, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Award: Award,
  Briefcase: Briefcase,
};

export default function ServiceCard({ service, mode = "compact" }) {
  const IconComponent = iconMap[service.icon] || BookOpen;

  if (mode === "compact") {
    return (
      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 group">
        <div>
          <div className="w-12 h-12 rounded-md bg-accent-50 text-accent-800 flex items-center justify-center mb-5 border border-accent-100 group-hover:bg-accent-800 group-hover:text-white transition-colors duration-200">
            <IconComponent className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-serif font-bold text-navy-950 mb-3 group-hover:text-accent-800 transition-colors">
            {service.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {service.shortDescription}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <Link
            href={`/services#${service.slug}`}
            className="inline-flex items-center text-sm font-semibold text-accent-800 hover:text-accent-700 transition-colors group-hover:translate-x-0.5 transform duration-150"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    );
  }

  // Full detailed mode for /services page
  return (
    <div
      id={service.slug}
      className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm scroll-mt-28"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg bg-navy-950 text-white flex items-center justify-center shrink-0 border border-navy-800">
            <IconComponent className="w-7 h-7 text-accent-300" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-accent-800 block">
              Specialized Programme
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              {service.title}
            </h3>
          </div>
        </div>

        <Link
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-accent-800 hover:bg-accent-700 shadow-sm transition-all shrink-0 self-start md:self-auto"
        >
          <span>Enquire About Programme</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </Link>
      </div>

      <div className="mt-6 space-y-6">
        <p className="text-lg text-slate-700 leading-relaxed font-medium">
          {service.tagline}
        </p>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
          {service.shortDescription}
        </p>

        {/* Who It Is For */}
        <div className="bg-sand-50 border border-sand-200/80 rounded-lg p-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-2">
            Who This Programme Is For
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed">
            {service.targetAudience}
          </p>
        </div>

        {/* 2-Column Grid: What Is Included & Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          <div>
            <h4 className="text-sm font-serif font-bold text-navy-950 uppercase tracking-wide mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span>What Is Included</span>
            </h4>
            <ul className="space-y-2.5">
              {service.whatIsIncluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-accent-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-serif font-bold text-navy-950 uppercase tracking-wide mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span>Key Outcomes &amp; Benefits</span>
            </h4>
            <ul className="space-y-2.5">
              {service.keyBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-navy-800 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
