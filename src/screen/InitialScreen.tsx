import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {fetchWordDetails} from '../api/api';

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

  const fetchWords = async () => {
    console.log('workidng ');
    setLoading(true);
    try {
      // Make an API call to fetch new words from the Quran
      const newWords = await fetchWordDetails('isa'); // Replace with your API call
      // Navigate to the 'Words' screen and pass the fetched words as parameters
      console.log('check api call', newWords);
      navigation.navigate('Words', {words: newWords});
    } catch (error) {
      console.error('Error fetching words:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Fetch Words from Quran"
        onPress={fetchWords}
        disabled={loading}
      />
    </View>
  );
};

export default InitialScreen;
