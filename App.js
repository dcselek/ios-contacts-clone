import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={{paddingTop: 48, color: 'white'}}>Burası kişiler için</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
