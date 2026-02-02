'use client';

interface CTAButtonProps {
  variant?: 'call' | 'text' | 'email';
  className?: string;
  children?: React.ReactNode;
}

export default function CTAButton({ variant = 'call', className = '', children }: CTAButtonProps) {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '406-560-5214';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'info@northpeakinsulation.com';

  const getHref = () => {
    switch (variant) {
      case 'call':
        return `tel:${phoneNumber.replace(/\D/g, '')}`;
      case 'text':
        return `sms:${phoneNumber.replace(/\D/g, '')}`;
      case 'email':
        return `mailto:${email}`;
      default:
        return `tel:${phoneNumber.replace(/\D/g, '')}`;
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'call':
        return (
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        );
      case 'text':
        return (
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        );
      case 'email':
        return (
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
    }
  };

  const getText = () => {
    if (children) return children;
    switch (variant) {
      case 'call':
        return `Call/Text ${phoneNumber}`;
      case 'text':
        return 'Text Us';
      case 'email':
        return 'Email Us';
    }
  };

  const getAriaLabel = () => {
    switch (variant) {
      case 'call':
        return `Call NorthPeak Insulation at ${phoneNumber}`;
      case 'text':
        return `Send text message to NorthPeak Insulation at ${phoneNumber}`;
      case 'email':
        return `Email NorthPeak Insulation at ${email}`;
    }
  };

  return (
    <a
      href={getHref()}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition ${className}`}
      aria-label={getAriaLabel()}
    >
      {getIcon()}
      {getText()}
    </a>
  );
}
