import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Professional blown-in cellulose attic insulation and basic attic air sealing services for residential properties in Missoula, Montana.',
  openGraph: {
    title: 'Our Services | NorthPeak Insulation',
    description:
      'Professional blown-in cellulose attic insulation and basic attic air sealing services for residential properties in Missoula, Montana.',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Insulation Services</h1>
            <p className="text-xl text-gray-700">
              Professional insulation solutions tailored to your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Blown-In Cellulose Insulation */}
          <div id="blown-in" className="mb-16 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-primary-100 rounded-lg p-8 text-center">
                <svg
                  className="w-32 h-32 text-primary-600 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Blown-In Cellulose Attic Insulation</h2>
                <p className="text-gray-600 mb-4">
                  Blown-in cellulose insulation is a cost-effective, eco-friendly solution that provides excellent
                  coverage in attic spaces. Made from recycled paper products treated with fire retardants, it's an
                  environmentally responsible choice for your home.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Benefits:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Fast and efficient installation</li>
                  <li>Excellent coverage in irregular attic spaces</li>
                  <li>Cost-effective energy savings</li>
                  <li>Fire-resistant properties</li>
                  <li>Eco-friendly - made from recycled materials</li>
                  <li>Minimal disruption to your home</li>
                  <li>Superior sound dampening</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Best For:</h3>
                <p className="text-gray-600 mb-6">
                  Attic insulation upgrades, existing homes, and energy efficiency improvements. Ideal for Montana's
                  climate with excellent thermal performance year-round.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-16 border-gray-200" />

          {/* Attic Air Sealing */}
          <div id="air-sealing" className="mb-16 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Basic Attic Air Sealing</h2>
                <p className="text-gray-600 mb-4">
                  Before installing blown-in insulation, we seal attic penetrations to prevent air leakage. This
                  critical step ensures your new insulation performs at its best by preventing warm air from escaping
                  through gaps around pipes, wires, and other openings.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What We Seal:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Holes around plumbing pipes and vents</li>
                  <li>Electrical wire penetrations</li>
                  <li>Gaps around chimneys and flues</li>
                  <li>Attic hatch or door openings</li>
                  <li>Light fixture penetrations</li>
                  <li>Other air leakage points</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Why It Matters:</h3>
                <p className="text-gray-600 mb-6">
                  Air sealing is essential for maximizing insulation effectiveness. Even small gaps can allow
                  significant heat loss, reducing your energy savings. We seal these penetrations before blowing
                  insulation to ensure optimal performance.
                </p>
              </div>
              <div className="bg-primary-100 rounded-lg p-8 text-center">
                <svg
                  className="w-32 h-32 text-primary-600 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Service Is Right for You?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experts will assess your property and recommend the best insulation solution for your needs and
            budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="call" className="bg-white text-primary-600 hover:bg-gray-100 text-lg" />
            <CTAButton
              variant="email"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-600 text-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
