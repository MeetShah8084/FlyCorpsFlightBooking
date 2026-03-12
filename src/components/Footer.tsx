

const Footer = () => {
  return (
    <footer className="bg-vintage-paper dark:bg-background-dark border-t-2 border-brand mt-12 py-12 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-brand dark:text-vintage-cream font-bold uppercase tracking-tighter text-xl">Fly Corporations</p>
          <p className="text-[10px] uppercase text-vintage-muted dark:text-white/60 mt-1">Established 1964 — Reimagined 2026</p>
        </div>
        
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-vintage-muted dark:text-white/80">
          <a className="hover:text-brand dark:hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-brand dark:hover:text-white transition-colors" href="#">Terms of Carriage</a>
          <a className="hover:text-brand dark:hover:text-white transition-colors" href="#">Fleet Info</a>
          <a className="hover:text-brand dark:hover:text-white transition-colors" href="#">Support</a>
        </div>
        
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full border border-brand/40 flex items-center justify-center text-brand">f</div>
          <div className="w-8 h-8 rounded-full border border-brand/40 flex items-center justify-center text-brand">t</div>
          <div className="w-8 h-8 rounded-full border border-brand/40 flex items-center justify-center text-brand">i</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
