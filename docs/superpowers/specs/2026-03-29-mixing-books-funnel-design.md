# Mixing Books Funnel - Design Spec

**Date:** 2026-03-29
**Goal:** Lead generation for M Street Music studio + email list building for future upsell
**Approach:** Full Hormozi-style funnel (Approach C)

---

## Products

| Book | Price | Status | Role in funnel |
|------|-------|--------|----------------|
| The Home Studio Mixing Blueprint (42p) | Free (€0+) | Published, 10 downloads, 5/5 rating | Lead magnet |
| The Hybrid Studio Mixing Blueprint - Advanced (50p) | €80 (€28 with PROBUNDLE 65% off) | Published, 0 sales | Upsell product |

Vibe coding book ("Ship & Get Paid") is a separate audience - not part of this funnel.

---

## Architecture

### URL structure
- Landing page: `mstreetmusic.hr/mixing-books`
- Thank you page: `mstreetmusic.hr/mixing-books/thank-you`
- Hosted as static HTML/CSS/JS in `~/public_html/mixing-books/` on CroHost
- No connection to Next.js app

### Tech stack
- **Pages:** Static HTML/CSS/JS (no framework, no build process)
- **Email capture:** MailerLite embedded form (free tier: 1000 contacts, 12,000 emails/month, automations included)
- **PDF delivery:** MailerLite automation email with download link + direct download on thank-you page
- **Checkout:** Gumroad for Advanced book (existing product + PROBUNDLE coupon)
- **Analytics:** MailerLite open/click tracking + UTM parameters

### Funnel flow

```
Instagram / Facebook / organic traffic
        |
        v
Landing page (mstreetmusic.hr/mixing-books)
  - MailerLite embedded form (name + email)
  - Submit triggers MailerLite automation
        |
        v
Thank you page (mstreetmusic.hr/mixing-books/thank-you)
  - Download confirmation ("check your inbox")
  - Upsell: Advanced Edition at €28 (PROBUNDLE)
  - CTA → Gumroad checkout with coupon code
        |
        v
MailerLite automation (7 emails over 14 days)
  - Nurture → educate → upsell → studio bridge
        |
        v
Post-purchase sequence (3 emails for Advanced buyers)
  - Onboard → deepen → studio services CTA
```

---

## Landing page (mstreetmusic.hr/mixing-books)

Language: English. Single goal: capture email.

### Above the fold
- **Headline:** Benefit-driven, outcome-focused (e.g., "Learn the mixing workflow professional studios use - free")
- **Subheadline:** What they get ("A 42-page guide: from signal chain to Spotify-ready master")
- **Hero image:** 3D book mockup
- **CTA:** MailerLite form - name + email + "Send me the free guide"
- **Social proof mini:** "5/5 on Gumroad" + "Downloaded by producers in 6 countries"

### Below the fold
- **"What you'll learn" section:** 6-8 benefit bullets (not features)
  - e.g., "How to control dynamics so your vocal sits perfectly in the mix"
  - e.g., "Exact LUFS targets and export settings for Spotify, Apple Music, and YouTube"
- **Author/authority section:** Photo (studio or personal), "Kristijan Sinkovic, M Street Music studio, Krapina", brief paragraph about professional studio and commercial releases
- **Social proof:** Gumroad review screenshot (5/5 rating)
- **Value stack:** Free book (42 pages, valued at €XX) - today free
- **FAQ (2-3 questions):**
  - "Is this really free?"
  - "Who is this guide for?"
  - "Do I need expensive gear?"
- **Final CTA:** Repeated form or anchor link to top form

### Design principles
- Clean, professional, not cluttered
- One CTA per viewport
- Mobile-first responsive
- Fast loading (static, no framework overhead)

---

## Thank you page (mstreetmusic.hr/mixing-books/thank-you)

### Confirmation block
- "Check your inbox! Your free copy of The Home Studio Mixing Blueprint is on its way."

### Upsell block (immediately below)
- **Headline:** "Ready to go beyond plugin-only mixing?"
- **Subheadline:** "The Advanced Edition covers the hybrid analog-digital workflow used on commercial releases"
- **4 benefit bullets:**
  - "Real hardware signal chains - Apollo, SSL Fusion, analog summing"
  - "Parallel compression, mid/side processing, saturation science"
  - "Stem mastering and vinyl mastering workflows"
  - "50 pages with real equipment photos and A/B testing methods"
- **Price with anchor:** ~~€80~~ **€28** with code PROBUNDLE
- **CTA button:** "Get the Advanced Edition - €28" → Gumroad link with coupon
- **Risk reversal:** Gumroad 30-day refund policy mention

### Design principles
- Natural continuation of landing page aesthetic
- Upsell feels like a helpful recommendation, not aggressive ad
- Single CTA, no other distractions

---

## Email sequence - Free book nurture (7 emails, 14 days)

Triggered by: new subscriber joins MailerLite list.

### Email #1 - Delivery (Day 0, immediate)
- **Subject:** "Your Home Studio Mixing Blueprint is here"
- PDF attachment or download link
- Quick win: "Start with Chapter 3 (the mixing system) - that's where most people see the biggest improvement"
- Brief author intro and what to expect from upcoming emails
- PS: "Reply and tell me what you're working on right now - I read every email"

### Email #2 - Problem awareness (Day 2)
- **Subject:** "Why your mixes sound different on every speaker"
- Educational content about the translation problem
- Subtly points to the ceiling of plugin-only approach
- No pitch

### Email #3 - Deeper value (Day 4)
- **Subject:** "The one EQ move that cleans up 90% of muddy mixes"
- Specific actionable technique they can apply immediately
- Builds authority
- No pitch

### Email #4 - Case study (Day 7)
- **Subject:** "What changed when I added analog to the chain"
- Personal story of transition from plugin-only to hybrid
- Real A/B differences, not marketing fluff
- Soft mention: "I wrote about exactly how this works in the Advanced Edition"

### Email #5 - Soft pitch (Day 9)
- **Subject:** "Plugin-only vs hybrid: where the ceiling is"
- Educational content about limits of digital summing, plugin EQ, ITB mastering
- Positions Advanced Edition as logical next step
- CTA: "If you want to go deeper: [Gumroad link with PROBUNDLE] - €28 instead of €80"

### Email #6 - Direct offer (Day 11)
- **Subject:** "The Advanced Mixing Blueprint - 65% off"
- Value stack of what's inside (50 pages)
- ~~€80~~ €28 with PROBUNDLE
- Social proof if available
- Clear single CTA

### Email #7 - Bridge to studio (Day 14)
- **Subject:** "When DIY mixing isn't enough"
- Honest conversation about DIY vs professional studio
- "If you ever want a professional set of ears on your mix..." → M Street Music services
- Closes the loop: free book → paid book → studio client

### Metric targets
- Open rate: 40%+ on #1, 25%+ on rest
- Click rate on upsell (#5, #6): 5-10%
- Conversion to Advanced book: 3-5% of list

---

## Email sequence - Post-purchase (Advanced buyers, 3 emails)

Triggered by: manual MailerLite tag (v1). Gumroad webhook/Zapier automation is out of scope for first version.

### Email P1 - Delivery + onboarding (Day 0)
- **Subject:** "Your Advanced Mixing Blueprint - start here"
- Purchase confirmation, PDF link
- "Start with the analog summing chapter - it'll change how you think about your mix bus"

### Email P2 - Deeper value (Day 3)
- **Subject:** "The one technique worth the price alone"
- Deepens one topic from the book (e.g., parallel compression)
- Shows expertise beyond the book

### Email P3 - Studio bridge (Day 7)
- **Subject:** "Want a professional mix of your next track?"
- Concrete offer: free 30-second preview mix, or discount on first mixing/mastering session
- CTA → mstreetmusic.hr contact

---

## PDF edits - Ceiling moments in free book

4 inline ceiling moments + 1 new closing chapter. Tone: honest acknowledgment of limits, not hard sell.

### Ceiling moment 1 - End of EQ section
> "This approach works great in the box. But if you've ever wondered why commercial mixes have that 'expensive' top-end clarity - it's often because analog EQ curves behave differently than plugins. I break down exactly how in The Advanced Edition."

### Ceiling moment 2 - End of compression section
> "Plugin compressors handle the math perfectly. What they can't replicate as easily is the harmonic content that hardware units add while compressing - that 'glue' you hear on records mixed through an SSL bus compressor. More on this in The Hybrid Studio Blueprint."

### Ceiling moment 3 - Mastering section
> "Self-mastering your own work is absolutely viable for streaming releases. But there's a reason professional masters sound different - stem mastering through analog gear gives you control that a single stereo bounce can't. I cover the full stem mastering workflow in the Advanced Edition."

### Ceiling moment 4 - Bus processing / summing
> "Your DAW sums audio with mathematical precision. Analog summing adds subtle harmonic interaction between channels that changes the depth and dimension of a mix. It's the single biggest 'secret' of expensive studios - and the core topic of my Advanced guide."

### New chapter - "What's Next" (1-2 pages at end of book)
- Title: "When Plugin-Only Stops Being Enough"
- Symptoms: mixes sound "flat" next to commercial references, loudness compromises, clients asking for "analog warmth"
- Positions Advanced Edition as the logical next step
- CTA with Gumroad link + PROBUNDLE coupon code

### Principles
- Never say "this approach doesn't work" - say "this works, but there's a next level"
- Each ceiling moment is self-contained - the free book remains valuable on its own
- Honest tone, not marketing-speak

---

## Out of scope (future iterations)
- Bonus content (preset packs, signal flow diagrams, cheat sheets)
- A/B testing landing page variants
- Paid ads (Facebook/Instagram)
- Video content / course as next tier upsell
- Zapier/webhook automation for Gumroad → MailerLite sync (manual tag for now)
- Vibe coding book funnel (separate project, different audience)
