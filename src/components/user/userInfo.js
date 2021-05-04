import React from 'react'
import {View,Text} from 'react-native'
import { useSelector } from 'react-redux'

export default function UserInfo() {

    const { info } = useSelector((state) => state.userInfo);

    console.log(info[0].payload.isim)

    return(
        <View style={{flex: 1}}>
            <Text style={{color: "white"}} >{info[0].payload.isim+ " " + info[0].payload.soyisim}</Text>
        </View>
    )
}