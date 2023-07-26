import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext, useEffect, useState } from 'react';
import IconButton from './components/ui/IconButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

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
        <Stack.Navigator screenOptions={{headerRight: ({ tintColor }) => (
            <IconButton
              icon={"exit"}
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          )}}>
            <Stack.Screen name='Dashboard' component={DashboardScreen} />
        </Stack.Navigator>
    )
}

function StackHandler() {
    const authCtx = useContext(AuthContext);
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
    }, [])
    
    if (isTryingLogin) {
        return <AppLoading />;
      }

    return (<NavigationContainer style={styles.container}>
        {!authCtx.isAuthenticated && <AuthStack />}
        {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>);

}

export default function App() {
    return (
        <AuthContextProvider>
            <StackHandler />
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

