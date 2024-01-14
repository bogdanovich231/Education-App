import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Header() {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.HelloText}>Hello,</Text>
                <Text style={styles.NameText}>kulinkovich56@gmail.com</Text>
            </View>
            <Image style={styles.ImageUser} source={require('../Images/user.png')} />
        </View>
    )
}
const styles = StyleSheet.create({
    HelloText: {
        fontSize: 20
    },
    NameText: {
        fontSize: 15,
        fontWeight: 'bold'

    },
    ImageUser: {
        width: 50,
        height: 50
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 22
    }
})