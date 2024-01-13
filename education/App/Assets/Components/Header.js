import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Header() {
    return (
        <View>
            <View style={styles.container}>
                <Text>Hello,</Text>
                <Text>Tanya</Text>
            </View>
            {/* <Image sourse={require('../Assets/Images/user.png')}></Image> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 100
    }
})