import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import AccountScreen from "./app/Screens/AccountScreen";
import AppTextInput from "./app/components/TextInput";
import Button from "./app/components/Button";
import Picker from "./app/components/Picker";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ImageInput from "./app/components/ImageInput";
import ListingDetailsScreen from "./app/Screens/ListingDetailsScreen";
import ListingEditScreen from "./app/Screens/ListingEditScreen";
import ListingScreen from "./app/Screens/ListingScreen";
import ListItem from "./app/components/lists/ListItem";
import LoginScreen from "./app/Screens/LoginScreen";
import MessageScreen from "./app/Screens/MessageScreen";
import Screen from "./app/components/Screen";
import ViewImageScreen from "./app/Screens/ViewImageScreen";
import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ImageInputList from "./app/components/ImageInputList";
import RegisterScreen from "./app/Screens/RegisterScreen";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import NavigationTheme from "./app/Navigation/NavigationTheme";
import AppNavigator from "./app/Navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
