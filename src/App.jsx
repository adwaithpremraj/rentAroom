import './App.css'
import Login from './Authentication/Login'
import Sigin from './Authentication/Sigin'
import Footer from './components/Footer'
import Header from './components/Header'
import Hostels from './components/Hostels'
import CityCards from './components/CityCards'
import LandingPage from './components/LandingPage'

function App() {
  

  return (
    <>
      <Header/>
      <Hostels/>
      <LandingPage/>
      <CityCards/>
      <Footer/>
      <Login/>
      <Sigin/>
    </>
  )
}

export default App