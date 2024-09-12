import React, { useState, useEffect } from 'react';
import sanityClient from '../sanityClient';  // Import your sanity client
import { PortableText } from '@portabletext/react';  // To render block content from Sanity

const News = () => {
  const [postData, setPostData] = useState([]);  // Initialize state for post data

  // Fetch post data from Sanity
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
      .then((data) => setPostData(data))  // Set the fetched post data
      .catch(console.error);
  }, []);  // Empty dependency array to fetch data only once when the component mounts

  return (
    <div>
      {/* News and Update Section */}
      <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '30px' }}>NEWS AND UPDATE</h1>
      
      {/* News Items */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {postData.length > 0 ? (
          postData.map((postItem, index) => <PostCard key={index} postItem={postItem} />)
        ) : (
          <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Loading news and updates...</p>
        )}
      </div>
    </div>
  );
};

const PostCard = ({ postItem }) => {
  const [showFullBody, setShowFullBody] = useState(false);

  // Function to extract a preview (first 20 words)
  const getPreviewText = (body) => {
    const plainText = body.map(block => block.children.map(child => child.text).join(' ')).join(' ');
    const words = plainText.split(' ').slice(0, 20).join(' ');
    return words + '...';
  };

  // Toggle between showing a snippet and the full body
  const toggleShowMore = () => setShowFullBody(!showFullBody);

  return (
    <div 
      style={{
        width: '48%',
        marginBottom: '30px',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Post Image */}
      {postItem.mainImage && (
        <img 
          src={postItem.mainImage.asset.url} 
          alt={postItem.title} 
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: '20px'
          }} 
        />
      )}
      
      {/* Post Title */}
      <h2 style={{ fontSize: '1.5rem', color: '#007bff', marginBottom: '10px' }}>{postItem.title}</h2>
      
      {/* Post Body Snippet and Full Content */}
      <div style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>
        {!showFullBody ? (
          <>
            <p>{getPreviewText(postItem.body)}</p>  {/* Show first 20 words */}
            <p style={{ color: '#007bff', cursor: 'pointer' }} onClick={toggleShowMore}>
              Read more...
            </p>
          </>
        ) : (
          <>
            <PortableText value={postItem.body} />  {/* Show full body */}
            <p style={{ color: '#007bff', cursor: 'pointer' }} onClick={toggleShowMore}>
              Show less
            </p>
          </>
        )}
      </div>
      
      {/* Author Section */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        {postItem.author?.image?.asset?.url && (
          <img 
            src={postItem.author.image.asset.url} 
            alt={postItem.author.name} 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginRight: '10px'
            }} 
          />
        )}
        <p style={{ fontSize: '1rem', color: '#555' }}>By {postItem.author?.name || 'Unknown Author'}</p>
      </div>
    </div>
  );
};

export default News;
