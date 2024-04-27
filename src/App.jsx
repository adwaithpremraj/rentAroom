import './App.css'
import Login from './Authentication/Login'
import Sigin from './Authentication/Sigin'
import Footer from './components/Footer'
import Header from './components/Header'
import Hostels from './components/Hostels'

function App() {
  

  return (
    <>
      <Header/>
      <Hostels/>
      <Footer/>
      <Login/>
      <Sigin/>
    </>
  )
}

export default App