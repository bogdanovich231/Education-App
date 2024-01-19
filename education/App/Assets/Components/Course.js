import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../../Shared/Api';
import Carousel from 'react-native-snap-carousel';
import Colors from '../../Shared/Colors';
import { useNavigation } from '@react-navigation/native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.55);

export default function Course({ type }) {
    const [course, setCourse] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        getCourse();
    }, []);

    const getCourse = async () => {
        try {
            const res = await Api.getCourse(type);

            if (res && res.data && res.data.data && Array.isArray(res.data.data)) {
                const result = res.data.data.map((item) => ({
                    id: item.id,
                    name: item.attributes.name,
                    description: item.attributes.description,
                    image: item.attributes.image?.data[0]?.attributes.url,
                    banner: item.attributes.Banner?.data[0]?.attributes.url,
                    informationcourse: item.attributes.informationcourse,
                }));
                setCourse(result);
            } else {
                console.error("Invalid or missing data in the API response:", res);
            }
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    const handleCourse = (course) => {
        console.log(course)
        navigation.navigate("Details-Course", { courseData: course });
    }
    const _renderItem = ({ item }) => {
        return <TouchableOpacity style={styles.containerCourse} onPress={() => handleCourse(item)} >
            <Image source={{ uri: item.image }} style={{ width: 230, height: 115, borderTopEndRadius: 10, borderTopLeftRadius: 10 }} />
            <View style={styles.containerInfo}>
                <Text style={styles.nameCourse}>{item.name}</Text>
                <Text style={styles.lessons}>{item.informationcourse?.length} Lessons</Text>
            </View>
        </TouchableOpacity>

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