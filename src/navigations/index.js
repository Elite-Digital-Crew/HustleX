import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import AppStack from './appStack';
import AuthStack from './authStack';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background : 'rgb(255, 255, 255)',
    },
};


const NavigationIndex = () => {
    return(
        <NavigationContainer theme={MyTheme}>
            {/* <AuthStack /> */}
            <AppStack />
        </NavigationContainer>
    );
}


export default NavigationIndex;
