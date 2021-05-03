import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';

import Contacts from './src/components/contacts/contacts';
import Header from './src/components/header';

import { useSelector } from 'react-redux'

import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function List() {

  const { rehber } = useSelector((state) => state.contact);

  return (
    <FlatList
      data={rehber}
      renderItem={({ item }) => (
        <Contacts item={item}></Contacts>
      )}
      keyExtractor={item => item.key}
    />
  )

}

function App() {

  const Stack = createStackNavigator();



  return (

    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.container}>
        <Header />
        <View style={{ flex: 1 }}>
          <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="User"
                component={List}
              />
            </Stack.Navigator>
          </NavigationContainer>
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

export default App