import React from 'react';
import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {fetchWordDetails} from '../api/api';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
  const {words} = route.params;

  const fetchWords = async (val: string) => {
    // console.log('workidng ');
    // setLoading(true);
    try {
      // Make an API call to fetch new words from the Quran
      // const newWords = await fetchWordDetails('nabi'); // Replace with your API call
      // Navigate to the 'Words' screen and pass the fetched words as parameters
      // console.log('check api call', newWords);
      navigation.navigate('WordDetails', {words: val});
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
          <Text style={styles.title}>Random Words:</Text>
          {words.map((single, index) => (
            <TouchableOpacity
              key={index}
              style={styles.wordItem}
              onPress={() => fetchWords(single.Word)}>
              <Text style={styles.wordText}>{single.Word}</Text>
            </TouchableOpacity>
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
