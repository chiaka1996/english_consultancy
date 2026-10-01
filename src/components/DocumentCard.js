import Image from "next/image";
import { FileText, ArrowRight, BookOpen } from "lucide-react";

export default function DocumentCard({ doc, onSelect }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 group">
      <div>
        {/* Cover / Image Preview */}
        <div className="relative h-44 w-full bg-navy-950 overflow-hidden">
          <Image
            src={doc.thumbnail}
            alt={doc.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
          
          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-white/95 text-navy-950 px-2.5 py-0.5 rounded shadow-sm">
              {doc.category}
            </span>
            {doc.isFree ? (
              <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded shadow-sm">
                FREE
              </span>
            ) : (
              <span className="text-xs font-bold bg-navy-900/90 text-white px-2.5 py-0.5 rounded border border-navy-700/50 shadow-sm">
                {doc.priceFormatted}
              </span>
            )}
          </div>

          {/* Level & Format info in bottom strip */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
            <span className="flex items-center gap-1 font-medium text-slate-300">
              <FileText className="w-3.5 h-3.5 text-accent-300" />
              <span>{doc.format} • {doc.pages} pages</span>
            </span>
            <span className="text-[11px] bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded text-white font-medium">
              {doc.level}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5">
          <h3 className="text-base sm:text-lg font-serif font-bold text-navy-950 mb-2 leading-snug group-hover:text-accent-800 transition-colors line-clamp-2">
            {doc.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
            {doc.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Action Bar */}
      <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-500 font-medium block">Price</span>
          <span className="text-base font-bold text-navy-950">
            {doc.priceFormatted}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onSelect(doc)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded bg-navy-950 hover:bg-accent-800 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-800"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
