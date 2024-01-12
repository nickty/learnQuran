import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {fetchWordDetails} from '../api/api';

const WordDetailsScreen = ({route}) => {
  const {word} = route.params;
  const [details, setDetails] = useState(''); // Update 'any' with expected API response type

  console.log('check route', details);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Fetch word details based on the 'word' parameter
        const wordDetails = await fetchWordDetails(word);
        // const newWords = await fetchWordDetails('nabi');
        // Update 'details' state with the fetched data
        setDetails(wordDetails);
      } catch (error) {
        // Handle error fetching details
      }
    };

    fetchDetails();
  }, [word]);

  return (
    <View>
      <Text>Details for {word}</Text>
      {details.length > 0 && (
        <ScrollView style={styles.detailsContainer}>
          {details.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Text style={styles.itemText}>{item}</Text>
              {/* You can display additional details here for each item */}
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    flex: 1,
  },
  itemContainer: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
});

export default WordDetailsScreen;
