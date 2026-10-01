import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { normalizeDocument } from "@/lib/normalizeDocument";
import { BookOpen, FileText, Database, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Study Materials | English Lab Consultancy",
  description: "Browse and download official English Lab study materials, exam prep guides, and grammar handbooks.",
};

export const dynamic = "force-dynamic";

export default async function StudyMaterialsPage() {
  let materials = [];
  let dbError = null;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      dbError = error;
    } else if (data && data.length > 0) {
      materials = data.map(normalizeDocument).filter(Boolean);
    }
  } catch (err) {
    dbError = err;
  }

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-sand-50 border-b border-sand-200/80 py-14 sm:py-18">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sand-200 text-xs font-semibold text-navy-900 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-accent-700" />
            <span>Digital Publications Library</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 tracking-tight">
            Study Materials
          </h1>

          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Official curriculum guides, syntactic handbooks, and examination preparation resources published by English Lab Consultancy.
          </p>
        </div>
      </section>

      {/* Database Notice (if any) */}
      {dbError && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900">
            <div className="flex items-start gap-3">
              <Database className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
              <div className="space-y-2">
                <p className="font-bold text-amber-950">
                  Supabase Query Notice
                </p>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Notice while querying the <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-xs">documents</code> table: {dbError.message || String(dbError)}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Materials List */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-xl font-serif font-bold text-navy-950">
                Available Publications
              </h2>
              <p className="text-xs text-slate-500">
                Displaying {materials.length} verified learning resource{materials.length !== 1 && "s"}
              </p>
            </div>

            <Link
              href="/docs"
              className="text-xs font-semibold text-accent-800 hover:text-accent-700 flex items-center gap-1"
            >
              <span>Explore Interactive Docs Marketplace</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {materials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material) => (
                <div
                  key={material.id}
                  className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-accent-800 bg-accent-50 border border-accent-100 px-2 py-0.5 rounded">
                        {material.category || "English Language"}
                      </span>
                      <span className="text-xs font-bold text-navy-950">
                        {material.priceFormatted}
                      </span>
                    </div>

                    <h3 className="text-base font-serif font-bold text-navy-950 mb-2 leading-snug group-hover:text-accent-800 transition-colors">
                      {material.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {material.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-medium">
                      <FileText className="w-3.5 h-3.5 text-accent-700" />
                      <span>{material.format} &bull; {material.pages} pages</span>
                    </span>

                    <Link
                      href="/docs"
                      className="inline-flex items-center gap-1 font-semibold text-accent-800 hover:text-accent-700"
                    >
                      <span>View in Store</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 text-sm">
              No publications found in the database.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}