import AuthStack from './authStack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const NavigationIndex = () => {
    return(
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
}


export default NavigationIndex;
