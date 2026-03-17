import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
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

interface MyTripsProps {
  setCurrentPage: (page: 'boarding-pass' | 'home' | 'profile' | 'login' | 'book' | 'mytrips') => void;
  userData: { id?: string; name: string; email: string; picture: string; } | null;
  isLoggedIn: boolean;
  setSelectedBooking: (booking: any) => void;
}

const MyTrips = ({ setCurrentPage, userData, isLoggedIn, setSelectedBooking }: MyTripsProps) => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'cancelled'>('upcoming');
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn || !userData?.id) {
      setLoading(false);
      return;
    }

    const fetchBookings = async () => {
      const { data, error } = await supabase
        .from('bookings')
        .select(`
          id,
          status,
          flights (*)
        `)
        .eq('user_id', userData.id)
        .order('booking_date', { ascending: false });

      if (error) {
        console.error('Error fetching bookings:', error);
      } else {
        setBookings(data || []);
      }
      setLoading(false);
    };

    fetchBookings();
  }, [isLoggedIn, userData]);

  const now = new Date();
  
  const upcomingBookings = bookings.filter(b => b.status === 'confirmed' && new Date(b.flights.departure_time) >= now);
  const pastBookings = bookings.filter(b => b.status === 'confirmed' && new Date(b.flights.departure_time) < now);
  const cancelledBookings = bookings.filter(b => b.status === 'cancelled');

  const getDestinationImage = (city: string) => {
    if (city.toLowerCase().includes('london')) return 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop';
    if (city.toLowerCase().includes('rome')) return 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop';
    if (city.toLowerCase().includes('paris')) return 'https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2070&auto=format&fit=crop';
    if (city.toLowerCase().includes('tokyo')) return 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop';
    return 'https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=2069&auto=format&fit=crop';
  };

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase();
  };

  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }).toUpperCase();
  };

  if (!isLoggedIn) {
    return (
      <div className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 flex-grow text-center">
        <h2 className="text-3xl font-black text-vintage-navy dark:text-white mb-4">Please Log In</h2>
        <p className="text-vintage-muted dark:text-white/60 font-medium mb-8">You need to log in to view your trips.</p>
        <button onClick={() => setCurrentPage('login')} className="bg-brand text-white font-bold py-3 px-10 rounded-custom uppercase tracking-widest text-sm hover:opacity-90 transition-all shadow-md">
          Go To Login
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex-1 w-full flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
      </div>
    );
  }

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
          Upcoming ({upcomingBookings.length})
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
          <div className="space-y-10">
            {upcomingBookings.length === 0 ? (
              <p className="text-vintage-muted dark:text-white/60 italic text-center py-8">No upcoming flights found.</p>
            ) : upcomingBookings.map((booking) => (
              <div key={booking.id} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand/20 to-brand/5 rounded-custom blur opacity-25"></div>
                <div className="relative bg-white dark:bg-background-dark border border-vintage-muted/20 dark:border-white/10 rounded-custom overflow-hidden shadow-lg retro-card flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative">
                    <img alt={booking.flights.destination_city} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={getDestinationImage(booking.flights.destination_city)} />
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase shadow-md flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Confirmed
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-between dark:text-white">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-brand uppercase tracking-widest">Flight {booking.flights.flight_number}</span>
                        </div>
                        <h3 className="text-3xl font-black tracking-tight text-vintage-navy dark:text-white">{booking.flights.origin_city.split(' ')[0]} → {booking.flights.destination_city.split(' ')[0]}</h3>
                        <p className="text-vintage-muted dark:text-white/60 font-medium">{booking.flights.origin_city} to {booking.flights.destination_city}</p>
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
                        <p className="font-bold text-vintage-navy dark:text-white">{formatDate(booking.flights.departure_time)}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          <Clock className="w-3 h-3 text-brand" />
                          <p className="text-[10px] uppercase font-bold text-vintage-muted dark:text-white/50">Boarding</p>
                        </div>
                        <p className="font-bold text-vintage-navy dark:text-white">{formatTime(booking.flights.departure_time)}</p>
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
                      <button onClick={() => { setSelectedBooking(booking); setCurrentPage('boarding-pass'); }} className="bg-brand text-white font-bold py-2 px-6 rounded-custom text-sm hover:opacity-90 transition-all uppercase tracking-widest shadow-md flex items-center gap-2 group">
                        View Boarding Pass
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Past Experiences */}
        {activeTab === 'past' && (
          <div className="opacity-70 mt-4 space-y-10">
            <h3 className="text-xl font-bold text-vintage-navy dark:text-white mb-4">Past Experiences</h3>
            {pastBookings.length === 0 ? (
              <p className="text-vintage-muted dark:text-white/60 italic">No past experiences found.</p>
            ) : pastBookings.map((booking) => (
              <div key={booking.id} className="relative bg-white dark:bg-background-dark border border-vintage-muted/20 dark:border-white/10 rounded-custom overflow-hidden shadow-sm flex flex-col md:flex-row">
                <div className="md:w-1/3 h-32 md:h-auto overflow-hidden relative grayscale">
                  <img alt={booking.flights.destination_city} className="w-full h-full object-cover" src={getDestinationImage(booking.flights.destination_city)} />
                  <div className="absolute top-4 left-4 bg-vintage-muted text-white text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase shadow-md flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Completed
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between dark:text-white grayscale opacity-80">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-black tracking-tight text-vintage-navy dark:text-white">{booking.flights.origin_city.split(' ')[0]} → {booking.flights.destination_city.split(' ')[0]}</h3>
                      <p className="text-vintage-muted dark:text-white/60 font-medium text-sm">{booking.flights.origin_city} to {booking.flights.destination_city}</p>
                      <p className="text-xs uppercase font-bold text-vintage-muted dark:text-white/50 mt-2">Flown on {formatDate(booking.flights.departure_time)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cancelled Trips */}
        {activeTab === 'cancelled' && (
          <div className="mt-4 space-y-10">
            <h3 className="text-xl font-bold text-vintage-navy dark:text-white mb-4">Cancelled Trips</h3>
            {cancelledBookings.length === 0 ? (
              <p className="text-vintage-muted dark:text-white/60 italic">No cancelled trips found.</p>
            ) : cancelledBookings.map((booking) => (
              <div key={booking.id} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-red-500/5 rounded-custom blur opacity-25"></div>
                <div className="relative bg-red-50 dark:bg-red-900/10 border-2 border-red-500/50 rounded-custom overflow-hidden shadow-md flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative grayscale opacity-70">
                    <img alt={booking.flights.destination_city} className="w-full h-full object-cover" src={getDestinationImage(booking.flights.destination_city)} />
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase shadow-md flex items-center gap-1">
                      <XCircle className="w-3 h-3" />
                      Cancelled
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-between dark:text-white group">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Flight {booking.flights.flight_number} - Cancelled</span>
                        </div>
                        <h3 className="text-3xl font-black tracking-tight text-vintage-navy dark:text-white">{booking.flights.origin_city.split(' ')[0]} → {booking.flights.destination_city.split(' ')[0]}</h3>
                        <p className="text-vintage-muted dark:text-white/60 font-medium">{booking.flights.origin_city} to {booking.flights.destination_city}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-dashed border-red-500/20 pt-6 opacity-60">
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar className="w-3 h-3 text-red-500" />
                          <p className="text-[10px] uppercase font-bold text-red-700/60 dark:text-red-300/60">Date</p>
                        </div>
                        <p className="font-bold text-vintage-navy dark:text-white line-through">{formatDate(booking.flights.departure_time)}</p>
                      </div>
                    </div>
                    <div className="mt-8 flex justify-end">
                      <p className="text-xs font-bold text-red-500 uppercase tracking-widest">Refund Processed</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
