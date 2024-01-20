import SignUp from './App/Pages/Signup';
import SignIn from './App/Pages/SignIn';
import Reset from './App/Pages/Reset';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './App/Pages/Welcome';
import Home from './App/Pages/Home';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './App/Shared/firebase';
import DetailsCourse from './App/Pages/DetailsCourse';
import ContentTopic from './App/Pages/ContentTopic';
import ContentTopicVideo from './App/Pages/ContentTopicVideo';

const Stack = createNativeStackNavigator();
export default function App() {
  const { user } = useAuthState(auth);

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {user ? (
          <>
            <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
            <Stack.Screen name="Details-Course" options={{ headerShown: false }} component={DetailsCourse} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome} />
            <Stack.Screen name="SignIn" options={{ headerShown: false }} component={SignIn} />
            <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
            <Stack.Screen name="Reset" options={{ headerShown: false }} component={Reset} />
            <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
            <Stack.Screen name="Details-Course" options={{ headerShown: false }} component={DetailsCourse} />
            <Stack.Screen name="ContentTopic" options={{ headerShown: false }} component={ContentTopic} />
            <Stack.Screen name="Video" options={{ headerShown: false }} component={ContentTopicVideo} />

          </>
        )}
      </Stack.Navigator>
    </NavigationContainer >
  );
}




