import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';

import Contacts from './src/components/contacts/contacts';
import Header from './src/components/header';

import { useSelector } from 'react-redux'



export default function App() {


  const { rehber } = useSelector((state) => state.contact);
  

  return (

    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.container}>
        <Header />
        <View>
           <FlatList
            data={rehber}
            renderItem={({ item }) => (
              <Contacts item={item}></Contacts>
            )}
            keyExtractor={item => item.key}
          /> 
          
        </View>
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
