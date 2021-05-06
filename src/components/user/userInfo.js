import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SvgAvatarPerson1 from '../icons/AvatarPerson1'
import { useSelector } from 'react-redux'

export default function UserInfo() {

    const { info } = useSelector((state) => state.userInfo);


    return (
        <View>
            <View style={{ alignItems: "center", paddingTop:12 }}>
                <View style={styles.svgContainer}>
                    <Text style={{ color: "white", fontSize: 48 }}>{info[0].payload.isim.substring(0, 1).toUpperCase()+info[0].payload.soyisim.substring(0, 1).toUpperCase()}</Text>
                </View>
                <Text style={{color: "white", fontSize: 24, paddingTop: 12 }}>{info[0].payload.isim + " " + info[0].payload.soyisim}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    svgContainer: {
        backgroundColor: "#8e8e93",
        width: 96,
        height: 96,
        borderRadius: 48,
        alignItems: 'center',
        justifyContent: 'center'
    }
})