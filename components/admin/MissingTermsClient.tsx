'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface MissingTerm {
  id: string;
  term: string;
  count: number;
  firstSeen: Date;
  lastSeen: Date;
}

interface Props {
  terms: MissingTerm[];
}

export default function MissingTermsClient({ terms }: Props) {
  const router = useRouter();
  const [deleting, setDeleting] = useState<string | null>(null);

  async function handleDelete(id: string) {
    if (!confirm('Obrisati ovaj pojam iz liste?')) return;
    setDeleting(id);
    try {
      await fetch('/api/pojmovnik/missing-term', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      router.refresh();
    } catch {
      alert('Greska pri brisanju.');
    } finally {
      setDeleting(null);
    }
  }

  if (terms.length === 0) {
    return (
      <div className="text-center py-16 text-zinc-500">
        <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
        <p>Nema trazenih pojmova koji nedostaju.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-800">
            <th className="text-left py-3 px-4 text-zinc-400 font-medium">Pojam</th>
            <th className="text-center py-3 px-4 text-zinc-400 font-medium">Pretraga</th>
            <th className="text-left py-3 px-4 text-zinc-400 font-medium hidden sm:table-cell">Prvo trazenje</th>
            <th className="text-left py-3 px-4 text-zinc-400 font-medium hidden sm:table-cell">Zadnje trazenje</th>
            <th className="text-right py-3 px-4 text-zinc-400 font-medium">Akcije</th>
          </tr>
        </thead>
        <tbody>
          {terms.map((t) => (
            <tr key={t.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
              <td className="py-3 px-4 text-white font-medium">{t.term}</td>
              <td className="py-3 px-4 text-center">
                <span className="inline-flex items-center justify-center min-w-[28px] px-2 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400">
                  {t.count}
                </span>
              </td>
              <td className="py-3 px-4 text-zinc-400 hidden sm:table-cell">
                {new Date(t.firstSeen).toLocaleDateString('hr-HR')}
              </td>
              <td className="py-3 px-4 text-zinc-400 hidden sm:table-cell">
                {new Date(t.lastSeen).toLocaleDateString('hr-HR')}
              </td>
              <td className="py-3 px-4 text-right">
                <button
                  onClick={() => handleDelete(t.id)}
                  disabled={deleting === t.id}
                  className="text-zinc-500 hover:text-red-400 transition-colors p-1 disabled:opacity-50"
                  title="Obrisi"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
