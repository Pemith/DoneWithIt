import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';

import WelcomeScreen from './app/Screens/WelcomeScreen';
import ViewImageScreen from './app/Screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';

export default function App() {

  return (
    // <WelcomeScreen/>
    // <ViewImageScreen/>

    <View
      style={{
        backgroundColor:"#fdf4f4",
        padding:20,
        paddingTop:100,
      }}
    ><Card
      title={"Red jacket for sale"}
      subTitle="$100"
      image={require("./app/assets/jacket.jpg")}
    /></View>
    
  );
}


