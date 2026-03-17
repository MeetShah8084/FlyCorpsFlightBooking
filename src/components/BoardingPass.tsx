import { 
  Plane, 
  User, 
  Hash, 
  MapPin, 
  Calendar, 
  Clock, 
  Armchair, 
  Luggage, 
  Utensils, 
  Coffee 
} from 'lucide-react';

interface BoardingPassProps {
  booking: any;
  userData: { id?: string; name: string; email: string; picture: string; } | null;
  setCurrentPage: (page: 'boarding-pass' | 'home' | 'profile' | 'login' | 'book' | 'mytrips') => void;
}

const BoardingPass = ({ booking, userData, setCurrentPage }: BoardingPassProps) => {
  if (!booking) {
    return (
      <div className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 flex-grow text-center">
        <h2 className="text-3xl font-black text-vintage-navy dark:text-white mb-4">No Boarding Pass Selected</h2>
        <p className="text-vintage-muted dark:text-white/60 font-medium mb-8">Please select a flight from your trips to view the boarding pass.</p>
        <button onClick={() => setCurrentPage('mytrips')} className="bg-brand text-white font-bold py-3 px-10 rounded-custom uppercase tracking-widest text-sm hover:opacity-90 transition-all shadow-md">
          Back to My Trips
        </button>
      </div>
    );
  }

  const flight = booking.flights;

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase();
  };

  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }).toUpperCase();
  };

  const getDestinationImage = (city: string) => {
    if (city.toLowerCase().includes('london')) return 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop';
    if (city.toLowerCase().includes('rome')) return 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop';
    if (city.toLowerCase().includes('paris')) return 'https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2070&auto=format&fit=crop';
    if (city.toLowerCase().includes('tokyo')) return 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop';
    return 'https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=2069&auto=format&fit=crop';
  };
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 flex-grow">
      <div className="max-w-[1000px] w-full">
        <div className="mb-8 flex flex-col gap-2">
          <button onClick={() => setCurrentPage('mytrips')} className="text-brand flex items-center gap-1 font-bold hover:underline w-fit mb-2">
            &larr; Back to My Trips
          </button>
          <h1 className="text-vintage-navy dark:text-white text-4xl font-black leading-tight tracking-tight">Your Boarding Pass</h1>
          <p className="text-brand font-medium">Ready for departure, {userData?.name || 'Traveler'}.</p>
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
                <span className="text-xs font-bold text-vintage-muted dark:text-white/50 block uppercase">Class</span>
                <span className="text-lg font-bold">FIRST CLASS</span>
              </div>
            </div>

            {/* Flight Path */}
            <div className="flex justify-between items-center mb-10 px-4">
              <div className="text-center">
                <h3 className="text-5xl font-black tracking-tighter">{flight.origin_city.substring(0, 3).toUpperCase()}</h3>
                <p className="text-xs font-bold text-vintage-muted dark:text-white/60">{flight.origin_city.split(' ')[0].toUpperCase()}</p>
              </div>
              <div className="flex-1 flex items-center justify-center px-6 relative">
                <div className="w-full h-[2px] bg-vintage-muted/30 dark:bg-white/20"></div>
                <Plane className="absolute text-brand bg-vintage-cream dark:bg-background-dark px-2 w-10 h-10 rotate-90" />
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-black tracking-tighter">{flight.destination_city.substring(0, 3).toUpperCase()}</h3>
                <p className="text-xs font-bold text-vintage-muted dark:text-white/60">{flight.destination_city.split(' ')[0].toUpperCase()}</p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <User className="w-3 h-3 text-brand" />
                  <p className="text-[10px] font-bold text-vintage-muted dark:text-white/50 tracking-wider uppercase">Passenger Name</p>
                </div>
                <p className="text-lg font-bold truncate max-w-[150px]" title={userData?.name}>{userData?.name || 'Traveler'}</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <Hash className="w-3 h-3 text-brand" />
                  <p className="text-[10px] font-bold text-vintage-muted dark:text-white/50 tracking-wider uppercase">Flight No.</p>
                </div>
                <p className="text-lg font-bold">{flight.flight_number}</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <MapPin className="w-3 h-3 text-brand" />
                  <p className="text-[10px] font-bold text-vintage-muted dark:text-white/50 tracking-wider uppercase">Gate</p>
                </div>
                <p className="text-lg font-bold">B12</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <Calendar className="w-3 h-3 text-brand" />
                  <p className="text-[10px] font-bold text-vintage-muted dark:text-white/50 tracking-wider uppercase">Date</p>
                </div>
                <p className="text-lg font-bold">{formatDate(flight.departure_time)}</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <Clock className="w-3 h-3 text-brand" />
                  <p className="text-[10px] font-bold text-vintage-muted dark:text-white/50 tracking-wider uppercase">Boarding Time</p>
                </div>
                <p className="text-lg font-bold">{formatTime(flight.departure_time)}</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <Armchair className="w-3 h-3 text-brand" />
                  <p className="text-[10px] font-bold text-vintage-muted dark:text-white/50 tracking-wider uppercase">Seat</p>
                </div>
                <p className="text-lg font-bold text-brand">14A</p>
              </div>
            </div>

            {/* Circular Cutouts for tear-off effect */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2 z-10">
              <div className="w-8 h-8 rounded-full bg-white dark:bg-background-dark -mr-4"></div>
            </div>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2 z-10">
              <div className="w-8 h-8 rounded-full bg-white dark:bg-background-dark -ml-4"></div>
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
                  <span className="text-xs font-bold truncate max-w-[100px]" title={userData?.name}>{userData?.name ? userData.name.toUpperCase() : 'TRAVELER'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-bold text-vintage-muted dark:text-white/50">FLIGHT</span>
                  <span className="text-xs font-bold">{flight.flight_number}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-bold text-vintage-muted dark:text-white/50">FROM</span>
                  <span className="text-xs font-bold uppercase">{flight.origin_city.substring(0, 3).toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-bold text-vintage-muted dark:text-white/50">TO</span>
                  <span className="text-xs font-bold uppercase">{flight.destination_city.substring(0, 3).toUpperCase()}</span>
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
          <div className="bg-white dark:bg-white/5 p-6 rounded-custom border border-vintage-muted/20 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
            <Luggage className="text-brand mb-3 w-8 h-8" />
            <h4 className="font-bold text-vintage-navy dark:text-white">Baggage Policy</h4>
            <p className="text-sm text-vintage-muted dark:text-white/60 mt-2">Two pieces of checked luggage and one carry-on are included in your First Class ticket.</p>
          </div>
          <div className="bg-white dark:bg-white/5 p-6 rounded-custom border border-vintage-muted/20 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
            <Utensils className="text-brand mb-3 w-8 h-8" />
            <h4 className="font-bold text-vintage-navy dark:text-white">In-flight Dining</h4>
            <p className="text-sm text-vintage-muted dark:text-white/60 mt-2">Gourmet 5-course meal with champagne service starts 1 hour after takeoff.</p>
          </div>
          <div className="bg-white dark:bg-white/5 p-6 rounded-custom border border-vintage-muted/20 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
            <Coffee className="text-brand mb-3 w-8 h-8" />
            <h4 className="font-bold text-vintage-navy dark:text-white">Lounge Access</h4>
            <p className="text-sm text-vintage-muted dark:text-white/60 mt-2">Enjoy complimentary access to the Retro Skies Wing Lounge at JFK Terminal 4.</p>
          </div>
        </div>

        {/* Destination Map Preview */}
        <div className="mt-8 rounded-custom overflow-hidden h-64 relative group">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={`${flight.destination_city} destination`} src={getDestinationImage(flight.destination_city)} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
            <div>
              <p className="text-brand font-bold text-sm tracking-widest uppercase">Your Destination</p>
              <h3 className="text-white text-3xl font-black">{flight.destination_city.toUpperCase()}</h3>
              <p className="text-white/80 text-sm mt-1">Expected temperature: 18°C / 64°F</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardingPass;
