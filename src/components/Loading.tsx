import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';

const Loading = () => {
  return (
    <View style={[StyleSheet.absoluteFill, styles.main]}>
      <ActivityIndicator size={'large'} color="#0c6964" />
      <Text style={styles.text}>Please wait</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    zIndex: 99,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#61616185',
  },
  text: {
    color: '#0c6964',
    fontWeight: '700',
    marginTop: 7,
    fontSize: 19,
  },
});

export default Loading;
