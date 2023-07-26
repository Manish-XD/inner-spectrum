import { useState } from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import FlatButton from '../ui/FlatButton';
import AuthForm from './AuthForm';
import { Colors } from '../../constants/styles';
import GlowHeader from '../ui/GlowHeader';

function AuthContent({ isLogin, onAuthenticate }) {
    const navigation = useNavigation();

    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
    });

    function switchAuthModeHandler() {
        if (isLogin) {
            navigation.replace('Signup');
        } else {
            navigation.replace('Login');
        }
    }

    function submitHandler(credentials) {
        let { email, password } = credentials;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6;

        if (
            !emailIsValid ||
            !passwordIsValid
        ) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                email: !emailIsValid,
                password: !passwordIsValid,
            });
            return;
        }
        onAuthenticate({ email, password });
    }

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.gradient} colors={[`${Colors.grad1}`, `${Colors.grad2}`]}>
                <GlowHeader text={isLogin?"Login":"Singup"} size={30}/>
                <Text style={styles.description}>{isLogin ? "Don't worry, we respect your privacy" : 'Thank you for choosing us as your personal mental fitness trainer'}</Text>
                <AuthForm
                    isLogin={isLogin}
                    onSubmit={submitHandler}
                    credentialsInvalid={credentialsInvalid}
                />
                <View style={styles.buttons}>
                    <FlatButton onPress={switchAuthModeHandler}>
                        {isLogin ? "Don't have an account?" : 'Already have an account?'}
                    </FlatButton>
                </View>
            </LinearGradient>
        </View>
    );
}

export default AuthContent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.violetBg,
        flex: 1
    },
    gradient: {
        marginTop: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        flex: 1,
        paddingTop: 75
    },
    buttons: {
        marginTop: 8,
    },
    description: {
        color: Colors.white,
        marginTop: 4
    }
});