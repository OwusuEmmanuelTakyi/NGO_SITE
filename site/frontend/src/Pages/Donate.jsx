
import HeroSection from '../Components/HeroSection';
import { Container, Typography, Box, LinearProgress, Divider } from '@mui/material';
import LittleCard from '../Components/LittleCard';
import { blue, grey } from '@mui/material/colors';
import lady1 from '../images/lady1.jpg';
import lady2 from '../images/lady2.jpg';
import man1 from '../images/man1.jpg'

const Donate = () => {

  const title = 'SUPPORT US';
  const name1 = ' Ama Eshun';
  const name2 = 'Kwame Adu';
  const name3 = 'Nana Yaa';
  const testimonial1 = 'Thanks to Ama Yeduah Foundations, I now have access to clean water and better healthcare. My family’s life has improved        tremendously, and we are forever grateful for their support.'
  const testimonial2 = 'I am proud to be a part of Ama Yeduah Foundations mission. Their dedication to empowering communities is truly inspiring, and I am honored to contribute to their cause.'
  const testimonial3 = 'I have seen firsthand the impact of Ama Yeduah Foundations work. They have transformed the lives of many, and I am excited to see how they continue to make a difference in our community.'



  return (
    <div>
      <HeroSection title={title} />
      
      <Container>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: 33,
            fontWeight: 'bold',
            color: blue[800],
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 5,
            textTransform: 'uppercase',
            letterSpacing: 2,
       
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
            fontSize: {xs:24,md:30},
            fontWeight: '500',
            color: blue[700],
            marginTop: 5,
            textTransform: 'uppercase',
            letterSpacing: 1,
           
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
            fontSize: {xs:24,md:30},
            fontWeight: '500',
            color: blue[700],
            marginTop: 8,
            marginBottom: 8,
            textTransform: 'uppercase',
           
          
            
          }}
        >
          How Your Donation Helps
        </Typography>
      
              
            <Box sx={{display:'flex', flexDirection:{md:'row',sm:'column',xs:'column'},width:'100%', justifyContent:'space-around',alignItems:'center',gap:5}}>
              <LittleCard name={name1} testimonial={testimonial1} avatar={lady1}/>
              <LittleCard name={name2} testimonial={testimonial2} avatar={man1}/>
              <LittleCard name={name3} testimonial={testimonial3} avatar={lady2}/>
              </Box>
       

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: {xs:24,md:30},
            fontWeight: '500',
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
              fontSize: 28,
              fontWeight: '500',
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
            fontSize: {xs:24,md:30},
            fontWeight: '500',
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
