import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { z } from 'zod';

const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must be lowercase with hyphens'),
  excerpt: z.string().min(1, 'Excerpt is required'),
  content: z.string().min(1, 'Content is required'),
  category: z.string().min(1, 'Category is required'),
  coverImage: z.string().optional().nullable(),
  published: z.boolean().default(false),
  readTime: z.number().int().min(1).default(5),
  metaTitle: z.string().optional().nullable(),
  metaDescription: z.string().optional().nullable(),
});

// GET — List all posts
export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Blog list error:', error);
    return NextResponse.json({ error: 'Failed to fetch posts.' }, { status: 500 });
  }
}

// POST — Create new post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = blogPostSchema.parse(body);

    // Check slug uniqueness
    const existing = await prisma.blogPost.findUnique({
      where: { slug: parsed.slug },
    });
    if (existing) {
      return NextResponse.json({ error: 'Slug already exists.' }, { status: 409 });
    }

    const post = await prisma.blogPost.create({
      data: {
        ...parsed,
        publishedAt: parsed.published ? new Date() : null,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed.', details: error.issues },
        { status: 400 }
      );
    }
    console.error('Blog create error:', error);
    return NextResponse.json({ error: 'Failed to create post.' }, { status: 500 });
  }
}
