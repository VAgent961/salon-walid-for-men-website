import { sql, hasDb } from '@/lib/db';
import { LogoutButton } from '@/lib/admin-ui';
import { useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Admin | Salon Walid', robots: { index: false, follow: false } };

async function StatusToggle({ id, currentStatus }: { id: string, currentStatus: string }) {
  return (
    <div className="flex gap-2">
      {['new', 'done', 'cancelled'].map((s) => (
        <form key={s} action={async () => {
          'use server';
          await sql`update bookings set status = ${s} where id = ${id}`;
        }}>
          <button
            type="submit"
            className={`px-2 py-1 text-xs font-bold rounded uppercase tracking-tighter transition-colors ${
              currentStatus === s 
                ? (s === 'new' ? 'bg-secondary text-white' : s === 'done' ? 'bg-green-600 text-white' : 'bg-gray-600 text-white')
                : 'bg-surface text-muted hover:bg-outline-variant/20'
            }`}
          >
            {s}
          </button>
        </form>
      ))}
    </div>
  );
}

export default async function AdminPage() {
  if (!hasDb) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-5">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-outline-variant max-w-md w-full text-center">
          <h1 className="font-heading text-2xl font-bold text-primary mb-4">Database Not Connected</h1>
          <p className="text-muted mb-6">Please connect your Neon Postgres database to start receiving bookings.</p>
          <LogoutButton />
        </div>
      </div>
    );
  }

  let bookings = [];
  let error = null;

  try {
    bookings = await sql`
      select * from bookings 
      order by created_at desc 
      limit 100
    `;
  } catch (e) {
    console.error(e);
    error = 'Failed to load bookings from database.';
  }

  return (
    <div className="min-h-screen bg-surface">
      <header className="bg-primary text-white py-4 px-5 md:px-8 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="font-heading text-xl font-bold">Salon Walid</h1>
            <p className="text-xs opacity-70">Admin Dashboard</p>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 md:px-8 py-12">
        <div className="flex justify-between items-end mb-8">
          <h2 className="font-heading text-3xl font-bold text-primary">Appointment Requests</h2>
          <p className="text-sm text-muted">{bookings.length} latest requests</p>
        </div>

        {error ? (
          <div className="p-6 bg-red-50 border border-red-100 text-red-600 rounded-xl">
            {error}
          </div>
        ) : bookings.length === 0 ? (
          <div className="p-12 bg-white rounded-2xl border border-outline-variant/30 text-center">
            <p className="text-muted">No bookings found yet.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {bookings.map((booking: any) => (
              <div key={booking.id} className="bg-white p-6 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-muted uppercase tracking-widest">
                        {new Date(booking.created_at).toLocaleDateString('en-LB', { 
                          month: 'short', 
                          day: 'numeric', 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                        booking.status === 'new' ? 'bg-secondary/10 text-secondary' : 
                        booking.status === 'done' ? 'bg-green-100 text-green-700' : 
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-primary">{booking.name}</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
                      <a href={`tel:${booking.phone}`} className="flex items-center gap-1 text-secondary font-bold hover:underline">
                        <span className="material-symbols-outlined text-sm">call</span>
                        {booking.phone}
                      </a>
                      <span className="flex items-center gap-1 text-muted">
                        <span className="material-symbols-outlined text-sm">content_cut</span>
                        {booking.service}
                      </span>
                    </div>
                    <div className="mt-4 p-3 bg-surface rounded-lg border border-outline-variant/20 text-sm italic text-ink/80">
                      "{booking.details}"
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-4">
                    <StatusToggle id={booking.id} currentStatus={booking.status} />
                    <a 
                      href={`https://wa.me/${booking.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#25D366] hover:underline flex items-center gap-1"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
