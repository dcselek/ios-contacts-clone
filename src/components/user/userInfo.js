import React from 'react'
import {View,Text} from 'react-native'
import { useSelector } from 'react-redux'

export default function UserInfo() {

    const { info } = useSelector((state) => state.userInfo);

    return(
        <View style={{flex: 1}}>
            <Text style={{color: "white"}} >{info[0].isim+ " " + info[0].soyisim}</Text>
        </View>
    )
}