import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import { Navigation, Footer, ScrollReveal } from '@/components/homepage';
import BlogCard from '@/components/blog/BlogCard';
import '@/styles/homepage.css';
import '@/styles/blog.css';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Savjeti za snimanje, miksanje i mastering. Praktični članci iz profesionalnog tonskog studija u Krapini.',
  alternates: {
    canonical: 'https://mstreetmusic.hr/blog',
  },
  openGraph: {
    title: 'Blog | M Street Music',
    description:
      'Savjeti za snimanje, miksanje i mastering iz profesionalnog tonskog studija.',
    url: 'https://mstreetmusic.hr/blog',
    type: 'website',
    siteName: 'M Street Music',
  },
};

export const revalidate = 300; // 5 min ISR

async function getPosts() {
  return prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: 'desc' },
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt: true,
      category: true,
      coverImage: true,
      publishedAt: true,
      readTime: true,
    },
  });
}

export default async function BlogPage() {
  const posts = await getPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="blog-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Početna", item: "https://mstreetmusic.hr" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mstreetmusic.hr/blog" },
          ],
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": "https://mstreetmusic.hr/blog",
          name: "Blog | M Street Music",
          description: "Savjeti za snimanje, miksanje i mastering. Praktični članci iz profesionalnog tonskog studija u Krapini.",
          url: "https://mstreetmusic.hr/blog",
          isPartOf: { "@id": "https://mstreetmusic.hr/#website" },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: posts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://mstreetmusic.hr/blog/${post.slug}`,
              name: post.title,
            })),
          },
        }) }}
      />
      <ScrollReveal />
      <Navigation locale="hr" />

      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        <section className="blog-hero">
          <h1>Blog</h1>
          <p>
            Savjeti za snimanje, miksanje i mastering iz profesionalnog tonskog studija.
          </p>
        </section>

        <div className="blog-listing">
          {posts.length === 0 ? (
            <div className="blog-empty">
              <p>Još nema objavljenih članaka. Uskoro!</p>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {featured && (
                <div className="blog-featured">
                  <Link href={`/blog/${featured.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                    <article className="blog-card">
                      {featured.coverImage && (
                        <div className="blog-card-image">
                          <Image src={featured.coverImage} alt={featured.title} width={800} height={420} sizes="(max-width: 768px) 100vw, 800px" style={{ width: '100%', height: 'auto' }} />
                        </div>
                      )}
                      <div className="blog-card-body">
                        <div className="blog-card-meta">
                          <span className="blog-card-category" data-cat={featured.category}>
                            {featured.category}
                          </span>
                          <span className="blog-card-readtime">
                            {featured.readTime} min čitanja
                          </span>
                          {featured.publishedAt && (
                            <span className="blog-card-readtime">
                              {new Date(featured.publishedAt).toLocaleDateString('hr-HR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                              })}
                            </span>
                          )}
                        </div>
                        <h2>{featured.title}</h2>
                        <p className="blog-card-excerpt">{featured.excerpt}</p>
                        <span className="blog-card-cta">Čitaj članak →</span>
                      </div>
                    </article>
                  </Link>
                </div>
              )}

              {/* Grid of remaining posts */}
              {rest.length > 0 && (
                <div className="blog-grid">
                  {rest.map((post) => (
                    <BlogCard
                      key={post.id}
                      slug={post.slug}
                      title={post.title}
                      excerpt={post.excerpt}
                      category={post.category}
                      coverImage={post.coverImage}
                      publishedAt={post.publishedAt}
                      readTime={post.readTime}
                    />
                  ))}
                </div>
              )}

              {/* Bottom CTA */}
              <div className="blog-bottom-cta">
                <h2>Trebaš profesionalni zvuk?</h2>
                <p>
                  Javi se za snimanje, miksanje ili mastering u M Street Music studiju.
                </p>
                <Link href="/#contact" className="blog-cta-btn">
                  Kontaktiraj nas →
                </Link>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer locale="hr" />
    </div>
  );
}
