import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from "@expo/vector-icons";

import React from 'react';
import colours from '../assets/colours/colours';
import { widthToDp, heightToDp } from '../Utils';
import { Image, View } from 'react-native';

//importing screens
import Home from '../screens/Home/index';
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
      height: heightToDp('7%'),
  }}}>
      <AppStack.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={20} color={color} />
          ),
        }}
      />
      <AppStack.Screen 
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Image
            style={{
              height: heightToDp('3%'),
              width: heightToDp('3%')
            }} 
            source={require('../assets/icons/discover.png')}/>
          ),
        }}/>
      <AppStack.Screen 
        name="Music"
        component={Music}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Image
            style={{
              height: heightToDp('3%'),
              width: heightToDp('3%')
            }} 
            source={require('../assets/icons/music.png')}/>
          ),
        }}/>
      <AppStack.Screen 
        name="Friends"
        component={Friends}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Image
            style={{
              height: heightToDp('3%'),
              width: heightToDp('3%')
            }} 
            source={require('../assets/icons/profile.png')}/>
          ),
        }}/>
  </AppStack.Navigator>
  );
}

// expoting stack
export default AppIndex;