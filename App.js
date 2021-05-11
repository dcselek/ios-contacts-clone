import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, SectionList, SafeAreaView, StatusBar } from 'react-native';

import Contacts from './src/components/contacts/contacts';
import UserInfo from './src/components/user/userInfo';

import { useSelector } from 'react-redux'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewContactModal from './src/components/modals/newContactModal';
import GroupsButton from './src/components/header/groupsButton';
import Search from './src/components/header/search';
import InfoCard from './src/components/header/infoCard';




{/* SECTION LIST FOR CONTACTS */ }
function List({ navigation }) {



  const { rehber } = useSelector((state) => state.contact);

  let DATA = {};

  rehber.map(kisi => {
    let basHarf = kisi.isim.substring(0, 1).toUpperCase();

    if (typeof DATA[basHarf] !== "object") {
      DATA[basHarf] = [];
    }
    DATA[basHarf].push(kisi);
  })

  let FUCK = Object.entries(DATA).map(a => { return { title: a[0], data: a[1] } })


  return (
    <View>
      <Search />
      <SectionList
        sections={FUCK.sort(function (a, b) { if (a.title < b.title) { return -1; } if (a.title > b.title) { return 1; } return 0; })}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Contacts navigation={navigation} item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ color: "white", paddingHorizontal: 16, paddingVertical: 4, fontSize: 16, backgroundColor: "#3a3a3c", fontWeight: "bold" }}>{title}</Text>
        )}
        ListHeaderComponent={() => (
          <InfoCard/>
        )}
      />
    </View>
  )

}
{/* HOME SCREEN */ }
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
                  headerRight: () => (
                    <NewContactModal />
                  ),
                  headerLeft: () => (
                    <GroupsButton />
                  ),
                  headerStyle: {
                    borderBottomColor: "#3C3C434D"
                  }
                }}
              />
              <Stack.Screen
                name="Info"
                component={UserInfo}
                options={{
                  headerStyle: {
                    backgroundColor: "transparent"
                  },
                  title: ""
                }}
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