import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {fetchWordDetails, translateText} from '../api/api';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RoundBadge from '../components/RoundBadge';

type RootStackParamList = {
  Initial: undefined;
  Words: {words: string[]};
};

type WordsScreenRouteProp = RouteProp<RootStackParamList, 'Words'>;
type WordsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Words'
>;

interface WordsScreenProps {
  navigation: WordsScreenNavigationProp;
  route: WordsScreenRouteProp;
}

const WordsScreen: React.FC<WordsScreenProps> = ({route, navigation}) => {
  const {words} = route?.params;
  const [translatedWords, setTranslatedWords] = useState<[]>([]);

  useEffect(() => {
    const translateWords = async () => {
      const translatedWordsList: [] = [];

      for (const word of words) {
        const translatedWord = await translateText(word);
        translatedWordsList.push(translatedWord);
      }

      // Now you have an array of translated words with meanings
      console.log('Translated Words:', translatedWordsList);

      // Set the state with the translated words
      setTranslatedWords(translatedWordsList);
    };

    // Call translateWords when the words prop changes
    translateWords();
  }, [words]);

  const fetchWords = async (val: string) => {
    // console.log('workidng ');
    // setLoading(true);
    try {
      // Make an API call to fetch new words from the Quran
      // const newWords = await fetchWordDetails('nabi'); // Replace with your API call
      // Navigate to the 'Words' screen and pass the fetched words as parameters
      // console.log('check api call', newWords);
      navigation.navigate('WordDetails', {word: val});
    } catch (error) {
      console.error('Error fetching words:', error);
    } finally {
      // setLoading(false);
    }
  };

  console.log('from words screen', words);

  return (
    <View style={styles.container}>
      {/* <Button title="Get Random Words" onPress={handleGetRandomWords} /> */}
      {words.length > 0 && (
        <View style={styles.wordsContainer}>
          <Text style={styles.title}>Next five words that you can learn:</Text>
          {words.map((single, index) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                key={index}
                style={styles.wordItem}
                onPress={() => fetchWords(single.Word)}>
                <Text style={styles.wordText}>{single.Word}</Text>
              </TouchableOpacity>
              <View style={{margin: 10}}>
                <RoundBadge text={single.Frequency} />
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                    marginVertical: 5,
                    color: '#666',
                  }}>
                  {single.Translations.en}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                    marginVertical: 5,
                  }}>
                  {single.Translations.bn}
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  wordsContainer: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  wordItem: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 8,
  },
  wordText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default WordsScreen;
