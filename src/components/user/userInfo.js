import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SvgAvatarPerson1 from '../icons/AvatarPerson1'
import { MessageCircle , Phone, Video, Mail} from '../icons/index'
import { useSelector } from 'react-redux'


const MENU = [
    {
        id: "Messege",
        title: "message",
        svg: <MessageCircle fill="#0a84ff" width={24} height={24} />
    },
    {
        id: "Mobile",
        title: "mobile",
        svg: <Phone fill="#0a84ff" width={20} height={20} />
    },
    {
        id: "Video",
        title: "video",
        svg: <Video fill="#0a84ff" width={20} height={20} />
    },
    {
        id:"Mail",
        title: "mail",
        svg: <Mail fill="#0a84ff" stroke="#097bed" width={20} height={20} />
    }
]


export default function UserInfo() {

    const { info } = useSelector((state) => state.userInfo);


    return (
        <View style={{paddingHorizontal: 8}}>
            {/* Upper Section */}
            <View style={{ alignItems: "center"}}>
                <View style={styles.svgContainer}>
                    <Text style={{ color: "white", fontSize: 40 }}>{info[0].payload.isim.substring(0, 1).toUpperCase() + info[0].payload.soyisim.substring(0, 1).toUpperCase()}</Text>
                </View>
                <Text style={{ color: "white", fontSize: 24, paddingTop: 12 }}>{info[0].payload.isim + " " + info[0].payload.soyisim}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: "space-between", paddingTop: 24}}>
                {MENU.map((menus) => {
                    return (
                        <View key={menus.id} style={{ backgroundColor: "#1c1c1e", width: 84, height: 58, borderRadius: 12, alignItems: 'center', justifyContent: "center" }}>
                            {menus.svg}
                            <Text style={{ color: "#0a84ff", fontSize: 12, paddingTop: 4 }}>{menus.title}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    svgContainer: {
        backgroundColor: "#8e8e93",
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
})