import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import FeaturedProducts from '../components/FeaturedProducts'
import HeroVideoSection from '../components/HeroVideoSection'
import BasketBallSection from '../components/BasketBallSection'
import ShoesVideoSection from '../components/ShoesVideoSection'

const Home = () => {
  return (
    <div>
      <HeroVideoSection/>
      <FeaturedProducts/>
      <BasketBallSection/>
      <Hero />
      <BestSeller/>
      <ShoesVideoSection/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
