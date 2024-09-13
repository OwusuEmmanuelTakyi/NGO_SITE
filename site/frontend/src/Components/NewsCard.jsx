import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';   

const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

const NewsCard = ({ imageSrc, title, description, newsId , post}) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/news-and-updates');
  }
  return (
    <Card sx={{ maxWidth: 400 }}>
     
        <CardActionArea onClick={handleClick}>
          <CardMedia
            component="img"
            height="200"
            image={imageSrc}
            alt="News Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {truncateText(description, 100)}
            </Typography>
          </CardContent>
        </CardActionArea>
     
    </Card>
  );
};

export default NewsCard;
