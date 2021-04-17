import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
//importing Auth screens
import Home from '../screens/Home/index';


//createing stack navigator
const AppStack = createStackNavigator();

const AppIndex = () => {
    return (
    <AppStack.Navigator
    screenOptions={{
    headerShown: false
    }}>
        <AppStack.Screen name="Home" component={Home}/>
    </AppStack.Navigator>
    );
}

// expoting stack
export default AppIndex;