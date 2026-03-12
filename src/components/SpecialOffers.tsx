import flightCabin from '../assets/flight_cabin.jpg';

const SpecialOffers = () => {
  return (
    <section className="lg:col-span-1">
      <h2 className="text-xl font-bold uppercase tracking-wider text-brand dark:text-vintage-cream border-b-2 border-brand pb-2 mb-6">Special Offers</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Big Promo */}
        <div className="col-span-2 relative h-48 overflow-hidden rounded-custom shadow-md">
          <img alt="Paris Heritage" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP0r20M_TsspfxQUkK_0pJ8-pXsoFb6rOOiNiLxD5qtXE5lz197YzYKrj9T5-3Vci4e5gNG3OELwQqxwF_1lCliP5Q-DZbyNqLn0fYNBqyXO5hHIa82Dj0UaK32vLGfIKcHyuF_qeDVlKNUM7dBoDxo18gNREU0hYWMm8bLlXvL1mNEGbW_TdSZliZkfFZR3CIVlLoocTBIIiQMg0CSSKspbfijsQjZo8V6Io_R1LbwB18sqvrtYkc6CZ4EojqgbTEsTLrfrw1_CU" />
          <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white text-lg font-bold uppercase leading-tight">Parisian Weekend Special</h3>
            <p className="text-brand font-bold text-sm">Starting at $299</p>
          </div>
        </div>
        
        {/* Small Promo 1 */}
        <div className="col-span-1 relative h-40 overflow-hidden rounded-custom shadow-md group">
          <img alt="Cabin Service" className="w-full h-full object-cover transition-all duration-500" src={flightCabin} />
          <div className="absolute inset-0 flex items-center justify-center p-2">
             <p className="text-white drop-shadow-lg text-[10px] font-bold uppercase text-center tracking-tighter">Upgrade to First Class</p>
          </div>
        </div>
        
        {/* Small Promo 2 */}
        <div className="col-span-1 bg-brand p-4 flex flex-col justify-between rounded-custom shadow-md">
          <p className="text-white font-bold text-xs uppercase italic">Limited Time</p>
          <p className="text-white text-2xl font-black">20% OFF</p>
          <p className="text-white/80 text-[10px] uppercase">Using code 'FLYCORP20'</p>
        </div>
        
        {/* Medium Promo */}
        <div className="col-span-2 relative h-32 overflow-hidden rounded-custom shadow-md">
          <img alt="Islands" className="w-full h-full object-cover brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2xwLGTd-ZzojbWDzotewSehfOdf9TKwkJFz8gExCnVRClkV2-75gq0wMW8XndSjrU4_2gS-c44Kdb_owC2HltgaZjX338a9uct_1u_vSV7kL3TYIFzecCsgUVD-o_Tp0zJA2Ce_VsBP9qoMo3mmX3mLqB79E8JhnqltPJIRthESfRVi1fGBZozrz-XKZK-5kKcMCrfO0-LLSoeqCnAfpX0nvk0p8mgdhaMkQToW5aN2g4D5hnOJ2wtGq6iXhPJV8Z36jNUtpi4H8" />
          <div className="absolute inset-0 flex items-center px-4 bg-gradient-to-r from-black/60 to-transparent">
            <h3 className="text-white text-md font-bold uppercase leading-tight w-1/2">Island Hopping: 1978 Routes Reopened</h3>
          </div>
        </div>
      </div>
      
      {/* Heritage Box */}
      <div className="mt-8 p-6 border-2 border-dashed border-brand/40 bg-brand/5 rounded-custom">
        <p className="text-brand dark:text-vintage-cream font-bold uppercase text-xs mb-2">Heritage Service</p>
        <p className="text-sm italic leading-relaxed dark:text-white/90">"Fly as you did in the age of elegance. Complementary cocktails and porcelain dining on every transcontinental flight."</p>
      </div>
    </section>
  );
};

export default SpecialOffers;
