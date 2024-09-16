import { Box, Typography } from '@mui/material'
import React from 'react'
import p1 from '../images/domabuse.png';
import p3 from '../images/girlChild2.jpg';
import p4 from '../images/youthAbuse1.jpg';
import p5 from '../images/youthAbuse2.jpg';
import { grey } from '@mui/material/colors';
import breast from '../images/breast.jpg'



const Programs = () => {

 

  return (
    <Box sx={{width:'100%', height:'auto', backgroundColor:'white', display:'flex',justifyContent:'center',alignItems:'center',gap:4,flexWrap:'wrap', marginTop:10,paddingX:{xs:'5%'}}}>
     
      <Box className='hoverImage' boxShadow={4} sx={{width:{md:'32%',lg:'25%',sm:'85%',xs:'90%'}, height:400,backgroundColor:grey[200],borderRadius:3, overflow:'hidden',objectFit:'fill'}}>
      
        <img src={p1} alt='first' width='100%' height='70%'/>
        <Typography sx={{fontSize:24, fontWeight:'600',textAlign:'center', paddingY:'5%'}}>Education on Domestic Abuse </Typography>
      
      </Box>
     
      <Box boxShadow={4} sx={{width:{md:'32%',sm:'90%',lg:'25%'}, height:400,backgroundColor:grey[200],borderRadius:3,  overflow:'hidden', objectFit:'fill'}}>
      
      <img src={breast} alt='first' width='100%' height='70%' />
      <Typography sx={{fontSize:24, fontWeight:'600',textAlign:'center', paddingY:'5%'}}>Breast Cancer Awareness</Typography>
    
      </Box>
      <Box boxShadow={4} sx={{width:{md:'32%',sm:'90%',lg:'25%'}, height:400,backgroundColor:grey[200],borderRadius:3,  overflow:'hidden', objectFit:'fill'}}>
     
      <img src={p3} alt='first' width='100%' v />
      <Typography sx={{fontSize:24, fontWeight:'600',textAlign:'center',height:400, paddingY:'5%'}}>Girl Child Education</Typography>
      
      </Box>
      <Box boxShadow={4} sx={{width:{md:'32%',sm:'90%',lg:'25%'}, height:400,backgroundColor:grey[200],borderRadius:3,  overflow:'hidden' ,objectFit:'fill'}}>
      
      <img src={p4} alt='first' width='100%' height='70%' />
      <Typography sx={{fontSize:24, fontWeight:'600',textAlign:'center', paddingY:'5%'}}>Youth Abuse Awareness</Typography>

      </Box>
      <Box boxShadow={4} sx={{width:{md:'32%',sm:'90%',lg:'25%'}, height:400,backgroundColor:grey[200],borderRadius:3,  overflow:'hidden', objectFit:'fill'}}>
     
      <img src={p5} alt='first' width='100%' height='70%' />
      <Typography sx={{fontSize:24, fontWeight:'600',textAlign:'center', paddingY:'5%'}}>Reproductive Health Education</Typography>
   
      </Box>
    </Box>
  )
}

export default Programs