import { Metadata } from 'next';
import Link from 'next/link';
import { Scissors, Brush, Ruler, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Salon Walid for men',
  description: 'Explore our professional grooming services including haircuts, precision fades, and custom head designs.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Precision Haircut',
      desc: 'Classic and contemporary cuts tailored to your face shape and personal style. We focus on clean lines and perfect balance.',
      image: '/images/stitch-3.jpg',
      icon: Scissors
    },
    {
      title: 'Skin Fade',
      desc: 'Expertly blended fades from skin to length. Our barbers are masters of the transition, ensuring a sharp, long-lasting look.',
      image: '/images/stitch-4.jpg',
      icon: Brush
    },
    {
      title: 'Head Designs',
      desc: 'Creative patterns and intricate detailing. From subtle lines to bold geometric shapes, we bring your vision to life.',
      image: '/images/stitch-5.jpg',
      icon: Ruler
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <span className="font-body text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">The Menu</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6">Professional grooming services</h1>
          <p className="text-lg md:text-xl opacity-70 max-w-2xl">
            Precision, style, and attention to detail in every service we provide.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 gap-20">
            {services.map((service, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      alt={service.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                      src={service.image} 
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8">
                    <service.icon size={32} />
                  </div>
                  <h2 className="font-heading text-4xl font-bold text-primary mb-6">{service.title}</h2>
                  <p className="font-body text-lg text-muted leading-relaxed mb-10">
                    {service.desc}
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-md font-bold hover:bg-primary/90 transition-all active:scale-[0.98]"
                  >
                    Book this service
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8">Need something specific?</h2>
          <p className="font-body text-lg text-muted mb-10">
            If you have a specific style or design in mind that isn't listed here, feel free to reach out. We love a challenge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+96170939042" className="bg-white border border-outline-variant px-8 py-4 rounded-md font-bold hover:bg-surface transition-all">Call to inquire</a>
            <a href="https://wa.me/96170939042" className="bg-[#25D366] text-white px-8 py-4 rounded-md font-bold hover:opacity-90 transition-all">WhatsApp us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
