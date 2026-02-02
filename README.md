# NorthPeak Insulation - Marketing Website

A modern, responsive, and mobile-first marketing website built with Next.js 14, TypeScript, and Tailwind CSS for NorthPeak Insulation business.

## Features

- **Modern Tech Stack**: Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS
- **Mobile-First Design**: Fully responsive with sticky mobile CTAs for maximum lead generation
- **Lead Generation**: Click-to-call/text buttons and contact form integrated with Resend
- **SEO Optimized**: 
  - Metadata and OpenGraph/Twitter cards
  - Sitemap.xml and robots.txt
  - JSON-LD LocalBusiness schema
- **Analytics**: Dynamic Google Analytics tracking based on environment variables
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Clean Design**: Local contractor aesthetic with inline SVGs and accessible color contrast

## Pages

- **Home**: Hero section with key CTAs, features, services overview
- **Services**: Detailed information about spray foam, blown-in, batt insulation, and removal services
- **Pricing**: Transparent pricing information and cost factors
- **Service Area**: Coverage information and service details
- **FAQ**: Frequently asked questions with accordion interface
- **Contact**: Contact form with Resend integration plus direct contact options

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/brownjake9888-ai/NorthPeakInsulation.git
cd NorthPeakInsulation
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file based on `.env.example`:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
# Public Environment Variables
NEXT_PUBLIC_PHONE_NUMBER="(555) 123-4567"
NEXT_PUBLIC_EMAIL="info@northpeakinsulation.com"
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="your-verification-code"

# Server-side Environment Variables
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxxxxxxxx"
RESEND_FROM_EMAIL="contact@yourdomain.com"
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Environment Variables

### Required Public Variables

- `NEXT_PUBLIC_PHONE_NUMBER`: Business phone number for click-to-call functionality
- `NEXT_PUBLIC_EMAIL`: Business email address for contact functionality

### Optional Public Variables

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics measurement ID (GA4)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: Google Search Console verification code

### Server-side Variables

- `RESEND_API_KEY`: API key for Resend email service (required for contact form)
- `RESEND_FROM_EMAIL`: Verified email address for sending emails via Resend

**Note**: The website works with fallback values if environment variables are not set, but it's recommended to configure them for production.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render
- Self-hosted with Node.js

## Setting Up Services

### Google Analytics

1. Create a GA4 property at [Google Analytics](https://analytics.google.com)
2. Copy your Measurement ID (format: G-XXXXXXXXXX)
3. Add it to `NEXT_PUBLIC_GA_MEASUREMENT_ID` in your environment variables

### Resend Email Service

1. Sign up at [Resend](https://resend.com)
2. Verify your domain or use their testing domain
3. Generate an API key
4. Add the API key to `RESEND_API_KEY` in your environment variables
5. Set `RESEND_FROM_EMAIL` to your verified email address

### Google Search Console

1. Verify your site at [Google Search Console](https://search.google.com/search-console)
2. Add the verification code to `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
3. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  secondary: {
    // Your secondary color shades
  },
}
```

### Content

Update page content in the respective files:
- Home: `app/page.tsx`
- Services: `app/services/page.tsx`
- Pricing: `app/pricing/page.tsx`
- Service Area: `app/service-area/page.tsx`
- FAQ: `app/faq/page.tsx`
- Contact: `app/contact/page.tsx`

### Business Information

Update the JSON-LD schema in `app/page.tsx` with your actual business details.

## Project Structure

```
NorthPeakInsulation/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── contact/           # Contact page
│   ├── faq/              # FAQ page
│   ├── pricing/          # Pricing page
│   ├── service-area/     # Service area page
│   ├── services/         # Services page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── robots.ts         # Robots.txt generator
│   └── sitemap.ts        # Sitemap generator
├── components/            # React components
│   ├── CTAButton.tsx     # Call-to-action button
│   ├── Footer.tsx        # Footer component
│   ├── GoogleAnalytics.tsx # GA tracking
│   ├── Header.tsx        # Header/navigation
│   └── MobileStickyCTA.tsx # Sticky mobile CTA
├── public/               # Static assets
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore rules
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies
├── postcss.config.js    # PostCSS configuration
├── README.md            # This file
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Accessibility

The website follows WCAG 2.1 AA standards:
- Proper semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus indicators
- Alt text for images (when images are added)

## Performance

- Optimized for Core Web Vitals
- Server-side rendering with Next.js
- Optimized images (use Next.js Image component when adding images)
- Minimal JavaScript bundle
- Tailwind CSS purging for production

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC

## Support

For questions or support, contact the development team or open an issue on GitHub.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Email service by [Resend](https://resend.com/)
- Analytics by [Google Analytics](https://analytics.google.com/)
