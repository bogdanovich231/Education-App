import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
// import YoutubePlayer from 'react-native-youtube-iframe';
import Carousel from 'react-native-snap-carousel';
import Api from '../../Shared/Api';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.55);

export default function VideoCourses() {
    const [, setPlaying] = useState(false);
    const [video, setVideo] = useState([]);

    useEffect(() => {
        getSlider();
    }, [])

    const getSlider = async () => {
        const result = (await Api.getVideo()).data;
        const data = result.data.map((item) => ({
            id: item.id,
            videoid: item.attributes.VideoId,
            image: item.attributes.image.data[0].attributes.url,
        }))
        setVideo(data);
    }

    // const onStateChange = useCallback((state) => {
    //     if (state === "ended") {
    //         setPlaying(false);
    //         Alert.alert("video has finished playing!");
    //     }
    // }, []);

    const _renderItem = ({ item }) => {
        return <View style={styles.itemContainer}>
            {/* <YoutubePlayer width={225} height={115} videoId={item.videoid} onChangeState={onStateChange} /> */}
            <Image source={{ uri: item.image }} style={{ width: 230, height: 125, borderRadius: 10 }} />
        </View>
    };

    return (
        <View style={styles.container}>
            <Text style={styles.TextTitle}>Video Course</Text>
            <Carousel
                data={video}
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
        marginLeft: 20,
    },
    TextTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    carouselContainer: {
        marginTop: 15,
    },
    itemContainer: {
        alignItems: 'center',
        marginLeft: -185
    },
});