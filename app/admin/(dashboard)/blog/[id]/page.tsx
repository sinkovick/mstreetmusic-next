import { prisma } from '@/lib/db';
import { notFound } from 'next/navigation';
import BlogEditor from '@/components/admin/BlogEditor';

export default async function AdminEditPostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await prisma.blogPost.findUnique({
    where: { id: params.id },
  });

  if (!post) {
    notFound();
  }

  // Convert to serializable format
  const serialized = {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    category: post.category,
    coverImage: post.coverImage,
    published: post.published,
    readTime: post.readTime,
    metaTitle: post.metaTitle,
    metaDescription: post.metaDescription,
  };

  return <BlogEditor post={serialized} />;
}
