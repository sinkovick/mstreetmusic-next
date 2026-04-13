import Link from 'next/link';
import { prisma } from '@/lib/db';

export default async function AdminDashboardPage() {
  const [totalPosts, publishedPosts, draftPosts, totalMessages, unreadMessages] =
    await Promise.all([
      prisma.blogPost.count(),
      prisma.blogPost.count({ where: { published: true } }),
      prisma.blogPost.count({ where: { published: false } }),
      prisma.contactMessage.count(),
      prisma.contactMessage.count({ where: { read: false } }),
    ]);

  const recentMessages: { id: string; name: string; email: string; message: string; read: boolean; createdAt: Date }[] = await prisma.contactMessage.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  });

  const stats = [
    {
      label: 'Total Posts',
      value: totalPosts,
      href: '/admin/blog',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
    },
    {
      label: 'Published',
      value: publishedPosts,
      href: '/admin/blog',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
    },
    {
      label: 'Drafts',
      value: draftPosts,
      href: '/admin/blog',
      color: 'text-zinc-400',
      bg: 'bg-zinc-500/10',
    },
    {
      label: 'Total Messages',
      value: totalMessages,
      href: '/admin/messages',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
    },
    {
      label: 'Unread',
      value: unreadMessages,
      href: '/admin/messages',
      color: unreadMessages > 0 ? 'text-red-400' : 'text-zinc-400',
      bg: unreadMessages > 0 ? 'bg-red-500/10' : 'bg-zinc-500/10',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className={`${stat.bg} border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors`}
          >
            <p className="text-sm text-zinc-500">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color} mt-1`}>{stat.value}</p>
          </Link>
        ))}
      </div>

      {/* Recent Messages */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl">
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <h2 className="text-lg font-semibold text-white">Recent Messages</h2>
          <Link
            href="/admin/messages"
            className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
          >
            View All →
          </Link>
        </div>

        {recentMessages.length === 0 ? (
          <p className="p-6 text-center text-zinc-500">No messages yet.</p>
        ) : (
          <div className="divide-y divide-zinc-800">
            {recentMessages.map((msg) => (
              <div
                key={msg.id}
                className="p-4 flex items-start gap-3 hover:bg-zinc-800/50 transition-colors"
              >
                {/* Unread dot */}
                <div className="pt-1.5">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      msg.read ? 'bg-zinc-700' : 'bg-amber-400'
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-medium text-white">{msg.name}</span>
                    <span className="text-xs text-zinc-600">{msg.email}</span>
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{msg.message}</p>
                  <p className="text-xs text-zinc-600 mt-1">
                    {new Date(msg.createdAt).toLocaleDateString('hr-HR', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
