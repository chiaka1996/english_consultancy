import { Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-sm relative">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-800 bg-accent-50 px-2.5 py-1 rounded border border-accent-100">
            {testimonial.category}
          </span>
          <Quote className="w-6 h-6 text-slate-300" />
        </div>

        <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <h4 className="font-serif font-bold text-navy-950 text-base">
            {testimonial.author}
          </h4>
          <p className="text-xs text-slate-500 font-medium">
            {testimonial.role} • {testimonial.location}
          </p>
        </div>

        {testimonial.verified && (
          <div className="flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded" title="Verified Client">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="font-medium">Verified</span>
          </div>
        )}
      </div>
    </div>
  );
}
