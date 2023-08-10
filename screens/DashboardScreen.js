import { Text, StyleSheet, View, Image, FlatList, Pressable } from "react-native";
import { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import phoneAddiction from '../assets/logo/phoneAddiction.jpg';
import { Colors } from "../constants/styles";
import { LinearGradient } from 'expo-linear-gradient';
import {ActivityContext} from "../store/activity-context";
import Card from "../components/ui/Card";
import { QuizContext } from "../store/quiz-context";
import BottomBar from "../components/ui/BottomBar";

const meet = [{
    title: 'Meet with People',
    img: '/assets/logo/meet.jpeg',
    desc: 'Meeting new people can reduce isolation, boost self-esteem, mindfulness and a more positive outlook.',
    id: 1
}];
const music = [{
    title: 'Listen to music',
    img: '/assets/logo/music.jpg',
    desc: 'Listening to music can provide an avenue for emotional expression and release, offering a sense of comfort and relaxation,facilitating a sense of connection by resonating with emotions, memories, or experiences conveyed in the music.',
    id: 2
}];
const job = [{
    title: 'Get a job',
    img: '/assets/logo/write.jpeg',
    desc: 'Getting a job can help you in diverting your attention from negative thoughts, reducing rumination, and preventing feelings of boredom or stagnation. It fosters a sense of accomplishment and purpose, enhancing self-esteem and confidence.',
    id: 3
}];
function renderActivities(itemData)
{
    return (
        <Card title={itemData.item.title} img={itemData.item.title} desc={itemData.item.desc} id={itemData.item.id}/>
    )
}
const DashboardScreen = () => {
    const [answers, setAnswers] = useState([]);
    const quizCtx = useContext(QuizContext);
    useEffect(() => {
        async function getAnswers() {
            const ans = await AsyncStorage.getItem('quiz');
            console.log(ans);
            if(ans[0]==0 || ans[1]==1)
            {
                setAnswers([...meet]);
                if(ans[1]==0 || ans[1]==1)
                {
                    setAnswers([...meet, ...music]);
                    if(ans[2]==0 || ans[2]==1)
                    {
                        setAnswers([...meet, ...music, ...job]);
                    }
                }
            }
            if(ans[1]==0 || ans[1]==1)
            {
                setAnswers([...meet, ...music]);
                if(ans[2]==0 || ans[2]==1)
                {
                    setAnswers([...meet, ...music, ...job]);
                }
            }
            if(ans[2]==0 || ans[2]==1)
            {
                setAnswers([...meet, ...music, ...job]);
            }
        }
        getAnswers();
    }, [])
    return (
        answers && <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header_info}>
                        <Text style={styles.heading}>Hi, User</Text>
                        <Text style={styles.subheading}>We will help you, to improve your mental health</Text>
                    </View>
                    <Image source={phoneAddiction} style={styles.img} />
                </View>
                <LinearGradient style={styles.gradient} colors={[`${Colors.grad1}`, `${Colors.grad2}`]}>
                    <Text style={[styles.heading, {fontSize: 25, fontWeight: '400'}]}>Challenges</Text>
                    <Text style={[styles.subheading]}>Choose any of the following Challenge!</Text>
                    <FlatList data={answers} keyExtractor={(item)=>item.id} renderItem={renderActivities} horizontal showsHorizontalScrollIndicator={false}/>
                    {/* <Pressable onPress={()=>{quizCtx.deleteQuiz()}}><Text>Clear</Text></Pressable> */}
                    <BottomBar isDashboard/>
                </LinearGradient>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#19143d',
        position: 'relative'
    },
    img: {
        height: 250,
        width: 250,
        position: 'absolute',
        right: 40,
        top: -50,
        zIndex: -1
    },
    header: {
        flexDirection: 'row',
        marginTop: 128,
        width: '100%',
        justifyContent: 'space-between',
        marginHorizontal: 32,
        position: 'relative'
    },
    header_info: {
        width: '45%'
    },
    heading: {
        color: Colors.white,
        textShadowColor: Colors.white,
        textShadowRadius: 5,
        fontWeight: 'bold',
        fontSize: 40
    },
    subheading: {
        color: Colors.white,
        marginTop: 8
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 32,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingBottom: 150
    }
})

export default DashboardScreen