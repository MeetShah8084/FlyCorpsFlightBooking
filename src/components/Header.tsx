interface HeaderProps {
  currentPage: 'home' | 'profile' | 'login' | 'book' | 'mytrips';
  setCurrentPage: React.Dispatch<React.SetStateAction<'home' | 'profile' | 'login' | 'book' | 'mytrips'>>;
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, isLoggedIn }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-vintage-cream border-b-2 border-brand/20 shadow-sm transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
          {/* Logo */}
          <img src="/Company_logo.png" alt="Fly Corporations Logo" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-bold tracking-tighter text-brand uppercase">Fly Corporations</span>
        </div>
        <ul className="flex space-x-4 md:space-x-8 font-medium uppercase text-xs md:text-sm tracking-widest text-vintage-navy flex-wrap justify-center">
          <li>
            <button
              onClick={() => setCurrentPage('home')}
              className={`hover:text-brand transition-colors ${currentPage === 'home' ? 'text-brand border-b-2 border-brand font-bold' : ''}`}
            >
              HOME
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage('book')}
              className={`hover:text-brand transition-colors ${currentPage === 'book' ? 'text-brand border-b-2 border-brand font-bold' : ''}`}
            >
              BOOK
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage('mytrips')}
              className={`hover:text-brand transition-colors ${currentPage === 'mytrips' ? 'text-brand border-b-2 border-brand font-bold' : ''}`}
            >
              MY TRIPS
            </button>
          </li>
          {isLoggedIn && (
            <li>
              <button
                onClick={() => setCurrentPage('profile')}
                className={`hover:text-brand transition-colors ${currentPage === 'profile' ? 'text-brand border-b-2 border-brand font-bold' : ''}`}
              >
                PROFILE
              </button>
            </li>
          )}
        </ul>
        <div className="flex items-center gap-4">
          {!isLoggedIn && (
            <button
              onClick={() => setCurrentPage('login')}
              className="px-6 py-2 bg-brand text-white font-bold rounded-custom hover:bg-opacity-90 transition-all uppercase text-xs tracking-widest shadow-md"
            >
              Member Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
