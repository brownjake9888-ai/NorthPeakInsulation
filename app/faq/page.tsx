'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import CTAButton from '@/components/CTAButton';

const faqs = [
  {
    question: 'What type of insulation is best for my home?',
    answer:
      'We specialize in blown-in cellulose attic insulation, which is ideal for Montana homes. It provides excellent thermal performance, is eco-friendly (made from recycled materials), and offers superior R-value for attics. We also provide basic attic air sealing before installation to maximize energy efficiency. We offer free consultations to assess your attic and recommend the best solution.',
  },
  {
    question: 'How much can I save on energy bills with new insulation?',
    answer:
      'Proper insulation can reduce your energy bills by 20-50%, depending on your current insulation levels and the type of insulation installed. Most homeowners see a return on investment within 2-5 years through energy savings alone.',
  },
  {
    question: 'How long does insulation installation take?',
    answer:
      'Installation time varies by project size and type. A typical attic insulation project can be completed in 1-2 days. Whole-house insulation may take 3-5 days. We work efficiently to minimize disruption to your daily routine.',
  },
  {
    question: 'Do I need to remove old insulation before installing new?',
    answer:
      'Not always. In many cases, new insulation can be added over existing insulation. However, if the old insulation is damaged, moldy, or contaminated, we recommend removal first. We\'ll assess your situation during the free consultation.',
  },
  {
    question: 'What R-value do I need?',
    answer:
      'Recommended R-values vary by location and the area being insulated. For most climates, attics should have R-38 to R-60, walls R-13 to R-21, and floors R-25 to R-30. We\'ll recommend the appropriate R-value for your specific location and needs.',
  },
  {
    question: 'Is spray foam insulation safe?',
    answer:
      'While we don\'t currently offer spray foam insulation services, we focus on blown-in cellulose, which is completely safe, non-toxic, and made from recycled materials. Cellulose is treated with fire retardants and provides excellent insulation performance without any off-gassing concerns.',
  },
  {
    question: 'Will insulation help with noise reduction?',
    answer:
      'Yes! Blown-in cellulose insulation significantly reduces sound transmission. The dense, fibrous material provides excellent acoustic benefits, reducing noise from outside and between rooms in your home.',
  },
  {
    question: 'Do you offer financing options?',
    answer:
      'We work with several financing partners to help make your insulation project affordable. Many customers qualify for low-interest financing with flexible payment terms. Contact us to discuss financing options for your project.',
  },
  {
    question: 'How long does insulation last?',
    answer:
      'Blown-in cellulose insulation, when properly installed, can last 20-30 years or more with minimal maintenance. It maintains its R-value over time and won\'t settle significantly when installed to proper density.',
  },
  {
    question: 'Are there tax credits or rebates available?',
    answer:
      'Yes! Many insulation projects qualify for federal tax credits, utility rebates, and state incentives. These can significantly reduce your out-of-pocket costs. We can help you identify available programs and provide the necessary documentation.',
  },
  {
    question: 'Can insulation help prevent ice dams?',
    answer:
      'Absolutely! Proper attic insulation and ventilation are key to preventing ice dams. By keeping your attic cold in winter, insulation prevents the freeze-thaw cycle that causes ice dams and potential roof damage.',
  },
  {
    question: 'Do you work on commercial properties?',
    answer:
      'We primarily focus on residential attic insulation projects in the Missoula area. For larger commercial projects, please contact us to discuss your specific needs.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700">
              Find answers to common questions about our insulation services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full text-left px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900 pr-8">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform ${
                          openIndex === index ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-700 mb-6">
                We're here to help! Contact us for personalized answers to your specific questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton
                  variant="call"
                  className="bg-primary-600 text-white hover:bg-primary-700"
                />
                <CTAButton
                  variant="email"
                  className="bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
