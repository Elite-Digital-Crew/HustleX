import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


// screens
import Home from './home';
import Profile from '../commonScreen/Profile';
import BlogDetails from '../commonScreen/BlogDetails';
import EventsDetails from '../commonScreen/EventsDetails';
import CoursesDetails from '../commonScreen/CoursesDetail';

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
          <Stack.Screen name="CoursesDetails" component={CoursesDetails}/>
         </Stack.Navigator>
      );
} 