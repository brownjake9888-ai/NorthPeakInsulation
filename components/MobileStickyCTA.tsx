'use client';

import CTAButton from './CTAButton';
import { useEffect, useState } from 'react';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 md:hidden z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white shadow-lg border-t border-gray-200 p-4">
        <div className="flex gap-2">
          <CTAButton
            variant="call"
            className="flex-1 bg-primary-600 text-white hover:bg-primary-700"
          />
          <CTAButton
            variant="text"
            className="flex-1 bg-secondary-600 text-white hover:bg-secondary-700"
          />
        </div>
      </div>
    </div>
  );
}
