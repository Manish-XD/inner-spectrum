import { Text, View, StyleSheet, FlatList, Image } from "react-native"
import BottomBar from "../components/ui/BottomBar"
import { Colors } from "../constants/styles"
import { useContext } from "react"
import { CompleteContext } from "../store/complete-context"
import meet from '../assets/logo/meet.jpeg';
import music from '../assets/logo/music.jpg';
import write from '../assets/logo/write.jpeg';

const CompletedScreen = () => {
    const completeCtx = useContext(CompleteContext);
    function renderComplete(itemData) {
        return (
            <View style={styles.card}>
                <Image source={itemData.item.id === 1 ? meet : itemData.item.id === 2 ? music : write} style={styles.img}/>
                <View style={styles.innerCard}>
                    <Text style={styles.title}>{itemData.item.title}</Text>
                    <Text>Completed</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
            </View>
            <View style={styles.main}>
                <Text style={styles.head}>Challenges Completed</Text>
                <FlatList data={completeCtx.complete} keyExtractor={(item) => item.id} renderItem={renderComplete} style={styles.list}/>
            </View>
            <BottomBar isComplete />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        position: 'relative',
        paddingHorizontal: 32,
    },
    innerContainer: {
        backgroundColor: Colors.violetBg,
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        height: '200%',
        width: '200%',
        zIndex: -1
    },
    main: {
        marginTop: 100,

    },
    head: {
        textAlign: 'center',
        color: Colors.white,
        textShadowColor: Colors.white,
        textShadowRadius: 5,
        fontSize: 30,
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: Colors.grad2,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.white,
        flexDirection: "row",
        padding: 8,
        marginBottom: 10
    },
    img: {
        height: 60,
        width: 60,
        marginRight: 16
    },
    list: {
        height: '80%',
        paddingTop: 40,
        paddingHorizontal: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default CompletedScreen