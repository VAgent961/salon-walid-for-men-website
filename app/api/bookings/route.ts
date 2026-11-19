import { NextResponse } from 'next/server';
import { sql, hasDb } from '@/lib/db';
import { clean, asText, whatsappLink, notifyOwner } from '@/lib/notify';

export async function POST(req: Request) {
  let wa = '';
  try {
    const body = await req.json();
    
    const name = clean(body.name, 100);
    const phone = clean(body.phone, 50);
    const service = clean(body.service, 100);
    const details = clean(body.details, 500);

    if (!name || !phone || !service || !details) {
      return NextResponse.json({ ok: false, error: 'Please fill in all required fields.' }, { status: 400 });
    }

    const fields = [
      { label: 'Name', value: name },
      { label: 'Phone', value: phone },
      { label: 'Service', value: service },
      { label: 'Preferred Time', value: details }
    ];

    const subject = `New Appointment Request: ${name}`;
    wa = whatsappLink(asText(subject, fields));

    if (!hasDb) {
      return NextResponse.json({ 
        ok: false, 
        error: 'Online booking is not connected yet. Please contact us on WhatsApp or by phone.', 
        whatsapp: wa 
      }, { status: 503 });
    }

    await sql`
      insert into bookings (name, phone, service, details) 
      values (${name}, ${phone}, ${service}, ${details})
    `;

    await notifyOwner(subject, fields);

    return NextResponse.json({ ok: true, whatsapp: wa });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({ 
      ok: false, 
      error: 'Something went wrong. Please try again or contact us on WhatsApp.', 
      whatsapp: wa 
    }, { status: 500 });
  }
}
