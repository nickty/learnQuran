// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WordsScreen from './src/screen/WordsScreen';
import WordDetailsScreen from './src/screen/WordDetailsScreen';
import InitialScreen from './src/screen/InitialScreen';
import CodePush from 'react-native-code-push';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="Words" component={WordsScreen} />
        <Stack.Screen
          name="WordDetails"
          component={WordDetailsScreen}
          options={{title: 'Word Details test'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CodePush(App);
