'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-4xl">check_circle</span>
        </div>
        <h3 className="font-heading text-2xl font-bold text-primary mb-2">Request Sent!</h3>
        <p className="font-body text-muted">We'll get back to you shortly to confirm your appointment.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-secondary font-bold hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold text-primary uppercase tracking-wider">Full Name</label>
          <input 
            type="text" 
            id="name" 
            required 
            placeholder="John Doe"
            className="bg-surface border border-outline-variant/50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-bold text-primary uppercase tracking-wider">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            required 
            placeholder="+961 -- --- ---"
            className="bg-surface border border-outline-variant/50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-sm font-bold text-primary uppercase tracking-wider">Service Interested In</label>
        <select 
          id="service" 
          className="bg-surface border border-outline-variant/50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
        >
          <option>Precision Haircut</option>
          <option>Skin Fade</option>
          <option>Head Design</option>
          <option>Other / Consultation</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-bold text-primary uppercase tracking-wider">Preferred Date & Time</label>
        <textarea 
          id="message" 
          rows={3} 
          placeholder="e.g. Tuesday at 4:00 PM"
          className="bg-surface border border-outline-variant/50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full bg-primary text-white py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {status === 'loading' ? (
          <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
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
