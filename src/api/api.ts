// api.ts
import axios from 'axios';

const BASE_URL = 'http://api.alquran.cloud/v1'; // Replace with your API endpoint

const fetchWordDetails = async (word: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/${word}/all/en`);
    if (response.data && response.data.data && response.data.data.matches) {
      const matches = response.data.data.matches;

      // Extract words from matches (assuming 'matches' contains the words)
      const words: string[] = matches.map((match: any) => {
        // Assuming each 'match' object contains the word
        return match.word || ''; // Replace with the field containing the word
      });

      // Get the first five words
      const firstFiveWords = words.slice(0, 5);

      return firstFiveWords;
    } else {
      throw new Error('Invalid response format or missing data.');
    }

   
  } catch (error) {
    console.error('Error fetching word details:', error);
    throw error;
  }
};

export { fetchWordDetails };
