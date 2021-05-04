import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import colours from '../assets/colours/colours';
import { widthToDp, heightToDp } from '../Utils';

//importing screens
import Home from '../screens/Home/index';
import Discover from '../screens/Discover/index';
import Music from '../screens/Music/music';
import Friends from '../screens/Friends/friends';

//icons
import Homeicon from '../assets/icons/home.js';
import Discovericon from '../assets/icons/discover.js';
import Musicicon from '../assets/icons/music.js';
import Profileicon from '../assets/icons/profile.js';

//createing stack navigator
const AppStack = createBottomTabNavigator();

const AppIndex = () => {
  return (
  <AppStack.Navigator
  tabBarOptions={{
  showLabel: false,
  activeTintColor: colours.text,
  inactiveTintColor: '#808080',
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
            <Homeicon width={widthToDp('7%')} height={widthToDp('7%')} fill={color}/>
          ),
        }}
      />
      <AppStack.Screen 
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
          <Discovericon width={widthToDp('9%')} height={widthToDp('9%')} fill={color}/>
          ),
        }}/>
      <AppStack.Screen 
        name="Music"
        component={Music}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
          <Musicicon width={widthToDp('9%')} height={widthToDp('9%')} fill={color}/>
          ),
        }}/>
      <AppStack.Screen 
        name="Friends"
        component={Friends}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
          <Profileicon  width={widthToDp('9%')} height={widthToDp('9%')} fill={color}/>
          ),
        }}/>
  </AppStack.Navigator>
  );
}

// expoting stack
export default AppIndex;