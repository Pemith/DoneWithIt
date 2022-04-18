import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';

import AppButton from './app/components/AppButton';
import AccountScreen from './app/Screens/AccountScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen';
import ListingScreen from './app/Screens/ListingScreen';
import ListItem from './app/components/ListItem';
import LoginScreen from './app/Screens/LoginScreen';
import MessageScreen from './app/Screens/MessageScreen';
import Screen from './app/components/Screen';
import ViewImageScreen from './app/Screens/ViewImageScreen';
import WelcomeScreen from './app/Screens/WelcomeScreen';




export default function App() {

  
  return (
    // <WelcomeScreen/>
    // <ViewImageScreen/>
    // <ListingDetailsScreen/>
    // <MessageScreen/>
    // <AccountScreen/>
    // <ListingScreen/>
    // <Screen>
    //   {/* <AppTextInput placeholder="Username" icon="email"/> */}
    //   <AppPicker 
    //     selectedItem={category}
    //     onSelectItem={item => setCategory(item)}
    //     icon='apps'
    //     items={categories} 
    //     placeholder="Category" 
    //   />
    //   <AppTextInput icon='email' placeholder="email"/>
    // </Screen>

    <LoginScreen/>
  );
}


