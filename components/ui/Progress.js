import ProgressBar from 'react-native-progress/Bar';
import { Text, View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import smile from '../../assets/logo/smile.png';
import { Colors } from '../../constants/styles';

const Progress = () => {
  return (
    <LinearGradient style={styles.container} colors={[`#4D4D4E`, `#050509`]} start={[0, 0]} end={[1, 0]}>
        <Image source={smile} style={styles.image}/>
        <LinearGradient style={styles.innerContainer} colors={[`#4D4D4E`, `#050509`]} start={[0, 0]} end={[1, 0]}>
            <Text style={styles.text}>3/10 Questions Completed</Text>
            <ProgressBar progress={0.5} width={200} height={2} color="#FBFBF9" borderRadius={10} />
        </LinearGradient>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        borderRadius: 20,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        width: '100%'
    },
    innerContainer: {
        borderRadius: 20,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 8
    }, 
    image: {
        height: 40,
        width: 40,
        margin: 16
    },
    text:{
        color: Colors.white,
        marginBottom: 8
    }
})

export default Progress