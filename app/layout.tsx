import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "DataSpeak - Conversational Analytics Platform",
    template: "%s | DataSpeak",
  },
  description:
    "Transform complex data into clear, actionable insights through simple conversation. Ask your data anything in plain English with AI-powered analytics.",
  keywords: [
    "data analytics",
    "conversational AI",
    "business intelligence",
    "data visualization",
    "AI analytics",
    "natural language processing",
    "data analysis",
    "business insights",
    "predictive analytics",
    "data science",
  ],
  authors: [{ name: "DataSpeak Team" }],
  creator: "DataSpeak",
  publisher: "DataSpeak",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dataspeak.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dataspeak.com",
    title: "DataSpeak - Conversational Analytics Platform",
    description:
      "Transform complex data into clear, actionable insights through simple conversation. Ask your data anything in plain English.",
    siteName: "DataSpeak",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DataSpeak - Conversational Analytics Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataSpeak - Conversational Analytics Platform",
    description: "Transform complex data into clear, actionable insights through simple conversation.",
    images: ["/og-image.png"],
    creator: "@dataspeak",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
