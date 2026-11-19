'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img alt="Salon Walid Logo" className="h-10 w-auto object-contain" src="/images/logo.jpg" />
          <span className="font-heading text-xl font-bold tracking-tight text-primary">Salon Walid</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-body text-sm font-medium text-ink hover:text-secondary transition-colors">Home</Link>
          <Link href="/services" className="font-body text-sm font-medium text-ink hover:text-secondary transition-colors">Services</Link>
          <Link href="/contact" className="font-body text-sm font-medium text-ink hover:text-secondary transition-colors">Contact</Link>
          <Link 
            href="/contact" 
            className="bg-primary text-white px-6 py-2.5 rounded-md font-body text-sm font-semibold hover:bg-primary/90 transition-all active:scale-[0.98]"
          >
            Book an appointment
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-outline-variant/30 py-8 px-5 flex flex-col gap-6 shadow-xl animate-in fade-in slide-in-from-top-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="font-heading text-2xl font-bold text-primary">Home</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="font-heading text-2xl font-bold text-primary">Services</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="font-heading text-2xl font-bold text-primary">Contact</Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white w-full py-4 rounded-md font-body text-lg font-bold text-center"
          >
            Book an appointment
          </Link>
        </div>
      )}
    </header>
  );
}
