import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, ScrollView } from 'react-native'
import SvgAvatarPerson1 from '../icons/AvatarPerson1'
import { MessageCircle, Phone, Video, Mail } from '../icons/index'
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
        id: "Mail",
        title: "mail",
        svg: <Mail fill="#0a84ff" stroke="#097bed" width={20} height={20} />
    }
]


export default function UserInfo() {

    const { info } = useSelector((state) => state.userInfo);


    return (
        <View style={{ paddingHorizontal: 8 }}>
            {/* Upper Section */}
            <View style={{ alignItems: "center" }}>
                <View style={styles.svgContainer}>
                    <Text style={{ color: "white", fontSize: 40 }}>{info[0].payload.isim.substring(0, 1).toUpperCase() + info[0].payload.soyisim.substring(0, 1).toUpperCase()}</Text>
                </View>
                <Text style={{ color: "white", fontSize: 24, paddingTop: 12 }}>{info[0].payload.isim + " " + info[0].payload.soyisim}</Text>
            </View>
            {/* Menus */}
            <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingTop: 24 }}>
                {MENU.map((menus) => {
                    return (
                        <View key={menus.id} style={{ backgroundColor: "#1c1c1e", width: 84, height: 58, borderRadius: 12, alignItems: 'center', justifyContent: "center" }}>
                            {menus.svg}
                            <Text style={{ color: "#0a84ff", fontSize: 12, paddingTop: 4 }}>{menus.title}</Text>
                        </View>
                    )
                })}
            </View>
            {/* Info Sections */}
            <ScrollView bounces={false} indicatorStyle='white' keyboardDismissMode='on-drag'>
                <View style={{ marginTop: 12 }}>
                    <View style={{ backgroundColor: "#1c1c1e", borderRadius: 8, height: 68, justifyContent: "center" }}>
                        <Text style={{ color: "white", marginBottom: 8, paddingLeft: 16, }}>phone</Text>
                        <Text style={{ color: "#0a84ff", paddingLeft: 16, fontSize: 16 }}>{info[0].payload.phone}</Text>
                    </View>
                    <View style={{ backgroundColor: "#1c1c1e", minHeight: 104, borderRadius: 8, marginTop: 12 }}>
                        <Text style={{ color: "white", paddingLeft: 16, paddingTop: 12 }}>Notes</Text>
                        <TextInput style={{ paddingHorizontal: 16, paddingTop: 4, paddingBottom: 16, fontSize: 20 }} color="white" multiline editable />
                    </View>
                    <View style={styles.sectionBtnContainer}>
                        <TouchableHighlight onPress={() => null} underlayColor='#3a3a3c' style={styles.touchBorder}>
                            <Text style={styles.sectionBtn}>Send Message</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='#3a3a3c' style={styles.touchBorder}>
                            <Text style={styles.sectionBtn}>Share Contact</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='#3a3a3c'>
                            <Text style={styles.sectionBtn}>Add to Favorites</Text>
                        </TouchableHighlight>
                    </View>
                    <View style= {styles.sectionBtnContainer}>
                        <TouchableHighlight onPress={() => null} underlayColor='#3a3a3c' style={styles.touchBorder}>
                            <Text style={styles.sectionBtn}>Add to Emergency Contacts</Text>
                        </TouchableHighlight>
                    </View>
                    <View style= {styles.sectionBtnContainer}>
                        <TouchableHighlight onPress={() => null} underlayColor='#3a3a3c' style={styles.touchBorder}>
                            <Text style={styles.sectionBtn}>Share My Location</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
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
    },
    sectionBtnContainer: {
        backgroundColor: "#1c1c1e",
        borderRadius: 8,
        marginTop: 12,
        paddingHorizontal: 16
    },
    sectionBtn: {
        color: "#0a84ff",
        paddingVertical: 12,
        fontSize: 16,
    },
    touchBorder: {
        borderBottomWidth: 0.3,
        borderBottomColor: "#3a3a3c"
    }
})