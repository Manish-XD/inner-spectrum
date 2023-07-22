import { StyleSheet, Text, TextInput, View } from "react-native"
import colors from "../../constants/colors";

const Input = ({ label, placeholder }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput placeholder={placeholder} style={styles.input} autoCapitalize="none"/>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        color: colors.white
    },
    input: {
        padding: 16,
        backgroundColor: colors.white,
        borderRadius: 10,
        color: colors.violetBg,
        marginTop: 8,
        marginBottom: 20
    }
});

export default Input