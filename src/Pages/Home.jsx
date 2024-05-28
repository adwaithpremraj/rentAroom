import React from 'react'
import Hostels from '../components/Hostels'
import City_Cards from '../components/CityCards'
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContexts';
import Header from '../components/Header';

function Home() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/" />;

  }

  return (
    <div>
        <Header/>
        <Hostels/>
        <City_Cards/>
    </div>
  )
}

export default Home