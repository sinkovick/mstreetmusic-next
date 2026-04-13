import { prisma } from '@/lib/db';
import MessagesClient from '@/components/admin/MessagesClient';

export default async function AdminMessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Contact Messages</h1>
      <MessagesClient messages={messages} />
    </div>
  );
}
