import './App.css'
import Home from './Pages/Home'
import HostelDetails from './Pages/HostelDetails'
import WelcomePage from './Pages/WelcomePage'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'


function App() {
  

  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<WelcomePage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/details' element={<HostelDetails/>}/>


          
        </Routes>
      <Footer/>
      
    </>
  )
}

export default App