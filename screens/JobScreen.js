import { Text, Image, StyleSheet, View, Pressable } from "react-native";
import { Colors } from "../constants/styles";
import { LinearGradient } from "expo-linear-gradient";
import jobActivity from '../assets/logo/jobActivity.jpeg';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const JobScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable style={({ pressed }) => [styles.backButton, pressed && styles.backPressed]} onPress={() => {
        navigation.goBack()}}>
                <View style={styles.backContainer}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                    <Text style={styles.backText}>Back</Text>
                </View>
            </Pressable>
            <Image source={jobActivity} style={styles.img} />
            <LinearGradient style={styles.gradient} colors={[`${Colors.grad1}`, `${Colors.grad2}`]}>
                <Text style={styles.subhead}>Accept Challenge</Text>
                <Text style={styles.head}>{route.params.title}</Text>
                <Text style={styles.desc}>{route.params.desc}</Text>
                <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
                    <View style={styles.btnContainer}>
                        <Text style={styles.buttonTxt}>Mark as done</Text>
                        <Ionicons name="checkmark-done-outline" size={24} color="black" />
                    </View>
                </Pressable>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
    },
    img: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '40%',
        width: '100%',
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200
    },
    gradient: {
        flex: 1,
        zIndex: -1,
        alignItems: 'center',
        paddingTop: 420,
        paddingHorizontal: 32
    },
    subhead: {
        color: Colors.white,
        fontSize: 20
    },
    head: {
        marginVertical: 25,
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 30,
        textShadowColor: Colors.white,
        textShadowRadius: 5
    },
    desc: {
        color: Colors.white,
        fontSize: 15,
        letterSpacing: 1,
        textAlign: 'center',
    },
    button: {
        backgroundColor: Colors.white,
        borderWidth: 3,
        borderColor: Colors.violetBg,
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderRadius: 999,
        marginTop: 40
    },
    pressed: {
        opacity: 0.7,
        backgroundColor: 'green'
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonTxt: {
        marginRight: 8
    },
    backButton: {
        zIndex: 99,
        position: 'absolute',
        left: 32,
        top: 64
    },
    backPressed: {
        opacity: 0.7
    },
    backContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default JobScreen