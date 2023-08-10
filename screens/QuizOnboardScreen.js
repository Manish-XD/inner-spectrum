import { Text, Image, View, StyleSheet, Pressable } from "react-native";
import logo from '../assets/logo/inner_spectrum.png';
import { Colors } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";

const QuizOnboardScreen = () => {
    const navigation = useNavigation();
    function handlePress()
    {
        navigation.navigate('QuesOneScreen');
    }
  return (
    <View style={styles.container}>
    <Image source={logo} style={styles.image}/>
    <Text style={styles.text}>Take a small quiz to let us know you more...</Text>
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={handlePress}>
        <View>
            <Text style={styles.buttonText}>Start</Text>
        </View>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteBg,
        paddingVertical: 80,
        alignItems: 'center',
        paddingHorizontal: 64,
        position: 'relative'
    },
    image: {
        height: 300,
        width: 300
    },
    text: {
        textAlign: 'center',
        fontSize: 18
    },
    button: {
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: Colors.violetBg,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        width: '100%',
        position: 'absolute',
        bottom: 80
      },
      pressed: {
        opacity: 0.7,
      },
      buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
      },
});

export default QuizOnboardScreen;