import { Box } from '@mui/material'
import React from 'react'
import p1 from '../images/domabuse.png';
import p2 from '../images/girlChild.jpeg';
import p3 from '../images/girlChild2.jpg';
import p4 from '../images/youthAbuse1.jpg';
import p5 from '../images/youthAbuse2.jpg';

const Programs = () => {

  return (
    <Box sx={{width:'100%', height:'auto', backgroundColor:'red', display:'flex',justifyContent:'center',alignItems:'center',gap:4,flexWrap:'wrap', marginTop:10}}>
      <Box boxShadow={4} sx={{width:{md:'25%',sm:'90%'}, height:400,backgroundColor:'blue',borderRadius:3, overflow:'hidden',objectFit:'fill'}}>
        <img src={p1} alt='first' width='100%' height='70%'/>
      </Box>
      <Box boxShadow={4} sx={{width:{md:'25%',sm:'90%'}, height:400,backgroundColor:'blue',borderRadius:3,  overflow:'hidden', objectFit:'fill'}}>
      <img src={p2} alt='first' width='100%' height='70%' />
      </Box>
      <Box boxShadow={4} sx={{width:{md:'25%',sm:'90%'}, height:400,backgroundColor:'blue',borderRadius:3,  overflow:'hidden', objectFit:'fill'}}>
      <img src={p3} alt='first' width='100%' v />
      </Box>
      <Box boxShadow={4} sx={{width:{md:'25%',sm:'90%'}, height:400,backgroundColor:'blue',borderRadius:3,  overflow:'hidden' ,objectFit:'fill'}}>
      <img src={p4} alt='first' width='100%' height='70%' />
      </Box>
      <Box boxShadow={4} sx={{width:{md:'25%',sm:'90%'}, height:400,backgroundColor:'blue',borderRadius:3,  overflow:'hidden', objectFit:'fill'}}>
      <img src={p5} alt='first' width='100%' height='70%' />
      </Box>
    </Box>
  )
}

export default Programs