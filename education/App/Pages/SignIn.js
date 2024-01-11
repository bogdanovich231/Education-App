import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Shared/Colors';
import { auth } from '../Shared/firebase';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        if (email && password) {
            try {
                await logInWithEmailAndPassword(auth, email, password)
            } catch (err) {
                console.log('Error: ', err.message);
            }
        }
    }
    return (
        <View>
            <Image source={require('../Assets/Images/login.png')} />
            <View style={styles.containerLogin}>
                <Text style={styles.title}>Sign Up</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        value={email}
                        placeholder="Email"
                        onChangeText={(value) => setEmail(value)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        value={password}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(value) => setPassword(value)}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotButton}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SignUpBtn} onPress={handleSubmit}>
                    <Text style={styles.SignUpText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.containerSignUp}>
                    <Text style={styles.askSignUp}>Registered</Text>
                    <TouchableOpacity style={styles.SignInBtn} onPress={handleSubmit}>
                        <Text style={styles.SignUpBtnText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    SignUpBtnText: {
        fontSize: 20,
        color: Colors.primary,
    },
    askSignUp: {
        fontSize: 20,
    },
    containerSignUp: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 5,
        marginTop: 20,
    },
    forgotButton: {
        fontSize: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 30
    },
    containerLogin: {
        marginTop: -60,
        backgroundColor: Colors.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 20,
        paddingTop: 50,
        display: 'flex',
        alignItems: 'center'
    },
    SignUpText: {
        fontSize: 20,
        color: Colors.white
    },
    SignUpBtn:
    {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: Colors.primary,

    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
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