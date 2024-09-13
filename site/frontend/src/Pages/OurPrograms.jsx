import React from 'react'
import HeroSection from '../Components/HeroSection'
import Programs from '../Components/Programs'
import ProgramsText from '../Components/ProgramsText'
import { Box } from '@mui/material'
import News from './News'

const OurPrograms = () => {
  const title = 'Our Programmes'
  
  return (
    <div>
      <HeroSection title={title.toUpperCase()}/>
      <Box sx={{width:'100%', height:100}}>

      </Box>
      <ProgramsText/>
      <Programs/>
      <News/>
      <Box sx={{width:'100%', height:150}}>
        
      </Box>
      </div>
  )
}

export default OurPrograms