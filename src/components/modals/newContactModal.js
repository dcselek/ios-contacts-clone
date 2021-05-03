import React,{useState} from 'react';
import { StyleSheet, Text, View,Pressable,Modal } from 'react-native';
import NewContact from './newContact';

export default function NewContactModal() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{marginRight: 16}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={{alignItems: 'center'}}>
                        <NewContact setModalVisible={setModalVisible} modalVisible={modalVisible} />
                    </View>
                </View>
            </Modal>
            <Pressable
                onPress={() => setModalVisible(true)}
            >
                <Text style={{ color: '#0a84ff', fontSize: 28}}>+</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

})