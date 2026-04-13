import Link from 'next/link';
import { prisma } from '@/lib/db';
import BlogListClient from '@/components/admin/BlogListClient';

export default async function AdminBlogListPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      title: true,
      slug: true,
      category: true,
      published: true,
      publishedAt: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
        <Link
          href="/admin/blog/new"
          className="bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg px-4 py-2 text-sm transition-colors"
        >
          + New Post
        </Link>
      </div>

      <BlogListClient posts={posts} />
    </div>
  );
}
