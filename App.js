import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';

import WelcomeScreen from './app/Screens/WelcomeScreen';
import ViewImageScreen from './app/Screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen';

export default function App() {

  return (
    // <WelcomeScreen/>
    <ViewImageScreen/>
    // <ListingDetailsScreen/>
    
  );
}


