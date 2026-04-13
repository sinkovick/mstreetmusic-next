'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage?: string | null;
  published: boolean;
  readTime: number;
  metaTitle?: string | null;
  metaDescription?: string | null;
}

interface BlogEditorProps {
  post?: BlogPost;
  isNew?: boolean;
}

const CATEGORIES = [
  { value: 'snimanje', label: 'Snimanje' },
  { value: 'miksanje', label: 'Miksanje' },
  { value: 'mastering', label: 'Mastering' },
  { value: 'produkcija', label: 'Produkcija' },
  { value: 'savjeti', label: 'Savjeti' },
  { value: 'oprema', label: 'Oprema' },
];

export default function BlogEditor({ post, isNew = false }: BlogEditorProps) {
  const router = useRouter();
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const [formData, setFormData] = useState<BlogPost>({
    slug: post?.slug || '',
    title: post?.title || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    category: post?.category || 'savjeti',
    coverImage: post?.coverImage || null,
    published: post?.published || false,
    readTime: post?.readTime || 5,
    metaTitle: post?.metaTitle || null,
    metaDescription: post?.metaDescription || null,
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSEO, setShowSEO] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics (č→c, š→s, etc.)
      .replace(/[đ]/g, 'd')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: isNew ? generateSlug(title) : prev.slug,
    }));
  };

  // Markdown toolbar — insert at cursor
  const insertMarkdown = (before: string, after: string = '', placeholder: string = '') => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = formData.content;
    const selected = text.substring(start, end);

    const insertion = selected || placeholder;
    const newText = text.substring(0, start) + before + insertion + after + text.substring(end);

    setFormData((prev) => ({ ...prev, content: newText }));

    requestAnimationFrame(() => {
      textarea.focus();
      const cursorPos = start + before.length + insertion.length;
      textarea.setSelectionRange(
        selected ? cursorPos + after.length : start + before.length,
        selected ? cursorPos + after.length : start + before.length + placeholder.length
      );
    });
  };

  // Save handler
  const handleSave = async (publish: boolean = formData.published) => {
    setSaving(true);
    setError(null);

    try {
      const payload = {
        ...formData,
        published: publish,
      };

      const url = isNew ? '/api/admin/blog' : `/api/admin/blog/${post?.id}`;
      const method = isNew ? 'POST' : 'PUT';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Save failed');
      }

      router.push('/admin/blog');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  // Delete handler
  const handleDelete = async () => {
    if (!post?.id) return;

    try {
      const res = await fetch(`/api/admin/blog/${post.id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      router.push('/admin/blog');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed');
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blog"
            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-white">
            {isNew ? 'New Blog Post' : 'Edit Blog Post'}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="px-4 py-2 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors text-sm text-zinc-300 disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Draft'}
          </button>
          <button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg transition-colors text-sm disabled:opacity-50"
          >
            {saving ? 'Saving...' : formData.published ? 'Update' : 'Publish'}
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            {/* Title */}
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Naslov posta..."
              className="w-full px-3 py-2.5 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-amber-500 focus:outline-none text-lg font-semibold text-white placeholder-zinc-500 mb-3"
            />

            {/* Excerpt */}
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
              placeholder="Kratki opis za prikaz na blog listi..."
              rows={2}
              className="w-full px-3 py-2 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-amber-500 focus:outline-none resize-none text-sm text-zinc-300 placeholder-zinc-500 mb-3"
            />

            {/* Markdown Toolbar */}
            <div className="flex items-center gap-0.5 mb-1.5 p-1 bg-zinc-800/50 rounded-lg border border-zinc-700">
              <button
                type="button"
                onClick={() => insertMarkdown('**', '**', 'bold text')}
                className="p-1.5 rounded hover:bg-zinc-700 transition-colors text-zinc-400 hover:text-white"
                title="Bold"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('\n## ', '\n', 'Naslov sekcije')}
                className="p-1.5 rounded hover:bg-zinc-700 transition-colors text-zinc-400 hover:text-white text-xs font-bold"
                title="Heading 2"
              >
                H2
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('\n### ', '\n', 'Podnaslov')}
                className="p-1.5 rounded hover:bg-zinc-700 transition-colors text-zinc-400 hover:text-white text-xs font-bold"
                title="Heading 3"
              >
                H3
              </button>
              <div className="w-px h-4 bg-zinc-700 mx-0.5" />
              <button
                type="button"
                onClick={() => insertMarkdown('[', '](https://)', 'link text')}
                className="p-1.5 rounded hover:bg-zinc-700 transition-colors text-zinc-400 hover:text-white"
                title="Link"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('\n- ', '\n', 'Stavka liste')}
                className="p-1.5 rounded hover:bg-zinc-700 transition-colors text-zinc-400 hover:text-white"
                title="Bullet list"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('\n---\n', '', '')}
                className="p-1.5 rounded hover:bg-zinc-700 transition-colors text-zinc-400 hover:text-white"
                title="Divider"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('\n![', '](url)\n', 'alt text')}
                className="p-1.5 rounded hover:bg-zinc-700 transition-colors text-zinc-400 hover:text-white"
                title="Image"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 0 0 2.25-2.25V5.25a2.25 2.25 0 0 0-2.25-2.25H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                </svg>
              </button>
              <div className="flex-1" />
              <span className="text-[9px] text-zinc-500 pr-1">Markdown</span>
            </div>

            {/* Content editor */}
            <textarea
              ref={contentRef}
              value={formData.content}
              onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
              placeholder="Piši u Markdownu — ## naslovi, **bold**, [linkovi](url), - liste..."
              rows={24}
              className="w-full px-3 py-2 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-amber-500 focus:outline-none resize-none font-mono text-sm leading-relaxed text-zinc-300 placeholder-zinc-500"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-3 lg:sticky lg:top-4 lg:self-start">
          {/* Settings */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="grid grid-cols-2 gap-3">
              {/* Category */}
              <div>
                <label className="block text-xs font-medium mb-1 text-zinc-500">Kategorija</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                  className="w-full px-2 py-1.5 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-amber-500 focus:outline-none text-sm text-white"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Read Time */}
              <div>
                <label className="block text-xs font-medium mb-1 text-zinc-500">Čitanje</label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min={1}
                    value={formData.readTime}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, readTime: parseInt(e.target.value) || 5 }))
                    }
                    className="w-full px-2 py-1.5 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-amber-500 focus:outline-none text-sm text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="text-xs text-zinc-500 whitespace-nowrap">min</span>
                </div>
              </div>
            </div>

            {/* Slug */}
            <div className="mt-3">
              <label className="block text-xs font-medium mb-1 text-zinc-500">Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                placeholder="url-slug"
                className="w-full px-2 py-1.5 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-amber-500 focus:outline-none text-xs font-mono text-white"
              />
              <p className="text-[10px] text-zinc-600 mt-0.5">
                /blog/{formData.slug || 'your-slug'}
              </p>
            </div>

            {/* Status */}
            <div className="mt-3 pt-3 border-t border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-zinc-500">Status</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    formData.published
                      ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                      : 'bg-zinc-700/50 text-zinc-400 border border-zinc-700'
                  }`}
                >
                  {formData.published ? 'Published' : 'Draft'}
                </span>
              </div>
              <div className="flex rounded-lg overflow-hidden border border-zinc-700 text-xs">
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, published: false }))}
                  className={`flex-1 py-1.5 text-center transition-colors ${
                    !formData.published
                      ? 'bg-amber-500 text-black font-semibold'
                      : 'bg-zinc-800 text-zinc-500 hover:text-white'
                  }`}
                >
                  Draft
                </button>
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, published: true }))}
                  className={`flex-1 py-1.5 text-center transition-colors ${
                    formData.published
                      ? 'bg-amber-500 text-black font-semibold'
                      : 'bg-zinc-800 text-zinc-500 hover:text-white'
                  }`}
                >
                  Publish
                </button>
              </div>
            </div>

            {/* Cover Image URL */}
            <div className="mt-3 pt-3 border-t border-zinc-800">
              <label className="block text-xs font-medium mb-1 text-zinc-500">Cover Image URL</label>
              <input
                type="text"
                value={formData.coverImage || ''}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, coverImage: e.target.value || null }))
                }
                placeholder="https://..."
                className="w-full px-2 py-1.5 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-amber-500 focus:outline-none text-xs text-white placeholder-zinc-500"
              />
              {formData.coverImage && (
                <div className="relative mt-2">
                  <img
                    src={formData.coverImage}
                    alt="Cover"
                    className="w-full h-28 object-cover rounded-lg border border-zinc-700"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, coverImage: null }))}
                    className="absolute top-1.5 right-1.5 p-1 bg-red-500/90 text-white rounded-md hover:bg-red-600 transition-colors"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* SEO Settings — collapsible */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <button
              type="button"
              onClick={() => setShowSEO(!showSEO)}
              className="w-full flex items-center justify-between"
            >
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">SEO Settings</h3>
              <svg
                className={`w-4 h-4 text-zinc-500 transition-transform ${showSEO ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {showSEO && (
              <div className="mt-3 space-y-3">
                <div>
                  <label className="block text-[10px] font-medium mb-1 text-zinc-500">Meta Title</label>
                  <input
                    type="text"
                    value={formData.metaTitle || ''}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, metaTitle: e.target.value || null }))
                    }
                    placeholder="Custom SEO title (default: post title)"
                    className="w-full px-2 py-1.5 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-amber-500 focus:outline-none text-xs text-white placeholder-zinc-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-medium mb-1 text-zinc-500">
                    Meta Description
                  </label>
                  <textarea
                    value={formData.metaDescription || ''}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, metaDescription: e.target.value || null }))
                    }
                    placeholder="Custom SEO description (default: excerpt)"
                    rows={3}
                    className="w-full px-2 py-1.5 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-amber-500 focus:outline-none text-xs text-white placeholder-zinc-500 resize-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Writing Guide — collapsible */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <button
              type="button"
              onClick={() => setShowGuide(!showGuide)}
              className="w-full flex items-center justify-between"
            >
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                Writing Guide
              </h3>
              <svg
                className={`w-4 h-4 text-zinc-500 transition-transform ${showGuide ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {showGuide && (
              <div className="mt-3 space-y-3 text-[11px]">
                <div className="bg-zinc-800 rounded-lg p-2.5 font-mono space-y-0.5 leading-relaxed text-zinc-400">
                  <p>## Naslov sekcije</p>
                  <p>### Podnaslov</p>
                  <p>**bold tekst**</p>
                  <p>[link](https://url.com)</p>
                  <p>- Stavka liste</p>
                  <p>1. Numerirana stavka</p>
                  <p>![Opis](image-url)</p>
                </div>
                <div className="text-zinc-500 space-y-0.5 text-[10px]">
                  <p>• Prazna linija između paragrafa</p>
                  <p>• TOC se generira iz 3+ ## naslova</p>
                  <p>• Linkovi se otvaraju u novom tabu</p>
                </div>
              </div>
            )}
          </div>

          {/* Delete button (only for existing posts) */}
          {!isNew && post?.id && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              {deleteConfirm ? (
                <div className="space-y-2">
                  <p className="text-sm text-red-400">Are you sure? This cannot be undone.</p>
                  <div className="flex gap-2">
                    <button
                      onClick={handleDelete}
                      className="flex-1 px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(false)}
                      className="flex-1 px-3 py-1.5 bg-zinc-800 text-zinc-400 rounded-lg text-sm hover:bg-zinc-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setDeleteConfirm(true)}
                  className="w-full text-sm text-red-400 hover:text-red-300 transition-colors"
                >
                  Delete Post
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
