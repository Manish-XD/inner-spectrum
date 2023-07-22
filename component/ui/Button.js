import { View, Pressable, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const Button = ({ onPress, children }) => {
    return (
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
            <View>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        paddingVertical: 14,
        backgroundColor: colors.violetBg,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginBottom: 26
      },
      pressed: {
        backgroundColor: '#3E3A62',
      },
      buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
      },
})

export default Button