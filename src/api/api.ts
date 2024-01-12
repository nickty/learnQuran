// api.ts
import axios from 'axios';

// const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const apiKey = 'AIzaSyDy0DKnuaWIDGLIct8lCnKyWYZEcIMUZl8';

const BASE_URL = 'http://api.alquran.cloud/v1'; // Replace with your API endpoint

const fetchWordDetails = async (word: string) => {
  // console.log("workss api", word)
  try {
    const response = await axios.get(`${BASE_URL}/search/${word}/all/ar`);  
    // console.log("check res", response)
    if (response.data && response.data.data && response.data.data.matches) {
      const matches = response.data.data.matches;

      // console.log("check matches", matches[0])

      // Extract words from matches (assuming 'matches' contains the words)
      const words: string[] = matches.map((match: any) => {
        // Assuming each 'match' object contains the word
        // console.log("first language", match.edition.name)
        return match.edition.name || ''; // Replace with the field containing the word
      });

      // console.log("check word", words)

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

const translateText = async (text : any, targetLanguage = 'en') => {
  // console.log("text inside api", text.Word, apiKey); 
  try {
   
    const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const response = await axios.post(apiUrl, {
      q: text.Word,
      target: targetLanguage,
    });

    const translatedText = response.data.data.translations[0].translatedText;
    console.log("res from api", translatedText)
    // console.log("check response from API", response.data.data)
    return translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return null;
  }
};

export { fetchWordDetails, translateText };
