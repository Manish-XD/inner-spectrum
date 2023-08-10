import { Text, View, StyleSheet } from "react-native"
import BottomBar from "../components/ui/BottomBar"

const CompletedScreen = () => {
  return (
    <View style={styles.container}>
            <BottomBar isComplete/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        position: 'relative',
        paddingHorizontal: 32,
        
    },
})

export default CompletedScreen