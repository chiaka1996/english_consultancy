import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-navy-900 border border-navy-800 flex items-center justify-center text-white font-serif font-bold text-lg">
                <span className="text-accent-300 font-serif">E</span>
                <span className="text-slate-100 font-serif">L</span>
              </div>
              <div>
                <span className="text-white font-serif font-bold text-lg block leading-none">
                  English Lab Consultancy
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                  Education &amp; Language Advisory
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A premier English language consultancy providing structured in-person and virtual tutoring,
              examination preparation, and communication mastery for school students, ambitious candidates, and corporate professionals.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-accent-300 shrink-0" />
                <span>Operating Hours: Monday – Saturday, 8:00 AM – 6:00 PM WAT</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent-300 shrink-0" />
                <span>Lagos, Nigeria • Interactive Virtual Delivery Worldwide</span>
              </p>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services &amp; Programmes
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white transition-colors">
                  Study Materials (Docs)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Programmes */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Programmes
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/services#in-person-virtual-tutoring" className="hover:text-white transition-colors">
                  Personalized Tutoring
                </Link>
              </li>
              <li>
                <Link href="/services#english-grammar-and-eloquence" className="hover:text-white transition-colors">
                  Grammar &amp; Eloquence
                </Link>
              </li>
              <li>
                <Link href="/services#examination-preparation" className="hover:text-white transition-colors">
                  SSCE &amp; UTME Prep
                </Link>
              </li>
              <li>
                <Link href="/services#institutional-consultancy" className="hover:text-white transition-colors">
                  Corporate &amp; Schools
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Digital Study Guides</span>
                  <ArrowUpRight className="w-3 h-3 text-accent-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Enquiries */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Contact Us
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href="tel:+2348146450315"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-accent-300 shrink-0" />
                  <span>+234 814 645 0315</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:englishlabconsultancy@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-2 break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-accent-300 shrink-0" />
                  <span>englishlabconsultancy@gmail.com</span>
                </a>
              </li>
              <li className="pt-2">
                <div className="text-xs text-slate-400 mb-1 font-medium">Social Channels</div>
                <div className="flex gap-3 text-slate-400">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors text-xs"
                    aria-label="Facebook"
                  >
                    Facebook
                  </a>
                  <span className="text-slate-600">•</span>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors text-xs"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                  <span className="text-slate-600">•</span>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors text-xs"
                    aria-label="TikTok"
                  >
                    TikTok
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal line */}
        <div className="mt-12 pt-8 border-t border-navy-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} English Lab Consultancy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Notice
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Admissions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
