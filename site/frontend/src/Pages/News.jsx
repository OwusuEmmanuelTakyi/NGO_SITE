import React, { useState, useEffect } from 'react';
import sanityClient from '../sanityClient';  
import { Box, Divider, Grid, Typography } from '@mui/material';
import NewsCard from '../Components/NewsCard';
import image1 from '../images/lady1.jpg';


const News = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    console.log("Post IDs:", postData.map(post => post._id));

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

  return (
    <Box sx={{ display: 'flex', flexDirection: { md: 'row', sm: 'column', xs: 'column' }, gap: 10, width: '100%', justifyContent: { md: 'space-around', lg: 'center', sm: 'space-around', xs: 'space-around' }, paddingX: { xs: '10%', md: '5%' } ,mb:'10'}}>
      <Box>
        <Typography variant="h5" component="div" textAlign='center' fontWeight={600} mb={4}>Recent Posts</Typography>
       
      </Box>
      <Divider orientation='vertical' flexItem />
      <Grid container spacing={2} sx={{ width: '100%' }}>
        {postData.map((post, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <NewsCard
              imageSrc={post.mainImage?.asset?.url || image1}
              title={post.title}
              description={post.body[0]?.children[0]?.text}
              newsId={post._id} post={post}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default News;
