import React from 'react';
import { Text, View } from 'react-native';

import Index from './index';

import { NavigationContainer, DarkTheme } from '@react-navigation/native';


const App = () => {
  return (
      <NavigationContainer 
      // theme={DarkTheme}
      >
        <Index />
      </NavigationContainer>
  );
}

export default App;