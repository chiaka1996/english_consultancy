import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.englishlabconsultancy.com"),
  title: {
    default: "English Lab Consultancy | Premium English Education & Advisory",
    template: "%s | English Lab Consultancy",
  },
  description:
    "An established English language education consultancy offering personalized in-person and virtual tutoring, grammar and eloquence mastery, examination preparation (SSCE, NECO, UTME), and institutional advisory.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  keywords: [
    "English Lab Consultancy",
    "English tutoring Lagos",
    "virtual English tutor",
    "English grammar and eloquence",
    "UTME English preparation",
    "SSCE WAEC English coaching",
    "English language consultancy Nigeria",
    "professional business English",
    "English study materials PDF",
  ],
  authors: [{ name: "English Lab Consultancy" }],
  creator: "English Lab Consultancy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.englishlabconsultancy.com",
    title: "English Lab Consultancy | Premium English Education & Advisory",
    description:
      "Unlock articulate, confident English with personalized lessons that meet you where you are. In-person & virtual tutoring, examination coaching, and communication mastery.",
    siteName: "English Lab Consultancy",
  },
  twitter: {
    card: "summary_large_image",
    title: "English Lab Consultancy | Premium English Education",
    description:
      "Personalized in-person & virtual English tutoring, exam preparation, and eloquence coaching.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F2544",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="flex flex-col min-h-screen bg-white text-slate-800 antialiased selection:bg-accent-100 selection:text-accent-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
