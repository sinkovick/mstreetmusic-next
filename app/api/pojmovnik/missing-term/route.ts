import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getPojamBySlug } from '@/data/pojmovnik';
import { getSession } from '@/lib/admin-auth';

// Rate limiting: max 10 requests per minute per IP
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + 60_000 });
    return false;
  }
  entry.count++;
  return entry.count > 10;
}

// POST - log a missing term search
export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: true }); // silent rate limit
  }

  try {
    const body = await request.json();
    const raw = body?.term;
    if (typeof raw !== 'string') {
      return NextResponse.json({ ok: true });
    }

    const term = raw.trim().toLowerCase().slice(0, 50);
    if (term.length < 2) {
      return NextResponse.json({ ok: true });
    }

    // Only allow letters, numbers, spaces, hyphens, Croatian diacritics
    if (!/^[a-zčćžšđ0-9\s\-]+$/.test(term)) {
      return NextResponse.json({ ok: true });
    }

    // Check if this term actually exists in our glossary (by slug or term name)
    const slug = term.replace(/\s+/g, '-');
    const existsAsSlug = getPojamBySlug(slug);
    const existsAsTerm = getPojamBySlug(term);
    if (existsAsSlug || existsAsTerm) {
      return NextResponse.json({ ok: true }); // term exists, no need to track
    }

    // Upsert: increment count if exists, create if new
    await prisma.missingTerm.upsert({
      where: { term },
      update: { count: { increment: 1 } },
      create: { term },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true }); // never expose errors
  }
}

// DELETE - admin removes a tracked term
export async function DELETE(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const id = body?.id;
    if (typeof id !== 'string') {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    }

    await prisma.missingTerm.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}
