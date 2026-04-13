# M Street Music — From WordPress Graveyard to High-Performance Studio Platform

## The Problem

M Street Music, a professional recording studio in Krapina, Croatia, was running on an aging WordPress site that had become a liability. Google Search Console flagged 168 broken URLs - remnants of old WordPress routes for events, galleries, product tags, and WooCommerce artifacts. Performance was poor, with no programmatic content strategy to capture long-tail search traffic. The studio had books on Gumroad but no funnel connecting content to services. In short: a great studio with zero digital infrastructure to match.

## The Solution

I rebuilt the entire platform from scratch using Next.js 14 with App Router, deployed on CroHost shared hosting via Passenger and a custom Node.js server. The site went from roughly 5 hand-built pages to over 100 programmatically generated ones:

- **17 service landing pages** covering everything from vocal recording to Dolby Atmos mixing, each with structured data, FAQs, and internal cross-links
- **62 audio glossary terms** in Croatian, targeting long-tail educational queries with DefinedTerm schema markup
- **5 equipment pages** featuring the studio's signal chain, giving potential clients transparency into the gear behind the sound
- **A Hormozi-style lead magnet funnel** - a free mixing ebook landing page with email capture (MailerLite), a thank-you page with an upsell to the Advanced Edition, and 10 automated emails across two sequences (nurture + post-purchase)

## Tech Decisions That Mattered

**Next.js on shared hosting** was an unconventional choice. Passenger doesn't support ISR reliably, so I leaned into static generation with full rebuilds. When remote builds hit memory limits (SIGABRT), I built a fallback: local builds with rsync to push the `.next` directory directly. A cron job pings the app every 4 minutes to avoid Passenger cold starts.

**Static HTML for the funnel** instead of routing it through Next.js. Two pages don't need a framework - Apache serves them before Passenger even wakes up, giving instant load times for the most conversion-critical pages.

**SQLite over Postgres** for the admin dashboard, blog, and a missing-term tracker that logs glossary searches with zero results - a lightweight feedback loop for content expansion.

## Results

- **Lighthouse scores**: 99 Performance, 100 Accessibility, 100 Best Practices, 100 SEO
- **LCP dropped from 7.5s to 2.1s**, TTFB from 6.6s to ~2s after diagnosing a standalone mode misconfiguration
- **168 legacy WordPress URLs** cleanly redirected via .htaccess with proper 301s
- **103+ indexed URLs** in sitemap, up from a handful
- **Full lead generation pipeline** live: landing page, email automation, Meta Pixel tracking, and a value ladder from free content to paid studio services

The result is a platform that does what a recording studio site rarely does - it actively generates leads, ranks for dozens of relevant terms, and runs reliably on budget hosting.
