import React from 'react'
import Navbar from '../Components/Navbar'
import Ads from '../Components/Ads'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import NewLetters from '../Components/NewLetters'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Ads/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <NewLetters/>
      <Footer/>
    </div>
  )
}

export default Home
