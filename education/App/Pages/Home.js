import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
    return (
        <View>
            <Image source={require('../Assets/Images/login.png')} />
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Welcome to Courses Application!</Text>
                <View style={styles.containerButtons}>
                    <Text style={styles.buttons}>Sign In</Text>
                    <Text style={styles.buttons}>Sign Up</Text>
                </View>
                <TouchableOpacity style={styles.containerButtonGoogle} onPress={() => prompAsync()}>
                    <AntDesign name="google" size={24} color="white" />
                    <Text style={styles.buttonGoogle}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonGoogle: {
        fontSize: 25,
        color: Colors.white,
        marginLeft: 15,
    },
    containerButtonGoogle: {
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        flexDirection: 'row',
        marginRight: 40,
        marginLeft: 40,
        padding: 15,
        borderRadius: 20,
        marginTop: 25
    },
    buttons: {
        fontSize: 25,
        textAlign: 'center',
    },
    containerButtons: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 20,
        marginTop: 90
    },
    containerTitle: {
        paddingTop: 40,
        marginTop: -60,
        backgroundColor: Colors.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 20,
        paddingTop: 180,
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        marginRight: 20,
        marginLeft: 20
    },
});