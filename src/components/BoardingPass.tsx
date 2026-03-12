
const BoardingPass = () => {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 flex-grow">
      <div className="max-w-[1000px] w-full">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-vintage-navy dark:text-white text-4xl font-black leading-tight tracking-tight">Your Boarding Pass</h1>
          <p className="text-brand font-medium">Ready for departure, John Doe.</p>
        </div>

        {/* Boarding Pass Container */}
        <div className="relative flex flex-col md:flex-row bg-vintage-cream dark:bg-background-dark border-2 border-vintage-muted/20 dark:border-white/10 shadow-2xl rounded-custom overflow-hidden text-vintage-navy dark:text-white">

          {/* Main Ticket Section */}
          <div className="flex-1 p-8 border-b md:border-b-0 md:border-r-4 border-dashed border-vintage-muted/30 dark:border-white/20 relative">
            {/* Vintage Header */}
            <div className="flex justify-between items-start mb-10">
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-[0.3em] text-vintage-muted dark:text-white/50 uppercase">Boarding Pass</span>
                <span className="text-3xl font-black tracking-tighter text-brand">RETRO SKIES</span>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-vintage-muted dark:text-white/50 block">CLASS</span>
                <span className="text-lg font-bold">FIRST CLASS</span>
              </div>
            </div>

            {/* Flight Path */}
            <div className="flex justify-between items-center mb-10 px-4">
              <div className="text-center">
                <h3 className="text-5xl font-black tracking-tighter">JFK</h3>
                <p className="text-xs font-bold text-vintage-muted dark:text-white/60">NEW YORK</p>
              </div>
              <div className="flex-1 flex items-center justify-center px-6 relative">
                <div className="w-full h-[2px] bg-vintage-muted/30 dark:bg-white/20"></div>
                <span className="material-symbols-outlined absolute text-brand bg-vintage-cream dark:bg-background-dark px-2">flight</span>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-black tracking-tighter">LHR</h3>
                <p className="text-xs font-bold text-vintage-muted dark:text-white/60">LONDON</p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-3 gap-y-8 gap-x-4">
              <div>
                <p className="text-[10px] font-bold text-vintage-muted dark:text-white/50 tracking-wider uppercase">Passenger Name</p>
                <p className="text-lg font-bold">John Doe</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-vintage-muted dark:text-white/50 tracking-wider uppercase">Flight No.</p>
                <p className="text-lg font-bold">RS-1962</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-vintage-muted dark:text-white/50 tracking-wider uppercase">Gate</p>
                <p className="text-lg font-bold">B12</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-vintage-muted dark:text-white/50 tracking-wider uppercase">Date</p>
                <p className="text-lg font-bold">OCT 14, 1962</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-vintage-muted dark:text-white/50 tracking-wider uppercase">Boarding Time</p>
                <p className="text-lg font-bold">08:15 AM</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-vintage-muted dark:text-white/50 tracking-wider uppercase">Seat</p>
                <p className="text-lg font-bold">14A</p>
              </div>
            </div>

            {/* Circular Cutouts for tear-off effect */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-white dark:bg-background-dark"></div>
            </div>
          </div>

          {/* Stub Section (Tear-off) */}
          <div className="w-full md:w-72 p-8 bg-black/5 dark:bg-white/5 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <div className="text-center pb-4 border-b border-vintage-muted/20 dark:border-white/10">
                <span className="text-[10px] font-bold text-vintage-muted dark:text-white/50 tracking-widest block">PASSENGER STUB</span>
                <span className="text-xl font-black text-brand">RETRO SKIES</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-[10px] font-bold text-vintage-muted dark:text-white/50">PASSENGER</span>
                  <span className="text-xs font-bold">STERLING / A.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-bold text-vintage-muted dark:text-white/50">FLIGHT</span>
                  <span className="text-xs font-bold">RS-1962</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-bold text-vintage-muted dark:text-white/50">FROM</span>
                  <span className="text-xs font-bold uppercase">JFK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-bold text-vintage-muted dark:text-white/50">TO</span>
                  <span className="text-xs font-bold uppercase">LHR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-vintage-muted dark:text-white/50">SEAT</span>
                  <span className="text-lg font-black text-brand">14A</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-white dark:bg-white/90 p-2 border border-vintage-muted/20 flex flex-col items-center">
                <div className="w-full h-12 flex gap-1 items-end justify-center">
                  <div className="w-1 h-full bg-black"></div>
                  <div className="w-[2px] h-3/4 bg-black"></div>
                  <div className="w-1 h-full bg-black"></div>
                  <div className="w-[1px] h-full bg-black"></div>
                  <div className="w-[3px] h-2/3 bg-black"></div>
                  <div className="w-[1px] h-full bg-black"></div>
                  <div className="w-1 h-3/4 bg-black"></div>
                  <div className="w-[2px] h-full bg-black"></div>
                  <div className="w-1 h-2/3 bg-black"></div>
                  <div className="w-[1px] h-full bg-black"></div>
                  <div className="w-[3px] h-full bg-black"></div>
                  <div className="w-1 h-3/4 bg-black"></div>
                  <div className="w-[1px] h-full bg-black"></div>
                  <div className="w-1 h-full bg-black"></div>
                  <div className="w-[2px] h-2/3 bg-black"></div>
                  <div className="w-1 h-full bg-black"></div>
                </div>
                <span className="text-[8px] font-mono mt-1 text-slate-400">01234567891962</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-white/5 p-6 rounded-custom border border-vintage-muted/20 dark:border-white/10 shadow-sm">
            <span className="material-symbols-outlined text-brand mb-3">luggage</span>
            <h4 className="font-bold text-vintage-navy dark:text-white">Baggage Policy</h4>
            <p className="text-sm text-vintage-muted dark:text-white/60 mt-2">Two pieces of checked luggage and one carry-on are included in your First Class ticket.</p>
          </div>
          <div className="bg-white dark:bg-white/5 p-6 rounded-custom border border-vintage-muted/20 dark:border-white/10 shadow-sm">
            <span className="material-symbols-outlined text-brand mb-3">restaurant</span>
            <h4 className="font-bold text-vintage-navy dark:text-white">In-flight Dining</h4>
            <p className="text-sm text-vintage-muted dark:text-white/60 mt-2">Gourmet 5-course meal with champagne service starts 1 hour after takeoff.</p>
          </div>
          <div className="bg-white dark:bg-white/5 p-6 rounded-custom border border-vintage-muted/20 dark:border-white/10 shadow-sm">
            <span className="material-symbols-outlined text-brand mb-3">meeting_room</span>
            <h4 className="font-bold text-vintage-navy dark:text-white">Lounge Access</h4>
            <p className="text-sm text-vintage-muted dark:text-white/60 mt-2">Enjoy complimentary access to the Retro Skies Wing Lounge at JFK Terminal 4.</p>
          </div>
        </div>

        {/* Destination Map Preview */}
        <div className="mt-8 rounded-custom overflow-hidden h-64 relative">
          <img className="w-full h-full object-cover" alt="London LHR destination" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj-a2V6EiWAWbdnRMdTxmTrZLhX5tvihKjrmfp-1DsGLgf3vRBXqp3hwRKXzyUP0BsI0oCaaTlm40mcPgc6ZUSUN8MGG7HCEZlZ0X2jDJRE_H_sBD1n9Pj3LVZomGqKXmf63f5H9x2CZEBqDHvCjJh0lUmbw_IVYIO15373wfUigj6cex2n0Lo9ERTBLSjLIO0zPforsSQ1cj_O5a5h7XLoBuNfg88CtSDNMWLahgMKtIJo4BPhFqX9CnvFXBKOXotiaez2ZJg_WU" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
            <div>
              <p className="text-brand font-bold text-sm tracking-widest uppercase">Your Destination</p>
              <h3 className="text-white text-3xl font-black">LONDON (LHR)</h3>
              <p className="text-white/80 text-sm mt-1">Expected temperature: 18°C / 64°F</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardingPass;
