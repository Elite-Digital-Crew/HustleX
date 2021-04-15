import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './src/navigations/index';

import Font from './src/assets/fonts/index';

export default function App() {
    const [isLoading] = useFonts(Font);
    if (!isLoading) {
        return <AppLoading />
    }
    return <Navigation/>
}
