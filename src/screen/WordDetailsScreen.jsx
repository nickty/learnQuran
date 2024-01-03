import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const WordDetailsScreen = ({route}) => {
  const {word} = route.params;
  const [details, setDetails] = useState(''); // Update 'any' with expected API response type

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Fetch word details based on the 'word' parameter
        // Example: const wordDetails = await fetchWordDetails(word);
        // Update 'details' state with the fetched data
      } catch (error) {
        // Handle error fetching details
      }
    };

    fetchDetails();
  }, [word]);

  return (
    <View>
      <Text>Details for {word}</Text>
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
