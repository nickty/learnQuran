// WordComponent.tsx
import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';

interface WordComponentProps {
  word: string;
  meaning: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const WordComponent: React.FC<WordComponentProps> = ({
  word,
  meaning,
  onPress,
  containerStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Text style={textStyle}>{word}</Text>
      <Text style={textStyle}>{meaning}</Text>
    </TouchableOpacity>
  );
};

export default WordComponent;
