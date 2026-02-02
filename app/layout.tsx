import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  title: {
    default: 'NorthPeak Insulation - Missoula, Montana Attic Insulation Services',
    template: '%s | NorthPeak Insulation',
  },
  description:
    'Professional blown-in cellulose attic insulation and air sealing services in Missoula, Montana. Serving homes within ~75 miles. Free estimates.',
  keywords: [
    'insulation',
    'blown-in insulation',
    'cellulose insulation',
    'attic insulation',
    'air sealing',
    'home insulation',
    'energy efficiency',
    'Missoula Montana',
    'Missoula insulation',
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
    title: 'NorthPeak Insulation - Missoula, Montana Attic Insulation Services',
    description:
      'Professional blown-in cellulose attic insulation and air sealing services in Missoula, Montana. Serving homes within ~75 miles. Free estimates.',
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
    title: 'NorthPeak Insulation - Missoula, Montana Attic Insulation Services',
    description:
      'Professional blown-in cellulose attic insulation and air sealing services in Missoula, Montana. Serving homes within ~75 miles. Free estimates.',
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
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
