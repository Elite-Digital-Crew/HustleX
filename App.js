import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colours from './src/assets/colours/colours';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>New App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.primary ,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
