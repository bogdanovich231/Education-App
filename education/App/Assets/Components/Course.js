import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../../Shared/Api';
import Carousel from 'react-native-snap-carousel';
import Colors from '../../Shared/Colors';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.55);

export default function Course({ type }) {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        getCourse();
    }, []);

    const getCourse = async () => {
        const res = (await Api.getCourse(type)).data;
        const result = res.data.map((item) => ({
            id: item.id,
            name: item.attributes.name,
            description: item.attributes.description,
            image: item.attributes.image.data[0].attributes.url,
            informationCourse: item.attributes.informationcourse,
        }))
        setCourse(result);
    }

    const _renderItem = ({ item }) => {
        return <View style={styles.containerCourse} >
            <Image source={{ uri: item.image }} style={{ width: 230, height: 115, borderTopEndRadius: 10, borderTopLeftRadius: 10 }} />
            <View style={styles.containerInfo}>
                <Text style={styles.nameCourse}>{item.name}</Text>
                <Text style={styles.lessons}>{item.informationCourse?.length} Lessons</Text>
            </View>
        </View>

    };
    return (
        <View style={styles.container} >
            <Text style={styles.titleCourse}>Course {type}</Text>
            <Carousel
                data={course}
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
    containerInfo: {
        marginLeft: 10,
        marginBottom: 10
    },
    titleCourse: {
        marginLeft: 20,
        marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    nameCourse: {
        fontSize: 17,
        marginTop: 10
    },
    lessons: {
        color: Colors.grey,
        fontSize: 15
    },
    container: {
        marginTop: 26,
    },
    containerCourse: {
        backgroundColor: Colors.white,
        width: 230,
        marginLeft: -70,
        borderRadius: 10,
        borderTopEndRadius: 15,
        borderTopLeftRadius: 10
    },
    carouselContainer: {}
})