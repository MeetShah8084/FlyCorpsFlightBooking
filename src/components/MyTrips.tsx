import { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Armchair,
  Search,
  History,
  XCircle,
  CheckCircle2,
  Navigation,
  ChevronRight,
  Ticket
} from 'lucide-react';

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
          className={`px-8 py-4 border-b-4 font-bold whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === 'upcoming' ? 'border-brand text-brand' : 'border-transparent text-vintage-muted dark:text-white/40 hover:text-vintage-navy dark:hover:text-white'}`}
        >
          <Ticket className="w-5 h-5" />
          Upcoming (2)
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`px-8 py-4 border-b-4 font-bold whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === 'past' ? 'border-brand text-brand' : 'border-transparent text-vintage-muted dark:text-white/40 hover:text-vintage-navy dark:hover:text-white'}`}
        >
          <History className="w-5 h-5" />
          Past Expeditions
        </button>
        <button
          onClick={() => setActiveTab('cancelled')}
          className={`px-8 py-4 border-b-4 font-bold whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === 'cancelled' ? 'border-brand text-brand' : 'border-transparent text-vintage-muted dark:text-white/40 hover:text-vintage-navy dark:hover:text-white'}`}
        >
          <XCircle className="w-5 h-5" />
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
                  <img alt="London Eye and Big Ben at dusk" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop" />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase shadow-md flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Confirmed
                  </div>
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
                      <Navigation className="w-10 h-10 text-brand/30 rotate-45" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-dashed border-vintage-muted/30 pt-6">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-3 h-3 text-brand" />
                        <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50">Date</p>
                      </div>
                      <p className="font-bold text-vintage-navy dark:text-white">OCT 15, 1968</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <Clock className="w-3 h-3 text-brand" />
                        <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50">Boarding</p>
                      </div>
                      <p className="font-bold text-vintage-navy dark:text-white">10:30 AM</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <MapPin className="w-3 h-3 text-brand" />
                        <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50">Gate</p>
                      </div>
                      <p className="font-bold text-vintage-navy dark:text-white">B24</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <Armchair className="w-3 h-3 text-brand" />
                        <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50">Seat</p>
                      </div>
                      <p className="font-bold text-brand">12A (Window)</p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button onClick={() => setCurrentPage('boarding-pass')} className="bg-brand text-white font-bold py-2 px-6 rounded-custom text-sm hover:opacity-90 transition-all uppercase tracking-widest shadow-md flex items-center gap-2 group">
                      View Boarding Pass
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                  <img alt="The Colosseum in Rome under clear sky" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop" />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase shadow-md flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Confirmed
                  </div>
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
                      <Navigation className="w-10 h-10 text-brand/30 rotate-45" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-dashed border-vintage-muted/30 pt-6">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-3 h-3 text-brand" />
                        <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50">Date</p>
                      </div>
                      <p className="font-bold text-vintage-navy dark:text-white">NOV 02, 1968</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <Clock className="w-3 h-3 text-brand" />
                        <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50">Boarding</p>
                      </div>
                      <p className="font-bold text-vintage-navy dark:text-white">02:15 PM</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <MapPin className="w-3 h-3 text-brand" />
                        <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50">Gate</p>
                      </div>
                      <p className="font-bold text-vintage-navy dark:text-white">A04</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <Armchair className="w-3 h-3 text-brand" />
                        <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50">Seat</p>
                      </div>
                      <p className="font-bold text-brand">04C (Aisle)</p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button onClick={() => setCurrentPage('boarding-pass')} className="bg-brand text-white font-bold py-2 px-6 rounded-custom text-sm hover:opacity-90 transition-all uppercase tracking-widest shadow-md flex items-center gap-2 group">
                      View Boarding Pass
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                <div className="absolute top-4 left-4 bg-vintage-muted text-white text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase shadow-md flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Completed
                </div>
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
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase shadow-md flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    Cancelled
                  </div>
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
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-3 h-3 text-red-500" />
                        <p className="text-[10px] uppercase font-bold text-red-700/60 dark:text-red-300/60">Date</p>
                      </div>
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
          <button
            onClick={() => setCurrentPage('home')}
            className="bg-brand text-white font-bold py-3 px-10 rounded-custom uppercase tracking-widest text-sm hover:opacity-90 transition-all shadow-md flex items-center gap-2 mx-auto"
          >
            <Search className="w-4 h-4" />
            Search Flights
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTrips;
