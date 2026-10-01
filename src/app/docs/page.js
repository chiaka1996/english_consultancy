import { createClient } from "@/lib/supabase/server";
import { normalizeDocument } from "@/lib/normalizeDocument";
import DocsClient from "./DocsClient";

export const metadata = {
  title: "Study Materials & Publications | English Lab Consultancy",
  description:
    "Browse official English Lab study materials, exam prep guides, and grammar handbooks. Sourced directly from our digital library.",
};

export const dynamic = "force-dynamic";

export default async function DocsPage() {
  let documents = [];
  let dbError = null;

  try {
    const supabase = await createClient();

    // Query documents table from Supabase using available_docs SELECT policy
    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase documents query error:", error);
      dbError = error.message;
    } else if (data && Array.isArray(data)) {
      documents = data.map(normalizeDocument).filter(Boolean);
    }
  } catch (err) {
    console.error("Unexpected error fetching documents from Supabase:", err);
    dbError = err.message || "Failed to connect to database.";
  }

  return <DocsClient initialDocuments={documents} dbError={dbError} />;
}
