import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


// screens
import Friends from './friends';
import Profile from '../commonScreen/Profile';

const Stack = createStackNavigator()

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