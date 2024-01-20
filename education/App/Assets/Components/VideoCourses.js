import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import Api from '../../Shared/Api';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.55);

export default function VideoCourses() {
    const [video, setVideo] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        getSlider();
    }, [])

    const getSlider = async () => {
        const result = (await Api.getVideo()).data;
        const data = result.data.map((item) => ({
            id: item.id,
            name: item.attributes.name,
            videoid: item.attributes.VideoId,
            image: item.attributes.image.data[0].attributes.url,
            banner: item.attributes.Banner.data[0].attributes.url,
            description: item.attributes.description,
            informationcourse: item.attributes.informationcourse,
        }))
        setVideo(data);
    }

    const handleCourse = (course) => {
        navigation.navigate("Details-Course", { courseData: course, courseType: 'video' });
    }
    const _renderItem = ({ item }) => {
        return <TouchableOpacity onPress={() => handleCourse(item)} style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={{ width: 230, height: 125, borderRadius: 10 }} />
        </TouchableOpacity>
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