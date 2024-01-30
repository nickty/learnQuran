import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {fetchWordDetails} from '../api/api';
import {getRandomWords} from '../api/quranWordsService';

type RootStackParamList = {
  Initial: undefined;
  Words: {words: string[]};
};

type InitialScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Initial'
>;

interface InitialScreenProps {
  navigation: InitialScreenNavigationProp;
}

const InitialScreen: React.FC<InitialScreenProps> = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const [randomWords, setRandomWords] = useState<Array<any>>([]);

  // const handleGetRandomWords = () => {
  //   setLoading(true);
  //   getRandomWords()
  //     .then(words => {
  //       setRandomWords(words);
  //       // console.log('total words', words.length);
  //       if (randomWords.length) {
  //         navigation.navigate('Words', {words: randomWords});
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error fetching random words:', error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //       console.log('first', randomWords);
  //       // if (randomWords.length) {
  //       //   navigation.navigate('Words', {words: randomWords});
  //       // }
  //     });
  // };

  const handleGetRandomWords = async () => {
    setLoading(true);

    try {
      const words = await getRandomWords();
      setRandomWords(words);

      // if (words.length) {
      //   navigation.navigate('Words', { words: words });
      // }
    } catch (error) {
      console.error('Error fetching random words:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (randomWords.length) {
      navigation.navigate('Words', {words: randomWords});
    }
  }, [randomWords]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleGetRandomWords}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" size="small" />
        ) : (
          <Text style={styles.buttonText}>Get Five Random Words</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.description}>
        These five words will be from the Quran, and the app will help you
        memorize words with examples from the Quran and practices.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#666',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
  },
});

export default InitialScreen;
