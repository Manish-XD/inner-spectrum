import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import meet from '../../assets/logo/meet.jpeg';
import music from '../../assets/logo/music.jpg';
import write from '../../assets/logo/write.jpeg';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Colors } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';

const Card = ({ title, desc, img, id }) => {
    const navigation = useNavigation();
    const route = useRoute();
    function handleClick(id, desc)
    {
        console.log(id);
        if(id===1)
        {
            navigation.navigate('MeetScreen', {title: 'Meet with People', desc: desc});
        }
        else if(id===2)
        {
            navigation.navigate('MusicScreen', {title: 'Listen Music', desc: desc});
        }
        else
        {
            navigation.navigate('JobScreen', {title: 'Get a job', desc: desc});
        }
    }
    return (
            <View style={[styles.container, {backgroundColor: id===2? '#86C993' : '#CEEFFF'}]}>
                <View style={styles.opacity}></View>
                <Text style={styles.head}>{title}</Text>
                <Image source={id===1?meet:id===2?music:write} style={styles.image}/>
                <View style={styles.innerContainer}>
                    <Text style={styles.desc}>{desc.slice(0, 50)}...</Text>
                    <Pressable onPress={()=>handleClick(id, desc)} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
                        <Text>View more</Text>
                    <MaterialIcons name="navigate-next" size={16} color="black" />
                        </Pressable>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        height: 300,
        width: 200,
        position: 'relative',
        margin: 16,
        overflow: 'hidden'
    },
    opacity: {
        opacity: 0.8,
        height: 40,
        backgroundColor: '#000000',
        // position: 'absolute',
        top: 0,
        left: 0,
        marginBottom: -32
    },
    head: {
        color: '#ffffff',
        position: 'absolute',
        fontWeight: 'bold',
        marginTop: 10,
        marginHorizontal: 8,
        fontSize: 16
    },
    image: {
        borderRadius: 15,
        height: '60%',
        width: '100%',
        zIndex: -1,
        marginTop: -8
    },
    innerContainer: {
        marginTop: 16,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    desc: {
        textAlign: 'center'
    },
    button: {
        marginTop: 8,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 99,
        borderWidth: 0.5,
        borderColor: Colors.violetBg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pressed: {
        backgroundColor: '#6A6A6A',
    }
});

export default Card