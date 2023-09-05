import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movie from './src/components/Movie';
import Home from './src/components/Home';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
<Stack.Screen name={"Home"} component={Home} />
<Stack.Screen name={"Movie"} component={Movie} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
