import React from 'react'
import HeroSection from '../Components/HeroSection'
import image3 from '../images/girlChild2.jpg'
import { Typography,Box } from '@mui/material'
import { grey } from '@mui/material/colors'

const Program = () => {
  const title = ' PROGRAM'
  return (
    <div>
      <HeroSection title={title}/>
      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingX:'10%', my:13}}>
        <Box sx={{width:'40%',display:'flex', flexDirection:'column', gap:3, color:grey[800], lineHeight:1.5}}>
          <Typography variant='p' sx={{fontSize:20}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, ab accusamus, impedit vero, ad voluptatem nulla error debitis tenetur inventore cupiditate autem nemo magnam distinctio odit pariatur illo exercitationem mollitia neque quisquam dolorem aspernatur maxime quaerat! Quibusdam fuga sit ad velit ipsum natus quam quasi ipsa, sint dolorum porro vitae?
          </Typography>

          <Typography variant='p' sx={{fontSize:20}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, ab accusamus, impedit vero, ad voluptatem nulla error debitis tenetur inventore cupiditate autem nemo magnam distinctio odit pariatur illo exercitationem mollitia neque quisquam dolorem aspernatur maxime quaerat! Quibusdam fuga sit ad velit ipsum natus quam quasi ipsa, sint dolorum porro vitae?
          </Typography>

        </Box>
        <Box sx={{width:'40%'}}><img src={image3} width='100%'/></Box>
      </Box>
    </div>
  )
}

export default Program