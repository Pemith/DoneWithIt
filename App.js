import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/Screens/WelcomeScreen';
import ViewImageScreen from './app/Screens/ViewImageScreen';

export default function App() {

  // console.log(useDimensions());
  // console.log(useDeviceOrientation());
  return (
    <WelcomeScreen/>
    // <ViewImageScreen/>
  );
}


