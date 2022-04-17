import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';

import WelcomeScreen from './app/Screens/WelcomeScreen';
import ViewImageScreen from './app/Screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen';
import MessageScreen from './app/Screens/MessageScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/Screens/AccountScreen';
import ListingScreen from './app/Screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';


const categories=[
  {label:"Furniture", value: 1},
  {label:"Clothing", value: 2},
  {label:"Cameras", value: 3},
];

export default function App() {

  const [category,setCategory]=useState()

  return (
    // <WelcomeScreen/>
    // <ViewImageScreen/>
    // <ListingDetailsScreen/>
    // <MessageScreen/>
    // <AccountScreen/>
    // <ListingScreen/>
    <Screen>
      {/* <AppTextInput placeholder="Username" icon="email"/> */}
      <AppPicker 
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        icon='apps'
        items={categories} 
        placeholder="Category" 
      />
      <AppTextInput icon='email' placeholder="email"/>
    </Screen>
  );
}


