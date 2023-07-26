import { Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

const GlowHeader = ({text, size}) => {
  return (
    <Text style={[styles.heading, {fontSize: size}]}>{text}</Text>
  )
}

const styles = StyleSheet.create({
    heading: {
        color: Colors.white,
        textShadowColor: Colors.white,
        textShadowRadius: 5
    }
})

export default GlowHeader