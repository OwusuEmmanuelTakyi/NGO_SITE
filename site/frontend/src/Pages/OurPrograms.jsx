import React from 'react'
import HeroSection from '../Components/HeroSection'
import Programs from '../Components/Programs'
import ProgramsText from '../Components/ProgramsText'
import { Box } from '@mui/material'

const OurPrograms = () => {
  const title = 'Our Programmes'
  return (
    <div>
      <HeroSection title={title.toUpperCase()}/>
      <Box sx={{width:'100%', height:100}}>

      </Box>
      <ProgramsText/>
      <Programs/>
      </div>
  )
}

export default OurPrograms