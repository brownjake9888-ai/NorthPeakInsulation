# Security Notes

## Known Vulnerabilities

### Next.js 14.2.35
There is a known high severity vulnerability in Next.js 14.2.35 related to:
- DoS via Image Optimizer remotePatterns (self-hosted only)
- HTTP request deserialization DoS (React Server Components)

**Impact**: These vulnerabilities primarily affect self-hosted applications. When deployed to platforms like Vercel, Netlify, or other managed hosting services, these vulnerabilities are mitigated by the platform's infrastructure.

**Recommendation**: 
- For immediate deployment: Deploy to Vercel or Netlify (recommended)
- For self-hosted deployment: Consider upgrading to Next.js 15+ (breaking changes may apply)
- Run `npm audit fix --force` to upgrade (requires testing after upgrade)

## Security Best Practices

1. **Environment Variables**: Never commit `.env.local` or any file containing API keys
2. **API Keys**: Store all sensitive keys in environment variables
3. **Resend API**: Keep your Resend API key secure and rotate periodically
4. **CORS**: API routes are protected by Next.js's built-in security
5. **Contact Form**: Implements basic validation and sanitization

## Reporting Security Issues

If you discover a security vulnerability, please contact the development team immediately.
