import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const HomeTextSection = () => {

  return (
    

    <Box sx={{width:'100%', paddingX:'10%', marginTop:'7%', marginBottom:'4%'}}>

        <Container sx={{display:'flex', flexDirection:'column', gap:4, color:'#737373' ,fontSize:{md:24,xs:18}}}>
            <Typography variant='h6'>The AMA YEDUAH FOUNDATION was formally incorporated on May 27, 2024. Founded by 
Patience Ama Yeduah Eshun, a Ghanaian businesswoman with a passion for community health 
and education, the Foundation was born out of a deep commitment to addressing critical health 
and social issues facing vulnerable populations in Ghana, particularly women, children, and the 
youth.</Typography>
            <Typography variant='h6'>The Foundation’s mission is to empower communities through education, awareness, and 
support, focusing on health-related issues and the socio-economic upliftment of marginalized 
groups. The vision is to create a society where every individual, regardless of background, has 
access to essential health information, quality education, and opportunities to thrive.</Typography>
        </Container>

    </Box>
  )
}

export default HomeTextSection