import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

enableScreens();

// screens
import Music from './music';
import Profile from '../commonScreen/Profile';

const Stack = createSharedElementStackNavigator()

export default function Index({ navigation }) {
     return(
         <Stack.Navigator
         screenOptions={{
            headerShown: false
          }}
         >
          <Stack.Screen name="Music" component={Music} />
          <Stack.Screen name="Profile" component={Profile}/>
         </Stack.Navigator>
      );
} 