import { Metadata } from 'next';
import ContactForm from '@/components/Contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Salon Walid for men',
  description: 'Book your appointment at Salon Walid for men. Call or WhatsApp us today.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6">Book your appointment</h1>
          <p className="text-lg md:text-xl opacity-70 max-w-2xl">
            Ready for your next cut? Use the form below or contact us directly via WhatsApp or phone.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-outline-variant/30 shadow-xl">
                <h2 className="font-heading text-3xl font-bold text-primary mb-8">Appointment Request</h2>
                <ContactForm />
              </div>
            </div>
            
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="bg-surface p-8 rounded-3xl border border-outline-variant/30">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6">Direct Contact</h3>
                <div className="space-y-6">
                  <a 
                    href="tel:+96170939042" 
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-outline-variant/30 hover:border-secondary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted uppercase tracking-wider">Call Us</p>
                      <p className="font-body font-bold text-lg tabular-nums">+961 70 939 042</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/96170939042" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-outline-variant/30 hover:border-[#25D366] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined">chat</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted uppercase tracking-wider">WhatsApp</p>
                      <p className="font-body font-bold text-lg">Message Now</p>
                    </div>
                  </a>

                  <a 
                    href="https://instagram.com/salonwalid_formen" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-outline-variant/30 hover:border-pink-500 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined">photo_camera</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted uppercase tracking-wider">Instagram</p>
                      <p className="font-body font-bold text-lg">@salonwalid_formen</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-outline-variant/30">
                <img 
                  alt="Salon interior" 
                  className="w-full h-full object-cover" 
                  src="/images/stitch-6.jpg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
