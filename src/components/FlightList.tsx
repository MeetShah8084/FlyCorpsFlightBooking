import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Plane } from 'lucide-react';

interface Flight {
  id: string;
  flight_number: string;
  airline: string;
  origin_city: string;
  destination_city: string;
  departure_time: string;
  arrival_time: string;
  price: number;
}

interface FlightListProps {
  onSelectFlight?: (flight: Flight) => void;
  searchFilters?: { from: string, to: string, date: string } | null;
}

const FlightList: React.FC<FlightListProps> = ({ onSelectFlight, searchFilters }) => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlights = async () => {
      let query = supabase.from('flights').select('*');

      if (searchFilters) {
        if (searchFilters.from) {
          query = query.ilike('origin_city', `%${searchFilters.from}%`);
        }
        if (searchFilters.to) {
          query = query.ilike('destination_city', `%${searchFilters.to}%`);
        }
        if (searchFilters.date) {
          // Bypass local timezone offsets which shift evening flights into the next day.
          // Explicitly bound the actual calendar date in UTC using the raw user string.
          const startDate = `${searchFilters.date}T00:00:00.000Z`;
          const endDate = `${searchFilters.date}T23:59:59.999Z`;

          query = query.gte('departure_time', startDate).lte('departure_time', endDate);
        }
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching flights:', error);
      } else {
        const flightsData = data || [];
        const shuffled = [...flightsData].sort(() => 0.5 - Math.random());
        setFlights(shuffled.slice(0, 20));
      }
      setLoading(false);
    };

    fetchFlights();
  }, [searchFilters]);

  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const getDuration = (start: string, end: string) => {
    const diff = new Date(end).getTime() - new Date(start).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${mins}m`;
  };

  const getType = (price: number) => {
    return price > 450 ? 'First Class' : 'Round Trip';
  };

  if (loading) {
    return (
      <section className="lg:col-span-2 space-y-6 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
      </section>
    );
  }

  return (
    <section className="lg:col-span-2 space-y-6">
      <div className="flex justify-between items-center border-b-2 border-brand pb-2">
        <h2 className="text-xl font-bold uppercase tracking-wider text-brand dark:text-vintage-cream">Available Flights</h2>
        <span className="text-xs font-mono uppercase text-vintage-muted dark:text-white/60">{flights.length} Results Found</span>
      </div>
      <div className="flight-list-scroll space-y-6 mt-6">
        {flights.length === 0 && !loading ? (
          <div className="bg-vintage-paper dark:bg-background-dark/80 p-8 rounded-custom border-2 border-brand/10 text-center">
            <p className="text-xl font-bold dark:text-white">No flights found matching your criteria.</p>
            <p className="text-vintage-body mt-2">Try adjusting your search filters or dates.</p>
          </div>
        ) : (
          flights.map((flight) => (
            <div key={flight.id} className="bg-white dark:bg-background-dark/60 border-2 border-brand/10 rounded-custom p-6 retro-card flex flex-col md:flex-row gap-6 items-center transition-colors hover:border-brand/40 shadow-sm hover:shadow-md">
              <div className="flex-shrink-0 w-24 h-24 bg-vintage-paper dark:bg-background-dark/80 rounded-full flex items-center justify-center p-4">
                <Plane className="w-12 h-12 text-brand" />
              </div>

              <div className="flex-grow grid grid-cols-3 gap-4 text-center md:text-left w-full">
                <div>
                  <p className="text-2xl font-bold dark:text-white">{formatTime(flight.departure_time)}</p>
                  <p className="text-xs uppercase font-bold text-vintage-muted dark:text-white/60">{flight.origin_city}</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <span className="text-[10px] uppercase font-bold text-brand">Non-stop</span>
                  <div className="w-full h-[2px] bg-brand/20 relative my-2">
                    <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 text-brand text-lg">✈</div>
                  </div>
                  <p className="text-[10px] uppercase text-vintage-muted dark:text-white/60">{getDuration(flight.departure_time, flight.arrival_time)}</p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold dark:text-white">{formatTime(flight.arrival_time)}</p>
                  <p className="text-xs uppercase font-bold text-vintage-muted dark:text-white/60">{flight.destination_city}</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center border-l-0 md:border-l-2 border-dashed border-brand/20 pl-0 md:pl-6 w-full md:w-32 mt-4 md:mt-0 pt-4 md:pt-0 border-t-2 md:border-t-0">
                <p className="text-xl font-bold text-brand">${flight.price}</p>
                <p className="text-[10px] uppercase font-bold mb-3 dark:text-white/80">{getType(flight.price)}</p>
                <button
                  onClick={() => onSelectFlight && onSelectFlight(flight)}
                  className="w-full bg-brand text-white text-[10px] py-2 px-4 rounded-custom uppercase font-bold tracking-widest hover:brightness-110"
                >
                  Book
                </button>
              </div>
            </div>
          )))}
      </div>

    </section>
  );
};

export default FlightList;
