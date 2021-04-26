import React from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './src/components/header';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    <View style={styles.container}>
      <Header/>
      <Text style={{paddingTop: 48, color: 'white'}}>Burası kişiler için</Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
