import React from 'react';

// screens
import Discover from './discover';
import BlogDetails from '../commonScreen/BlogDetails';
import EventsDetails from '../commonScreen/EventsDetails';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function Index({ navigation }) {
     return(
         <Stack.Navigator
         screenOptions={{
            headerShown: false
          }}
         >
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="BlogDetails" component={BlogDetails}/>
          <Stack.Screen name="EventsDetails" component={EventsDetails}/>
         </Stack.Navigator>
      );
} 