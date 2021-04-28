import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import NewContactModal from './modals/newContactModal';
import Search from './search';

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <Button style={{ color: '#0a84ff', fontSize: 18 }} title='Groups'/>
                <Text style={{ color: 'white', fontWeight: 'bold', paddingRight: 42, fontSize: 18 }}>Contacts</Text>
                <TouchableOpacity>
                    <NewContactModal />
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
        backgroundColor: "#1c1c1e",
        paddingHorizontal: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: -45,
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign:'center'
    }

})