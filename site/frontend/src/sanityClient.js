import { createClient } from '@sanity/client';
require('dotenv').config();  // Load environment variables

// Define the Sanity token outside the client config
const sanityToken = process.env.REACT_APP_SANITY_TOKEN;

const client = createClient({
  projectId: '08lyf801', // find this in your Sanity Studio dashboard
  dataset: 'production', // or whatever dataset you are using
  apiVersion: '2023-09-06', // use the latest API version
  useCdn: true, // `false` if you want to ensure fresh data
  token: sanityToken // Use the token from environment variables
});
