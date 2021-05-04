import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { getUserInfo } from '../../redux/getUserInfo'
import { useDispatch } from 'react-redux'

export default function Contacts({ item, navigation }) {
    
    const dispatch = useDispatch();
    return (
        <TouchableHighlight style={{alignItems:'center'}} underlayColor='#3a3a3c' onPress={() => {navigation.navigate('Info'); dispatch(getUserInfo({isim: item.isim, soyisim: item.soyisim}))  } }>
            <View style={styles.button}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{item.isim+ " " + item.soyisim}</Text>
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