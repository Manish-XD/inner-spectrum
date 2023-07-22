import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './screens/DashboardScreen';

const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Signup' component={SignupScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>
    )
}

function AuthenticatedStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Dashboard' component={DashboardScreen} />
        </Stack.Navigator>
    )
}

export default function App() {
  return (
    <NavigationContainer>
    <AuthStack/>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
  
// });
