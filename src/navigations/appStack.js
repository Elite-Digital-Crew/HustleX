import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
//importing Auth screens
import Home from '../screens/Home/index';
import Blog from '../screens/Blog/index';


//createing stack navigator
const AppStack = createBottomTabNavigator();

const AppIndex = () => {
    return (
    <AppStack.Navigator
    screenOptions={{
    headerShown: false
    }}>
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="Blog" component={Blog}/>
    </AppStack.Navigator>
    );
}

// expoting stack
export default AppIndex;