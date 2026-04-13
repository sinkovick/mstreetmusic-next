'use client';

import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string | null;
  publishedAt: Date | null;
  readTime: number;
}

const categoryLabels: Record<string, string> = {
  snimanje: 'Snimanje',
  miksanje: 'Miksanje',
  mastering: 'Mastering',
  produkcija: 'Produkcija',
  savjeti: 'Savjeti',
  oprema: 'Oprema',
};

export default function BlogCard({ slug, title, excerpt, category, coverImage, publishedAt, readTime }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article className="blog-card">
        {coverImage && (
          <div className="blog-card-image">
            <Image src={coverImage} alt={title} width={800} height={420} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" style={{ width: '100%', height: 'auto' }} />
          </div>
        )}

        <div className="blog-card-body">
          <div className="blog-card-meta">
            <span className="blog-card-category" data-cat={category}>
              {categoryLabels[category] || category}
            </span>
            <span className="blog-card-readtime">
              {readTime} min čitanja
            </span>
          </div>

          <h2>{title}</h2>

          <p className="blog-card-excerpt">{excerpt}</p>

          <div className="blog-card-footer">
            {publishedAt && (
              <span className="blog-card-date" suppressHydrationWarning>
                {new Date(publishedAt).toLocaleDateString('hr-HR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            )}
            <span className="blog-card-cta">Čitaj više →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
