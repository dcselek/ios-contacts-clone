import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function Contacts({ item, }) {

    const onPress = () => {
        console.log('');
    }

    return (
        <TouchableHighlight style={{alignItems:'center'}} underlayColor='#3a3a3c' onPress={onPress}>
            <View style={styles.button}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{item.name + ' ' + item.surname}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    contact: {
        
    },
    button:{
        borderBottomColor: '#3a3a3c',
        borderBottomWidth: 0.5,
        paddingVertical: 12,
        width: 340,
    }
})