import { Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const GlowHeader = ({text, size}) => {
  return (
    <Text style={[styles.heading, {fontSize: size}]}>{text}</Text>
  )
}

const styles = StyleSheet.create({
    heading: {
        color: colors.white,
        textShadowColor: colors.white,
        textShadowRadius: 5
    }
})

export default GlowHeader