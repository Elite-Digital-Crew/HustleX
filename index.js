import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colours from './src/assets/colours/colours';
import Font from './src/assets/fonts/index';

export default function App() {
    const [isLoading] = useFonts(Font);
    if (!isLoading) {
        return <AppLoading />
    }
    return (
        <View style={styles.container}>
        <Text style={{fontFamily: "PoppinsBold", fontSize: 30 }}>New App</Text>
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.secondary ,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
