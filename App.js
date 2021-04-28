import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import Contacts from './src/components/contacts/contacts';
import Header from './src/components/header';

export default function App() {


  const [contacts, setContacts] = useState([
    { name: 'AAnnem', surname: '1', id: '1' },
    { name: 'Xdxd', surname: '2', id: '2' },
    { name: 'Ecds', surname: '3', id: '3' }
  ])

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.container}>
        <Header />
        <View>
          <FlatList
            data={contacts}
            renderItem={({ item }) => (
              <Contacts item={item}></Contacts>
            )}
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
