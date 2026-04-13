import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 submissions per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // Rate limit check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Previše zahtjeva. Pokušajte ponovno za minutu.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, service, message, timestamp, website } = body;

    // Honeypot check — bots fill hidden field
    if (website) {
      // Pretend success to bots
      return NextResponse.json({ success: true });
    }

    // Timing check — form must be on page at least 3 seconds
    if (timestamp) {
      const loadTime = parseInt(timestamp, 10);
      if (Date.now() - loadTime < 3000) {
        return NextResponse.json({ success: true }); // Pretend success
      }
    }

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Ime je obavezno (min. 2 znaka).' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Unesite ispravnu email adresu.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Poruka mora imati minimalno 10 znakova.' },
        { status: 400 }
      );
    }

    // Sanitize
    const cleanName = name.trim().slice(0, 200);
    const cleanEmail = email.trim().toLowerCase().slice(0, 200);
    const cleanService = typeof service === 'string' ? service.trim().slice(0, 100) : '';
    const cleanMessage = message.trim().slice(0, 5000);

    // Save to database
    await prisma.contactMessage.create({
      data: {
        name: cleanName,
        email: cleanEmail,
        message: cleanMessage,
      },
    });

    // Send email notification
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const serviceLabel = cleanService ? { snimanje: 'Snimanje', mixing: 'Mixing', mastering: 'Mastering', mentorstvo: 'Mentorstvo', ostalo: 'Ostalo' }[cleanService] || cleanService : '';

      await transporter.sendMail({
        from: `"M Street Music Web" <${process.env.SMTP_USER}>`,
        to: process.env.NOTIFICATION_EMAIL,
        replyTo: cleanEmail,
        subject: `Nova poruka s weba: ${cleanName}${serviceLabel ? ` (${serviceLabel})` : ''}`,
        text: `Ime: ${cleanName}\nEmail: ${cleanEmail}${serviceLabel ? `\nUsluga: ${serviceLabel}` : ''}\n\nPoruka:\n${cleanMessage}`,
        html: `
          <h2>Nova poruka s kontakt forme</h2>
          <p><strong>Ime:</strong> ${cleanName}</p>
          <p><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
          ${serviceLabel ? `<p><strong>Usluga:</strong> ${serviceLabel}</p>` : ''}
          <hr />
          <p><strong>Poruka:</strong></p>
          <p>${cleanMessage.replace(/\n/g, '<br>')}</p>
          <hr />
          <p style="color:#888;font-size:12px;">Poslano s mstreetmusic.hr kontakt forme</p>
        `,
      });
    } catch (emailError) {
      console.error('Email send error:', emailError);
      // Don't fail the request if email fails — message is already in DB
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Greška na serveru. Pokušajte ponovno.' },
      { status: 500 }
    );
  }
}
