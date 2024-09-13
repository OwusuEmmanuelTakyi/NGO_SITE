import React, { useEffect, useState } from 'react';
import HeroSection from '../Components/HeroSection';
import { Container, Typography, Grid, Box, LinearProgress, Divider } from '@mui/material';
import LittleCard from '../Components/LittleCard';
import { blue, grey } from '@mui/material/colors';
import sanityClient from '../sanityClient'; // Adjust path as needed

const Donate = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const title = 'SUPPORT US';

  useEffect(() => {
    const fetchTestimonials = async () => {
      const query = `*[_type == "testimonial"]{
        name,
        testimonial,
        "imageUrl": image.asset->url
      }`;
      try {
        const data = await sanityClient.fetch(query);
        setTestimonials(data);
      } catch (err) {
        console.error('Failed to fetch testimonials:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div>
      <HeroSection title={title} />
      
      <Container>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: blue[800],
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 5,
            textTransform: 'uppercase',
            letterSpacing: 2,
            '&:hover': {
              color: blue[600],
              textDecoration: 'underline',
            },
            transition: 'color 0.3s ease, text-decoration 0.3s ease',
          }}
        >
          Support Us
        </Typography>
        
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: '1.2rem', lineHeight: 1.6, color: grey[800] }}
        >
          Your support is crucial to our mission. By donating, you help us continue our programs and make a lasting impact in our community. Every contribution, no matter the size, brings us closer to our goals.
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: blue[700],
            marginTop: 5,
            textTransform: 'uppercase',
            letterSpacing: 1,
            '&:hover': {
              color: blue[500],
              textDecoration: 'underline',
            },
            transition: 'color 0.3s ease, text-decoration 0.3s ease',
          }}
        >
          Why Donate?
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: '1.1rem', lineHeight: 1.6, color: grey[700] }}
        >
          - Empower Change: Your donation helps us implement programs that directly benefit those in need.
          <br />
          - Sustainable Impact: Contributions support long-term projects that create lasting change.
          <br />
          - Community Growth: Your support fosters a stronger, more resilient community.
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: blue[700],
            marginTop: 8,
            marginBottom: 8,
            textTransform: 'uppercase',
            letterSpacing: 1,
            '&:hover': {
              color: blue[500],
              textDecoration: 'underline',
            },
            transition: 'color 0.3s ease, text-decoration 0.3s ease',
          }}
        >
          How Your Donation Helps
        </Typography>
        {loading ? (
          <Typography
            variant="body1"
            align="center"
            sx={{ fontSize: '1.2rem', color: grey[600] }}
          >
            Loading reviews...
          </Typography>
        ) : (
          <Grid container spacing={3} flexWrap='wrap'>
            {testimonials.length > 0 ? (
              testimonials.map((test, index) => (
                <Grid item xs={12} sm={6} md={3} mb={2} key={index}>
                  <LittleCard
                    name={test.name}
                    testimonial={test.testimonial}
                    avatar={test.imageUrl} // Pass image URL to LittleCard
                  />
                </Grid>
              ))
            ) : (
              <Typography
                variant="body1"
                align="center"
                sx={{ fontSize: '1.2rem', color: grey[600] }}
              >
                No reviews available.
              </Typography>
            )}
          </Grid>
        )}

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: blue[700],
            marginTop: 8,
          }}
        >
          Ways to Give
        </Typography>
        <Box sx={{display:'flex', flexDirection:{md:'row',xs:'column',sm:'column'}, width:'80%', gap:3,justifyContent:'center'}}>
          <Box>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: '1.1rem', lineHeight: 1.6, color: grey[700] }}
            >
              Bank Transfer: You can donate directly to our bank account.
              <br />
              Bank Name: <span style={{color:blue[300]}}>CAL BANK PLC</span>
              <br />
              Account Number "GHC": <span style={{color:blue[300]}}>1400008976033</span>
              <br />
              Account Number "USD": <span style={{color:blue[300]}}>1400008976106</span>
              <br />
              Account Name: <span style={{color:blue[300]}}>AMA YEDUAH FOUNDATION LBG</span>
              <br />
              Branch: <span style={{color:blue[300]}}>SPINTEX ROAD BRANCH</span>
            </Typography>
          </Box>

          <Divider />

          <Box>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: '1.1rem', lineHeight: 1.6, color: grey[700] }}
            >
              Mobile Money: Donate via mobile money using the following details.
              <br />
              Network: <span style={{color:blue[300]}}>MTN</span>
              <br />
              Mobile Money Number: <span style={{color:blue[300]}}>*************</span>
              <br />
              Reference: <span style={{color:blue[300]}}>Donation</span>
            </Typography>
          </Box>
        </Box>

        <Box my={4}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: '2.5rem',
              fontWeight: '600',
              color: blue[700],
            }}
          >
            Fundraising Progress
          </Typography>
          <LinearProgress variant="determinate" value={40} />
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ fontSize: '1.1rem', marginTop: 1 }}
          >
            40% of our goal reached
          </Typography>
        </Box>

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: blue[700],
          }}
        >
          Thank You!
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: '1.2rem', lineHeight: 1.6, color: grey[800] }}
        >
          We are deeply grateful for your support. Together, we can make a difference.
        </Typography>
      </Container>
    </div>
  );
};

export default Donate;
