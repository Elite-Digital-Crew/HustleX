import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

enableScreens();

// screens
import Friends from './friends';
import Profile from '../commonScreen/Profile';

const Stack = createSharedElementStackNavigator()

export default function Index({ navigation }) {
     return(
         <Stack.Navigator
         screenOptions={{
            headerShown: false
          }}
         >
          <Stack.Screen name="Friends" component={Friends} />
          <Stack.Screen name="Profile" component={Profile}/>
         </Stack.Navigator>
      );
} 