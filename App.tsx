// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WordsScreen from './src/screen/WordsScreen';
import WordDetailsScreen from './src/screen/WordDetailsScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Words">
        <Stack.Screen name="Words" component={WordsScreen} />
        <Stack.Screen name="WordDetails" component={WordDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
