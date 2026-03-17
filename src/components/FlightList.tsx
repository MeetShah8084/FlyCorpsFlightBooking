import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import flightIcon from '../assets/flight_icon.png';

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

const FlightList = ({ onBookFlight }: { onBookFlight?: (flightId: string, price: number) => void }) => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlights = async () => {
      const { data, error } = await supabase
        .from('flights')
        .select('*')
        .order('departure_time', { ascending: true });
        
      if (error) {
        console.error('Error fetching flights:', error);
      } else {
        setFlights(data || []);
      }
      setLoading(false);
    };

    fetchFlights();
  }, []);

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

      <div className="flight-list-scroll space-y-6">
        {flights.map((flight) => (
          <div key={flight.id} className="bg-white dark:bg-background-dark/60 border-2 border-brand/10 rounded-custom p-6 retro-card flex flex-col md:flex-row gap-6 items-center transition-colors">
            <div className="flex-shrink-0 w-24 h-24 bg-vintage-paper dark:bg-background-dark/80 rounded-full flex items-center justify-center p-4">
              <img alt="Airline Logo" className="grayscale" src={flightIcon} />
            </div>

            <div className="flex-grow grid grid-cols-3 gap-4 text-center md:text-left w-full">
              <div>
                <p className="text-2xl font-bold dark:text-white">{formatTime(flight.departure_time)}</p>
                <p className="text-xs uppercase font-bold text-vintage-muted dark:text-white/60">JFK · NYC</p>
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
                <p className="text-xs uppercase font-bold text-vintage-muted dark:text-white/60">LHR · LDN</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-0 md:border-l-2 border-dashed border-brand/20 pl-0 md:pl-6 w-full md:w-32 mt-4 md:mt-0 pt-4 md:pt-0 border-t-2 md:border-t-0">
              <p className="text-xl font-bold text-brand">${flight.price}</p>
              <p className="text-[10px] uppercase font-bold mb-3 dark:text-white/80">{getType(flight.price)}</p>
              <button 
                onClick={() => onBookFlight && onBookFlight(flight.id, flight.price)}
                className="w-full bg-brand text-white text-[10px] py-2 px-4 rounded-custom uppercase font-bold tracking-widest hover:brightness-110"
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FlightList;
