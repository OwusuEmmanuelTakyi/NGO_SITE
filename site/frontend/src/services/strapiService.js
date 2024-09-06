// src/services/strapiService.js

import axios from 'axios';

const API_URL = 'http://localhost:1337'; // Strapi backend URL

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
