import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import QuizOnboardScreen from './screens/QuizOnboardScreen';
import QuesOneScreen from './screens/QuesOneScreen';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext, useEffect, useState } from 'react';
import IconButton from './components/ui/IconButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QuizContextProvider, {QuizContext} from './store/quiz-context';
import ActivityContextProvider, {ActivityContext} from './store/activity-context';
import DashboardScreen from './screens/DashboardScreen';
import MeetScreen from './screens/MeetScreen';
import JobScreen from './screens/JobScreen';
import MusicScreen from './screens/MusicScreen';
import CompletedScreen from './screens/CompletedScreen';

const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Signup' component={SignupScreen} />
        </Stack.Navigator>
    )
}

function AuthenticatedStack() {
    const authCtx = useContext(AuthContext);
    return (
        <Stack.Navigator screenOptions={{headerShown: false, headerRight: ({ tintColor }) => (
            <IconButton
              icon={"exit"}
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          )}}>
        {/* <Stack.Navigator  screenOptions={{headerShown: false}}> */}
            <Stack.Screen name='QuizOnboardScreen' component={QuizOnboardScreen} />
            <Stack.Screen name='QuesOneScreen' component={QuesOneScreen} />
        </Stack.Navigator>
    )
}

function DashboardStack()
{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='DashboardScreen' component={DashboardScreen} />
            <Stack.Screen name='CompletedScreen' component={CompletedScreen} />
            <Stack.Screen name='MeetScreen' component={MeetScreen} />
            <Stack.Screen name='MusicScreen' component={MusicScreen} />
            <Stack.Screen name='JobScreen' component={JobScreen} />
        </Stack.Navigator>
    )
}

function StackHandler() {
    const authCtx = useContext(AuthContext);
    const quizCtx = useContext(QuizContext);
    const [isTryingLogin, setIsTryingLogin] = useState(true);
    useEffect(() => {
        async function getToken()
        {
            const token = await AsyncStorage.getItem('token');
            if(token)
            {
                authCtx.authenticate(token);
            }
            setIsTryingLogin(false);
        }
        getToken();
        async function getAnswers()
        {
            const ans = await AsyncStorage.getItem('quiz');
            if(ans)
            {
                quizCtx.saveQuiz(ans);
            }
            setIsTryingLogin(false);
        }
        getAnswers();
        }, [])

    return (<NavigationContainer style={styles.container}>
        {!authCtx.isAuthenticated && <AuthStack />}
        {authCtx.isAuthenticated && !quizCtx.quizCompleted && <AuthenticatedStack />}
        {authCtx.isAuthenticated && quizCtx.quizCompleted && <DashboardStack/>}
    </NavigationContainer>);

}

export default function App() {
    return (
        <AuthContextProvider>
            <QuizContextProvider>
                <ActivityContextProvider>
                <StatusBar style="light" />
                    <StackHandler />
                </ActivityContextProvider>
            </QuizContextProvider>
        </AuthContextProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// import React from 'react';
// import { View } from 'react-native';
// import AuthScreen from './AuthScreen';

// const App = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <AuthScreen />
//     </View>
//   );
// };

// export default App;

