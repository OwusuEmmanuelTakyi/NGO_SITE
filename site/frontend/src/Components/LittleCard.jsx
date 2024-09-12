
import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

const LittleCard = ({testimonial, name,avatar}) => {
  return (
   <Box>
      <Card sx={{ minWidth: 275 , position:'relative', overflow:'visible'}}>
        <Box sx={{width:100, height:100, borderRadius:'50%', overflow:'hidden', position:'absolute', top:-20, left:'30%'}}>
        <img src={avatar} style={{width:'100%', height:'100%', borderRadius:'50%'}} />
        </Box>
       
      <CardContent sx={{paddingTop:15, px:'10%'}}>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        {testimonial}
        </Typography>

        <Typography sx={{color:blue[300], fontWeight:'bold', textAlign:'right'}}>{name}</Typography>
      
      </CardContent>
      
    </Card>
   </Box>
  )
}

export default LittleCard