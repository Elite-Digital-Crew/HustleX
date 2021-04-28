import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './appStack';
import AuthStack from './authStack';

const NavigationIndex = () => {
    return(
        <NavigationContainer>
            <AuthStack />
            {/* <AppStack /> */}
        </NavigationContainer>
    );
}


export default NavigationIndex;
