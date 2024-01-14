import { View, Text, Button, Dimensions, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default function VideoCourses() {
    const [, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);
    const data = [
        { id: 1, video: "ZbX4Ok9YX94", name: "react" },
        { id: 1, video: "EGW2HS2tqAQ", name: "next" },
        { id: 1, video: "yXSdYD_JHN4", name: "react_native" },
        { id: 1, video: "JaIA1k4FLG8", name: "vue" },
        { id: 1, video: "Zs-W12TpAeM", name: "react_native" },
    ];
    const _renderItem = ({ item, index }) => {
        return <View style={styles.itemContainer}><YoutubePlayer height={300} width={300} videoId={item.video} onChangeState={onStateChange} /></View>
    };

    return (
        <View style={styles.container}>
            <Text style={styles.TextTitle}>Video Course</Text>
            <Carousel
                data={data}
                renderItem={_renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                containerCustomStyle={styles.carouselContainer}
                inactiveSlideShift={0}
                useScrollView={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 26,
        marginLeft: 20
    },
    TextTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    carouselContainer: {
        marginTop: 15
    },
    itemContainer: {
        alignItems: 'center',
        marginLeft: -110
    },
});