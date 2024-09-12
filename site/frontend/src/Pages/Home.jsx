import React from 'react'
import HeroSection from '../Components/HeroSection'
import HomeTextSection from '../Components/HomeTextSection'
import ProgramsText from '../Components/ProgramsText'
import Programs from '../Components/Programs'
import LastSection from '../Components/LastSection'
import News from './News'
import { Box } from '@mui/material'


const Home = () => {
  const title = 'Welcome to the AMA YEDUAH FOUNDATION'
  const description = 'Empowering Communities Through Education and Health Awareness'

  return (
    <div>
      <HeroSection title={title} description={description}/>
        <HomeTextSection/>
       
        
        <Box sx={{width:'100%', height:100,}}></Box>
        <News /> 
        <LastSection/>
        
    </div>
  )
}

export default Home