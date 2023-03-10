import React, { useState } from "react";
import { Button, Text, TextInput } from 'react-native-paper';
import { Modal, StyleSheet, View, ScrollView, SafeAreaView, Alert, TouchableWithoutFeedback } from "react-native";
import { theme } from "../core/theme";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
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
        setText('')
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
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
        console.log(selectedDate)
        console.log(topic.value, 'TOPIC')
    }

    return (
        <View>
            <Modal
                visible={modalVisible}
                onDismiss={hideModal}
                onRequestClose={hideModal}
                contentContainerStyle={containerStyle}
                presentationStyle='pageSheet'
                animationType='slide'
            >
                <SafeAreaView>
                    {/* <View style={{ flex: 1 }}>
                        <TouchableWithoutFeedback
                            onPressOut={(e) => {
                                if (e.nativeEvent.locationY > 50) {
                                    setModalVisible(false)
                                }
                            }}
                        >
                            <View>
                                <AntDesign name="ellipsis1" size={24} color="black" />
                            </View>
                        </TouchableWithoutFeedback>
                    </View> */}


                    <Button onPress={hideModal} style={styles.buttonCloseModal}>
                        <View style={styles.btnModalClose}></View>
                    </Button>


                    <View style={styles.modalWrap}>
                        <Text variant="headlineMedium" style={styles.text}>???????????????????????????</Text>
                        <ScrollView>
                            <DatePicker
                                options={{
                                    backgroundColor: '#fbfafd',
                                    textHeaderColor: '#444c62',
                                    textDefaultColor: '#444c62',
                                    selectedTextColor: '#fff',
                                    mainColor: theme.colors.primary,
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
                                label="???????????????????????????"
                                outlineColor="#f3f3f8"
                                textColor={theme.colors.text}
                                placeholder="????????????????????????????????????????????????????????????"
                                value={topic.value}
                                onChangeText={(text) => setText({ value: text, error: '' })}
                                style={styles.input}
                                returnKeyType="next"
                                error={error}
                            />
                            <TextInput
                                mode="outlined"
                                label="??????????????????????????????"
                                outlineColor="#f3f3f8"
                                textColor={theme.colors.text}
                                multiline
                                placeholder="????????????????????????????????????????????????????????????"
                                value={topic.value}
                                onChangeText={(text) => setText({ value: text, error: '' })}
                                style={[{ height: 50 }, styles.input]}
                                returnKeyType="next"
                                error={error}
                            />

                            <Button
                                onPress={fn_setValue}
                                mode="contained"
                                loading={loading}
                                style={styles.btnSubmit}
                            >
                                <Text style={styles.btnText}>???????????????????????????</Text>
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
        borderRadius: 25,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: theme.colors.primary,
        shadowOpacity: 1,
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
        height: 40,
        right: 0,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnModalClose:{
        width:50,
        height:5,
        backgroundColor:'#000',
        borderRadius:50
    },
    text: {
        fontFamily: 'Kanit-Regular'
    },
    input: {
        marginTop: 20,
        borderColor: '#f3f3f8',
        backgroundColor: '#fff',
        fontFamily: 'Kanit-Regular'
    },
    btnSubmit: {
        width: '100%',
        height: 50,
        backgroundColor: theme.colors.primary,
        color: '#fff',
        borderRadius: 15,
        marginVertical: 10,
        paddingVertical: 2,
        borderColor: '#fff',
        marginTop: 20

    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 26,
        fontFamily: 'Kanit-Regular'
    },
})