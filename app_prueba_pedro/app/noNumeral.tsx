import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';

export default function noNumeral() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Text style={styles.text}>Hello, world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set background color to black
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white', // Set text color to white for visibility
  },
});
