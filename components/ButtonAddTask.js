import React, { useState } from "react";
import { Button, Text, TextInput } from 'react-native-paper';
import { Modal, StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from 'react-native-modern-datepicker';
import 'moment';
import 'moment/locale/th';  // language must match config
import moment from 'moment';

export default ButtonAddTask = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const showModal = () => setModalVisible(true)
    const hideModal = () => {
        setLoading(false)
        setModalVisible(false)
    }
    const containerStyle = { backgroundColor: 'white', padding: 20 }

    const [selectedDate, setSelectedDate] = useState('');

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [topic, setText] = useState({ value: '', error: '' })

    // const fn_dateSelected = (date) => {
    //     console.log(setSelectedDate(date))
    // }

    const fn_setValue = () => {
        setLoading(true)

        if (topic.value === '') {
            setError(true)
        }
        console.log(selectedDate)
        console.log(topic.value, 'TOPIC')
    }

    return (
        <View>
            <Modal
                visible={modalVisible}
                onDismiss={hideModal}
                contentContainerStyle={containerStyle}
                presentationStyle='pageSheet'
                animationType='slide'
            >
                <SafeAreaView>

                    <Button onPress={hideModal} style={styles.buttonCloseModal}>
                        <View style={styles.btnModalClose}>
                            <Ionicons name="ios-close" size={24} color="#444c62" />
                        </View>
                    </Button>


                    <View style={styles.modalWrap}>

                        <Text variant="headlineMedium" style={styles.text}>บันทึกงาน</Text>
                        <ScrollView>
                            <DatePicker
                                options={{
                                    backgroundColor: '#fbfafd',
                                    textHeaderColor: '#444c62',
                                    textDefaultColor: '#444c62',
                                    selectedTextColor: '#fff',
                                    mainColor: '#717ffe',
                                    textSecondaryColor: '#444c62',
                                    borderColor: 'rgba(122, 146, 165, 0.1)',
                                }}
                                current={moment().format('YYYY-MM-DD')}
                                selected={moment().format('YYYY-MM-DD')}
                                minimumDate={moment().format('YYYY-MM-DD')}
                                mode="calendar"
                                minuteInterval={30}
                                style={{ borderRadius: 5 }}
                                onSelectedChange={date => setSelectedDate(date)}
                            />
                            <TextInput
                                mode="outlined"
                                label="หัวข้องาน"

                                placeholder="กรอกหัวข้องานที่จะทำ"
                                value={topic.value}
                                onChangeText={(text) => setText({ value: text, error: '' })}
                                style={styles.input}
                                returnKeyType="next"
                                error={error}
                            />
                            <TextInput
                                mode="outlined"
                                label="หัวข้องาน"
                                multiline
                                placeholder="กรอกหัวข้องานที่จะทำ"
                                value={topic.value}
                                onChangeText={(text) => setText({ value: text, error: '' })}
                                style={[{ height: 150 }, styles.input]}
                                returnKeyType="next"
                                error={error}
                            />

                            <Button
                                onPress={fn_setValue}
                                mode="outlined"
                                loading={loading}
                                style={styles.btnSubmit}
                            >
                                <Text style={styles.btnText}>บันทึกงาน</Text>
                            </Button>
                        </ScrollView>
                    </View>

                </SafeAreaView>

            </Modal>

            <Button onPress={showModal} style={styles.buttonAdd}>
                <View style={styles.button}>
                    <Feather name="plus" size={24} color="#fff" />
                </View>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonAdd: {
        position: 'absolute',
        right: -10,
        bottom: 5
    },
    button: {
        height: 70,
        width: 70,
        borderRadius: 5,
        backgroundColor: '#717ffe',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#717ffe',
        shadowOpacity: 0.5,
        elevation: 10,
        shadowRadius: 5,
        shadowOffset: { width: 2, height: 5 },
    },
    modalWrap: {
        paddingTop: 0,
        padding: 20,
    },
    buttonCloseModal: {
        width: '100%',
        height: 50,
        right: 0,
        zIndex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    text: {
        fontFamily: 'Kanit-Regular'
    },
    input: {
        marginTop: 20
    },
    btnSubmit: {
        width: '100%',
        height: 50,
        backgroundColor: '#717ffe',
        color: '#fff',
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 2,
        
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 26,
        fontFamily: 'Kanit-Regular'
    },
})