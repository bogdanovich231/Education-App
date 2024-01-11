import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './App/Pages/Home';
import SignUp from './App/Pages/Signup';
import SignIn from './App/Pages/SignIn';
import Reset from './App/Pages/Reset';

export default function App() {
  return (
    <View>
      <Reset />
    </View>
  );
}


