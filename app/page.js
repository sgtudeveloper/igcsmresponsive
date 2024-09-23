import About from '@/components/About'
import Achievment from '@/components/Achievment'
import CardComponent from '@/components/CardComponent'
import Contact from '@/components/Contact'
import HeroSection from '@/components/HeroSection'
import Notification from '@/components/Notification'
import PopupForm from '@/components/PopupForm'
import React from 'react'

const page = () => {
  return (
    <>
    <Notification/>
      <HeroSection/>
      <PopupForm/>
      <About/>
      <CardComponent/>
      <Achievment/>
      <Contact/>
      
    </>
  )
}

export default page