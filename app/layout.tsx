import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'NorthPeak Insulation - Professional Insulation Services',
    template: '%s | NorthPeak Insulation',
  },
  description:
    'Professional insulation services for residential and commercial properties. Spray foam, blown-in, and batt insulation. Free estimates.',
  keywords: [
    'insulation',
    'spray foam',
    'blown-in insulation',
    'batt insulation',
    'home insulation',
    'commercial insulation',
    'energy efficiency',
  ],
  authors: [{ name: 'NorthPeak Insulation' }],
  creator: 'NorthPeak Insulation',
  publisher: 'NorthPeak Insulation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://northpeakinsulation.com',
    siteName: 'NorthPeak Insulation',
    title: 'NorthPeak Insulation - Professional Insulation Services',
    description:
      'Professional insulation services for residential and commercial properties. Spray foam, blown-in, and batt insulation. Free estimates.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NorthPeak Insulation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NorthPeak Insulation - Professional Insulation Services',
    description:
      'Professional insulation services for residential and commercial properties. Spray foam, blown-in, and batt insulation. Free estimates.',
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
