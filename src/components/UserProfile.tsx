import {
  Pen, ShieldCheck, IdCard, Settings, Armchair, Utensils,
  Luggage, LayoutGrid, UserCog, Moon, Sun, Receipt, Bell,
  Globe, Users, LogOut
} from 'lucide-react';

interface UserProfileProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<'home' | 'profile' | 'login' | 'book' | 'mytrips'>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserProfile: React.FC<UserProfileProps> = ({ isDarkMode, setIsDarkMode, setCurrentPage, setIsLoggedIn }) => {
  return (
    <div className="max-w-[960px] mx-auto py-10">
      {/* Profile Header Section */}
      <section className="flex flex-col items-center mb-12">
        <div className="relative">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-brand/10 shadow-xl"
            data-alt="User profile photo of John Doe"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7IxdewUp9ygb2F7kfv1Y7hnXcO4PZisHaqd3rkfhoXrm4llCDVeKJL2PVICeXfMoWL4l2YyOv-Nl3NrEDXGJo1H812aJw6qhHzcFWKXXQWSbUwlhT2VmnwiTMCq3wOsBXBVSYIN0-8lIRzhsvfVL9jf1ZCg8rScjWCHLvUCWXZXr-fcI_fCpg8oesC_vzDcKy5ft6nO3EXDtUgrirVWHEIntqylgIk8EZJvhmCD-7IPCbGG52QTqIaE6E6D2XijSP-TgV_gfnA8U")' }}
          ></div>
          <div className="absolute bottom-0 right-0 bg-brand text-white p-1.5 rounded-full border-2 border-white dark:border-background-dark">
            <Pen className="w-4 h-4 block" />
          </div>
        </div>
        <div className="mt-4 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">John Doe</h1>
          <div className="flex flex-col items-center justify-center mt-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-brand w-5 h-5" />
              <p className="text-brand font-bold text-sm uppercase tracking-widest">Elite Sky Club Member</p>
            </div>
            <p className="text-slate-500 text-sm font-medium mt-1 italic">Preserving the golden age of flight since 1974</p>
          </div>
        </div>
      </section >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Traveler Info Section */}
        <section className="bg-white/80 p-6 rounded-xl border border-brand/20 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-2 mb-6 border-b border-brand/10 pb-4">
            <IdCard className="text-brand w-6 h-6" />
            <h2 className="text-xl font-bold uppercase tracking-wider text-brand">Traveler Info</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-brand/5">
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider text-[10px]">Frequent Flyer Number</p>
              <p className="font-mono text-brand font-bold">FLYX-8829401</p>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-brand/5">
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider text-[10px]">Membership Status</p>
              <p className="text-slate-900 font-semibold uppercase tracking-wider text-sm">Gold Wing Tier</p>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-brand/5">
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider text-[10px]">Passport Number</p>
              <p className="text-slate-900 font-semibold uppercase tracking-wider text-sm">********4421</p>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-brand/5">
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider text-[10px]">Miles Balance</p>
              <p className="text-slate-900 font-semibold tracking-wider text-sm">124,500 <span className="text-[10px] text-brand uppercase font-bold">pts</span></p>
            </div>
          </div>
          <button className="w-full mt-6 py-2 px-4 rounded-custom bg-brand/10 text-brand border border-brand/20 hover:bg-brand hover:text-white font-bold transition-all text-[10px] uppercase tracking-widest">Update Information</button>
        </section>

        {/* Preferences Section */}
        <section className="bg-white/80 p-6 rounded-xl border border-brand/20 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-2 mb-6 border-b border-brand/10 pb-4">
            <Settings className="text-brand w-6 h-6" />
            <h2 className="text-xl font-bold uppercase tracking-wider text-brand">Travel Preferences</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-brand/5">
              <div className="flex items-center gap-3">
                <Armchair className="text-brand/60 w-5 h-5" />
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider text-[10px]">Seat Choice</p>
              </div>
              <p className="text-slate-900 font-semibold uppercase tracking-wider text-sm">Window (Preferred)</p>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-brand/5">
              <div className="flex items-center gap-3">
                <Utensils className="text-brand/60 w-5 h-5" />
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider text-[10px]">Meal Choice</p>
              </div>
              <p className="text-slate-900 font-semibold uppercase tracking-wider text-sm text-right">Vintage Roast / Low Sodium</p>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-brand/5">
              <div className="flex items-center gap-3">
                <Luggage className="text-brand/60 w-5 h-5" />
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider text-[10px]">Extra Baggage</p>
              </div>
              <p className="text-slate-900 font-semibold uppercase tracking-wider text-sm">Always Added (1)</p>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-brand/5">
              <div className="flex items-center gap-3">
                <LayoutGrid className="text-brand/60 w-5 h-5" />
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider text-[10px]">Cabin Class</p>
              </div>
              <p className="text-brand font-semibold italic uppercase tracking-wider text-sm">Classic First Class</p>
            </div>
          </div>
          <button className="w-full mt-6 py-2 px-4 rounded-custom bg-brand text-white border border-brand hover:bg-white hover:text-brand font-bold transition-all text-[10px] uppercase tracking-widest shadow-md">Edit Preferences</button>
        </section>
      </div>

      {/* Account Settings Section */}
      <section className="mt-12 bg-white/60 border-2 border-brand/20 rounded-xl overflow-hidden backdrop-blur-sm">
        <div className="border-b-2 border-brand/20 bg-vintage-cream px-6 py-4 flex items-center gap-2">
          <UserCog className="text-brand w-6 h-6" />
          <h2 className="text-xl font-bold uppercase tracking-wider text-brand">Account Settings</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Dark Mode Toggle replacing Security */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`group flex flex-col gap-1 p-4 rounded-custom text-left transition-all border-2 cursor-pointer
                ${isDarkMode ? 'bg-brand border-brand text-white shadow-md' : 'bg-white border-brand/10 hover:border-brand/40 text-slate-900'}`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <div className="flex items-center gap-2">
                  {isDarkMode ? <Moon className="text-white w-5 h-5" /> : <Sun className="text-brand/60 group-hover:text-brand w-5 h-5" />}
                  <span className={`font-bold uppercase tracking-wider text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{isDarkMode ? 'Dark Mode On' : 'Dark Mode Off'}</span>
                </div>
                <div className={`w-10 h-5 rounded-full relative transition-colors ${isDarkMode ? 'bg-white/30' : 'bg-slate-200'}`}>
                  <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all ${isDarkMode ? 'left-[22px] bg-white' : 'left-1 bg-slate-400'}`}></div>
                </div>
              </div>
              <p className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-white/80' : 'text-slate-500'}`}>Toggle application theme</p>
            </button>

            <a className="group flex flex-col gap-1 p-4 rounded-custom bg-white border-2 border-brand/10 hover:border-brand/40 transition-colors" href="#">
              <div className="flex items-center gap-2 mb-1">
                <Receipt className="text-brand/60 group-hover:text-brand w-6 h-6" />
                <span className="font-bold text-slate-900 uppercase tracking-wider text-sm">Billing</span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Update credit cards and billing history</p>
            </a>
            <a className="group flex flex-col gap-1 p-4 rounded-custom bg-white border-2 border-brand/10 hover:border-brand/40 transition-colors" href="#">
              <div className="flex items-center gap-2 mb-1">
                <Bell className="text-brand/60 group-hover:text-brand w-6 h-6" />
                <span className="font-bold text-slate-900 uppercase tracking-wider text-sm">Notifications</span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Control flight alerts and promotions</p>
            </a>
            <a className="group flex flex-col gap-1 p-4 rounded-custom bg-white border-2 border-brand/10 hover:border-brand/40 transition-colors" href="#">
              <div className="flex items-center gap-2 mb-1">
                <Globe className="text-brand/60 group-hover:text-brand w-6 h-6" />
                <span className="font-bold text-slate-900 uppercase tracking-wider text-sm">Language</span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Change display language and region</p>
            </a>
            <a className="group flex flex-col gap-1 p-4 rounded-custom bg-white border-2 border-brand/10 hover:border-brand/40 transition-colors" href="#">
              <div className="flex items-center gap-2 mb-1">
                <Users className="text-brand/60 group-hover:text-brand w-6 h-6" />
                <span className="font-bold text-slate-900 uppercase tracking-wider text-sm">Family Members</span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Link accounts for family travel miles</p>
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsLoggedIn(false);
                setCurrentPage('login');
              }}
              className="group flex flex-col gap-1 p-4 rounded-custom bg-white border-2 border-brand/10 hover:border-red-400 transition-colors text-left"
            >
              <div className="flex items-center gap-2 mb-1">
                <LogOut className="text-red-400 group-hover:text-red-500 w-6 h-6" />
                <span className="font-bold text-red-500 uppercase tracking-wider text-sm">Sign Out</span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Log out of your Flyx account</p>
            </button>
          </div>
        </div>
      </section>

      {/* Danger Zone */}
      <div className="mt-12 mb-8 text-center">
        <button className="text-slate-400 hover:text-red-500 text-[10px] font-bold uppercase tracking-widest transition-colors">
          Delete Account & Data
        </button>
      </div>
    </div >
  );
};

export default UserProfile;
