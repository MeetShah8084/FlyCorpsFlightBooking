import { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroSearch from './components/HeroSearch'
import FlightList from './components/FlightList'
import SpecialOffers from './components/SpecialOffers'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Login from './components/Login'
import Book from './components/Book'
import MyTrips from './components/MyTrips'
import BoardingPass from './components/BoardingPass'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'profile' | 'login' | 'book' | 'mytrips' | 'boarding-pass'>('home')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
    picture: string;
  } | null>(null)

  const [showSpecialOffers, setShowSpecialOffers] = useState(true)

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div className={`min-h-screen bg-white dark:bg-background-dark transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} />

      {/* Floating Restore Button for Special Offers */}
      {currentPage === 'home' && !showSpecialOffers && (
        <button
          onClick={() => setShowSpecialOffers(true)}
          className="fixed right-0 top-1/2 -translate-y-1/2 bg-brand text-white p-3 rounded-l-custom shadow-xl z-50 hover:pr-5 transition-all group flex items-center gap-2"
          title="Show Special Offers"
        >
          <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-widest hidden group-hover:block whitespace-nowrap">Offers</span>
        </button>
      )}

      {currentPage === 'home' ? (
        <main className="pt-28 pb-20 px-4 max-w-7xl mx-auto">
          <HeroSearch onSearch={() => setShowSpecialOffers(false)} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
            <div className={`transition-all duration-500 ${showSpecialOffers ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
              <FlightList />
            </div>
            <div className={`transition-all duration-500 overflow-hidden ${showSpecialOffers ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none hidden lg:block translate-x-10 w-0 h-0 overflow-hidden'}`}>
              <SpecialOffers />
            </div>
          </div>
        </main>
      ) : currentPage === 'book' ? (
        <main className="pt-28 pb-20 px-4 max-w-7xl mx-auto flex">
          <Book />
        </main>
      ) : currentPage === 'mytrips' ? (
        <main className="pt-28 pb-20 px-4 max-w-7xl mx-auto flex">
          <MyTrips setCurrentPage={setCurrentPage} />
        </main>
      ) : currentPage === 'boarding-pass' ? (
        <main className="pt-28 pb-20 px-4 max-w-7xl mx-auto flex">
          <BoardingPass />
        </main>
      ) : currentPage === 'profile' ? (
        <main className="pt-28 pb-20 px-4 max-w-7xl mx-auto">
          <UserProfile
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            setCurrentPage={setCurrentPage}
            setIsLoggedIn={setIsLoggedIn}
            userData={userData}
          />
        </main>
      ) : (
        <main className="pt-28 pb-20 px-4 max-w-7xl mx-auto">
          <Login setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage} setUserData={setUserData} />
        </main>
      )}
      <Footer />
    </div>
  )
}

export default App
