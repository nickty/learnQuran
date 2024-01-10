import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const WordDetailsScreen = ({route}) => {
  const {words} = route.params;
  const [details, setDetails] = useState(''); // Update 'any' with expected API response type

  console.log('check route', details);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Fetch word details based on the 'word' parameter
        const wordDetails = await fetchWordDetails(words);
        // const newWords = await fetchWordDetails('nabi');
        // Update 'details' state with the fetched data
        setDetails(wordDetails);
      } catch (error) {
        // Handle error fetching details
      }
    };

    fetchDetails();
  }, [words]);

  return (
    <View>
      <Text>Details for {words}</Text>
      {details && (
        <View>
          <Text>{details.meaning}</Text>
          {/* Display additional details */}
        </View>
      )}
    </View>
  );
};

export default WordDetailsScreen;
