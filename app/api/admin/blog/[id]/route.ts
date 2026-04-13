import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { z } from 'zod';

const blogPostUpdateSchema = z.object({
  title: z.string().min(1).optional(),
  slug: z.string().min(1).regex(/^[a-z0-9-]+$/).optional(),
  excerpt: z.string().min(1).optional(),
  content: z.string().min(1).optional(),
  category: z.string().min(1).optional(),
  coverImage: z.string().optional().nullable(),
  published: z.boolean().optional(),
  readTime: z.number().int().min(1).optional(),
  metaTitle: z.string().optional().nullable(),
  metaDescription: z.string().optional().nullable(),
});

// GET — Single post
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { id: params.id },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found.' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Blog get error:', error);
    return NextResponse.json({ error: 'Failed to fetch post.' }, { status: 500 });
  }
}

// PUT — Update post
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const parsed = blogPostUpdateSchema.parse(body);

    // If slug changed, check uniqueness
    if (parsed.slug) {
      const existing = await prisma.blogPost.findFirst({
        where: {
          slug: parsed.slug,
          NOT: { id: params.id },
        },
      });
      if (existing) {
        return NextResponse.json({ error: 'Slug already exists.' }, { status: 409 });
      }
    }

    // Handle publishedAt logic
    const currentPost = await prisma.blogPost.findUnique({
      where: { id: params.id },
    });

    if (!currentPost) {
      return NextResponse.json({ error: 'Post not found.' }, { status: 404 });
    }

    let publishedAt = currentPost.publishedAt;
    if (parsed.published !== undefined) {
      if (parsed.published && !currentPost.published) {
        // Publishing for the first time
        publishedAt = new Date();
      } else if (!parsed.published) {
        publishedAt = null;
      }
    }

    const post = await prisma.blogPost.update({
      where: { id: params.id },
      data: {
        ...parsed,
        publishedAt,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed.', details: error.issues },
        { status: 400 }
      );
    }
    console.error('Blog update error:', error);
    return NextResponse.json({ error: 'Failed to update post.' }, { status: 500 });
  }
}

// DELETE — Delete post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.blogPost.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Blog delete error:', error);
    return NextResponse.json({ error: 'Failed to delete post.' }, { status: 500 });
  }
}
