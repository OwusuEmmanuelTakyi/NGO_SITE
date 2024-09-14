// sanityClient.js or similar file
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '08lyf801', // find this in your Sanity Studio dashboard
  dataset: 'production', // or whatever dataset you are using
  apiVersion: '2023-09-06', // use the latest API version
  useCdn: true, // `false` if you want to ensure fresh data
  token: process.env.REACT_APP_SANITY_TOKEN // your environment variable
});

export default client;
