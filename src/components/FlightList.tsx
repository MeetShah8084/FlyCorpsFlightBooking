import flightIcon from '../assets/flight_icon.png';

const FlightList = () => {
  const flights = [
    {
      id: 1,
      departureTime: '10:45',
      arrivalTime: '23:00',
      duration: '7h 15m',
      stops: 'Non-stop',
      price: '$420',
      type: 'Round Trip',
      logo: flightIcon,
    },
    {
      id: 2,
      departureTime: '08:15',
      arrivalTime: '23:55',
      duration: '10h 40m',
      stops: '1 Stop',
      price: '$385',
      type: 'Round Trip',
      logo: flightIcon,
    },
    {
      id: 3,
      departureTime: '14:00',
      arrivalTime: '02:00',
      duration: '7h 00m',
      stops: 'Non-stop',
      price: '$550',
      type: 'First Class',
      logo: flightIcon,
    },
    {
      id: 4,
      departureTime: '16:30',
      arrivalTime: '06:15',
      duration: '8h 45m',
      stops: '1 Stop',
      price: '$410',
      type: 'Round Trip',
      logo: flightIcon,
    },
    {
      id: 5,
      departureTime: '18:00',
      arrivalTime: '05:45',
      duration: '6h 45m',
      stops: 'Non-stop',
      price: '$500',
      type: 'First Class',
      logo: flightIcon,
    },
    {
      id: 6,
      departureTime: '20:15',
      arrivalTime: '08:30',
      duration: '7h 15m',
      stops: 'Non-stop',
      price: '$450',
      type: 'Round Trip',
      logo: flightIcon,
    },
    {
      id: 7,
      departureTime: '22:00',
      arrivalTime: '11:00',
      duration: '8h 00m',
      stops: '1 Stop',
      price: '$390',
      type: 'Round Trip',
      logo: flightIcon,
    },
    {
      id: 8,
      departureTime: '06:00',
      arrivalTime: '17:30',
      duration: '6h 30m',
      stops: 'Non-stop',
      price: '$480',
      type: 'First Class',
      logo: flightIcon,
    },
    {
      id: 9,
      departureTime: '09:45',
      arrivalTime: '21:15',
      duration: '6h 30m',
      stops: 'Non-stop',
      price: '$430',
      type: 'Round Trip',
      logo: flightIcon,
    },
    {
      id: 10,
      departureTime: '12:30',
      arrivalTime: '01:45',
      duration: '8h 15m',
      stops: '1 Stop',
      price: '$375',
      type: 'Round Trip',
      logo: flightIcon,
    }
  ];

  return (
    <section className="lg:col-span-2 space-y-6">
      <div className="flex justify-between items-center border-b-2 border-brand pb-2">
        <h2 className="text-xl font-bold uppercase tracking-wider text-brand dark:text-vintage-cream">Available Flights</h2>
        <span className="text-xs font-mono uppercase text-vintage-muted dark:text-white/60">10 Results Found</span>
      </div>

      <div className="flight-list-scroll space-y-6">
        {flights.map((flight) => (
          <div key={flight.id} className="bg-white dark:bg-background-dark/60 border-2 border-brand/10 rounded-custom p-6 retro-card flex flex-col md:flex-row gap-6 items-center transition-colors">
            <div className="flex-shrink-0 w-24 h-24 bg-vintage-paper dark:bg-background-dark/80 rounded-full flex items-center justify-center p-4">
              <img alt="Airline Logo" className="grayscale" src={flight.logo} />
            </div>

            <div className="flex-grow grid grid-cols-3 gap-4 text-center md:text-left w-full">
              <div>
                <p className="text-2xl font-bold dark:text-white">{flight.departureTime}</p>
                <p className="text-xs uppercase font-bold text-vintage-muted dark:text-white/60">JFK · NYC</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <span className="text-[10px] uppercase font-bold text-brand">{flight.stops}</span>
                <div className="w-full h-[2px] bg-brand/20 relative my-2">
                  {flight.stops === 'Non-stop' && (
                    <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 text-brand text-lg">✈</div>
                  )}
                  {flight.stops === '1 Stop' && (
                    <>
                      <div className="absolute -top-[10px] left-1/3 text-brand text-lg">✈</div>
                      <div className="absolute -top-[4px] left-2/3 text-brand text-[10px]">●</div>
                    </>
                  )}
                </div>
                <p className="text-[10px] uppercase text-vintage-muted dark:text-white/60">{flight.duration}</p>
              </div>

              <div className="text-right">
                <p className="text-2xl font-bold dark:text-white">{flight.arrivalTime}</p>
                <p className="text-xs uppercase font-bold text-vintage-muted dark:text-white/60">LHR · LDN</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-0 md:border-l-2 border-dashed border-brand/20 pl-0 md:pl-6 w-full md:w-32 mt-4 md:mt-0 pt-4 md:pt-0 border-t-2 md:border-t-0">
              <p className="text-xl font-bold text-brand">{flight.price}</p>
              <p className="text-[10px] uppercase font-bold mb-3 dark:text-white/80">{flight.type}</p>
              <button className="w-full bg-brand text-white text-[10px] py-2 px-4 rounded-custom uppercase font-bold tracking-widest hover:brightness-110">Book</button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FlightList;
