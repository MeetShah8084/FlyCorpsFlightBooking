import { Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Book = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex-grow">
      {/* Hero Section */}
      <div className="mb-8 border-b-4 border-brand pb-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <span className="text-brand font-bold uppercase tracking-[0.3em] text-sm">Official Worldwide Service</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase text-vintage-navy dark:text-vintage-cream leading-none mt-2">Flight Timetable</h1>
            <p className="text-vintage-muted dark:text-white/60 mt-4 max-w-xl text-lg italic">The Golden Age of Jet Travel. Weekly updated routes and schedules for the modern traveler.</p>
          </div>
          {/* Removed Effective Date block */}
        </div>
      </div>

      {/* Filters & Search */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
        <div className="lg:col-span-2">
          <label className="block text-xs font-black uppercase tracking-widest mb-2 text-vintage-muted dark:text-white/80">Quick Search</label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand w-6 h-6" />
            <input className="w-full bg-white dark:bg-background-dark/50 dark:text-white border-2 border-brand/20 rounded-custom py-4 pl-12 pr-4 focus:border-brand focus:ring-brand transition-all text-lg font-medium" placeholder="Search by destination or flight number..." type="text" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-black uppercase tracking-widest mb-2 text-vintage-muted dark:text-white/80">Route Region</label>
          <div className="relative">
            <select className="w-full bg-white dark:bg-background-dark/50 dark:text-white border-2 border-brand/20 rounded-custom py-4 px-4 appearance-none focus:border-brand focus:ring-0 text-lg font-medium">
              <option>International</option>
              <option>Domestic (USA)</option>
              <option>Transatlantic</option>
              <option>Pacific Routes</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-vintage-muted dark:text-white/60 w-5 h-5" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-black uppercase tracking-widest mb-2 text-vintage-muted dark:text-white/80">Aircraft Type</label>
          <div className="relative">
            <select className="w-full bg-white dark:bg-background-dark/50 dark:text-white border-2 border-brand/20 rounded-custom py-4 px-4 appearance-none focus:border-brand focus:ring-0 text-lg font-medium">
              <option>All Fleet</option>
              <option>Boeing 707 Jet</option>
              <option>Douglas DC-8</option>
              <option>Caravelle VI-R</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-vintage-muted dark:text-white/60 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Timetable Navigation */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 flight-list-scroll">
        {days.map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`${
              selectedDay === day
                ? 'bg-brand text-white border-transparent'
                : 'bg-brand/10 dark:bg-brand/5 text-vintage-navy/60 dark:text-white/60 hover:bg-brand/20 border-transparent'
            } px-6 py-2 rounded-full font-bold uppercase text-sm tracking-tighter whitespace-nowrap transition-colors`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Main Timetable Table */}
      <div className="bg-white dark:bg-background-dark border-2 border-vintage-navy dark:border-brand/40 rounded-custom overflow-hidden shadow-lg retro-card">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-vintage-navy dark:bg-brand/20 text-white uppercase text-xs tracking-[0.2em]">
                <th className="px-6 py-4 font-black">Flight No.</th>
                <th className="px-6 py-4 font-black">From (Origin)</th>
                <th className="px-6 py-4 font-black">To (Destination)</th>
                <th className="px-6 py-4 font-black">Dep.</th>
                <th className="px-6 py-4 font-black">Arr.</th>
                <th className="px-6 py-4 font-black">Equipment</th>
                <th className="px-6 py-4 font-black">Stops</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand/10">
              <tr className="hover:bg-brand/5 transition-colors dark:text-white">
                <td className="px-6 py-5 font-black text-brand">RS 101</td>
                <td className="px-6 py-5">
                  <div className="font-bold">NEW YORK</div>
                  <div className="text-xs text-vintage-muted dark:text-white/50">JFK International</div>
                </td>
                <td className="px-6 py-5">
                  <div className="font-bold">LONDON</div>
                  <div className="text-xs text-vintage-muted dark:text-white/50">Heathrow Airport</div>
                </td>
                <td className="px-6 py-5 font-mono text-lg font-bold">08:00</td>
                <td className="px-6 py-5 font-mono text-lg font-bold">20:15</td>
                <td className="px-6 py-5 text-sm italic">Boeing 707-320</td>
                <td className="px-6 py-5">
                  <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Non-Stop</span>
                </td>
              </tr>
              <tr className="hover:bg-brand/5 transition-colors bg-brand/5 dark:bg-brand/10 dark:text-white">
                <td className="px-6 py-5 font-black text-brand">RS 245</td>
                <td className="px-6 py-5">
                  <div className="font-bold">CHICAGO</div>
                  <div className="text-xs text-vintage-muted dark:text-white/50">O'Hare Terminal 1</div>
                </td>
                <td className="px-6 py-5">
                  <div className="font-bold">PARIS</div>
                  <div className="text-xs text-vintage-muted dark:text-white/50">Orly Airport</div>
                </td>
                <td className="px-6 py-5 font-mono text-lg font-bold">11:30</td>
                <td className="px-6 py-5 font-mono text-lg font-bold">01:45 <span className="text-[10px] align-top text-brand font-black">+1</span></td>
                <td className="px-6 py-5 text-sm italic">Boeing 707 Jet</td>
                <td className="px-6 py-5">
                  <span className="bg-brand/10 text-vintage-navy/70 dark:text-white/80 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter border border-brand/20">1 Stop (Shannon)</span>
                </td>
              </tr>
              <tr className="hover:bg-brand/5 transition-colors dark:text-white">
                <td className="px-6 py-5 font-black text-brand">RS 082</td>
                <td className="px-6 py-5">
                  <div className="font-bold">LOS ANGELES</div>
                  <div className="text-xs text-vintage-muted dark:text-white/50">LAX International</div>
                </td>
                <td className="px-6 py-5">
                  <div className="font-bold">TOKYO</div>
                  <div className="text-xs text-vintage-muted dark:text-white/50">Haneda Int'l</div>
                </td>
                <td className="px-6 py-5 font-mono text-lg font-bold">22:00</td>
                <td className="px-6 py-5 font-mono text-lg font-bold">06:30 <span className="text-[10px] align-top text-brand font-black">+2</span></td>
                <td className="px-6 py-5 text-sm italic">Boeing 707-320</td>
                <td className="px-6 py-5">
                  <span className="bg-brand/10 text-vintage-navy/70 dark:text-white/80 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter border border-brand/20">1 Stop (Honolulu)</span>
                </td>
              </tr>
              <tr className="hover:bg-brand/5 transition-colors bg-brand/5 dark:bg-brand/10 dark:text-white">
                <td className="px-6 py-5 font-black text-brand">RS 412</td>
                <td className="px-6 py-5">
                  <div className="font-bold">ROME</div>
                  <div className="text-xs text-vintage-muted dark:text-white/50">Fiumicino</div>
                </td>
                <td className="px-6 py-5">
                  <div className="font-bold">ATHENS</div>
                  <div className="text-xs text-vintage-muted dark:text-white/50">Ellinikon</div>
                </td>
                <td className="px-6 py-5 font-mono text-lg font-bold">14:15</td>
                <td className="px-6 py-5 font-mono text-lg font-bold">16:45</td>
                <td className="px-6 py-5 text-sm italic">Caravelle VI-R</td>
                <td className="px-6 py-5">
                  <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Non-Stop</span>
                </td>
              </tr>
              <tr className="hover:bg-brand/5 transition-colors dark:text-white">
                <td className="px-6 py-5 font-black text-brand">RS 550</td>
                <td className="px-6 py-5">
                  <div className="font-bold">NEW YORK</div>
                  <div className="text-xs text-vintage-muted dark:text-white/50">JFK International</div>
                </td>
                <td className="px-6 py-5">
                  <div className="font-bold">MIAMI</div>
                  <div className="text-xs text-vintage-muted dark:text-white/50">Miami Int'l</div>
                </td>
                <td className="px-6 py-5 font-mono text-lg font-bold">09:15</td>
                <td className="px-6 py-5 font-mono text-lg font-bold">12:00</td>
                <td className="px-6 py-5 text-sm italic">Douglas DC-8</td>
                <td className="px-6 py-5">
                  <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Non-Stop</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-vintage-navy dark:bg-brand/20 p-4 flex justify-between items-center text-white/60 text-[10px] uppercase font-bold tracking-widest">
          <div>© 1964 FLYX CORPORATIONS</div>
          <div className="flex gap-4">
            <span>* +1 Denotes Next Day Arrival</span>
            <span>* All Times Local</span>
          </div>
        </div>
      </div>

      {/* Call to Action / Footer Card */}
      <div className="mt-12 flex justify-center">
        <div className="bg-brand/10 border-2 border-brand/20 p-8 rounded-custom relative overflow-hidden group max-w-2xl w-full text-center">
          <h3 className="text-2xl font-black uppercase text-brand mb-2">Book Your Ticket</h3>
          <p className="text-vintage-navy/70 dark:text-white/70 mb-6 font-medium">Experience the Royal Ambassador Service. Multi-course meals and silver service on every transatlantic crossing.</p>
          <button className="bg-brand text-white px-8 py-3 rounded-custom font-bold uppercase tracking-wider hover:opacity-90 shadow-md">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
