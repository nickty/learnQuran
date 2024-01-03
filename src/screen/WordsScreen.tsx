import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

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

const WordsScreen: React.FC<WordsScreenProps> = ({route}) => {
  const {words} = route.params;

  // console.log('from words screen', words);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Words from Quran:</Text>
      {/* {words.map((word, index) => (
        <Text key={index}>{word}</Text>
      ))} */}
    </View>
  );
};

export default WordsScreen;
