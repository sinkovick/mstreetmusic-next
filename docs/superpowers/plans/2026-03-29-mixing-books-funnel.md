# Mixing Books Funnel - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Hormozi-style lead magnet funnel that captures emails via a free mixing ebook, nurtures with a 7-email sequence, upsells the Advanced Edition at EUR28, and bridges to M Street Music studio services.

**Architecture:** Static HTML/CSS landing page + thank-you page hosted on CroHost at `/mixing-books`. MailerLite handles email capture, automation sequences, and PDF delivery. Gumroad handles Advanced book checkout. No framework, no build process.

**Tech Stack:** Static HTML/CSS/JS, MailerLite Free (1000 contacts, 12k emails/month, automations), Gumroad (checkout), CroHost shared hosting

**Design Spec:** `docs/superpowers/specs/2026-03-29-mixing-books-funnel-design.md`

---

## File Structure

```
public_html/mixing-books/
  index.html          -- Landing page (email capture)
  thank-you/
    index.html        -- Thank-you page (download + upsell)
  assets/
    style.css         -- Shared styles (both pages)
    book-mockup.png   -- 3D book cover image
  downloads/
    home-studio-mixing-blueprint.pdf  -- Free book PDF
```

---

### Task 1: MailerLite account + automation setup (manual)

**Files:** None (MailerLite dashboard)

This task is done in the browser at https://app.mailerlite.com. No code.

- [ ] **Step 1: Create MailerLite account**

Go to https://www.mailerlite.com/signup. Sign up with sinkovic.kristijan@gmail.com. Verify email. Complete onboarding (select "Creator/Author" category).

- [ ] **Step 2: Configure sender**

Go to Settings > Domains. Add and verify sender email (e.g., kristijan@mstreetmusic.hr or sinkovic.kristijan@gmail.com). This is the "From" address on all emails.

- [ ] **Step 3: Create subscriber group**

Go to Subscribers > Groups > Create group. Name: "Mixing Blueprint Downloads". This group will be the target for the embedded form.

- [ ] **Step 4: Create embedded form**

Go to Forms > Embedded forms > Create. Configure:
- Fields: Email (required) + First name (optional)
- Group: "Mixing Blueprint Downloads"
- After submit: Redirect to custom URL `https://mstreetmusic.hr/mixing-books/thank-you`
- Design: Minimal (we'll style it ourselves in CSS)
- Copy the HTML embed code. It will look like:

```html
<form action="https://assets.mailerlite.com/jsonp/ACCOUNT_ID/forms/FORM_ID/subscribe"
      method="post" target="_blank">
  <input type="email" name="fields[email]" placeholder="Your email" required>
  <input type="text" name="fields[name]" placeholder="Your name">
  <button type="submit">Send me the free guide</button>
</form>
```

Save the actual embed code - you'll paste it into the landing page HTML in Task 3.

- [ ] **Step 5: Create nurture automation (7 emails)**

Go to Automations > Create. Trigger: "When subscriber joins group: Mixing Blueprint Downloads".

Add 7 email steps with delays:

| Step | Delay | Subject | Content |
|------|-------|---------|---------|
| Email 1 | Immediate | Your Home Studio Mixing Blueprint is here | PDF link + quick win tip |
| Email 2 | 2 days | Why your mixes sound different on every speaker | Translation problem education |
| Email 3 | 2 days | The one EQ move that cleans up 90% of muddy mixes | Actionable technique |
| Email 4 | 3 days | What changed when I added analog to the chain | Personal story + soft mention |
| Email 5 | 2 days | Plugin-only vs hybrid: where the ceiling is | Education + soft CTA |
| Email 6 | 2 days | The Advanced Mixing Blueprint - 65% off | Direct offer + value stack |
| Email 7 | 3 days | When DIY mixing isn't enough | Studio bridge CTA |

Full email copy is in Task 5. For now, create the automation skeleton with correct delays and subject lines.

- [ ] **Step 6: Create post-purchase automation (3 emails)**

Create a second automation. Trigger: "When subscriber gets tag: advanced-buyer".

| Step | Delay | Subject |
|------|-------|---------|
| Email P1 | Immediate | Your Advanced Mixing Blueprint - start here |
| Email P2 | 3 days | The one technique worth the price alone |
| Email P3 | 4 days | Want a professional mix of your next track? |

This automation triggers when you manually tag a buyer as "advanced-buyer" in MailerLite after a Gumroad sale.

- [ ] **Step 7: Activate both automations**

Review both automations. Set status to Active. Test with a test email to verify Email 1 sends immediately.

---

### Task 2: Create book mockup image

**Files:**
- Create: `public_html/mixing-books/assets/book-mockup.png`

- [ ] **Step 1: Generate 3D book mockup**

Use a free mockup generator (e.g., DIY Book Covers, Canva, or Placeit free tier):
- Upload the existing Gumroad cover image from: `https://public-files.gumroad.com/5vn8rlbvrh9ms6o27t1wuejoxarb`
- Generate a 3D perspective view (angled, with shadow)
- Export as PNG, transparent background if possible
- Target size: 600x800px, optimize to under 200KB

- [ ] **Step 2: Save to assets folder**

```bash
mkdir -p /Users/kristijansinkovic/Claude/Projekti/mstreetmusic.hr/public_html/mixing-books/assets
# Save the generated mockup as book-mockup.png in the assets folder
```

---

### Task 3: Build landing page

**Files:**
- Create: `public_html/mixing-books/index.html`
- Create: `public_html/mixing-books/assets/style.css`

- [ ] **Step 1: Create the CSS file**

Create `public_html/mixing-books/assets/style.css` with styles matching the M Street Music design system:

```css
/* === RESET & BASE === */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --red-accent: #991B1B;
  --red-hover: #7F1D1D;
  --dark-bg: #0F172A;
  --light-bg: #F8FAFC;
  --white: #FFFFFF;
  --gray-100: #F1F5F9;
  --gray-200: #E2E8F0;
  --gray-400: #94A3B8;
  --gray-500: #64748B;
  --gray-600: #475569;
  --gray-900: #0F172A;
  --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-heading: 'Bebas Neue', Impact, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-900);
  background: var(--white);
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--red-accent);
  text-decoration: none;
}

/* === LAYOUT === */
.container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
}

/* === HERO SECTION === */
.hero {
  background: var(--dark-bg);
  color: var(--white);
  padding: 80px 24px;
  text-align: center;
}

.hero-inner {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
}

.hero-text {
  flex: 1;
  text-align: left;
}

.hero-image {
  flex: 0 0 320px;
}

.hero-image img {
  max-width: 320px;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,0.4));
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: clamp(40px, 6vw, 64px);
  line-height: 1;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.hero h1 span {
  color: var(--red-accent);
}

.hero .subtitle {
  font-size: 18px;
  color: var(--gray-400);
  margin-bottom: 32px;
  line-height: 1.6;
}

.hero .social-proof-mini {
  font-size: 14px;
  color: var(--gray-400);
  margin-top: 16px;
}

.hero .social-proof-mini strong {
  color: var(--white);
}

/* === FORM === */
.signup-form {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.signup-form input {
  flex: 1;
  min-width: 180px;
  padding: 14px 18px;
  border: 2px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  background: rgba(255,255,255,0.08);
  color: var(--white);
  font-family: var(--font-body);
  font-size: 15px;
  transition: border-color 0.2s ease;
}

.signup-form input::placeholder {
  color: var(--gray-500);
}

.signup-form input:focus {
  outline: none;
  border-color: var(--red-accent);
}

.signup-form button {
  padding: 14px 32px;
  background: var(--red-accent);
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  white-space: nowrap;
}

.signup-form button:hover {
  background: var(--red-hover);
  transform: translateY(-2px);
}

/* === SECTIONS === */
.section {
  padding: 80px 24px;
}

.section-light {
  background: var(--light-bg);
}

.section-title {
  font-family: var(--font-heading);
  font-size: 36px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 48px;
}

/* === BENEFITS === */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.benefit-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.benefit-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: rgba(153, 27, 27, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red-accent);
  font-size: 18px;
}

.benefit-text h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.benefit-text p {
  font-size: 14px;
  color: var(--gray-600);
  line-height: 1.5;
}

/* === AUTHOR === */
.author-section {
  display: flex;
  gap: 40px;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

.author-photo {
  flex: 0 0 200px;
  border-radius: 8px;
  overflow: hidden;
}

.author-info h3 {
  font-family: var(--font-heading);
  font-size: 28px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.author-info .author-title {
  color: var(--red-accent);
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.author-info p {
  color: var(--gray-600);
  font-size: 15px;
}

/* === FAQ === */
.faq-list {
  max-width: 700px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid var(--gray-200);
}

.faq-item summary {
  padding: 20px 0;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  list-style: none;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary::before {
  content: '+';
  display: inline-block;
  width: 24px;
  color: var(--red-accent);
  font-weight: 700;
  font-size: 18px;
}

.faq-item[open] summary::before {
  content: '-';
}

.faq-answer {
  padding: 0 0 20px 24px;
  color: var(--gray-600);
  font-size: 15px;
}

/* === FINAL CTA === */
.final-cta {
  background: var(--dark-bg);
  color: var(--white);
  padding: 60px 24px;
  text-align: center;
}

.final-cta h2 {
  font-family: var(--font-heading);
  font-size: 36px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.final-cta p {
  color: var(--gray-400);
  margin-bottom: 32px;
  font-size: 16px;
}

.final-cta .signup-form {
  max-width: 600px;
  margin: 0 auto;
  justify-content: center;
}

/* === THANK YOU PAGE === */
.thankyou-hero {
  background: var(--dark-bg);
  color: var(--white);
  padding: 80px 24px;
  text-align: center;
}

.thankyou-hero h1 {
  font-family: var(--font-heading);
  font-size: clamp(36px, 5vw, 56px);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.thankyou-hero p {
  color: var(--gray-400);
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto 32px;
}

.download-btn {
  display: inline-block;
  padding: 16px 40px;
  background: var(--red-accent);
  color: var(--white);
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: background 0.2s ease, transform 0.2s ease;
}

.download-btn:hover {
  background: var(--red-hover);
  transform: translateY(-2px);
  color: var(--white);
}

/* === UPSELL === */
.upsell {
  padding: 80px 24px;
  background: var(--light-bg);
}

.upsell-card {
  max-width: 700px;
  margin: 0 auto;
  background: var(--white);
  border-radius: 16px;
  padding: 48px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
}

.upsell-card h2 {
  font-family: var(--font-heading);
  font-size: 32px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.upsell-card .upsell-subtitle {
  color: var(--gray-600);
  font-size: 16px;
  margin-bottom: 24px;
}

.upsell-card ul {
  list-style: none;
  margin-bottom: 32px;
}

.upsell-card li {
  padding: 8px 0;
  font-size: 15px;
  color: var(--gray-600);
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.upsell-card li::before {
  content: '\2713';
  color: var(--red-accent);
  font-weight: 700;
  flex-shrink: 0;
}

.price-block {
  text-align: center;
  margin-bottom: 24px;
}

.price-original {
  font-size: 20px;
  color: var(--gray-400);
  text-decoration: line-through;
  margin-right: 12px;
}

.price-current {
  font-size: 40px;
  font-weight: 700;
  color: var(--gray-900);
}

.price-label {
  display: block;
  font-size: 14px;
  color: var(--gray-500);
  margin-top: 4px;
}

.upsell-cta {
  display: block;
  width: 100%;
  padding: 16px;
  background: var(--red-accent);
  color: var(--white);
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  transition: background 0.2s ease, transform 0.2s ease;
}

.upsell-cta:hover {
  background: var(--red-hover);
  transform: translateY(-2px);
  color: var(--white);
}

.upsell-guarantee {
  text-align: center;
  margin-top: 16px;
  font-size: 13px;
  color: var(--gray-500);
}

/* === FOOTER === */
.funnel-footer {
  padding: 32px 24px;
  text-align: center;
  font-size: 13px;
  color: var(--gray-500);
  border-top: 1px solid var(--gray-200);
}

.funnel-footer a {
  color: var(--gray-500);
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .hero-inner {
    flex-direction: column-reverse;
    text-align: center;
  }

  .hero-text {
    text-align: center;
  }

  .hero-image {
    flex: none;
  }

  .hero-image img {
    max-width: 240px;
    margin: 0 auto;
  }

  .signup-form {
    flex-direction: column;
  }

  .signup-form input,
  .signup-form button {
    width: 100%;
    min-width: unset;
  }

  .author-section {
    flex-direction: column;
    text-align: center;
  }

  .author-photo {
    flex: none;
    width: 160px;
    margin: 0 auto;
  }

  .upsell-card {
    padding: 32px 24px;
  }
}
```

- [ ] **Step 2: Create the landing page HTML**

Create `public_html/mixing-books/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Home Studio Mixing Blueprint - Free Guide | M Street Music</title>
  <meta name="description" content="A free 42-page guide to professional mixing in your home studio. From signal chain to Spotify-ready master. No expensive gear required.">

  <!-- OG Tags -->
  <meta property="og:title" content="The Home Studio Mixing Blueprint - Free 42-Page Guide">
  <meta property="og:description" content="The complete recording-to-master workflow that works in a home studio. Download free.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://mstreetmusic.hr/mixing-books">
  <meta property="og:image" content="https://mstreetmusic.hr/mixing-books/assets/book-mockup.png">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="assets/style.css">

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico">
</head>
<body>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-text">
        <h1>Learn the mixing workflow <span>professional studios use</span></h1>
        <p class="subtitle">A free 42-page guide that takes you from raw recording to streaming-ready master. No expensive gear. No theory without application.</p>

        <!-- MailerLite embedded form - replace action URL after Task 1 -->
        <form class="signup-form" action="MAILERLITE_FORM_ACTION_URL" method="post" target="_blank">
          <input type="email" name="fields[email]" placeholder="Your email" required>
          <input type="text" name="fields[name]" placeholder="First name">
          <button type="submit">Send me the free guide</button>
        </form>

        <p class="social-proof-mini"><strong>5/5</strong> on Gumroad &middot; Downloaded by producers in <strong>6 countries</strong></p>
      </div>
      <div class="hero-image">
        <img src="assets/book-mockup.png" alt="The Home Studio Mixing Blueprint - free ebook cover" width="320" height="427">
      </div>
    </div>
  </section>

  <!-- WHAT YOU'LL LEARN -->
  <section class="section section-light">
    <div class="container">
      <h2 class="section-title">What you'll learn</h2>
      <div class="benefits-grid">
        <div class="benefit-item">
          <div class="benefit-icon">&#127897;</div>
          <div class="benefit-text">
            <h3>Signal chain that makes sense</h3>
            <p>Understand what happens to your audio at every stage - and why each step matters for the final sound.</p>
          </div>
        </div>
        <div class="benefit-item">
          <div class="benefit-icon">&#127911;</div>
          <div class="benefit-text">
            <h3>Recording done right</h3>
            <p>Mic selection, gain staging, and room acoustics on a budget. Get it right at the source.</p>
          </div>
        </div>
        <div class="benefit-item">
          <div class="benefit-icon">&#127899;</div>
          <div class="benefit-text">
            <h3>A mixing system, not random tips</h3>
            <p>EQ, compression, reverb, automation, and bus processing - in the right order, every time.</p>
          </div>
        </div>
        <div class="benefit-item">
          <div class="benefit-icon">&#9899;</div>
          <div class="benefit-text">
            <h3>Master for streaming platforms</h3>
            <p>Exact LUFS targets and export settings for Spotify, Apple Music, and YouTube.</p>
          </div>
        </div>
        <div class="benefit-item">
          <div class="benefit-icon">&#128176;</div>
          <div class="benefit-text">
            <h3>Budget gear that delivers</h3>
            <p>Interfaces, mics, monitors, and free plugins that compete with paid alternatives.</p>
          </div>
        </div>
        <div class="benefit-item">
          <div class="benefit-icon">&#9989;</div>
          <div class="benefit-text">
            <h3>Key takeaways per chapter</h3>
            <p>Quick reference cards at the end of every section. Pull them up during your sessions.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- AUTHOR -->
  <section class="section">
    <div class="container">
      <div class="author-section">
        <div class="author-photo">
          <img src="/images/gallery/TOM08101.webp" alt="Kristijan Sinkovic in M Street Music studio" width="200" height="200" style="object-fit:cover; aspect-ratio:1;">
        </div>
        <div class="author-info">
          <h3>Kristijan Sinkovic</h3>
          <p class="author-title">M Street Music Studio, Krapina</p>
          <p>I run a professional recording studio with an analog-digital hybrid setup. This guide is built from real sessions, real clients, and real mistakes - not theory from a textbook. Every technique in here is something I use on commercial releases.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section section-light">
    <div class="container">
      <h2 class="section-title">Common questions</h2>
      <div class="faq-list">
        <details class="faq-item">
          <summary>Is this really free?</summary>
          <div class="faq-answer">Yes. No credit card, no hidden upsell wall. Enter your email, get the 42-page PDF. I wrote this as a resource for the home studio community.</div>
        </details>
        <details class="faq-item">
          <summary>Who is this guide for?</summary>
          <div class="faq-answer">Anyone mixing music in a home studio - whether you're just starting or you've been at it for a while but your mixes aren't translating. The guide assumes basic DAW knowledge but nothing more.</div>
        </details>
        <details class="faq-item">
          <summary>Do I need expensive gear?</summary>
          <div class="faq-answer">No. The entire guide is built around a plugin-only workflow. There's a gear chapter with budget recommendations, but everything works with what you already have.</div>
        </details>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="final-cta">
    <h2>Get the free guide</h2>
    <p>42 pages. No fluff. From recording to master.</p>
    <!-- Duplicate MailerLite form - same action URL -->
    <form class="signup-form" action="MAILERLITE_FORM_ACTION_URL" method="post" target="_blank">
      <input type="email" name="fields[email]" placeholder="Your email" required>
      <input type="text" name="fields[name]" placeholder="First name">
      <button type="submit">Send me the free guide</button>
    </form>
  </section>

  <!-- FOOTER -->
  <footer class="funnel-footer">
    <p>&copy; 2026 <a href="https://mstreetmusic.hr">M Street Music</a>, Krapina. All rights reserved.</p>
  </footer>

</body>
</html>
```

- [ ] **Step 3: Verify locally**

Open the file in a browser to check layout, responsiveness, and styling:

```bash
open /Users/kristijansinkovic/Claude/Projekti/mstreetmusic.hr/public_html/mixing-books/index.html
```

Check: desktop layout (hero side-by-side), mobile layout (stacked), form fields visible, all sections render.

---

### Task 4: Build thank-you page

**Files:**
- Create: `public_html/mixing-books/thank-you/index.html`

- [ ] **Step 1: Create the thank-you page HTML**

Create `public_html/mixing-books/thank-you/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your guide is on the way | M Street Music</title>
  <meta name="robots" content="noindex, nofollow">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="../assets/style.css">

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico">
</head>
<body>

  <!-- CONFIRMATION -->
  <section class="thankyou-hero">
    <h1>You're in!</h1>
    <p>Check your inbox - your free copy of The Home Studio Mixing Blueprint is on its way. While you wait, you can also download it directly:</p>
    <a href="../downloads/home-studio-mixing-blueprint.pdf" class="download-btn" download>Download the PDF now</a>
  </section>

  <!-- UPSELL -->
  <section class="upsell">
    <div class="upsell-card">
      <h2>Ready to go beyond plugin-only mixing?</h2>
      <p class="upsell-subtitle">The Advanced Edition covers the hybrid analog-digital workflow used on commercial releases.</p>

      <ul>
        <li>Real hardware signal chains - Apollo x6, SSL Fusion, analog summing, Tegeler Creme</li>
        <li>Parallel compression, mid/side processing, and saturation science (tube vs transformer vs tape)</li>
        <li>Stem mastering and vinyl mastering workflows with format-specific specs</li>
        <li>50 pages with real equipment photos, A/B testing methods, and "when NOT to use it" guidance</li>
      </ul>

      <div class="price-block">
        <span class="price-original">&euro;80</span>
        <span class="price-current">&euro;28</span>
        <span class="price-label">Use code PROBUNDLE at checkout</span>
      </div>

      <a href="https://kristijansinkovic.gumroad.com/l/xxhutb?code=PROBUNDLE" class="upsell-cta" target="_blank" rel="noopener">Get the Advanced Edition - &euro;28</a>

      <p class="upsell-guarantee">30-day money-back guarantee via Gumroad. No questions asked.</p>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="funnel-footer">
    <p>&copy; 2026 <a href="https://mstreetmusic.hr">M Street Music</a>, Krapina. All rights reserved.</p>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Verify locally**

```bash
open /Users/kristijansinkovic/Claude/Projekti/mstreetmusic.hr/public_html/mixing-books/thank-you/index.html
```

Check: confirmation message visible, download link works, upsell card renders cleanly, Gumroad link includes `?code=PROBUNDLE`, mobile responsive.

---

### Task 5: Write email copy (all 10 emails)

**Files:**
- Create: `docs/email-sequences/nurture-sequence.md`
- Create: `docs/email-sequences/post-purchase-sequence.md`

These are reference documents. The actual content gets pasted into MailerLite's email editor.

- [ ] **Step 1: Write nurture sequence (7 emails)**

Create `docs/email-sequences/nurture-sequence.md` with full email copy for all 7 emails. Each email should include:
- Subject line
- Preview text
- Full body copy (plain text format, MailerLite will handle formatting)
- CTA link where applicable

Content direction per email (detailed copy to be written through copywriting skill):

**Email 1 - Delivery:** PDF download link, "start with chapter 3" tip, intro to who you are, what to expect in upcoming emails, PS asking them to reply with what they're working on.

**Email 2 - Problem awareness:** Teaching about why mixes don't translate across speakers. Room acoustics, monitoring limitations, referencing techniques. Pure value, no pitch.

**Email 3 - Quick win:** One specific EQ technique (e.g., high-pass everything, or the subtractive EQ sweep method). Step-by-step, actionable. Pure value, no pitch.

**Email 4 - Story:** Your personal journey from plugin-only to hybrid. What you heard change. Specific before/after example. Natural mention of "I wrote about this in detail in the Advanced Edition."

**Email 5 - Soft pitch:** Where digital mixing hits its ceiling. Analog summing, harmonic saturation, hardware compression character. Educational but positions Advanced Edition. CTA: Gumroad link with PROBUNDLE.

**Email 6 - Direct offer:** Value stack of Advanced Edition contents. Price anchor (~~EUR80~~ EUR28). Testimonial/review if available. Single CTA to Gumroad.

**Email 7 - Studio bridge:** When to stop DIY and hire a professional. Signs your mix needs outside ears. Soft pitch for M Street Music services. Link to mstreetmusic.hr.

- [ ] **Step 2: Write post-purchase sequence (3 emails)**

Create `docs/email-sequences/post-purchase-sequence.md`:

**Email P1 - Onboarding:** Start with analog summing chapter. Quick tip for applying one technique immediately.

**Email P2 - Deep value:** Expand on parallel compression (or another key topic). Show you have knowledge beyond the book.

**Email P3 - Studio bridge:** Offer a free 30-second preview mix or discount on first session at M Street Music. Direct CTA.

- [ ] **Step 3: Review all subject lines**

Read through all 10 subject lines in sequence. Check:
- No two subjects sound similar
- Each creates curiosity or promises specific value
- None are spammy or use ALL CAPS
- Lengths are under 60 characters

---

### Task 6: Place PDF in downloads folder

**Files:**
- Create: `public_html/mixing-books/downloads/home-studio-mixing-blueprint.pdf`

- [ ] **Step 1: Copy the edited PDF**

After the PDF edits (ceiling moments + "What's Next" chapter) are done in the other project, copy the final PDF:

```bash
mkdir -p /Users/kristijansinkovic/Claude/Projekti/mstreetmusic.hr/public_html/mixing-books/downloads
cp /path/to/edited/home-studio-mixing-blueprint.pdf \
   /Users/kristijansinkovic/Claude/Projekti/mstreetmusic.hr/public_html/mixing-books/downloads/home-studio-mixing-blueprint.pdf
```

Replace `/path/to/edited/` with the actual path from the ebook project.

- [ ] **Step 2: Verify file is accessible**

```bash
ls -lh /Users/kristijansinkovic/Claude/Projekti/mstreetmusic.hr/public_html/mixing-books/downloads/
```

Expected: PDF file, under 10MB.

---

### Task 7: Connect MailerLite form to pages

**Files:**
- Modify: `public_html/mixing-books/index.html` (2 form elements)
- Modify: `public_html/mixing-books/thank-you/index.html` (none, just verify)

- [ ] **Step 1: Get MailerLite embed code**

From MailerLite dashboard (Task 1, Step 4), copy the form action URL and any hidden fields.

- [ ] **Step 2: Update landing page forms**

In `public_html/mixing-books/index.html`, replace both instances of `MAILERLITE_FORM_ACTION_URL` with the actual MailerLite form action URL. Add any required hidden fields (group ID, honeypot, etc.) that MailerLite provides in the embed snippet.

- [ ] **Step 3: Test form submission locally**

Open the landing page, submit with a test email. Verify:
- Browser redirects to `/mixing-books/thank-you`
- Test email appears in MailerLite subscribers list
- Automation Email #1 is received within minutes
- Download link on thank-you page works

---

### Task 8: Deploy to CroHost

**Files:**
- Deploy: entire `public_html/mixing-books/` directory

- [ ] **Step 1: Check server state**

```bash
ssh -i ~/.ssh/id_rsa_mstreet mstreetm@prohost15.crohost.net "ls ~/public_html/mixing-books/ 2>/dev/null || echo 'DIR_NOT_EXISTS'"
```

Expected: DIR_NOT_EXISTS (fresh deploy).

- [ ] **Step 2: Upload files**

```bash
scp -r -i ~/.ssh/id_rsa_mstreet \
  /Users/kristijansinkovic/Claude/Projekti/mstreetmusic.hr/public_html/mixing-books \
  mstreetm@prohost15.crohost.net:~/public_html/
```

- [ ] **Step 3: Verify file permissions**

```bash
ssh -i ~/.ssh/id_rsa_mstreet mstreetm@prohost15.crohost.net "find ~/public_html/mixing-books -type f -exec chmod 644 {} \; && find ~/public_html/mixing-books -type d -exec chmod 755 {} \;"
```

- [ ] **Step 4: Verify live pages**

```bash
curl -sI https://mstreetmusic.hr/mixing-books/ | head -5
curl -sI https://mstreetmusic.hr/mixing-books/thank-you/ | head -5
```

Expected: HTTP 200 for both.

- [ ] **Step 5: Test download link**

```bash
curl -sI https://mstreetmusic.hr/mixing-books/downloads/home-studio-mixing-blueprint.pdf | head -5
```

Expected: HTTP 200, Content-Type: application/pdf.

- [ ] **Step 6: Full end-to-end test**

Open https://mstreetmusic.hr/mixing-books in a browser. Submit the form with a real test email. Verify:
1. Redirect to thank-you page works
2. Download button delivers PDF
3. Upsell Gumroad link works (with PROBUNDLE code pre-applied)
4. MailerLite receives the subscriber
5. Email #1 arrives with PDF download link

---

### Task 9: Update .htaccess (if needed)

**Files:**
- Possibly modify: `public_html/.htaccess`

- [ ] **Step 1: Check if static files are served correctly**

Since `public_html/` is the Apache web root and Passenger routes to Node.js, verify that static files in `mixing-books/` are served directly by Apache (not routed through Node.js).

```bash
curl -sI https://mstreetmusic.hr/mixing-books/ | grep -i "server\|x-powered"
```

If the response shows Passenger/Node.js headers, we need to add a .htaccess rule to exclude `/mixing-books` from Passenger routing. If it shows Apache, no changes needed.

- [ ] **Step 2: Add exclusion rule if needed**

Only if Step 1 shows Passenger routing. Add to `public_html/.htaccess` before the Passenger config:

```apache
# Static funnel pages - bypass Passenger
RewriteRule ^mixing-books(/.*)?$ - [L]
```

This tells Apache to serve files from the directory directly instead of passing to Node.js.

---

### Task 10: Post-launch verification + docs update

**Files:**
- Modify: `memory/changelog.md`

- [ ] **Step 1: Verify all funnel touchpoints**

Checklist:
- [ ] Landing page loads at https://mstreetmusic.hr/mixing-books
- [ ] Form submits and redirects to thank-you page
- [ ] Thank-you page shows download link + upsell
- [ ] PDF downloads correctly
- [ ] Gumroad upsell link includes PROBUNDLE code
- [ ] MailerLite receives subscriber in correct group
- [ ] Email #1 sends automatically with PDF link
- [ ] Email sequence continues on schedule (check after 2 days)
- [ ] Mobile responsive on both pages

- [ ] **Step 2: Update changelog**

Add to `memory/changelog.md`:

```markdown
## 2026-03-XX
- [DONE] Mixing Books Funnel: landing page + thank-you page at /mixing-books
- [DONE] MailerLite integration: email capture + 7-email nurture sequence + 3-email post-purchase
- [DONE] PDF delivery: direct download on thank-you + MailerLite Email #1
- [DONE] Advanced Edition upsell: EUR28 with PROBUNDLE on thank-you page + emails #5-6
- [DONE] Studio bridge: Email #7 + post-purchase Email P3 link to mstreetmusic.hr
```

- [ ] **Step 3: Update memory**

Save project context to memory for future sessions.
