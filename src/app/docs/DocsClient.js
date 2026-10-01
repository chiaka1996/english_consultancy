"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  BookOpen,
  FileText,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Database,
  AlertCircle,
} from "lucide-react";

import DocumentCard from "@/components/DocumentCard";
import DocumentDetailModal from "@/components/DocumentDetailModal";

export default function DocsClient({ initialDocuments = [], dbError = null }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Derive categories dynamically from Supabase documents
  const categories = useMemo(() => {
    const cats = new Set(["All"]);
    initialDocuments.forEach((doc) => {
      if (doc.category && typeof doc.category === "string" && doc.category.trim()) {
        cats.add(doc.category.trim());
      }
    });
    return Array.from(cats);
  }, [initialDocuments]);

  // Derive levels dynamically from Supabase documents
  const levels = useMemo(() => {
    const lvls = new Set(["All Levels"]);
    initialDocuments.forEach((doc) => {
      if (doc.level && typeof doc.level === "string" && doc.level.trim()) {
        lvls.add(doc.level.trim());
      }
    });
    return Array.from(lvls);
  }, [initialDocuments]);

  // Filter and sort documents
  const filteredDocuments = useMemo(() => {
    return initialDocuments
      .filter((doc) => {
        const matchesCategory =
          selectedCategory === "All" || doc.category === selectedCategory;

        const matchesLevel =
          selectedLevel === "All Levels" || doc.level === selectedLevel;

        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !query ||
          (doc.title && doc.title.toLowerCase().includes(query)) ||
          (doc.shortDescription && doc.shortDescription.toLowerCase().includes(query)) ||
          (doc.category && doc.category.toLowerCase().includes(query));

        return matchesCategory && matchesLevel && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "pages") {
          const aPages = parseInt(a.pages, 10) || 0;
          const bPages = parseInt(b.pages, 10) || 0;
          return bPages - aPages;
        }
        // Default: featured first, then title
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.title.localeCompare(b.title);
      });
  }, [initialDocuments, searchQuery, selectedCategory, selectedLevel, sortBy]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage) || 1;
  const paginatedDocs = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredDocuments.slice(start, start + itemsPerPage);
  }, [filteredDocuments, currentPage]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedLevel("All Levels");
    setSortBy("featured");
    setCurrentPage(1);
  };

  return (
    <div className="space-y-0">
      {/* 1. DOCS HERO */}
      <section className="bg-sand-50 border-b border-sand-200/80 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sand-200 text-xs font-semibold text-navy-900 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-accent-700" />
            <span>Digital Publications &amp; Study Guides</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 tracking-tight leading-tight">
            English Lab Study Materials
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Discover rigorously structured English learning guides, examination past-question breakdowns,
            and syntax manuals compiled by veteran educators. Built to empower self-study and reinforce tutoring sessions.
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
            <Database className="w-3.5 h-3.5 text-emerald-600" />
            <span>Connected live to Supabase &bull; {initialDocuments.length} publication{initialDocuments.length !== 1 && "s"} in library</span>
          </div>
        </div>
      </section>

      {/* Database Error Banner (if any) */}
      {dbError && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-950">Notice from Database</p>
              <p className="text-amber-800 leading-relaxed mt-0.5">
                {dbError}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 2. MARKETPLACE STOREFRONT */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 mb-10 shadow-sm space-y-5">
            {/* Search Input, Level, and Sort */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Search Bar */}
              <div className="md:col-span-6 relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search guides by title, category, or keyword..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-md border border-slate-300 text-sm text-navy-950 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-accent-800"
                />
              </div>

              {/* Level Filter */}
              <div className="md:col-span-3">
                <select
                  value={selectedLevel}
                  onChange={(e) => {
                    setSelectedLevel(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full py-2.5 px-3 rounded-md border border-slate-300 text-sm text-navy-950 bg-white focus:outline-none focus:ring-2 focus:ring-accent-800"
                >
                  {levels.map((lvl) => (
                    <option key={lvl} value={lvl}>
                      {lvl === "All Levels" ? "All Difficulty Levels" : `Level: ${lvl}`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By Dropdown */}
              <div className="md:col-span-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-md border border-slate-300 text-sm text-navy-950 bg-white focus:outline-none focus:ring-2 focus:ring-accent-800"
                >
                  <option value="featured">Sort: Featured Guides</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="pages">Length: Most Pages</option>
                </select>
              </div>
            </div>

            {/* Category Filter Pills (dynamically derived from Supabase) */}
            {categories.length > 1 && (
              <div className="pt-2 border-t border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Filter by Category:
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors focus:outline-none ${
                          isActive
                            ? "bg-navy-950 text-white shadow-sm"
                            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-navy-950"
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Result Status Strip */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-8 text-sm text-slate-600">
            <div>
              Showing <span className="font-bold text-navy-950">{filteredDocuments.length}</span> publication{filteredDocuments.length !== 1 && "s"}
              {selectedCategory !== "All" && (
                <span> in <span className="font-semibold text-accent-800">{selectedCategory}</span></span>
              )}
              {selectedLevel !== "All Levels" && (
                <span> ({selectedLevel})</span>
              )}
            </div>

            {(searchQuery || selectedCategory !== "All" || selectedLevel !== "All Levels") && (
              <button
                onClick={handleResetFilters}
                className="text-xs font-semibold text-accent-800 hover:underline"
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Document Cards Grid */}
          {paginatedDocs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedDocs.map((doc) => (
                <DocumentCard
                  key={doc.id}
                  doc={doc}
                  onSelect={(d) => setSelectedDoc(d)}
                />
              ))}
            </div>
          ) : initialDocuments.length === 0 ? (
            <div className="text-center py-16 px-4 bg-slate-50 border border-slate-200 rounded-xl">
              <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-serif font-bold text-navy-950 mb-1">
                No publications in database yet
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-4">
                Publications added to your Supabase &quot;documents&quot; table will automatically appear here live.
              </p>
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-slate-50 border border-slate-200 rounded-xl">
              <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-serif font-bold text-navy-950 mb-1">
                No matching study materials found
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                We couldn&apos;t find any publications matching your current search criteria. Try clearing filters or searching with a different term.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center px-4 py-2 rounded-md text-xs font-semibold text-white bg-navy-950 hover:bg-navy-900 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded border border-slate-300 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded text-xs font-semibold transition-colors ${
                    currentPage === page
                      ? "bg-navy-950 text-white shadow-sm"
                      : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded border border-slate-300 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Marketplace Architecture Footer */}
          <div className="mt-16 p-6 bg-sand-50 border border-sand-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-navy-950 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-accent-700" />
                <span>Live Supabase Publications Store</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                This digital library is synced directly to your Supabase <code className="bg-sand-200 px-1 py-0.5 rounded font-mono text-[11px]">documents</code> table. New resources added in your Supabase dashboard reflect here instantly.
              </p>
            </div>

            <Link
              href="/contact?subject=Study+Material+Publishing+Enquiry"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md text-xs font-semibold text-navy-950 bg-white border border-slate-300 hover:bg-slate-50 shadow-sm shrink-0 transition-colors"
            >
              <span>Enquire for Bulk Licenses</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. DETAIL MODAL */}
      {selectedDoc && (
        <DocumentDetailModal
          doc={selectedDoc}
          onClose={() => setSelectedDoc(null)}
        />
      )}
    </div>
  );
}
