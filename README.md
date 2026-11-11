# Axivy Audit Pro

A conversion-focused business-audit product for small businesses, agencies and freelancers. The current release is a production-ready landing-page foundation for the product, built with Next.js, TypeScript and Tailwind CSS.

## Current MVP

- Responsive Axivy landing page with audit-focused messaging.
- Website-address validation in the audit CTA.
- SEO metadata, `robots.txt`, sitemap and a JSON health endpoint at `/api/health`.
- Accessible focus states, status messages and a custom 404 page.

The form currently validates a URL and clearly indicates that the live scan is the next milestone. It does not claim to perform a scan or store a lead yet.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run build
```

## Next product milestones

1. URL normalisation and SSRF protection.
2. Background audit worker with Playwright and PageSpeed data.
3. Scoring engine and issue/recommendation library.
4. PostgreSQL/Prisma data model, lead capture and consent.
5. Authenticated admin dashboard, PDF reports and multilingual content.

## Deployment

This is a standard Next.js application and can deploy to Vercel without custom build settings. Configure the production URL as `NEXT_PUBLIC_APP_URL` once a custom domain is chosen.
