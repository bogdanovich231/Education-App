import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../Shared/firebase'

export default function LogOut() {
    const handleLogout = async () => {
        await signOut(auth);
    }
    return (
        <View>
            <TouchableOpacity style={styles.LogOutBtn} onPress={handleLogout}>
                <Text style={styles.LogOutText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    LogOutBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: Colors.primary,
    },
    LogOutText: {
        fontSize: 20,
        color: Colors.white
    }
})