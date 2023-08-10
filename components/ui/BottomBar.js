import { View, StyleSheet, Text, Pressable } from "react-native"
import { Colors } from "../../constants/styles"
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const BottomBar = ({ isComplete, isDashboard }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable onPress={()=>{navigation.navigate('CompletedScreen')}}>
                <View style={styles.innerContainer}>
                    <Entypo name="trophy" size={40} color="white" style={isComplete && styles.glowIcon} />
                    <Text style={[styles.label, isComplete && styles.glowLabel]}>Completed</Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>{navigation.navigate('DashboardScreen')}}>
                <View style={styles.innerContainer}>
                    <Entypo name="flag" size={40} color="white" style={isDashboard && styles.glowIcon} />
                    <Text style={[styles.label, isDashboard && styles.glowLabel]}>Challenges</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: '-20%',
        left: '13%',
        backgroundColor: Colors.grad1,
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-evenly',
        paddingTop: 8,
        paddingBottom: 100,
        borderRadius: 999,
    },
    innerContainer: {
        alignItems: 'center',
    },
    label: {
        color: Colors.white
    },
    glowIcon: {
        shadowColor: Colors.white,
        shadowRadius: 10,
        shadowOffset: { x: 5, y: 1 },
        shadowOpacity: 1
    },
    glowLabel: {
        textShadowColor: Colors.white,
        textShadowRadius: 5
    }
})

export default BottomBar