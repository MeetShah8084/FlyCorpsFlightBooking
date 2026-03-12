import { useState } from 'react';

const MyTrips = ({ setCurrentPage }: { setCurrentPage: (page: 'boarding-pass' | 'home' | 'profile' | 'login' | 'book' | 'mytrips') => void }) => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'cancelled'>('upcoming');

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 flex-grow">
      <div className="mb-12">
        <h2 className="text-5xl font-black text-vintage-navy dark:text-white mb-2">My Trips</h2>
        <p className="text-vintage-muted dark:text-white/60 font-medium">Your upcoming vintage adventures across the globe.</p>
      </div>

      <div className="flex border-b border-vintage-muted/20 dark:border-white/10 mb-10 overflow-x-auto hide-scrollbar">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-8 py-4 border-b-4 font-bold whitespace-nowrap transition-colors ${activeTab === 'upcoming' ? 'border-brand text-brand' : 'border-transparent text-vintage-muted dark:text-white/40 hover:text-vintage-navy dark:hover:text-white'}`}
        >
          Upcoming (2)
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`px-8 py-4 border-b-4 font-bold whitespace-nowrap transition-colors ${activeTab === 'past' ? 'border-brand text-brand' : 'border-transparent text-vintage-muted dark:text-white/40 hover:text-vintage-navy dark:hover:text-white'}`}
        >
          Past Expeditions
        </button>
        <button
          onClick={() => setActiveTab('cancelled')}
          className={`px-8 py-4 border-b-4 font-bold whitespace-nowrap transition-colors ${activeTab === 'cancelled' ? 'border-brand text-brand' : 'border-transparent text-vintage-muted dark:text-white/40 hover:text-vintage-navy dark:hover:text-white'}`}
        >
          Cancelled
        </button>
      </div>

      <div className="grid gap-10">

        {/* Upcoming Trips */}
        {activeTab === 'upcoming' && (
          <>
            {/* Upcoming Trip 1 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand/20 to-brand/5 rounded-custom blur opacity-25"></div>
              <div className="relative bg-white dark:bg-background-dark border border-vintage-muted/20 dark:border-white/10 rounded-custom overflow-hidden shadow-lg retro-card flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative">
                  <img alt="London Eye and Big Ben at dusk" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw8K4pho6oUCcTzUfmhGv89fXCI3CxYwjnLWzDFznmZvL8-93Hj4uGDLeCPN5X0kDdVgr7VSXgm9mtpnnJn0pS0IX_2Lf9eqtjDsga-Cti7Nv4PE61nPsZNiyjWrq6xLSbn1MpHuzUfQ51hKUkwPt7gqaLLDHUEt7iCc00uho6GKlwef0t4GlGrQzJR1YFxZuOm1MtaZlydXAESIO5Q9_HLxntLIDSN3KWNlrVbaZZ0y0RpunBfHuouilyIo78HY6FXDSSeaa1dLI" />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase shadow-md">Confirmed</div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between dark:text-white">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-brand uppercase tracking-widest">Flight RS-1962</span>
                      </div>
                      <h3 className="text-3xl font-black tracking-tight text-vintage-navy dark:text-white">JFK → LHR</h3>
                      <p className="text-vintage-muted dark:text-white/60 font-medium">New York to London Heathrow</p>
                    </div>
                    <div className="text-right">
                      <svg className="w-10 h-10 text-brand/30" fill="currentColor" viewBox="0 0 24 24"><path d="M12.986 2.375L21.492 10.88C21.725 11.114 21.854 11.43 21.854 11.761C21.854 12.091 21.725 12.408 21.492 12.641L12.986 21.147C12.753 21.38 12.436 21.51 12.106 21.51C11.775 21.51 11.458 21.38 11.225 21.147L2.72 12.641C2.486 12.408 2.357 12.091 2.357 11.761C2.357 11.43 2.486 11.114 2.72 10.88L11.225 2.375C11.458 2.141 11.775 2.012 12.106 2.012C12.436 2.012 12.753 2.141 12.986 2.375ZM12.106 3.778L4.481 11.403C4.381 11.503 4.326 11.637 4.326 11.761C4.326 11.884 4.381 12.019 4.481 12.119L12.106 19.743L19.73 12.119C19.83 12.019 19.886 11.884 19.886 11.761C19.886 11.637 19.83 11.503 19.73 11.403L12.106 3.778ZM6.897 12.228L13.167 6.138L14.777 6.138L10.038 10.741L16.299 10.741L19.168 7.954L19.168 11.085L16.299 13.842L10.038 13.842L14.777 18.445L13.167 18.445L6.897 12.228Z" /></svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-dashed border-vintage-muted/30 pt-6">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50 mb-1">Date</p>
                      <p className="font-bold text-vintage-navy dark:text-white">OCT 15, 1968</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50 mb-1">Boarding</p>
                      <p className="font-bold text-vintage-navy dark:text-white">10:30 AM</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50 mb-1">Gate</p>
                      <p className="font-bold text-vintage-navy dark:text-white">B24</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50 mb-1">Seat</p>
                      <p className="font-bold text-brand">12A (Window)</p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button onClick={() => setCurrentPage('boarding-pass')} className="bg-brand text-white font-bold py-2 px-6 rounded-custom text-sm hover:opacity-90 transition-all uppercase tracking-widest shadow-md">
                      View Boarding Pass
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Trip 2 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand/20 to-brand/5 rounded-custom blur opacity-25"></div>
              <div className="relative bg-white dark:bg-background-dark border border-vintage-muted/20 dark:border-white/10 rounded-custom overflow-hidden shadow-lg retro-card flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative">
                  <img alt="The Colosseum in Rome under clear sky" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxNqGR2uWlUxxjMD-6tnFhEGr5HwtlyLbCBHcc7VWxCWqjOYnFY8ScTW1TfkFQqbjukFOWq5ulYtJxyIJxjKj241xBJ21unhY2O8odyFoVG3ACh04yswwvich2RRVfbsTepn_K5rWZYjlBAy4LCWfLvklGAtCSwJ5cevDgLqtLP-6IcIu1w65tHqoyuxZ63KWdPGQx3x6kvaDuH3VdvjMgDxxZTDALpQc5r8Cx76mBuITgG_3EQZXF6tV3IDc7UQQpF1c8D02RUu8" />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase shadow-md">Confirmed</div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between dark:text-white">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-brand uppercase tracking-widest">Flight RS-1974</span>
                      </div>
                      <h3 className="text-3xl font-black tracking-tight text-vintage-navy dark:text-white">CDG → FCO</h3>
                      <p className="text-vintage-muted dark:text-white/60 font-medium">Paris to Rome Leonardo da Vinci</p>
                    </div>
                    <div className="text-right">
                      <svg className="w-10 h-10 text-brand/30" fill="currentColor" viewBox="0 0 24 24"><path d="M12.986 2.375L21.492 10.88C21.725 11.114 21.854 11.43 21.854 11.761C21.854 12.091 21.725 12.408 21.492 12.641L12.986 21.147C12.753 21.38 12.436 21.51 12.106 21.51C11.775 21.51 11.458 21.38 11.225 21.147L2.72 12.641C2.486 12.408 2.357 12.091 2.357 11.761C2.357 11.43 2.486 11.114 2.72 10.88L11.225 2.375C11.458 2.141 11.775 2.012 12.106 2.012C12.436 2.012 12.753 2.141 12.986 2.375ZM12.106 3.778L4.481 11.403C4.381 11.503 4.326 11.637 4.326 11.761C4.326 11.884 4.381 12.019 4.481 12.119L12.106 19.743L19.73 12.119C19.83 12.019 19.886 11.884 19.886 11.761C19.886 11.637 19.83 11.503 19.73 11.403L12.106 3.778ZM6.897 12.228L13.167 6.138L14.777 6.138L10.038 10.741L16.299 10.741L19.168 7.954L19.168 11.085L16.299 13.842L10.038 13.842L14.777 18.445L13.167 18.445L6.897 12.228Z" /></svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-dashed border-vintage-muted/30 pt-6">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50 mb-1">Date</p>
                      <p className="font-bold text-vintage-navy dark:text-white">NOV 02, 1968</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50 mb-1">Boarding</p>
                      <p className="font-bold text-vintage-navy dark:text-white">02:15 PM</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50 mb-1">Gate</p>
                      <p className="font-bold text-vintage-navy dark:text-white">A04</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50 mb-1">Seat</p>
                      <p className="font-bold text-brand">04C (Aisle)</p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button onClick={() => setCurrentPage('boarding-pass')} className="bg-brand text-white font-bold py-2 px-6 rounded-custom text-sm hover:opacity-90 transition-all uppercase tracking-widest shadow-md">
                      View Boarding Pass
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Past Experience (Single card as requested) */}
        {activeTab === 'past' && (
          <div className="opacity-70 mt-4">
            <h3 className="text-xl font-bold text-vintage-navy dark:text-white mb-4">Past Experiences</h3>
            <div className="relative bg-white dark:bg-background-dark border border-vintage-muted/20 dark:border-white/10 rounded-custom overflow-hidden shadow-sm flex flex-col md:flex-row">
              <div className="md:w-1/3 h-32 md:h-auto overflow-hidden relative grayscale">
                <img alt="Hawaii Beach" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=2069&auto=format&fit=crop" />
                <div className="absolute top-4 left-4 bg-vintage-muted text-white text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase shadow-md">Completed</div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between dark:text-white grayscale opacity-80">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-vintage-navy dark:text-white">LAX → HNL</h3>
                    <p className="text-vintage-muted dark:text-white/60 font-medium text-sm">Los Angeles to Honolulu</p>
                    <p className="text-xs uppercase font-bold text-vintage-muted dark:text-white/50 mt-2">Flown on AUG 12, 1968</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cancelled Trip (Red Border as requested) */}
        {activeTab === 'cancelled' && (
          <div className="mt-4">
            <h3 className="text-xl font-bold text-vintage-navy dark:text-white mb-4">Cancelled Trips</h3>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-red-500/5 rounded-custom blur opacity-25"></div>
              <div className="relative bg-red-50 dark:bg-red-900/10 border-2 border-red-500/50 rounded-custom overflow-hidden shadow-md flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative grayscale opacity-70">
                  <img alt="Rainy airplane window" className="w-full h-full object-cover" src="https://imgs.search.brave.com/hBY0clLiqW1qWve9wCCxM6d6SXWDrte9zyUa5q3c7xg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi92aWV3/LXJhaW55LWFpcnBs/YW5lLXdpbmRvdy10/YWtlb2ZmLXJ1bndh/eS01MzY1ODU4Mi5q/cGc" />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase shadow-md">Cancelled</div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between dark:text-white group">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Flight RS-2211 - Cancelled</span>
                      </div>
                      <h3 className="text-3xl font-black tracking-tight text-vintage-navy dark:text-white">ORD → MIA</h3>
                      <p className="text-vintage-muted dark:text-white/60 font-medium">Chicago O'Hare to Miami</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-dashed border-red-500/20 pt-6 opacity-60">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-red-700/60 dark:text-red-300/60 mb-1">Date</p>
                      <p className="font-bold text-vintage-navy dark:text-white line-through">SEP 04, 1968</p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <p className="text-xs font-bold text-red-500 uppercase tracking-widest">Refund Processed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 p-12 bg-brand/5 rounded-custom border border-brand/20 text-center shadow-inner">
          <h4 className="text-2xl font-black mb-2 uppercase text-vintage-navy dark:text-white">Ready for your next trip?</h4>
          <p className="text-vintage-muted dark:text-white/60 mb-8 max-w-md mx-auto">Explore our vintage routes and book a classic flight to the world's most elegant destinations.</p>
          <button className="bg-brand text-white font-bold py-3 px-10 rounded-custom uppercase tracking-widest text-sm hover:opacity-90 transition-all shadow-md">
            Search Flights
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTrips;
