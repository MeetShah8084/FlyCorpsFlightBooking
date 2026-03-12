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
      {currentPage === 'home' ? (
        <main className="pt-28 pb-20 px-4 max-w-7xl mx-auto">
          <HeroSearch />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FlightList />
            <SpecialOffers />
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
