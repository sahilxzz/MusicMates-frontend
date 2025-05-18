import React from 'react'
import { assets } from '../assets/assets'
import './Hero.css'
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";
import { useNavigate,} from 'react-router-dom';




const Hero = () => {
  const {user} = useUser();
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/hero-image.jpg")] bg-no-repeat bg-cover bg-center h-screen'>
        <div className='container'>
        <h1 className='heading'>Find people who listen to what you love!!!</h1>
        <p className='para'>Signup.Connect to your spotify.Find your people</p>

        <div className='container2'>
        {user &&        
        <img src={assets.spotify} alt="" className='spotify'/>
        }
        {user &&        
        <button className="spotifyButton" onClick={()=> navigate('/SpotifyConnect')}>Connect to Spotify</button>
        }
        </div>

        </div>
    </div>
  )
}

export default Hero
