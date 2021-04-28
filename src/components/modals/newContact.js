import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Modal, TouchableOpacity, TextInput } from 'react-native';
import SvgUser from '../icons/User';

export default function NewContact({ setModalVisible, modalVisible }) {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");



    return (
        <View style={styles.container}>
            <View>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{ color: '#0a84ff', fontSize: 16 }}>Cancel</Text>
                    </Pressable>
                    <Text style={{ color: '#fff', fontSize: 18, paddingRight: 8 }}>New Contact</Text>
                    <Text style={{ color: '#0a84ff', fontSize: 16 }}>Done</Text>
                </View>
                {/* Picture */}
                <View style={{ height: 220, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.svgContainer}>
                        {(name === "") ? <SvgUser width="120px" height="120px" fill="#fff" stroke="#fff" /> : <Text style={{ color: "white", fontSize: 64 }}>{name}{surname}</Text>}
                    </View>
                    <TouchableOpacity>
                        <Text style={{ color: '#0a84ff', fontSize: 16, paddingTop: 12 }}>Add Photo</Text>
                    </TouchableOpacity>
                </View>
                {/* Input */}
                <View style={styles.FirstInputsContainer}>
                    <TextInput style={styles.FirstInputs} placeholder="First Name" placeholderTextColor="#8e8e93" onChangeText={(word) => { setName(word.substring(0, 1).toUpperCase()); }} />
                    <TextInput style={styles.FirstInputs} placeholder="First Name" placeholderTextColor="#8e8e93" onChangeText={(word) => { setSurname(word.substring(0, 1).toUpperCase()); }} />
                    <TextInput style={{
                        color: '#fff',
                        height: 42,
                        fontSize: 16,
                        fontWeight: '500',
                    }} placeholder="First Name" placeholderTextColor="#8e8e93" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1e',
        height: 850,
        width: 370,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: 50,
    },
    headerContainer: {
        flexDirection: 'row',
        height: 40,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    svgContainer: {
        backgroundColor: "#8e8e93",
        width: 148,
        height: 148,
        borderRadius: 74,
        alignItems: 'center',
        justifyContent: 'center'
    },
    FirstInputsContainer: {
        backgroundColor: "#3a3a3c",
        paddingHorizontal: 24,
    },
    FirstInputs: {
        color: '#fff',
        height: 42,
        fontSize: 16,
        fontWeight: '500',
        borderBottomWidth: 0.3,
        borderBottomColor: "#8e8e93",
    }
})