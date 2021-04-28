import React from 'react';
import { StyleSheet, Text, View,Pressable,Modal } from 'react-native';

export default function NewContact({setModalVisible, modalVisible}){
    return(
        <View style={styles.container}>
            <View>
                <View>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{color: '#0a84ff', fontSize: 16}}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 850,
        width: 370,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: 100
    }
})