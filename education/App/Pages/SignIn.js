import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../Shared/Colors';
import { auth, logInWithEmailAndPassword } from '../Shared/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading] = useAuthState(auth);
    const handleSubmit = async () => {
        try {
            await logInWithEmailAndPassword(email, password)
            alert("success");
        } catch (err) {
            console.log('Error: ', err.message);
        }
    }
    useEffect(() => {
        if (user) navigation.navigate('Home');
    }, [user, navigation.navigate])
    return (
        <View style={styles.container}>
            <Image source={require('../Assets/Images/login.png')} />
            <View style={styles.containerLogin}>
                <Text style={styles.title}>Sign In</Text>
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
                    <Text style={styles.forgotButton} onPress={() => navigation.navigate('Reset')}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SignUpBtn} onPress={handleSubmit}>
                    <Text style={styles.SignInText}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.containerSignUp}>
                    <Text style={styles.askSignUp}>Don't have an account?</Text>
                    <TouchableOpacity style={styles.SignInBtn} onPress={handleSubmit}>
                        <Text style={styles.SignUpBtnText} onPress={() => navigation.navigate('SignUp')}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.white
    },
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
    SignInText: {
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