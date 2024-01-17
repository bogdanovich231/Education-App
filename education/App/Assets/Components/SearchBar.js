import { EvilIcons } from '@expo/vector-icons';
import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors';

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.Input} placeholder='Search...' />
            <EvilIcons name="search" size={30} color="grey" />
        </View>
    )
}
const styles = StyleSheet.create({
    Input: {
        fontSize: 20
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.white,
        shadowColor: '#BEC5C8',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        height: 51,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 15,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 33,

    }
})