import React, {useEffect, useLayoutEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {useFonts}  from "@use-expo/font";
import AppLoading from "expo-app-loading";

import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from "@expo/vector-icons";

import Onbording from './src/screens/Onbording/Onbording';
import Login from './src/screens/Auth/login';
import Landing from './src/screens/Auth/landing';
import Register from './src/screens/Auth/regiter';
import CreateProfile from './src/screens/Auth/createprofile';

import colours from './src/assets/colours/colours';
import { heightToDp, widthToDp } from './src/Utils';

// importing screens
import Home from './src/screens/Home/home';
import Cources from './src/screens/Cources/Cources';
import Blog from './src/screens/Blog/index';
import { StatusBar } from 'expo-status-bar';





const CustomFonts = {
  PoppinsBold: require("./src/assets/fonts/Poppins-Bold.ttf"),
  PoppinsExtraBold: require("./src/assets/fonts/Poppins-ExtraBold.ttf"),
  PoppinsMedium: require("./src/assets/fonts/Poppins-Medium.ttf"),
  PoppinsRegular: require("./src/assets/fonts/Poppins-Regular.ttf"),
  PoppinsSemiBold: require("./src/assets/fonts/Poppins-SemiBold.ttf"),
  PoppinsThin: require("./src/assets/fonts/Poppins-Thin.ttf"),
};

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

function AuthIndex({ navigation }) {
  const [isLoaded] = useFonts(CustomFonts);

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AuthStack.Navigator
        screenOptions={{
        headerShown: false
      }}
      >
        <AuthStack.Screen name="Onbording" component={Onbording}/>
        <AuthStack.Screen name="Landing" component={Landing}/>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
        <AuthStack.Screen name="CreateProfile" component={CreateProfile} />
      </AuthStack.Navigator>
    );
  }
}

function AppIndexTest({ navigation }) {
  const [isLoaded] = useFonts(CustomFonts);
  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
      <Tab.Navigator 
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
            else if (route.name === 'Profile') {
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
          
          }
        }}
        >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cources" component={Cources} />
        <Tab.Screen name="Blog" component={Blog}/>
      </Tab.Navigator>

  );
}

function Onboardingtest  ({ navigation }) {
  const [isLoaded] = useFonts(CustomFonts);
  if (!isLoaded) {
    return <AppLoading />;
  }
  return(
    <AuthStack.Navigator
        screenOptions={{
        headerShown: false
      }}
      >
        <AuthStack.Screen name="Onbording" component={Onbording}/>
        <AuthStack.Screen name="Landing" component={Landing}/>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
        <AuthStack.Screen name="CreateProfile" component={CreateProfile} />
      </AuthStack.Navigator>
  );
}



export default AuthIndex;
// export default Onboardingtest;