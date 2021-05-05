import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Music from './music';
import Profile from '../commonScreen/Profile';


const Stack = createStackNavigator()

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