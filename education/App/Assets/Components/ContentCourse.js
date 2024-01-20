import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Feather } from '@expo/vector-icons';
import Colors from '../../Shared/Colors';
import { useNavigation } from '@react-navigation/native';

export default function ContentCourse({ course, userProgress, courseType }) {
    const navigation = useNavigation();
    useEffect(() => {
        console.log('userProgress', userProgress)
    }, []);

    const checkUserProgress = (contentId) => {
        return userProgress.find(item => item.courseContentId == contentId)
    }
    const onTopicPress = (courseContent) => {
        if (courseType == "text") {
            navigation.navigate('ContentTopic',
                {
                    courseContent: courseContent,
                    courseId: course.id
                })
        } else {
            navigation.navigate('Video',
                {
                    courseContent: courseContent,
                    courseId: course.id
                })
        }

    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Key Topics</Text>
            <FlatList
                data={course?.informationcourse}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => onTopicPress(item)} style={styles.containerTopic}>
                        {checkUserProgress(item.id) ?
                            <Feather name="check-circle" size={30} color="#04DB40" />
                            :
                            <Text style={styles.count}>0{index + 1}</Text>
                        }
                        <Text style={styles.title}>{item.title}</Text>
                        <Feather name="play" size={25} color={Colors.primary} style={{ position: 'absolute', right: 15 }} />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontWeight: 'bold',

    },
    count: {
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.grey
    },
    containerTopic: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        backgroundColor: Colors.white,
        marginTop: 15,
        borderRadius: 5,
        marginRight: 15,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#BEC5C8',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    container: {
        marginTop: 20,
        marginLeft: 15

    }
})
