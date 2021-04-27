import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from "@expo/vector-icons";

import React from 'react';
import colours from '../assets/colours/colours';
import { widthToDp, heightToDp } from '../Utils';
import { Image, View } from 'react-native';

//importing screens
import Home from '../screens/Home/home';
import Discover from '../screens/Discover/discover';
import Music from '../screens/Music/music';
import Friends from '../screens/Friends/friends';


//createing stack navigator
const AppStack = createBottomTabNavigator();

const AppIndex = () => {
  return (
  <AppStack.Navigator
  tabBarOptions={{
  activeTintColor: colours.text,
  inactiveTintColor: colours.darkgrey,
  style: {
      backgroundColor: colours.background ,
      height: heightToDp('6%'),
  }}}>
      <AppStack.Screen name="Home" component={Home}/>
      <AppStack.Screen name="Discover" component={Discover}/>
      <AppStack.Screen name="Music" component={Music}/>
      <AppStack.Screen name="Friends" component={Friends}/>
  </AppStack.Navigator>
  );
}

// expoting stack
export default AppIndex;