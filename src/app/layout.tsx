import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theflowwork.com"),

  title: {
    default: "Flowwork — AI-Powered Trade Automation for Importers & Exporters",
    template: "%s | Flowwork",
  },
  description:
    "Flowwork helps importers, distributors, and export trading companies automate operations with AI — from compliance and documentation to lead generation. Book a free audit today.",
  keywords: [
    "trade automation",
    "AI trade automation",
    "import export automation",
    "document automation",
    "HS code classification",
    "customs compliance AI",
    "freight automation",
    "AI lead generation",
    "workflow automation",
    "trade operations",
    "Flowwork",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.theflowwork.com",
    siteName: "Flowwork",
    title: "Flowwork — AI-Powered Trade Automation for Importers & Exporters",
    description:
      "Automate compliance, documentation, and lead generation with AI. Move goods faster — let AI handle the paperwork.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flowwork — AI Trade Automation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Flowwork — AI-Powered Trade Automation",
    description:
      "Automate compliance, documentation, and lead generation with AI. Move goods faster — let AI handle the paperwork.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.theflowwork.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.theflowwork.com/#organization",
      name: "Flowwork",
      url: "https://www.theflowwork.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.theflowwork.com/favicon.png",
      },
      description:
        "Flowwork helps importers, distributors, and export trading companies automate operations with AI — from compliance and documentation to lead generation.",
      sameAs: [
        "https://www.linkedin.com/company/flowworkk/",
        "https://www.linkedin.com/in/atharva-patil-n23/",
        "https://www.linkedin.com/in/lavparab/",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "atharvapatil.flowwork@gmail.com",
          contactType: "sales",
        },
        {
          "@type": "ContactPoint",
          email: "lavparab.flowwork@gmail.com",
          contactType: "sales",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.theflowwork.com/#website",
      url: "https://www.theflowwork.com",
      name: "Flowwork",
      publisher: {
        "@id": "https://www.theflowwork.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.theflowwork.com/#webpage",
      url: "https://www.theflowwork.com",
      name: "Flowwork — AI-Powered Trade Automation for Importers & Exporters",
      isPartOf: {
        "@id": "https://www.theflowwork.com/#website",
      },
      about: {
        "@id": "https://www.theflowwork.com/#organization",
      },
      description:
        "Flowwork helps importers, distributors, and export trading companies automate operations with AI — from compliance and documentation to lead generation.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.theflowwork.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Will this work with our existing freight software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — we integrate with CargoWise, Flexport, SAP, Oracle, and custom stacks. We map your current tools before building anything.",
          },
        },
        {
          "@type": "Question",
          name: "What if the AI makes a compliance error?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every output includes a human review step. Your team approves before anything is submitted. AI drafts and flags — it never acts alone.",
          },
        },
        {
          "@type": "Question",
          name: "How long until we go live?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most clients are live in 3–4 weeks. We start with your highest-impact workflow so you see results fast.",
          },
        },
        {
          "@type": "Question",
          name: "Do we need a technical team to manage it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We build for operations teams, not engineers. Includes 30-day post-launch support and simple dashboards.",
          },
        },
        {
          "@type": "Question",
          name: "We operate across multiple trade lanes — can you handle that?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Multi-lane complexity is exactly where automation delivers the most value. Rule sets per lane, managed from one dashboard.",
          },
        },
        {
          "@type": "Question",
          name: "What does it cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every project is scoped to your workflows. Most clients recover the investment within 90 days. Book a free audit for a clear number upfront.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.className} antialiased bg-[#f0ede8] text-[#1a1a1a] selection:bg-[#c8f74a] selection:text-black min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
