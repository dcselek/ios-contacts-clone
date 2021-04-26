import React from 'react';
import { StyleSheet, TextInput, View, } from 'react-native';

export default function Search(){
    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor='#8e8e93'
             />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#2c2c2e',
        height:36,
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 16,
        paddingHorizontal: 12,
        color: 'white',
        fontSize:16
    }
})