import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#070B12",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NOXIQO | Premium AI-Powered Websites & Automation",
  description: "NOXIQO designs premium websites and AI-powered digital automation that help medical clinics, law firms, startups, and high-ticket service businesses attract more customers, build trust, and scale revenue.",
  keywords: "web design, AI automation, custom website design, SEO, website redesign, landing pages, digital agency, premium web agency, performance optimization",
  authors: [{ name: "NOXIQO" }],
  metadataBase: new URL("https://noxiqo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NOXIQO | Premium AI-Powered Websites & Automation",
    description: "Scale your business with premium custom websites, conversion-focused design, and intelligent AI automation built for high-growth firms and modern brands.",
    url: "https://noxiqo.com",
    siteName: "NOXIQO Digital Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NOXIQO - AI-Powered Websites & Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOXIQO | Premium AI-Powered Websites & Automation",
    description: "Scale your business with premium custom websites, conversion-focused design, and intelligent AI automation.",
    images: ["/og-image.jpg"],
    creator: "@noxiqo",
  },
  icons: {
    icon: "/favicon.png",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-white bg-primary-bg min-h-screen">
        {children}
      </body>
    </html>
  );
}
