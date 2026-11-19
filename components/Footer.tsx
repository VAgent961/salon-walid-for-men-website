import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img alt="Salon Walid Logo" className="h-10 w-auto object-contain brightness-0 invert" src="/images/logo.jpg" />
              <span className="font-heading text-xl font-bold tracking-tight">Salon Walid</span>
            </div>
            <p className="text-muted text-sm opacity-80 max-w-xs">
              Professional men's haircuts, fades, and modern styles in Jdeideh, Boqaata.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold">Contact</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80 tabular-nums">
              <p>Souq, Jdeideh, Boqaata, Lebanon</p>
              <a href="tel:+96170939042" className="hover:text-secondary transition-colors">+961 70 939 042</a>
              <a href="https://instagram.com/salonwalid_formen" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">@salonwalid_formen</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold">Hours</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80 tabular-nums">
              <p>Tue - Sat: 8:30 AM – 8:00 PM</p>
              <p>Sun: 8:30 AM – 4:00 PM</p>
              <p>Mon: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>© 2025 Salon Walid for men. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
