import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

const LittleCard = ({ name, testimonial, avatar }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar
            alt={name}
            src={avatar}
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              mr: 2,
              backgroundColor: grey[300],
            }}
          />
          <Typography variant="h6" component="div">
            {name}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {testimonial}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LittleCard;
