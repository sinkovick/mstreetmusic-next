import { MetadataRoute } from 'next';
import { prisma } from '@/lib/db';
import { getAllUsluge } from '@/data/usluge';
import { getAllOprema } from '@/data/oprema';
import { getAllPojmovi } from '@/data/pojmovnik';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mstreetmusic.hr';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mentorstvo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Dynamic blog posts
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    select: {
      slug: true,
      updatedAt: true,
      publishedAt: true,
    },
    orderBy: { publishedAt: 'desc' },
  });

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt || new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Service pages
  const serviceListingPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/usluge`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = getAllUsluge().map((usluga) => ({
    url: `${baseUrl}/usluge/${usluga.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Equipment pages
  const equipmentListingPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/oprema`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const equipmentPages: MetadataRoute.Sitemap = getAllOprema().map((item) => ({
    url: `${baseUrl}/oprema/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Glossary pages
  const glossaryListingPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/pojmovnik`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const glossaryPages: MetadataRoute.Sitemap = getAllPojmovi().map((pojam) => ({
    url: `${baseUrl}/pojmovnik/${pojam.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...serviceListingPage, ...servicePages, ...equipmentListingPage, ...equipmentPages, ...glossaryListingPage, ...glossaryPages, ...blogPages];
}
