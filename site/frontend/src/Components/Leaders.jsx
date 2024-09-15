import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box,Button, CardActions } from '@mui/material';
import Modal from '@mui/material/Modal';






const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Leaders = ({image,alt,name,role, learnMoreInfo,learnMoreTitle}) => {

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <>
    <Card sx={{ maxWidth: 300 }}>
      
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {role}
          </Typography>
        </CardContent>
        <CardActions sx={{justifyContent:'center'}}>
        <Button size="small"  onClick={handleOpen}>Learn More</Button>
      </CardActions>
      
    </Card>

    <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h3">
         {learnMoreTitle}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              {learnMoreInfo}
          </Typography>
        </Box>
      </Modal>
        
   
    </>
  )
}

export default Leaders