import HeroSection from '../Components/HeroSection';
import { Typography, Box, Button, Avatar, Paper } from '@mui/material';
import { grey, blue } from '@mui/material/colors';
import { useState, useEffect } from 'react';
import sanityClient from '../sanityClient';

const NewsDetails = () => {
  const [postData, setPostData] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(5); // Control how many posts to show
  const [expandedPosts, setExpandedPosts] = useState({}); // Control expanded state for each post

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(_createdAt desc) {
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

  // Function to truncate the text to 30 words
  const truncateText = (text, wordLimit) => {
    return text.split(' ').slice(0, wordLimit).join(' ') + (text.split(' ').length > wordLimit ? '...' : '');
  };

  // Function to toggle read more/less for each post
  const toggleReadMore = (postId) => {
    setExpandedPosts((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId], // Toggle the expanded state for this post
    }));
  };

  // Function to show more posts
  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5); // Load 5 more posts each time
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection title={title} />

      <Typography variant="h3" textAlign="center" my={6} sx={{ fontWeight: 'bold', color: grey[900] }}>
        Latest News
      </Typography>

      {/* Map over posts, showing only 'visiblePosts' */}
      {postData.slice(0, visiblePosts).map((newsItem) => {
        const fullText = newsItem.body[0]?.children[0]?.text || 'No content available.';
        const isExpanded = expandedPosts[newsItem._id]; // Check if the current post is expanded
        const displayedText = isExpanded ? fullText : truncateText(fullText, 30); // Show truncated or full text

        return (
          <Paper
            key={newsItem._id}
            elevation={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 4,
              marginBottom: 6,
              borderRadius: 2,
              backgroundColor: grey[50],
              maxWidth: '90%',
              marginX: 'auto',
            }}
          >
            {/* News Image */}
            <Box
              component="img"
              src={newsItem.mainImage?.asset?.url}
              alt={newsItem.title}
              sx={{
                width: '100%',
                height: { xs: 300, sm: 400 },
                objectFit: 'cover',
                borderRadius: 2,
                marginBottom: 3,
              }}
            />

            {/* News Content */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, color: grey[800], lineHeight: 1.6 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: blue[800], textTransform: 'capitalize' }}>
                {newsItem.title}
              </Typography>

              <Typography variant="body1" sx={{ fontSize: 18 }}>
                {displayedText}
              </Typography>

              {/* Read More / Read Less Button */}
              {fullText.split(' ').length > 30 && (
                <Button
                  variant="contained"
                  onClick={() => toggleReadMore(newsItem._id)}
                  sx={{
                    textTransform: 'none',
                    fontSize: '16px',
                    backgroundColor: blue[700],
                    color: 'white',
                    '&:hover': {
                      backgroundColor: blue[900],
                    },
                  }}
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </Button>
              )}

              {/* Author Information */}
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 3 }}>
                <Avatar
                  alt={newsItem.author?.name}
                  src={newsItem.author?.image?.asset?.url}
                  sx={{ width: 50, height: 50, marginRight: 2 }}
                />
                <Typography variant="body2" color="textSecondary">
                  {newsItem.author?.name || 'Unknown Author'}
                </Typography>
              </Box>
            </Box>
          </Paper>
        );
      })}

      {/* Load More Button */}
      {visiblePosts < postData.length && (
        <Box textAlign="center" my={4}>
          <Button variant="contained" onClick={loadMorePosts}>
            Load More Posts
          </Button>
        </Box>
      )}
    </div>
  );
};

export default NewsDetails;
