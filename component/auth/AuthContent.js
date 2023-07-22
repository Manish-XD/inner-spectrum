import { Text, StyleSheet, View, KeyboardAvoidingView } from "react-native";
import colors from "../../constants/colors";
import GlowHeader from "../ui/GlowHeader";
import { LinearGradient } from 'expo-linear-gradient';
import AuthForm from "./AuthForm";
import { useNavigation } from '@react-navigation/native';
import ButtonWithImg from "../ui/ButtonWithImg";
import google from '../../assets/logo/google.png';

const AuthContent = ({ isLogin }) => {
    const navigation = useNavigation();

    function toggleAuthHandler()
    {
        if(isLogin)
        {
            navigation.replace('Signup');
        }
        else
        {
            navigation.replace('Login');
        }
    }
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.gradient} colors={[`${colors.grad1}`, `${colors.grad2}`]}>
        {/* <KeyboardAvoidingView behavior="position" style={[{flex: 1}]}> */}
                <GlowHeader text={isLogin ? 'Login' : 'Signup'} size={30} />
                <Text style={styles.para}>{isLogin ? 'Don’t worry we respect your privacy' : 'Thank you for choosing us as your personal mental fitness trainer'}</Text>
                <AuthForm isLogin={isLogin}/>
                <View style={styles.orSection}>
                    <View style={styles.line}/>
                    <Text style={styles.or}>OR</Text>
                    <View style={styles.line}/>
                </View>
                <ButtonWithImg image={google}>Sign up with Google</ButtonWithImg>
                <Text style={styles.hyperLink} onPress={toggleAuthHandler}>{isLogin ? "Don't have an account?" : 'Already have an account?'}</Text>
        {/* </KeyboardAvoidingView> */}
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.violetBg,
        flex: 1
    },
    gradient: {
        flex: 1,
        marginTop: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 50,
        paddingTop: 80
    },
    para: {
        color: colors.white,
        marginVertical: 5
    },
    hyperLink: {
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    orSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
    },
    line: {
        borderBottomWidth: 1,
        width: '40%'
    },
    or: {
        position: 'absolute',
        left: '48%',
        top: -8
    }
});

export default AuthContent