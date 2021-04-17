import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './home';
import HomeDetails from './homeDetails';

const Stack = createStackNavigator()

export default function Index({ navigation }) {
     return(
         <Stack.Navigator
         screenOptions={{
            headerShown: false
          }}
         >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="HomeDetails" component={HomeDetails}/>
         </Stack.Navigator>
      );
}      