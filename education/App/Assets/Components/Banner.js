import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'

export default function Banner() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../Images/banner.png')} resizeMode="cover" style={styles.image}>
                <Text style={styles.TextTitle}>Courses</Text>
                <Text style={styles.TextDescription}>Lorem lorem lorem Lorem lorem lorem</Text>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    TextDescription: {
        color: Colors.white,
        width: '40%'
    },
    TextTitle: {
        color: Colors.white,
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 60
    },
    image: {
        width: '100%',
        height: '100%',
        paddingLeft: 15,
        marginLeft: 8
    },
    container: {
        height: 200
    }
})