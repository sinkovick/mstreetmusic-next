import { prisma } from '@/lib/db';
import MissingTermsClient from '@/components/admin/MissingTermsClient';

export default async function AdminPojmovnikPage() {
  const missingTerms = await prisma.missingTerm.findMany({
    orderBy: { count: 'desc' },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-2">Pojmovnik</h1>
      <p className="text-zinc-400 text-sm mb-6">
        Pojmovi koje su korisnici trazili, a ne postoje u pojmovniku.
      </p>
      <MissingTermsClient terms={missingTerms} />
    </div>
  );
}
