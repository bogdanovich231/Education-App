import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './App/Pages/Home';
import SignUp from './App/Pages/Signup';
import SignIn from './App/Pages/SignIn';
import Reset from './App/Pages/Reset';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="SignIn" options={{ headerShown: false }} component={SignIn} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
        <Stack.Screen name="Reset" options={{ headerShown: false }} component={Reset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


