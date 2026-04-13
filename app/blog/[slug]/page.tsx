import { cache } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { prisma } from '@/lib/db';
import { Navigation, Footer, ScrollReveal } from '@/components/homepage';
import BlogContent from '@/components/blog/BlogContent';
import '@/styles/homepage.css';
import '@/styles/blog.css';

interface Props {
  params: { slug: string };
}

export const revalidate = 300;

const getPost = cache(async (slug: string) => {
  return prisma.blogPost.findFirst({
    where: { slug, published: true },
  });
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return { title: 'Članak nije pronađen' };
  }

  const ogImage = post.coverImage || 'https://mstreetmusic.hr/studio.jpg';
  const postUrl = `https://mstreetmusic.hr/blog/${post.slug}`;

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: postUrl },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: postUrl,
      siteName: 'M Street Music',
      images: [ogImage],
      ...(post.publishedAt && { publishedTime: post.publishedAt.toISOString() }),
      modifiedTime: post.updatedAt.toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

const categoryLabels: Record<string, string> = {
  snimanje: 'Snimanje',
  miksanje: 'Miksanje',
  mastering: 'Mastering',
  produkcija: 'Produkcija',
  savjeti: 'Savjeti',
  oprema: 'Oprema',
};

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage || 'https://mstreetmusic.hr/studio.jpg',
    datePublished: post.publishedAt?.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: {
      '@type': 'Person',
      name: 'Kristijan Sinković',
      jobTitle: 'Audio Engineer & Producer',
      url: 'https://mstreetmusic.hr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'M Street Music',
      url: 'https://mstreetmusic.hr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mstreetmusic.hr/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mstreetmusic.hr/blog/${post.slug}`,
    },
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readTime}M`,
    inLanguage: 'hr',
    articleSection: categoryLabels[post.category] || post.category,
    keywords: post.metaDescription || post.excerpt,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Početna',
        item: 'https://mstreetmusic.hr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://mstreetmusic.hr/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://mstreetmusic.hr/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="blog-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <ScrollReveal />
      <Navigation locale="hr" />

      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        {/* Cover Image */}
        {post.coverImage && (
          <div className="blog-post-cover">
            <Image src={post.coverImage} alt={post.title} width={1200} height={630} sizes="100vw" style={{ width: '100%', height: 'auto' }} priority />
          </div>
        )}

        {/* Article */}
        <article className="blog-post-article">
          {/* Breadcrumbs */}
          <nav className="blog-breadcrumbs">
            <Link href="/">Početna</Link>
            <span className="separator">›</span>
            <Link href="/blog">Blog</Link>
            <span className="separator">›</span>
            <span className="current">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="blog-post-header">
            <div className="blog-post-meta">
              <span className="blog-card-category" data-cat={post.category}>
                {categoryLabels[post.category] || post.category}
              </span>
              <span className="blog-card-readtime">
                {post.readTime} min čitanja
              </span>
              {post.publishedAt && (
                <span className="blog-post-date">
                  {new Date(post.publishedAt).toLocaleDateString('hr-HR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              )}
            </div>

            <h1>{post.title}</h1>

            <p className="blog-post-excerpt">{post.excerpt}</p>
          </header>

          {/* Table of Contents */}
          <TableOfContents content={post.content} />

          {/* Markdown Content */}
          <div className="blog-content">
            <BlogContent content={post.content} />
          </div>

          {/* CTA Footer */}
          <footer className="blog-cta-footer">
            <div className="blog-cta-card">
              <h3>Trebaš profesionalni zvuk?</h3>
              <p>
                Javi se za snimanje, miksanje ili mastering u M Street Music studiju.
              </p>
              <Link href="/#contact" className="blog-cta-btn">
                Kontaktiraj nas →
              </Link>
            </div>
          </footer>
        </article>
      </main>

      <Footer locale="hr" />
    </div>
  );
}

function TableOfContents({ content }: { content: string }) {
  const headings = content
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => line.slice(3));

  if (headings.length < 3) return null;

  return (
    <nav className="blog-toc">
      <h2>Sadržaj</h2>
      <ul>
        {headings.map((heading, i) => (
          <li key={i}>
            <a
              href={`#${heading
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[đ]/g, 'd')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')}`}
            >
              <span className="toc-marker">›</span>
              {heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
