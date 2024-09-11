import React from 'react'
import HeroSection from '../Components/HeroSection'
import HomeTextSection from '../Components/HomeTextSection'
import ProgramsText from '../Components/ProgramsText'
import Programs from '../Components/Programs'
import LastSection from '../Components/LastSection'

const Home = () => {
  const title = 'Welcome to the AMA YEDUAH FOUNDATION'
  const description = 'Empowering Communities Through Education and Health Awareness'

  return (
    <div>
      <HeroSection title={title} description={description}/>
        <HomeTextSection/>
        <ProgramsText/>
        <Programs/>
        <LastSection/>
        
    </div>
  )
}

export default Home