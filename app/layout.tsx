import type { Metadata, Viewport } from "next";
import "./globals.css";
import ReactQueryProvider from "@/store/ReactQueryProvider";
import { Toaster } from "sonner";
import { Footer, Header } from "@/components/shared";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { SmoothScrollProvider } from "@/store/SmoothScrollProvider";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supercomp - BUCIS | BUKC",
  description:
    "Supercomp is an annual event held by BUCIS | BUKC at Bahria University Karachi Campus, where students from every university can participate and showcase their skill, specifically in technical skills like programming.",
  keywords: [
    "supercomp",
    "bucis",
    "bukc",
    "bahria university",
    "karachi",
    "computer science",
    "programming",
  ],
  authors: [{ name: "Danish Siddiqui" }],
  creator: "Supercomp",
  publisher: "BUCIS",
  metadataBase: new URL("https://supercomp.pk/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
    },
  },
  openGraph: {
    title: "Supercomp - BUCIS | BUKC",
    description:
      "Supercomp is an annual event held by BUCIS | BUKC at Bahria University Karachi Campus, where students from every university can participate and showcase their skill, specifically in technical skills like programming.",
    url: "https://supercomp.pk/",
    siteName: "Supercomp",
    images: [
      {
        url: "https://supercomp.pk/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Supercomp - BUCIS | BUKC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supercomp - BUCIS | BUKC",
    description:
      "Supercomp is an annual event held by BUCIS | BUKC at Bahria University Karachi Campus, where students from every university can participate and showcase their skill, specifically in technical skills like programming.",
    creator: "@supercomp",
    images: ["https://supercomp.pk/assets/images/logo.png"],
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
  category: "Computer Science",
  applicationName: "Supercomp",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#dde3fc",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Karla:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as="image"
          fetchPriority="high"
          href="/assets/images/icosahedron.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={cn(
          dmSans.className,
          "antialiased bg-bg h-screen overflow-x-hidden relative"
        )}
      >
        <ReactQueryProvider>
          <SmoothScrollProvider>
            <Toaster position="top-right" richColors />
            <main className="w-full min-h-screen">
              <Header />
              {children}
              <Footer />
            </main>
          </SmoothScrollProvider>
        </ReactQueryProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
