// File: quranWordsService.ts

import quranWords from '../assets/Quran-All-Words.json'; // Replace with your JSON file path

interface QuranWord {
  Word: string;
  Frequency: number;
  'Part-of-speech': string;
  'Percentage So Far': number;
}

export const getRandomWords = (): QuranWord[] => {
  const shuffledWords = quranWords.sort(() => Math.random() - 0.5);
  return shuffledWords.slice(0, 5);
};
