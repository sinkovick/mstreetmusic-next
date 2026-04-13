import { getSession } from '@/lib/admin-auth';
import { redirect } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';

export const metadata = {
  title: 'Admin Dashboard',
  robots: 'noindex, nofollow',
};

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      <AdminSidebar username={session.username} />
      <main className="flex-1 ml-0 md:ml-64">
        <div className="p-4 md:p-8 max-w-6xl">
          {children}
        </div>
      </main>
    </div>
  );
}
