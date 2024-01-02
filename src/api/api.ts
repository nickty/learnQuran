// api.ts
import axios from 'axios';

const BASE_URL = 'https://api.quran.com'; // Replace with your API endpoint

const fetchWordDetails = async (word: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/word/${word}`);
    return response.data; // Assuming API returns word details
  } catch (error) {
    console.error('Error fetching word details:', error);
    throw error;
  }
};

export { fetchWordDetails };
