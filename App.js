import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

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

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permissions to access");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("Error Reading an Image", error);
    }
  };
  return (
    // <WelcomeScreen/>
    // <ViewImageScreen />
    // <ListingDetailsScreen/>
    // <MessageScreen/>
    // <AccountScreen/>
    // <ListingScreen />
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

    // <LoginScreen />
    // <AccountScreen />
    // <ListingEditScreen />
    // <MessageScreen />
    <Screen>
      <Button title={"Select Image"} onPress={selectImage} />
      {/* <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}
      <ImageInput imageUri={imageUri} />
    </Screen>
  );
}
