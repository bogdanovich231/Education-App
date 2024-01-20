import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { EvilIcons, Feather } from '@expo/vector-icons';
import Colors from '../Shared/Colors';
import ProgressBar from '../Assets/Components/ProgressBar';
import { getUserData } from '../Shared/firebase';
import Api from '../Shared/Api';

export default function ContentTopic() {
    const route = useRoute().params;
    const [course, setCourse] = useState([]);
    const navigation = useNavigation();
    const [run, setRun] = useState(false);
    const [progress, setProgress] = useState(0);

    let courseRef;

    useEffect(() => {
        setProgress(0);
        setCourse(route.courseContent.content)
    }, [])

    const onClickNext = async (index) => {
        setRun(false);
        setProgress((index + 1) / course.length);
        try {
            courseRef.scrollToIndex({ animated: true, index: index + 1 });
            const userData = await getUserData();
            const data = {
                data: {
                    uid: userData.uid,
                    courseId: route.courseId,
                    courseContentId: typeof route.courseContent === 'object' ? route.courseContent.id : parseInt(route.courseContent),
                }
            }

            const response = await Api.setCourseProgress(data);
            console.log("LONG OUTPUT: ", response);
        } catch (e) {
            console.log(e)
            navigation.navigate({
                name: 'Details-Course',
                route: { courseContentId: route.courseContent.id },
                merge: true
            })
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                <EvilIcons name="arrow-left" size={40} color="black" />
            </TouchableOpacity>
            <ProgressBar progress={progress} />
            <FlatList
                data={course}
                horizontal={true}
                pagingEnabled
                ref={(ref) => {
                    courseRef = ref
                }}
                renderItem={({ item, index }) => (
                    <View style={styles.containerChapter}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 20, marginBottom: 20 }}>{item.name}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <ScrollView>
                            {item.input && item.output ?
                                <ScrollView>
                                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Input</Text>
                                    <View>
                                        <Text style={styles.input}>{item.input}</Text>
                                        <TouchableOpacity onPress={() => setRun(true)} style={styles.containerButton}>
                                            <Text style={{ color: Colors.white, fontSize: 20, paddingRight: 5 }}>Run Code</Text>
                                            <Feather name="play" size={24} color={Colors.white} />
                                        </TouchableOpacity>

                                    </View>
                                </ScrollView> : null}
                            {run ?
                                <View>
                                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 20 }}>Output</Text>
                                    <Text style={styles.input}>{item.output}</Text>
                                </View>
                                : null}
                        </ScrollView>
                        <TouchableOpacity style={styles.containerBtnNext} onPress={() => onClickNext(index)}>
                            <Text style={styles.btnNext}>Next</Text>
                        </TouchableOpacity>

                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    btnBack: {
        marginLeft: 15
    },
    input: {
        backgroundColor: 'black',
        color: Colors.white,
        marginVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20
    },
    description: {
        fontSize: 20
    },
    btnNext: {
        textAlign: 'center',
        fontSize: 20,
        color: Colors.white
    },
    containerBtnNext: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.primary,
        width: '100%',
        padding: 10,
        borderRadius: 10,
    },
    containerButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 10,
        width: 115,
        borderRadius: 10,
        marginTop: 20
    },
    containerChapter: {
        width: Dimensions.get('screen').width * 0.90,
        height: Dimensions.get('screen').height * 0.85,
        marginRight: 15,
        marginLeft: 25
    },
    container: {
        paddingTop: 50,
        height: '100%',
        backgroundColor: "linear-gradient(180deg, rgba(64, 208, 248, 0.08) 1.13%, rgba(64, 208, 248, 0.00) 97.19%);"
    }
})