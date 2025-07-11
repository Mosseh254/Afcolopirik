import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Laura E. Cowan | Attorney & CPA | Estate Planning & Business Law | NYC",
    template: "%s | Laura E. Cowan Law"
  },
  description: "Trusted legal guidance for families and founders in NYC. Laura E. Cowan, Attorney & CPA, provides expert estate planning and business law services with over 500 satisfied clients. Book a consultation today.",
  keywords: ["estate planning", "business law", "attorney", "CPA", "NYC lawyer", "wills", "trusts", "business formation", "legal services"],
  authors: [{ name: "Laura E. Cowan" }],
  creator: "Laura E. Cowan",
  publisher: "Laura E. Cowan Law",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lauraecowan.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Laura E. Cowan | Attorney & CPA | Estate Planning & Business Law",
    description: "Trusted legal guidance for families and founders in NYC. Expert estate planning and business law services with compassion and clarity.",
    url: 'https://lauraecowan.com',
    siteName: 'Laura E. Cowan Law',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Laura E. Cowan - Attorney & CPA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Laura E. Cowan | Attorney & CPA | Estate Planning & Business Law",
    description: "Trusted legal guidance for families and founders in NYC. Expert estate planning and business law services.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
