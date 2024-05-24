import './App.css'
import Login from './Authentication/Login'
import Signup from './Authentication/Signup'

import Home from './Pages/Home'
import HostelDetails from './Pages/HostelDetails'
import WelcomePage from './Pages/WelcomePage'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'
import Payment from './components/Payment'
import CityPage from './Pages/CityPage'
import HomeHeader from './components/HomeHeader'
import { AuthProvider } from './context/AuthContexts';


function App() {

  

  return (
    <>
    <AuthProvider>
      <Header/>
        <Routes>
          <Route path='/' element={<WelcomePage/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/>
          
            <Route path='/home' element={<Home/>}/>

          <Route path='/details' element={<HostelDetails/>}/>
          <Route path='/city' element={<CityPage/>}/>
          <Route path='/pay' element={<Payment/>}/>
        </Routes>
      <Footer/>
      
      </AuthProvider>
    </>
  )
}

export default App