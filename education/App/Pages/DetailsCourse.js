import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';
import ContentCourse from '../Assets/Components/ContentCourse';
import { useNavigation } from '@react-navigation/native';

export default function DetailsCourse() {
    const route = useRoute().params;
    const [course, setCourse] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        setCourse(route.courseData)
    }, [])
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 50, marginLeft: 15, marginRight: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <EvilIcons name="arrow-left" size={40} color="black" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.nameText} >{course.name}</Text>
                    <Image source={{ uri: course.banner }} style={{ height: 200, borderRadius: 15, }} />
                    <Text style={styles.titleText}>Course Description:</Text>
                    <Text style={styles.descriptionText}>{course.description}</Text>
                </View>
            </View>
            <ContentCourse course={course} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "linear-gradient(180deg, rgba(64, 208, 248, 0.08) 1.13%, rgba(64, 208, 248, 0.00) 97.19%);"
    },
    descriptionText: {
        fontSize: 20,
        marginTop: 10
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    nameText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20
    }
})