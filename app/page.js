import About from '@/components/About'
import Achievment from '@/components/Achievment'
import CardComponent from '@/components/CardComponent'
import Contact from '@/components/Contact'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <CardComponent/>
      <Achievment/>
      <Contact/>
    </>
  )
}

export default page