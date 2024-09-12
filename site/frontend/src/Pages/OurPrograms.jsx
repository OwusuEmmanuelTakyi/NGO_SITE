import React,{ useState, useEffect }from 'react'
import HeroSection from '../Components/HeroSection'
import Programs from '../Components/Programs'
import ProgramsText from '../Components/ProgramsText'
import { Box } from '@mui/material'
import sanityClient from '../sanityClient'

const OurPrograms = () => {
  const title = 'Our Programmes'
  // State for storing the news data
  const [newsData, setNewsData] = useState([]);  // Initialize newsData with useState
  
  // Fetch the news data from Sanity when the component loads
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "news"] | order(_createdAt desc) [0...8] {
          title,
          description,
          "imageUrl": mainImage.asset->url
        }`
      )
      .then((data) => setNewsData(data))  // Set the fetched news data
      .catch(console.error);
  }, []);  // Empty dependency array to fetch data only once when the component mounts

  return (
    <div>
      <HeroSection title={title.toUpperCase()}/>
      <Box sx={{width:'100%', height:100}}>

      </Box>
      <ProgramsText/>
      <Programs/>
      <Box sx={{width:'100%', height:150}}></Box>
      {/* News and Update Section */}
      <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '30px' }}>NEWS AND UPDATE</h1>
      
      {/* News Items */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {newsData.length > 0 ? (
          newsData.map((newsItem, index) => (
            <div 
              key={index} 
              style={{
                width: '48%',
                marginBottom: '30px',
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <img 
                src={newsItem.imageUrl} 
                alt={newsItem.title} 
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '20px'
                }} 
              />
              <h2 style={{ fontSize: '1.5rem', color: '#007bff', marginBottom: '10px' }}>{newsItem.title}</h2>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>{newsItem.description}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Loading news and updates...</p>
        )}
      </div>
      </div>
  )
}

export default OurPrograms