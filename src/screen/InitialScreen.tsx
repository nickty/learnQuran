import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';
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

  const fetchWords = async () => {
    // console.log('workidng ');
    setLoading(true);
    try {
      // Make an API call to fetch new words from the Quran
      const newWords = await fetchWordDetails('nabi'); // Replace with your API call
      // Navigate to the 'Words' screen and pass the fetched words as parameters
      // console.log('check api call', newWords);
      navigation.navigate('Words', {words: newWords});
    } catch (error) {
      console.error('Error fetching words:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetRandomWords = () => {
    const words = getRandomWords();
    setRandomWords(words);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Fetch Words from Quran"
        onPress={fetchWords}
        disabled={loading}
      />
      <Button title="Get Random Words" onPress={handleGetRandomWords} />
      {randomWords.length > 0 && (
        <View>
          <Text>Random Words:</Text>
          {randomWords.map((word, index) => (
            <Text key={index}>{word.Word}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default InitialScreen;
