export default function MobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-outline-variant/30 p-4 grid grid-cols-2 gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <a 
        href="tel:+96170939042" 
        className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-md font-body text-sm font-bold active:scale-[0.98] transition-transform"
      >
        <span className="material-symbols-outlined text-lg">call</span>
        Call
      </a>
      <a 
        href="https://wa.me/96170939042" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-md font-body text-sm font-bold active:scale-[0.98] transition-transform"
      >
        <span className="material-symbols-outlined text-lg">chat</span>
        WhatsApp
      </a>
    </div>
  );
}
