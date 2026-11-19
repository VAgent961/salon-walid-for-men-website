import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function PATCH(req: Request) {
  try {
    const { id, status } = await req.json();
    
    if (!id || !['new', 'done', 'cancelled'].includes(status)) {
      return NextResponse.json({ ok: false, error: 'Invalid data' }, { status: 400 });
    }

    await sql`
      update bookings 
      set status = ${status} 
      where id = ${id}
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Admin update error:', error);
    return NextResponse.json({ ok: false, error: 'Failed to update' }, { status: 500 });
  }
}
