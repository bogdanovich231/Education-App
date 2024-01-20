import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../Shared/Colors'
import { auth } from '../Shared/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { sendPasswordResetEmail } from 'firebase/auth';

export default function Reset() {
    const [email, setEmail] = useState('');
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        if (loading) return;
    }, [user, loading]);
    return (
        <View style={styles.container}>
            <Image source={require('../Assets/Images/login.png')} />
            <View style={styles.containerReset}>
                <Text style={styles.title}>Reset Password</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        value={email}
                        placeholder="Email"
                        onChangeText={(value) => setEmail(value)}
                    />
                </View>
                <TouchableOpacity style={styles.ResetBtn} onPress={() => sendPasswordResetEmail(auth, email)}>
                    <Text style={styles.ResetText}>Sent password reset email</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ResetText: {
        fontSize: 20,
        color: Colors.white
    },
    ResetBtn:
    {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: Colors.primary,

    },
    title: {
        fontSize: 30,
    },
    containerReset: {
        marginTop: -60,
        backgroundColor: Colors.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 20,
        paddingTop: 50,
        display: 'flex',
        alignItems: 'center'
    },
    container: {
        height: '100%',
        backgroundColor: Colors.white
    },
    inputView: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 30,
        display: 'flex',
        gap: 20,
        width: "80%",
        marginTop: 20,
    },

    TextInput: {
        height: 50,
        padding: 10,
        marginLeft: 20,
        fontSize: 20
    }
})