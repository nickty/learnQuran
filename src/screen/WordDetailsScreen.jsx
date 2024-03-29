import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {fetchWordDetails} from '../api/api';
import Stemmer from 'arabic-stemmer';
import {Wrapper} from '../components/Wrapper';

const WordDetailsScreen = ({route}) => {
  const {word} = route.params;
  const [details, setDetails] = useState(''); // Update 'any' with expected API response type
  const [loading, setLoading] = useState(false);

  // console.log('check route', details);
  const [highlightedWord, setHighlightedWord] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        // Fetch word details based on the 'word' parameter
        const wordDetails = await fetchWordDetails(word);
        // const newWords = await fetchWordDetails('nabi');
        // Update 'details' state with the fetched data
        setDetails(wordDetails);
        setLoading(false);
      } catch (error) {
        // Handle error fetching details
      }
    };

    fetchDetails();

    const timeoutId = setTimeout(() => {
      setHighlightedWord(word);
    }, 4000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [word]);

  const highlightText = text => {
    if (highlightedWord) {
      const stemmedWord = Stemmer.stem(highlightedWord); // Stem the word
      console.log('stemmed word', stemmedWord);
      const regex = new RegExp(stemmedWord, 'ugi'); // u flag for Unicode
      return text.split(regex).map((part, index) => (
        <Text
          key={index}
          style={index % 2 === 1 ? styles.highlightedText : styles.itemText}>
          {part}
        </Text>
      ));
    }

    return <Text style={styles.itemText}>{text}</Text>;
  };

  return (
    <Wrapper loading={loading}>
      <Text style={styles.header}>Search results for {word} in Quran</Text>
      {details && details.length > 0 && (
        <ScrollView style={styles.detailsContainer}>
          {details.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#333'}}>
                {item}
              </Text>
              {/* You can display additional details here for each item */}
            </View>
          ))}
        </ScrollView>
      )}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  detailsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  itemText: {
    fontSize: 25,
    color: '#333',
  },
  highlightedText: {
    fontSize: 25,
    color: '#333',
    textDecorationLine: 'underline',
    backgroundColor: 'yellow', // Adjust the background color as needed
  },
});

export default WordDetailsScreen;
