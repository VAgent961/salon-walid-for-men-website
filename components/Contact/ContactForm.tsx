'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      details: formData.get('details'),
    };

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setWhatsapp(result.whatsapp || '');

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setError(result.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch (err) {
      setError('Failed to send request. Please check your connection.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-4xl">check_circle</span>
        </div>
        <h3 className="font-heading text-2xl font-bold text-primary mb-2">Request Sent!</h3>
        <p className="font-body text-muted mb-8">We'll get back to you shortly to confirm your appointment.</p>
        
        {whatsapp && (
          <a 
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-md font-bold hover:opacity-90 transition-all mb-6"
          >
            Send it on WhatsApp too
          </a>
        )}
        
        <div>
          <button 
            onClick={() => setStatus('idle')}
            className="text-secondary font-bold hover:underline"
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-lg text-sm">
          <p className="font-bold mb-1">Error</p>
          <p>{error}</p>
          {whatsapp && (
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-bold underline">
              Try sending via WhatsApp instead
            </a>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold text-primary uppercase tracking-wider">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            required 
            className="bg-surface border border-outline-variant/50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-bold text-primary uppercase tracking-wider">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            required 
            className="bg-surface border border-outline-variant/50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-sm font-bold text-primary uppercase tracking-wider">Service Interested In</label>
        <select 
          id="service" 
          name="service"
          required
          className="bg-surface border border-outline-variant/50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
        >
          <option value="Precision Haircut">Precision Haircut</option>
          <option value="Skin Fade">Skin Fade</option>
          <option value="Head Design">Head Design</option>
          <option value="Other / Consultation">Other / Consultation</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="details" className="text-sm font-bold text-primary uppercase tracking-wider">Preferred Date & Time</label>
        <textarea 
          id="details" 
          name="details"
          required
          rows={3} 
          className="bg-surface border border-outline-variant/50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full bg-primary text-white py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {status === 'loading' ? (
          <>
            <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            Sending...
          </>
        ) : (
          <>
            <span className="material-symbols-outlined">event_available</span>
            Request Appointment
          </>
        )}
      </button>
      
      <p className="text-xs text-muted text-center italic">
        * This is a request, not a confirmed booking. We will contact you to finalize the time.
      </p>
    </form>
  );
}
