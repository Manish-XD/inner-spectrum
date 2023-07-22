import { View, Pressable, Image, StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";
const ButtonWithImg = ({ image, children, onPress }) => {
    return (
        <Pressable style={({pressed}) => [styles.container, pressed && styles.pressed]}>
            <View style={styles.view}>
                <Image source={image} style={styles.img} />
                <Text>{children}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingLeft: 80,
        paddingVertical: 10,

        marginVertical: 26
    },
    img: {
        height: 30,
        width: 30,
        marginRight: 20
    },
    pressed:{
        backgroundColor: 'grey'
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default ButtonWithImg