import HeroSection from '../Components/HeroSection';
import { Typography, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState, useEffect } from 'react';
import sanityClient from '../sanityClient';

const NewsDetails = () => {  
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(_createdAt desc) [0...8] {
          title,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body,
          author->{
            name,
            image{
              asset->{
                _id,
                url
              }
            }
          }
        }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  const title = 'News & Updates';  

  return (  
    <div>  
      <HeroSection title={title} />  
      <Typography variant='h3' textAlign='çenter' my={10}> Latest News </Typography>
      {postData.map((newsItem) => (
        <Box key={newsItem._id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingX: '10%', my: 14 ,alignItems:'center'}}>  

          <Box sx={{ width: '80%',height:{lg:400},mb:5 ,borderRadius:10}}>  
            <img src={newsItem.mainImage?.asset?.url} alt={newsItem.title} width='100%' height='100%' />  
          </Box> 
          <Box sx={{ width: '80%', display: 'flex', flexDirection: 'column', gap: 3, color: grey[800], lineHeight: 1.5 }}>  
            <Typography variant='body1' sx={{ fontSize: 20 }}>  
              {newsItem.body[0]?.children[0]?.text || 'No content available.'}  
            </Typography>  
          </Box>  
          
        </Box>
      ))}  
    </div>  
  );  
};  

export default NewsDetails;
