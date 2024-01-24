// File: quranWordsService.ts

import quranWords from '../assets/Translates.json'; // Replace with your JSON file path

interface QuranWord {
  Word: string;
  Frequency: number;
  'Part-of-speech': string;
  'Percentage So Far': number;
}

export const getRandomWords = (): Promise<QuranWord[]> => {
  // const shuffledWords = quranWords.sort(() => Math.random() - 0.5);
  // return shuffledWords.slice(0, 5);

  return new Promise((resolve, reject) => {
    try {
      const shuffledWords = quranWords.sort(() => Math.random() - 0.5);
      console.log('total words from json', shuffledWords.length);
      const randomWords = shuffledWords.slice(0, 5);
      resolve(randomWords);
    } catch (error) {
      reject(error);
    }
  });
};
