import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, FlatList, Button } from 'react-native';

import Contacts from './src/components/contacts/contacts';
import Header from './src/components/header';
import UserInfo from './src/components/user/userInfo';

import { useSelector } from 'react-redux'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewContactModal from './src/components/modals/newContactModal';
import GroupsButton from './src/components/header/groupsButton';


function List() {

  const { rehber } = useSelector((state) => state.contact);

  return (
    <FlatList
      data={rehber}
      renderItem={({ item,navigation }) => (
        <Contacts item={item} navigation={navigation}></Contacts>
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
        <View style={{ flex: 1 }}>
          <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator>
              <Stack.Screen name="Contacts"
                component={List}
                options={{
                  headerRight: () =>(
                    <NewContactModal />
                  ),
                  headerLeft: ()=>(
                    <GroupsButton />
                  )
                }}
              />
              <Stack.Screen 
                name= "Info"
                component={UserInfo}
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