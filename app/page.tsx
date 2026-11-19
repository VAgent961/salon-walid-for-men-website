import { Metadata } from 'next';
import Link from 'next/link';
import { Star, ArrowRight, Scissors, Brush, Ruler } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Salon Walid for men | Professional Barber in Boqaata, Chouf',
  description: 'Professional men\'s haircuts, fades, and modern styles in Jdeideh, Boqaata. Visit Salon Walid for precision grooming.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-primary leading-[1.1] mb-6">
              Modern styles and precision cuts in Jdeideh
            </h1>
            <p className="font-body text-lg md:text-xl text-muted max-w-xl mb-10 leading-relaxed">
              Expert grooming for men located in the Souq, Boqaata. We specialize in clean fades and detailed head designs.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-md font-body font-bold text-center hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/10"
              >
                Book an appointment
              </Link>
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJpYYG_-UhHxUROs_cG7Ba5As"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary border border-outline-variant px-8 py-4 rounded-md font-body font-bold text-center hover:bg-surface transition-all active:scale-[0.98]"
              >
                Leave us a Google review
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <span className="font-body text-sm font-medium text-muted">5 stars from Google reviews</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Barbershop chair"
                className="w-full h-full object-cover"
                src="/images/stitch-2.jpg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
                Our grooming services
              </h2>
              <p className="font-body text-lg text-muted">
                We specialize in modern men's styles, clean fades, and detailed head designs.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group"
            >
              View all services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Haircuts', desc: 'Professional cuts tailored to your style.', icon: Scissors },
              { title: 'Fades', desc: 'Clean, precise fades.', icon: Brush },
              { title: 'Head Designs', desc: 'Customized patterns and precision work.', icon: Ruler }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-outline-variant/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="font-body text-muted leading-relaxed mb-8">{service.desc}</p>
                <Link href="/contact" className="text-secondary font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                  Book now
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Customer feedback
              </h2>
              <p className="text-lg opacity-70 mb-10">
                We take pride in every cut. Read why our customers keep coming back to Salon Walid.
              </p>
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJpYYG_-UhHxUROs_cG7Ba5As"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-primary px-6 py-3 rounded-md font-bold hover:bg-surface transition-colors"
              >
                Read more on Google
              </a>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 relative">
                <span className="material-symbols-outlined text-6xl text-secondary/20 absolute top-8 right-8">format_quote</span>
                <div className="flex text-secondary mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <blockquote className="font-heading text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                  “Great service, professional work ! Highly recommended.👌✂️”
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-white">
                    SG
                  </div>
                  <div>
                    <p className="font-bold text-lg">Said Ghaith</p>
                    <p className="text-sm opacity-60">Verified Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
                Visit our shop
              </h2>
              <p className="font-body text-lg text-muted mb-10 leading-relaxed">
                Find us in the Souq, Jdeideh, Boqaata. We are open six days a week to serve you with the best grooming experience in the Chouf area.
              </p>

              <div className="bg-surface p-8 rounded-2xl border border-outline-variant/30 mb-10">
                <h4 className="font-heading text-xl font-bold text-primary mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">schedule</span>
                  Opening Hours
                </h4>
                <div className="space-y-4 tabular-nums">
                  <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30">
                    <span className="font-medium">Tuesday, Saturday</span>
                    <span className="text-muted">8:30 AM. 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30">
                    <span className="font-medium">Sunday</span>
                    <span className="text-muted">8:30 AM. 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-secondary font-bold">
                    <span>Monday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJpYYG_-UhHxUROs_cG7Ba5As"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-md font-bold hover:bg-primary/90 transition-all active:scale-[0.98]"
              >
                <span className="material-symbols-outlined">directions</span>
                Get directions
              </a>
            </div>
            <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl border border-outline-variant/30">
              <iframe
                src="https://www.google.com/maps?q=33.6698715,35.599888799999995&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Salon Walid Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Ready for a fresh look?</h2>
          <p className="text-lg opacity-90 mb-10">Book your appointment today and experience the precision of Salon Walid.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-secondary px-10 py-4 rounded-md font-bold text-lg hover:bg-surface transition-all active:scale-[0.98] shadow-xl"
          >
            Book an appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
