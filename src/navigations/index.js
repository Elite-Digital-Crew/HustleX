import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './authStack';
import AppStack from './appStack';

const NavigationIndex = () => {
    return(
        <NavigationContainer>
            {/* <AuthStack /> */}
            <AppStack />
        </NavigationContainer>
    );
}


export default NavigationIndex;
