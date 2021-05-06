import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SvgAvatarPerson1 from '../icons/AvatarPerson1'

export default function InfoCard() {
    return (
        <View style={styles.infoCardContainer}>
            <View style={styles.svgContainer}>
                <SvgAvatarPerson1 width="60px" height="60px" fill="#fff" stroke="#fff" />
            </View>
            <View style={{paddingLeft: 12}}>
                <Text style={{color: "white", fontSize: 18, fontWeight: 'bold'}}>Doğan Can Selek</Text>
                <Text style={{color: "gray", marginTop: 4}}>My Card</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoCardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    svgContainer: {
        backgroundColor: "#8e8e93",
        width: 68,
        height: 68,
        borderRadius: 34,
        alignItems: 'center',
        justifyContent: 'center'
    }
})