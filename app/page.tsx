import type { Metadata } from 'next';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'NorthPeak Insulation provides professional blown-in cellulose attic insulation and attic air sealing services in Missoula, Montana. Get a free estimate today!',
};

export default function Home() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'NorthPeak Insulation',
    image: 'https://northpeakinsulation.com/og-image.jpg',
    '@id': 'https://northpeakinsulation.com',
    url: 'https://northpeakinsulation.com',
    telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '406-560-5214',
    email: process.env.NEXT_PUBLIC_EMAIL || 'info@northpeakinsulation.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Missoula',
      addressRegion: 'MT',
      postalCode: '59801',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.8721,
      longitude: -113.994,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: ['https://www.facebook.com/northpeakinsulation', 'https://www.instagram.com/northpeakinsulation'],
    priceRange: '$$',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 46.8721,
        longitude: -113.994,
      },
      geoRadius: '120700', // ~75 miles in meters
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Attic Insulation Services in Missoula, Montana
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Blown-in cellulose insulation and attic air sealing. Save on energy costs with expert installation.
              Free estimates available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton variant="call" className="bg-primary-600 text-white hover:bg-primary-700 text-lg" />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold transition bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 text-lg"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose NorthPeak?</h2>
            <p className="text-xl text-gray-600">Your trusted local insulation experts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed and insured for your peace of mind. Professional service you can trust.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Estimates</h3>
              <p className="text-gray-600">
                Get a detailed, no-obligation quote for your insulation project. Transparent pricing.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Savings</h3>
              <p className="text-gray-600">
                Reduce your energy bills by up to 30% with proper insulation. Start saving today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional insulation solutions for Missoula-area homes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <svg
                className="w-12 h-12 text-primary-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Blown-In Cellulose Attic Insulation</h3>
              <p className="text-gray-600 mb-4">
                Cost-effective, eco-friendly cellulose insulation for attics. Made from recycled materials with
                excellent thermal performance for Montana's climate.
              </p>
              <Link href="/services#blown-in" className="text-primary-600 hover:text-primary-700 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <svg
                className="w-12 h-12 text-primary-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Basic Attic Air Sealing</h3>
              <p className="text-gray-600 mb-4">
                Seal attic penetrations around pipes, wires, and other openings before installing insulation to
                maximize energy efficiency and prevent heat loss.
              </p>
              <Link href="/services#air-sealing" className="text-primary-600 hover:text-primary-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold transition bg-primary-600 text-white hover:bg-primary-700 text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Save on Energy Costs?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate. Our experts are ready to help you choose the
            best insulation solution for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="call" className="bg-white text-primary-600 hover:bg-gray-100 text-lg" />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold transition bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-600 text-lg"
            >
              Request Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
