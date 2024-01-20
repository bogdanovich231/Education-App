import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.92);

export default function ContentTopicVideo() {
    const [, setPlaying] = useState(false);
    const navigation = useNavigation();
    const route = useRoute().params;
    const [videoTopic, setVideoTopic] = useState([])
    useEffect(() => {
        setVideoTopic(route.courseContent)
    })
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                <EvilIcons name="arrow-left" size={40} color="black" />
            </TouchableOpacity>
            {videoTopic ?
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 20, marginBottom: 20 }}>{videoTopic.title}</Text>
                : null}

            <View>
                <YoutubePlayer height={230} width={ITEM_WIDTH} videoId={videoTopic.videoId} onChangeState={onStateChange} />
            </View>
            <View>
                <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 15, marginBottom: 15 }}>Description: </Text>
                <Text style={styles.description}>{videoTopic.description}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    description: {
        fontSize: 20,
        marginBottom: 20
    },
    container: {
        height: '100%',
        backgroundColor: "linear-gradient(180deg, rgba(64, 208, 248, 0.08) 1.13%, rgba(64, 208, 248, 0.00) 97.19%);",
        paddingTop: 50,
        paddingLeft: 15,
        paddingRight: 15
    }
})