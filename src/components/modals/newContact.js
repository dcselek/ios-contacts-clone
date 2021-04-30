import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Modal, TouchableOpacity, TextInput, TouchableHighlight, ScrollView, SafeAreaView, ü } from 'react-native';
import SvgAvatarPerson1 from '../icons/AvatarPerson1'

import { addFirstName } from '../../redux/addContact'
import { useDispatch } from 'react-redux'

export default function NewContact({ setModalVisible, modalVisible }) {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");




    const SELECTITEMS = [
        { name: 'phone' },
        { name: 'email' },
        { name: 'url' },
        { name: 'adress' },
        { name: 'birthday' },
        { name: 'date' },
        { name: 'related name' },
        { name: 'social profile' },
        { name: 'instant message' }
    ]

    const dispatch = useDispatch();

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }


    return (
        <SafeAreaView style={styles.container}>
            <View>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <Pressable onPress={() => { setModalVisible(!modalVisible); dispatch(addFirstName({ isim: name, soyisim: surname, key: uuidv4() })) }}>
                        <Text style={{ color: '#0a84ff', fontSize: 16 }}>Cancel</Text>
                    </Pressable>
                    <Text style={{ color: '#fff', fontSize: 18, paddingRight: 8 }}>New Contact</Text>
                    <Text style={{ color: '#0a84ff', fontSize: 16 }}>Done</Text>
                </View>
                {/* Picture */}
                <ScrollView>
                    <View style={{ height: 220, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.svgContainer}>
                            {(name === "") ? <SvgAvatarPerson1 width="160px" height="160px" fill="#fff" stroke="#fff" /> : <Text style={{ color: "white", fontSize: 64 }}>{name.substring(0, 1).toUpperCase()}{surname.substring(0, 1).toUpperCase()}</Text>}
                        </View>
                        <TouchableOpacity>
                            <Text style={{ color: '#0a84ff', fontSize: 16, paddingTop: 12 }}>Add Photo</Text>
                        </TouchableOpacity>
                    </View>

                    {/* First Inputs */}
                    <View style={styles.FirstInputsContainer}>
                        <TextInput style={styles.FirstInputs} placeholder="First Name" placeholderTextColor="#8e8e93" onChangeText={(word) => { setName(word); }} />
                        <TextInput style={styles.FirstInputs} placeholder="Last Name" placeholderTextColor="#8e8e93" onChangeText={(word) => { setSurname(word); }} />
                        <TextInput style={{
                            color: '#fff',
                            height: 42,
                            fontSize: 16,
                            fontWeight: '500',
                        }} placeholder="Company" placeholderTextColor="#8e8e93" />
                    </View>
                    {/* Selectors */}
                    <View>
                        {SELECTITEMS.map((items) => {
                            return (<TouchableHighlight key={items.name} style={styles.selectContainer} underlayColor='#3a3a3c' onPress={() => null}>
                                <View style={{ flexDirection: 'row', paddingLeft: 24, alignItems: 'center' }}>
                                    <View style={styles.selectIconContainer}>
                                        <Text style={styles.selectIcon}>+</Text>
                                    </View>
                                    <Text style={styles.selectIconTitle}>add {items.name}</Text>
                                </View>
                            </TouchableHighlight>)
                        })}

                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
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
        backgroundColor: "#2c2c2e",
        paddingHorizontal: 24,
    },
    FirstInputs: {
        color: '#fff',
        height: 48,
        fontSize: 16,
        fontWeight: '500',
        borderBottomWidth: 0.7,
        borderBottomColor: "#3a3a3c",
    },
    selectContainer: {
        backgroundColor: "#2c2c2e",
        marginTop: 42,
        paddingVertical: 10,
    },
    selectIconContainer: {
        backgroundColor: '#30d158',
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center'
    },
    selectIcon: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
    },
    selectIconTitle: {
        fontSize: 16,
        color: 'white',
        marginLeft: 16,
    }
})