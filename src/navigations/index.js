import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import AppStack from './appStack';
import AuthStack from './authStack';

import colours from '../assets/colours/colours';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background : colours.background,
    },
};


const NavigationIndex = () => {
    return(
        <NavigationContainer theme={MyTheme}>
            <AuthStack />
            {/* <AppStack /> */}
        </NavigationContainer>
    );
}


export default NavigationIndex;
