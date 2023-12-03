import React from 'react'
import Header from '../../components/Header'
import AboutFounder from './AboutFounder'
import Specialists from './Specialists'
import Reviews from './Reviews'
import OurProducts from './OurProducts'
import Blog from './Blog'

import tlo from './../../assets/background.png'

const HomePage = () => {
  return (
    <div className={`flex flex-col w-full gap-[40px] bg-[url("src/assets/background.png")] bg-cover	`}>
      <Header />
      <AboutFounder />
      <Specialists />
      <Reviews />
      <OurProducts />
      <Blog />
    </div>
  )
}

export default HomePage