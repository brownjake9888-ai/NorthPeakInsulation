import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive insulation services including spray foam, blown-in, batt insulation, and insulation removal for residential and commercial properties.',
  openGraph: {
    title: 'Our Services | NorthPeak Insulation',
    description:
      'Comprehensive insulation services including spray foam, blown-in, batt insulation, and insulation removal for residential and commercial properties.',
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
          {/* Spray Foam Insulation */}
          <div id="spray-foam" className="mb-16 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Spray Foam Insulation</h2>
                <p className="text-gray-600 mb-4">
                  Spray foam insulation is the gold standard for energy efficiency and air sealing. It expands to
                  fill gaps and cracks, creating an airtight barrier that dramatically reduces energy loss.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Benefits:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Highest R-value per inch of any insulation type</li>
                  <li>Superior air sealing properties</li>
                  <li>Moisture barrier protection</li>
                  <li>Reduces energy costs by up to 50%</li>
                  <li>Long-lasting and durable</li>
                  <li>Helps prevent mold and mildew</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Best For:</h3>
                <p className="text-gray-600 mb-6">
                  Attics, crawl spaces, walls, and new construction. Ideal for maximum energy efficiency and
                  comfort.
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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
            </div>
          </div>

          <hr className="my-16 border-gray-200" />

          {/* Blown-In Insulation */}
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Blown-In Insulation</h2>
                <p className="text-gray-600 mb-4">
                  Blown-in insulation is a cost-effective solution that can be quickly installed in attics,
                  walls, and hard-to-reach spaces. Available in cellulose or fiberglass.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Benefits:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Fast and efficient installation</li>
                  <li>Excellent coverage in irregular spaces</li>
                  <li>Cost-effective energy savings</li>
                  <li>Fire-resistant options available</li>
                  <li>Eco-friendly cellulose options</li>
                  <li>Minimal disruption to your home</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Best For:</h3>
                <p className="text-gray-600 mb-6">
                  Attic spaces, existing wall cavities, and retrofit applications. Great for quick energy
                  efficiency upgrades.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-16 border-gray-200" />

          {/* Batt Insulation */}
          <div id="batt" className="mb-16 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Batt Insulation</h2>
                <p className="text-gray-600 mb-4">
                  Fiberglass batt insulation is the traditional choice for new construction and renovation
                  projects. Pre-cut batts are easy to install in standard wall and ceiling cavities.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Benefits:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Affordable and widely available</li>
                  <li>Easy to install in standard spaces</li>
                  <li>Good thermal and sound insulation</li>
                  <li>Fire-resistant properties</li>
                  <li>Available in various R-values</li>
                  <li>DIY-friendly option</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Best For:</h3>
                <p className="text-gray-600 mb-6">
                  New construction, open walls and ceilings, and budget-conscious projects. Ideal for standard
                  framing.
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
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <hr className="my-16 border-gray-200" />

          {/* Insulation Removal */}
          <div id="removal" className="mb-16 scroll-mt-20">
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Insulation Removal</h2>
                <p className="text-gray-600 mb-4">
                  Sometimes old insulation needs to be removed before installing new material. We safely remove
                  damaged, contaminated, or ineffective insulation.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">When You Need Removal:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Water damage or mold contamination</li>
                  <li>Pest infestation</li>
                  <li>Degraded or compressed insulation</li>
                  <li>Before installing new insulation</li>
                  <li>Renovation or remodeling projects</li>
                  <li>Asbestos-containing materials (handled separately)</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Process:</h3>
                <p className="text-gray-600 mb-6">
                  We use professional equipment and follow safety protocols to remove old insulation quickly and
                  safely, preparing your space for new, efficient insulation.
                </p>
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
