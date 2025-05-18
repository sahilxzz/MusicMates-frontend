import React from 'react'
import Hero from '../Components/Hero'
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";
const Home = () => {
  return (
    <div>
        <Hero/>      
    </div>
  )
}

export default Home
