/**
 * Normalizes document records from Supabase to match the UI component requirements.
 * Handles variations in column naming (camelCase, snake_case, kebab-case, or case differences).
 */
export function normalizeDocument(doc) {
  if (!doc) return null;

  const priceNum = Number(doc.price) || 0;
  const isFree = Boolean(doc.isFree ?? doc.is_free ?? priceNum === 0);

  let formattedPrice = doc.priceFormatted || doc.price_formatted;
  if (!formattedPrice) {
    formattedPrice = isFree ? "FREE" : `₦${priceNum.toLocaleString()}`;
  } else if (!isFree && !formattedPrice.startsWith("₦") && !formattedPrice.startsWith("N")) {
    formattedPrice = `₦${formattedPrice}`;
  }

  // Handle WhatYouWillLearn (array, json string, or null)
  let learnItems = [];
  const rawLearn =
    doc.whatYouWillLearn ?? doc.WhatYouWillLearn ?? doc.what_you_will_learn;
  if (Array.isArray(rawLearn)) {
    learnItems = rawLearn;
  } else if (typeof rawLearn === "string") {
    try {
      const parsed = JSON.parse(rawLearn);
      learnItems = Array.isArray(parsed) ? parsed : [rawLearn];
    } catch {
      learnItems = [rawLearn];
    }
  }

  // Handle suitableFor (array, json string, or null)
  let suitableItems = [];
  const rawSuitable =
    doc.suitableFor ?? doc.suitable_for ?? doc.SuitableFor;
  if (Array.isArray(rawSuitable)) {
    suitableItems = rawSuitable;
  } else if (typeof rawSuitable === "string") {
    try {
      const parsed = JSON.parse(rawSuitable);
      suitableItems = Array.isArray(parsed) ? parsed : [rawSuitable];
    } catch {
      suitableItems = [rawSuitable];
    }
  }

  return {
    id: String(doc.id || doc.slug || Math.random()),
    title: doc.title || "Untitled Document",
    slug: doc.slug || String(doc.id || ""),
    category: doc.category || "General",
    level: doc.level || "All Levels",
    pages: doc.pages ? String(doc.pages) : "N/A",
    format: doc.format || "PDF",
    fileSize: doc.fileSize || doc["file-size"] || doc.file_size || "PDF",
    price: priceNum,
    priceFormatted: formattedPrice,
    isFree,
    featured: Boolean(doc.featured),
    thumbnail:
      doc.thumbnail ||
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
    shortDescription:
      doc.shortDescription ||
      doc.short_description ||
      doc.description ||
      "",
    fullDescription:
      doc.fullDescription ||
      doc.full_description ||
      doc.description ||
      doc.shortDescription ||
      "",
    whatYouWillLearn: learnItems,
    suitableFor: suitableItems,
  };
}
