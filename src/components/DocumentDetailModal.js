"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle2, FileText, Download, ShieldCheck, Clock, Users, ArrowRight } from "lucide-react";
import WhatsAppPurchaseButton from "@/components/WhatsAppPurchaseButton";

export default function DocumentDetailModal({ doc, onClose }) {

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!doc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-navy-950/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-doc-title"
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-800 bg-accent-50 border border-accent-100 px-2.5 py-0.5 rounded">
              {doc.category}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Level: {doc.level}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-500 hover:text-navy-950 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-800"
            aria-label="Close document details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Top cover preview & main info */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative w-full sm:w-48 h-56 sm:h-64 rounded-lg overflow-hidden bg-navy-950 shrink-0 border border-slate-200 shadow-sm">
              <Image
                src={doc.thumbnail}
                alt={doc.title}
                fill
                sizes="(max-width: 640px) 100vw, 200px"
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-navy-950/80 backdrop-blur-xs text-white text-[11px] px-2 py-1 rounded text-center font-medium">
                {doc.format} • {doc.pages} Pages
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <h3
                id="modal-doc-title"
                className="text-xl sm:text-2xl font-serif font-bold text-navy-950 leading-snug"
              >
                {doc.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {doc.fullDescription}
              </p>

              {/* Document Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
                  <span className="text-slate-400 block font-medium">Format</span>
                  <span className="font-semibold text-navy-950">{doc.format} Document</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
                  <span className="text-slate-400 block font-medium">Length</span>
                  <span className="font-semibold text-navy-950">{doc.pages} Pages</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded border border-slate-100 col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block font-medium">File Size</span>
                  <span className="font-semibold text-navy-950">{doc.fileSize}</span>
                </div>
              </div>
            </div>
          </div>

          {/* What You Will Learn */}
          {doc.whatYouWillLearn && doc.whatYouWillLearn.length > 0 && (
            <div className="border-t border-slate-100 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent-700" />
                <span>What You Will Master in This Guide</span>
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                {doc.whatYouWillLearn.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-700 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Suitable For */}
          {doc.suitableFor && doc.suitableFor.length > 0 && (
            <div className="border-t border-slate-100 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-3 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-navy-800" />
                <span>Suitable For</span>
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                {doc.suitableFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-800 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* WhatsApp Direct Purchase helper notice */}
          <div className="bg-sand-50 border border-sand-200/80 rounded-lg p-4 text-xs text-slate-600 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-accent-800 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-navy-950">Instant Ordering via WhatsApp</p>
              <p className="mt-0.5 leading-relaxed">
                Clicking &quot;Purchase PDF&quot; opens WhatsApp with your product details pre-filled. An English Lab education advisor will promptly confirm payment and deliver your document.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer / Purchase Action */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-500 font-medium block">Resource Investment</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-serif font-bold text-navy-950">
                {doc.priceFormatted}
              </span>
              <span className="text-xs text-slate-500">
                (Digital PDF Edition)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 border border-slate-300 rounded-md text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <WhatsAppPurchaseButton
              product={doc}
              className="w-1/2 sm:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
