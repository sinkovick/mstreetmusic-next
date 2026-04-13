'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

export default function MessagesClient({ messages }: { messages: ContactMessage[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const router = useRouter();

  const filtered = messages.filter((m) => {
    if (filter === 'unread') return !m.read;
    if (filter === 'read') return m.read;
    return true;
  });

  const unreadCount = messages.filter((m) => !m.read).length;

  async function toggleRead(id: string, currentRead: boolean) {
    try {
      await fetch(`/api/admin/messages/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ read: !currentRead }),
      });
      router.refresh();
    } catch (err) {
      console.error('Failed to update message:', err);
    }
  }

  async function deleteMessage(id: string) {
    if (!confirm('Delete this message?')) return;
    try {
      await fetch(`/api/admin/messages/${id}`, {
        method: 'DELETE',
      });
      router.refresh();
    } catch (err) {
      console.error('Failed to delete message:', err);
    }
  }

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex items-center gap-2 mb-4">
        {(['all', 'unread', 'read'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              filter === f
                ? 'bg-amber-500/10 text-amber-400'
                : 'text-zinc-500 hover:text-white hover:bg-zinc-800'
            }`}
          >
            {f === 'all' && `All (${messages.length})`}
            {f === 'unread' && `Unread (${unreadCount})`}
            {f === 'read' && `Read (${messages.length - unreadCount})`}
          </button>
        ))}
      </div>

      {/* Messages list */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        {filtered.length === 0 ? (
          <p className="p-6 text-center text-zinc-500">No messages.</p>
        ) : (
          <div className="divide-y divide-zinc-800">
            {filtered.map((msg) => (
              <div
                key={msg.id}
                className={`transition-colors ${
                  expandedId === msg.id ? 'bg-zinc-800/70' : 'hover:bg-zinc-800/30'
                }`}
              >
                {/* Header row */}
                <div
                  className="p-4 flex items-start gap-3 cursor-pointer"
                  onClick={() =>
                    setExpandedId(expandedId === msg.id ? null : msg.id)
                  }
                >
                  <div className="pt-1">
                    <div
                      className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                        msg.read ? 'bg-zinc-700' : 'bg-amber-400'
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-sm font-medium ${msg.read ? 'text-zinc-400' : 'text-white'}`}>
                        {msg.name}
                      </span>
                      <span className="text-xs text-zinc-600">
                        {msg.email}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500 truncate">
                      {msg.message}
                    </p>
                  </div>
                  <span className="text-xs text-zinc-600 whitespace-nowrap">
                    {new Date(msg.createdAt).toLocaleDateString('hr-HR', {
                      day: 'numeric',
                      month: 'short',
                    })}
                  </span>
                </div>

                {/* Expanded content */}
                {expandedId === msg.id && (
                  <div className="px-4 pb-4 ml-7">
                    <div className="bg-zinc-800 rounded-lg p-4 mb-3">
                      <p className="text-sm text-zinc-300 whitespace-pre-wrap">{msg.message}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-zinc-600">
                        {new Date(msg.createdAt).toLocaleDateString('hr-HR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                      <span className="text-zinc-700">·</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleRead(msg.id, msg.read);
                        }}
                        className="text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        Mark as {msg.read ? 'unread' : 'read'}
                      </button>
                      <span className="text-zinc-700">·</span>
                      <a
                        href={`mailto:${msg.email}`}
                        className="text-amber-400 hover:text-amber-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Reply
                      </a>
                      <span className="text-zinc-700">·</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteMessage(msg.id);
                        }}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
