import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Search from './search';

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <Button style={{ color: '#0a84ff', fontSize: 18 }} title='Groups'/>
                <Text style={{ color: 'white', fontWeight: 'bold', paddingRight: 42, fontSize: 18 }}>Contacts</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#0a84ff', fontSize: 28}}>+</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Search />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 145,
        backgroundColor: "#1c1c1e"
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 14,
        marginBottom: -45,
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign:'center'
    }

})