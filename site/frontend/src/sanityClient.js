import sanityClient from '@sanity/client';
require('dotenv').config();  // Load environment variables

const client = sanityClient({
  projectId: '08lyf801', // find this in your Sanity Studio dashboard
  dataset: 'production', // or whatever dataset you are using
  apiVersion: '2023-09-06', // use the latest API version
  useCdn: true, // `false` if you want to ensure fresh data
  token: process.env.REACT_PUBLIC_SANITY_TOKEN
});
