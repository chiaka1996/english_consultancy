# English Lab Consultancy — Official Website Rebuild

A modern, high-conversion web platform for **English Lab Consultancy**, built with Next.js (App Router), pure JavaScript (no TypeScript), and Tailwind CSS.

---

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (ES6+ / JSX) — *Zero TypeScript*
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: System font stack paired with Georgia serif for academic authority
- **Media**: High-resolution, royalty-free photography via Unsplash

---

## Site Structure & Routes

1. **Home (`/`)**:
   - Hero with authoritative positioning statement and dual CTAs
   - Trust and credibility matrix (Diagnostic-first, certified curricula)
   - About preview
   - 4 Core service overview cards
   - "Why Choose Us" core differentiators
   - 4-step pedagogical process ("How It Works")
   - Study Materials / Publications showcase
   - Verified real-world testimonials (Mrs. Wunmi Adekunle & Mrs. Confidence Amadi)
   - High-conversion admissions CTA banner

2. **About Us (`/about`)**:
   - Company founding narrative and educational philosophy
   - Mission and Vision statements
   - 4 Pedagogical Pillars (Diagnostic pacing, interactive rigor, syntactic foundations, contextual fluency)
   - Key institutional differentiators
   - "Who We Serve" breakdown across learner categories

3. **Services & Programmes (`/services`)**:
   - Deep-dive profiles for the 4 core offerings:
     - In-Person & Virtual Tutoring
     - English Grammar, Diction & Eloquence
     - Examination Preparation (SSCE, GCE, NECO, UTME, Post-UTME)
     - Educational & Institutional Consultation
   - Target audience, comprehensive inclusions, and tangible benefits for every service
   - Delivery mode breakdown (In-Person Lagos vs Virtual Worldwide)
   - Diagnostic consultation booking

4. **Study Materials Marketplace (`/docs`)**:
   - Digital publication storefront UI
   - Dynamic search by keywords, title, or exam
   - Category filtering (Grammar & Syntax, Exam Prep, Writing, Eloquence, Business Communication, Early Literacy)
   - Level filtering (All Levels, Beginner, Intermediate, Advanced)
   - Sorting (Featured, Price: Low to High, Price: High to Low, Page Count)
   - Pagination UI
   - Interactive document detail modal with full syllabus, page count, format, and "Purchase PDF / Early Access" flow
   - Data-driven via `src/data/documents.js` for future backend/database integration

5. **Contact & Admissions (`/contact`)**:
   - Two-column responsive layout
   - Direct authentic contact channels:
     - Telephone / WhatsApp: `+234 814 645 0315`
     - Email: `englishlabconsultancy@gmail.com`
     - Operating Hours: Mon–Sat 8:00 AM – 6:00 PM WAT
     - Location: Lagos, Nigeria (with worldwide virtual delivery)
   - Client-side validated contact enquiry form with error feedback, service pre-selection, and submission confirmation

---

## Development & Production Commands

Run commands using standard npm (or `npm.cmd` on Windows PowerShell):

```bash
# Install dependencies
npm run install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

---

## Future Backend & Payment Integration Architecture

The `/docs` digital publications module is designed with data separation (`src/data/documents.js`). To wire up a backend in the future:
1. Replace `src/data/documents.js` with an API route (`/api/documents`) or direct database query (e.g. Supabase, Prisma, PostgreSQL).
2. Wire up the "Purchase PDF" CTA to a payment processor (e.g. Paystack, Flutterwave, Stripe) with webhook verification.
3. Serve secure temporary download tokens or user library links upon successful payment verification.
