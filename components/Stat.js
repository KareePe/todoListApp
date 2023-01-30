import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { theme } from "../core/theme";

export default Stat = () => {

    const fn_longPress = () => {
        Alert.alert('Alert Title', 'My Alert Msg', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onLongPress={() => fn_longPress()} style={[styles.box, styles.box1]}>
                <Text style={[styles.textHead,{color:'#fff'}]}>งานเสร็จ</Text>
                <Text style={[styles.textCount,{color:'#fff'}]}>12</Text>
            </TouchableOpacity>
            <TouchableOpacity onLongPress={() => fn_longPress()} style={[styles.box, { backgroundColor: '#eaecf0', }]}>
                <Text style={[styles.textHead,{color:theme.colors.text}]}>งานค้าง</Text>
                <Text style={[styles.textCount,{color:theme.colors.text}]}>124</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15,
    },
    box: {
        width: '48%',
        height: 250,
        backgroundColor: '#000',
        borderRadius: 25,
        padding: 15,
        position:'relative',
    },
    box1: {
        backgroundColor: theme.colors.primary,
        shadowColor: theme.colors.secondary,
        shadowOpacity: 1,
        elevation: 10,
        shadowRadius: 5,
        shadowOffset: { width: 2, height: 5 }
    },
    textHead:{
        fontFamily: 'Kanit-Bold',
        fontSize:20,
    },
    textCount:{
        fontFamily: 'Kanit-Bold',
        fontSize:45,
        position:'absolute',
        bottom:15,
        left:20,
    },
})