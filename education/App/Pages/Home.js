import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Assets/Components/Header'
import SearchBar from '../Assets/Components/SearchBar'
import Banner from '../Assets/Components/Banner'
import VideoCourses from '../Assets/Components/VideoCourses'
import Course from '../Assets/Components/Course'

export default function Home() {

    return (
        <ScrollView style={styles.container}>
            <Header />
            <SearchBar />
            <Banner />
            <VideoCourses />
            <Course type={'basic'} />
            <Course type={'advance'} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "linear-gradient(180deg, rgba(64, 208, 248, 0.08) 1.13%, rgba(64, 208, 248, 0.00) 97.19%);"
    }
})