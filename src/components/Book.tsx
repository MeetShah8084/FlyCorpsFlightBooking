import { Plane, ChevronDown, MapPin, ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface BookProps {
  flight: any;
  userData: { id?: string; name: string; email: string; picture: string } | null;
  onConfirm: (passengers: number, seatType: string) => Promise<void>;
  onCancel: () => void;
}

const Book = ({ flight, userData, onConfirm, onCancel }: BookProps) => {
  const [seatType, setSeatType] = useState('First Class');
  const [passengers, setPassengers] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!flight) {
    return (
      <div className="w-full flex-grow flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-black uppercase text-vintage-navy dark:text-vintage-cream">No Flight Selected</h2>
        <button onClick={onCancel} className="bg-brand text-white px-6 py-3 rounded-custom font-bold uppercase tracking-wider hover:opacity-90">
          Back to Flights
        </button>
      </div>
    );
  }

  // Calculate pricing
  const basePrice = flight.price;
  const standardSeatPrice = basePrice * passengers;
  const serviceCharge = seatType === 'First Class' ? 150 * passengers : 45 * passengers;
  const taxesAndFees = 25 * passengers;
  const totalAmount = standardSeatPrice + serviceCharge + taxesAndFees;

  const handleConfirm = async () => {
    setIsSubmitting(true);
    await onConfirm(passengers, seatType);
    setIsSubmitting(false);
  };

  return (
    <div className="flex-1 max-w-[960px] mx-auto w-full px-4 lg:px-6 py-12">
      <div className="mb-10 text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-4">
        <button onClick={onCancel} className="mt-2 text-brand hover:text-brand/80 transition-colors hidden md:block" title="Back">
          <ArrowLeft className="w-8 h-8" />
        </button>
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-vintage-navy dark:text-vintage-cream leading-tight tracking-tight uppercase">
            Complete Your Booking
          </h2>
          <p className="text-lg text-brand/80 font-bold mt-2 uppercase tracking-widest">Step back into the golden age of travel.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-8">
          <section className="bg-white dark:bg-background-dark/50 p-8 rounded-custom border-2 border-brand/10 shadow-sm retro-card">
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-vintage-muted dark:text-white/60">Selected Seat Type</label>
                <div className="relative">
                  <select 
                    value={seatType}
                    onChange={(e) => setSeatType(e.target.value)}
                    className="appearance-none w-full bg-white dark:bg-background-dark/80 border-2 border-brand/20 rounded-custom px-4 py-4 text-vintage-navy dark:text-white focus:ring-2 focus:ring-brand focus:border-transparent outline-none cursor-pointer font-medium text-lg"
                  >
                    <option value="First Class">Window (First Class)</option>
                    <option value="First Class">Aisle (First Class)</option>
                    <option value="Business">Window (Business)</option>
                    <option value="Economy Plus">Aisle (Economy Plus)</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-vintage-muted dark:text-white/60">Full Name</label>
                  <input 
                    className="w-full bg-white dark:bg-background-dark/80 border-2 border-brand/20 rounded-custom px-4 py-4 text-vintage-navy dark:text-white focus:ring-2 focus:ring-brand focus:border-transparent outline-none font-medium text-lg" 
                    placeholder="e.g. Howard Hughes" 
                    type="text" 
                    defaultValue={userData?.name || ''}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-vintage-muted dark:text-white/60">Passengers</label>
                  <input 
                    className="w-full bg-white dark:bg-background-dark/80 border-2 border-brand/20 rounded-custom px-4 py-4 text-vintage-navy dark:text-white focus:ring-2 focus:ring-brand focus:border-transparent outline-none font-medium text-lg" 
                    placeholder="1" 
                    type="number" 
                    min="1"
                    max="10"
                    value={passengers}
                    onChange={(e) => setPassengers(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="relative h-64 w-full rounded-custom overflow-hidden border-2 border-brand/10">
            <div className="absolute inset-0 bg-brand/5"></div>
            <img 
              className="w-full h-full object-cover mix-blend-multiply opacity-60 dark:opacity-40" 
              alt="Vintage flight map" 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 dark:bg-background-dark/90 px-6 py-3 rounded-full border-2 border-brand/20 shadow-xl flex items-center gap-3">
                <MapPin className="text-brand w-5 h-5" />
                <span className="font-bold text-vintage-navy dark:text-white uppercase tracking-wider">
                  {flight.origin_city.substring(0,3)} → {flight.destination_city.substring(0,3)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="sticky top-28 space-y-6">
            <div className="bg-brand text-white p-8 rounded-custom shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              
              <h3 className="text-lg font-bold uppercase tracking-widest opacity-80 mb-6 flex items-center gap-2">
                <Plane className="w-5 h-5" />
                Fare Summary
              </h3>
              
              <div className="space-y-4 mb-8 text-lg">
                <div className="flex justify-between border-b-2 border-white/20 pb-2">
                  <span className="font-medium">Standard Seat (x{passengers})</span>
                  <span>${standardSeatPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b-2 border-white/20 pb-2">
                  <span className="font-medium">{seatType} Service</span>
                  <span>${serviceCharge.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b-2 border-white/20 pb-2">
                  <span className="font-medium">Taxes & Fees</span>
                  <span>${taxesAndFees.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-1 mb-8">
                <span className="text-sm font-bold uppercase opacity-80 tracking-wider">Total Amount to Pay</span>
                <span className="text-5xl font-black leading-none">${totalAmount.toFixed(2)}</span>
              </div>
              
              <button 
                onClick={handleConfirm}
                disabled={isSubmitting}
                className="w-full bg-white text-brand hover:bg-vintage-paper transition-all duration-300 font-black py-5 rounded-custom text-lg uppercase tracking-widest shadow-md active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? 'Processing...' : 'Confirm and Pay'}
                {!isSubmitting && <ArrowRight className="w-6 h-6" />}
              </button>
            </div>

            <div className="flex items-center gap-4 p-4 border-2 border-brand/10 rounded-custom bg-brand/5">
              <ShieldCheck className="text-brand w-8 h-8 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-bold text-vintage-navy dark:text-white uppercase tracking-wider">Secure Vintage Booking</p>
                <p className="text-vintage-muted dark:text-white/60 font-medium">Your details are protected by mid-century reliability and modern encryption.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
