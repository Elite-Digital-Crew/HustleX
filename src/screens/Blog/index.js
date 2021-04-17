import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Blog from './Blog';
import BlogDetails from './BlogDetails';

const Stack = createStackNavigator()

export default function Index({ navigation }) {
     return(
         <Stack.Navigator
         screenOptions={{
            headerShown: false
          }}
         >
          <Stack.Screen name="Blog" component={Blog} />
          <Stack.Screen name="BlogDetails" component={BlogDetails}/>
         </Stack.Navigator>
      );
}