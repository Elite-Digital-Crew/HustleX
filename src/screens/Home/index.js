import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

enableScreens();

// screens
import Home from './home';
import Profile from '../commonScreen/Profile';
import BlogDetails from '../commonScreen/BlogDetails';

const Stack = createSharedElementStackNavigator()

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
         </Stack.Navigator>
      );
} 