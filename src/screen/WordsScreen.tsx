// WordsScreen.tsx
import React from 'react';
import {View} from 'react-native';
import WordComponent from '../components/WordsScreen';
import {StackNavigationProp} from '@react-navigation/stack';

interface Word {
  word: string;
  meaning: string;
}

interface WordsScreenProps {
  navigation: StackNavigationProp<any>;
}

const WordsScreen: React.FC<WordsScreenProps> = ({navigation}) => {
  const words: Word[] = [
    {word: 'Word 1', meaning: 'Meaning 1'},
    {word: 'Word 2', meaning: 'Meaning 2'},
    // Add more words here...
  ];

  const goToDetails = (word: string) => {
    navigation.navigate('WordDetails', {word});
  };

  return (
    <View>
      {words.map((item, index) => (
        <WordComponent
          key={index}
          word={item.word}
          meaning={item.meaning}
          onPress={() => goToDetails(item.word)}
        />
      ))}
    </View>
  );
};

export default WordsScreen;
