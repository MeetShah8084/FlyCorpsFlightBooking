import { useState } from 'react';

const HeroSearch = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <section className="mb-12">
      <div className="bg-vintage-paper dark:bg-background-dark/80 p-8 rounded-custom border-2 border-brand/10 shadow-lg retro-card">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-brand dark:text-vintage-cream uppercase tracking-tight">Experience Golden Age Travel</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="md:col-span-1">
            <label className="block text-xs font-bold uppercase mb-2 text-vintage-navy/60 dark:text-white/80">From</label>
            <input className="w-full bg-white dark:bg-background-dark/50 dark:text-white border-brand/20 rounded-custom focus:ring-brand focus:border-brand p-3" placeholder="New York (JFK)" type="text" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-bold uppercase mb-2 text-vintage-navy/60 dark:text-white/80">To</label>
            <input className="w-full bg-white dark:bg-background-dark/50 dark:text-white border-brand/20 rounded-custom focus:ring-brand focus:border-brand p-3" placeholder="London (LHR)" type="text" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-bold uppercase mb-2 text-vintage-navy/60 dark:text-white/80">Departure Date</label>
            <input className="w-full bg-white dark:bg-background-dark/50 dark:text-white border-brand/20 rounded-custom focus:ring-brand focus:border-brand p-3" type="date" />
          </div>
          <div className="flex gap-2">
            <button className="flex-grow bg-brand text-white font-bold py-3 px-6 rounded-custom hover:opacity-90 transition-all uppercase">
              Find Flights
            </button>
            
            {/* Filter Toggle */}
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`border-2 border-brand/20 p-3 rounded-custom hover:bg-brand/5 group transition-all ${isFilterOpen ? 'bg-brand' : 'bg-white dark:bg-background-dark/50'}`}
              title="Toggle Filters"
            >
              <svg className={`h-6 w-6 group-hover:scale-110 transition-transform ${isFilterOpen ? 'text-white' : 'text-brand'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className={`mt-6 pt-6 border-t border-brand/10 grid grid-cols-2 md:grid-cols-4 gap-4 ${isFilterOpen ? '' : 'hidden'}`}>
          <div className="flex items-center gap-2">
            <input className="text-brand rounded focus:ring-brand" id="f1" type="checkbox" />
            <label className="text-sm font-medium dark:text-white" htmlFor="f1">Non-stop Only</label>
          </div>
          <div className="flex items-center gap-2">
            <input className="text-brand rounded focus:ring-brand" id="f3" type="checkbox" />
            <label className="text-sm font-medium dark:text-white" htmlFor="f3">Propeller Aircraft</label>
          </div>
          <div className="flex items-center gap-2">
            <input className="text-brand rounded focus:ring-brand" id="f4" type="checkbox" />
            <label className="text-sm font-medium dark:text-white" htmlFor="f4">Pan Am Alliance</label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
