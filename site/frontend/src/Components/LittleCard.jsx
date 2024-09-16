import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

const LittleCard = ({ name, testimonial, avatar }) => {
  return (
    <Card sx={{mt:6, maxWidth: 345,minHeight:400, borderRadius: 2, boxShadow: 3, position:'relative', overflow:'visible' }}>
      <Box boxShadow={3} sx={{width:120, height:120, borderRadius:'50%',position:'absolute',top:-40,left:'34%'}}>
          <Avatar
          
            alt={name}
            src={avatar}
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              mr: 2,
              backgroundColor: grey[300]
              

            }}
          />
          </Box>
      <CardContent>
        <Box display="flex" alignItems="center" pt='25%' mb={5}>
      
        
        </Box>
        <Typography variant="body2" color="text.secondary">
          {testimonial}
        </Typography>
      </CardContent>

      <Typography sx={{color:blue[300]}} mr={3} textAlign= 'right'variant="h6" component="div">--
            {name}
          </Typography>
    </Card>
  );
};

export default LittleCard;
