import React from 'react'
import Navbar from '../Components/Navbar'
import Ads from '../Components/Ads'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import NewLetters from '../Components/NewLetters'

const Home = () => {
  return (
    <div>
      <Ads/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <NewLetters/>
    </div>
  )
}

export default Home
