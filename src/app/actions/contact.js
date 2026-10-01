"use server";

import { createClient } from "@/lib/supabase/server";

export async function submitContactForm(formData) {
  try {
    const { fullName, email, phone, service, message } = formData;

    // Field validations
    if (!fullName || !fullName.trim()) {
      return { success: false, error: "Full name is required." };
    }
    if (!email || !email.trim()) {
      return { success: false, error: "Email address is required." };
    }
    if (!phone || !phone.trim()) {
      return { success: false, error: "Phone number is required." };
    }
    if (!service || !service.trim()) {
      return { success: false, error: "Please select a programme or reason." };
    }
    if (!message || !message.trim()) {
      return { success: false, error: "Message is required." };
    }

    // Sanitize phone to numeric digits for postgres numeric column
    const digitsOnly = phone.replace(/\D/g, "");
    if (!digitsOnly) {
      return {
        success: false,
        error: "Please enter a valid phone number containing digits.",
      };
    }

    // Postgres numeric type handles numeric values
    const numericPhone = Number(digitsOnly);
    if (isNaN(numericPhone)) {
      return { success: false, error: "Invalid phone number format." };
    }

    const supabase = await createClient();

    const payload = {
      fullname: fullName.trim().toLowerCase(),
      email: email.trim().toLowerCase(),
      phone: numericPhone,
      reason: service.trim(),
      message: message.trim(),
    };

    const { data, error } = await supabase
      .from("contact_form")
      .insert([payload])
      // .select();

    if (error) {
      console.error("Supabase contact_form insert error:", error);

      // Check for Row-Level Security (RLS) policy error
      if (error.code === "42501") {
        return {
          success: false,
          isRlsError: true,
          // error:
          //   "Row-Level Security (RLS) is active on 'contact_form', but an INSERT policy for public users has not been enabled yet in your Supabase dashboard.",
          error: error.message
        };
      }

      return {
        success: false,
        error: error.message || "Failed to submit enquiry. Please try again.",
      };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Unexpected error in submitContactForm action:", err);
    return {
      success: false,
      error: err.message || "An unexpected error occurred. Please try again.",
    };
  }
}
