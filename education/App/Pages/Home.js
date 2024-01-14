import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Assets/Components/Header'
import SearchBar from '../Assets/Components/SearchBar'
import Banner from '../Assets/Components/Banner'
import VideoCourses from '../Assets/Components/VideoCourses'

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <SearchBar />
            <Banner />
            <VideoCourses />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "linear-gradient(180deg, rgba(64, 208, 248, 0.08) 1.13%, rgba(64, 208, 248, 0.00) 97.19%);"
    }
})