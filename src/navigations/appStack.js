import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from "@expo/vector-icons";

import React from 'react';
//importing Auth screens
import Home from '../screens/Home/index';
import Blog from '../screens/Blog/index';
import colours from '../assets/colours/colours';
import { widthToDp, heightToDp } from '../Utils';


//createing stack navigator
const AppStack = createBottomTabNavigator();

const AppIndex = () => {
    return (
    <AppStack.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          }else if (route.name === 'Cources') {
            iconName = focused ? 'barbell' : 'barbell-outline';
          } 
          else if (route.name === 'Blog') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    tabBarOptions={{
    activeTintColor: colours.text,
    inactiveTintColor: colours.darkgrey,
    style: {
        backgroundColor: colours.grey,
        borderTopEndRadius: widthToDp('4%'),
        borderTopStartRadius: widthToDp('4%'),
        borderColor: colours.grey,
        height: heightToDp('6%'),
    }}}>
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="Blog" component={Blog}/>
    </AppStack.Navigator>
    );
}

// expoting stack
export default AppIndex;