'use client';

import Link from 'next/link';
import { useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  published: boolean;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState('');

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.slug.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
        />
      </div>

      {/* Table */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        {filtered.length === 0 ? (
          <p className="p-6 text-center text-zinc-500">
            {posts.length === 0 ? 'No blog posts yet.' : 'No matching posts.'}
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800 text-left">
                  <th className="px-4 py-3 text-zinc-500 font-medium">Title</th>
                  <th className="px-4 py-3 text-zinc-500 font-medium hidden md:table-cell">Category</th>
                  <th className="px-4 py-3 text-zinc-500 font-medium">Status</th>
                  <th className="px-4 py-3 text-zinc-500 font-medium hidden md:table-cell">Date</th>
                  <th className="px-4 py-3 text-zinc-500 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {filtered.map((post) => (
                  <tr key={post.id} className="hover:bg-zinc-800/50 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-medium text-white truncate max-w-xs">{post.title}</p>
                      <p className="text-xs text-zinc-600 mt-0.5 md:hidden">{post.category}</p>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="inline-block bg-zinc-800 text-zinc-400 text-xs px-2 py-1 rounded-md">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block text-xs px-2 py-1 rounded-md font-medium ${
                          post.published
                            ? 'bg-green-500/10 text-green-400'
                            : 'bg-zinc-700/50 text-zinc-400'
                        }`}
                      >
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-zinc-500 hidden md:table-cell">
                      {new Date(post.createdAt).toLocaleDateString('hr-HR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={`/admin/blog/${post.id}`}
                        className="text-amber-400 hover:text-amber-300 text-sm transition-colors"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Footer count */}
        {posts.length > 0 && (
          <div className="px-4 py-3 border-t border-zinc-800 text-xs text-zinc-600">
            {filtered.length} of {posts.length} post{posts.length !== 1 ? 's' : ''}
          </div>
        )}
      </div>
    </div>
  );
}
