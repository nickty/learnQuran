import React from 'react';
import {View, Text, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface RoundBadgeProps {
  text: string;
}

const RoundBadge: React.FC<RoundBadgeProps> = ({text}) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}> {text} Repeated</Text>
    </View>
  );
};

interface Styles {
  badge: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  badge: {
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default RoundBadge;
