import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


// screens
import Home from './home';
import Profile from '../commonScreen/Profile';
import BlogDetails from '../commonScreen/BlogDetails';
import EventsDetails from '../commonScreen/EventsDetails';

const Stack = createStackNavigator()

export default function Index({ navigation }) {
     return(
         <Stack.Navigator
         screenOptions={{
            headerShown: false
          }}
         >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="BlogDetails" component={BlogDetails}/>
          <Stack.Screen name="EventsDetails" component={EventsDetails}/>
         </Stack.Navigator>
      );
} 