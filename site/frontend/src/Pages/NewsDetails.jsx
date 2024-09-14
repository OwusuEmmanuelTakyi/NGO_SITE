import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Avatar, Paper } from '@mui/material';
import { grey, blue } from '@mui/material/colors';
import HeroSection from '../Components/HeroSection';
import sanityClient from '../sanityClient';
import { PortableText } from '@portabletext/react'; // Import PortableText for rendering

const NewsDetails = () => {
  const [postData, setPostData] = useState([]); // State to store fetched posts
  const [visiblePosts, setVisiblePosts] = useState(5); // Number of posts to show initially
  const [expandedPosts, setExpandedPosts] = useState({}); // State to track which posts are expanded

  // Fetch posts from Sanity on component mount
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(_createdAt desc) {
          _id,
          title,
          mainImage {
            asset -> {
              _id,
              url
            }
          },
          body,
          author -> {
            name,
            image {
              asset -> {
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

  // Function to truncate the text to a word limit (default 30 words)
  const truncateText = (blocks, wordLimit = 30) => {
    if (!blocks || blocks.length === 0) return ''; // If no blocks, return empty string
    const plainText = blocks
      .map((block) => (block.children ? block.children.map((child) => child.text).join(' ') : ''))
      .join(' '); // Extract plain text from block content

    const words = plainText.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : plainText;
  };

  // Function to toggle "Read More"/"Read Less"
  const toggleReadMore = (postId) => {
    setExpandedPosts((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId], // Toggle the expanded state of the selected post
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

      {/* Loop through and display posts */}
      {postData.slice(0, visiblePosts).map((newsItem) => {
        const isExpanded = expandedPosts[newsItem._id]; // Check if the post is expanded
        const displayedText = isExpanded ? newsItem.body : truncateText(newsItem.body, 30); // Show truncated or full text

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

              {/* Render PortableText or truncated text */}
              {isExpanded ? (
                <PortableText value={newsItem.body} />
              ) : (
                <Typography variant="body1" sx={{ fontSize: 18 }}>
                  {truncateText(newsItem.body, 30)}
                </Typography>
              )}

              {/* Read More / Read Less Button */}
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
