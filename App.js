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

export default function App() {
  const Link = () => {
    const navigation = useNavigation();

    return (
      <Button
        title="Click"
        onPress={() => navigation.navigate("TweetDetails")}
      />
    );
  };

  const Tweets = ({ navigation }) => (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      />
      {/* <Button
        title="View Tweet"
        onPress={() => navigation.navigate("Account")}
      /> */}
      {/* <Link /> */}
    </Screen>
  );

  const TweetDetails = ({ route }) => (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );

  const Stack = createStackNavigator();
  // const Stack = createNativeStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={({ route }) => ({ title: route.params.id })}
      />
    </Stack.Navigator>
  );
  const Account = () => (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#eee",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Tweets}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );

  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <ListingDetailsScreen />
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
    // <Screen>
    //   <ImageInputList
    //     imageUris={imageUris}
    //     onAddImage={handleAddleAdd}
    //     onRemoveImage={handleRemove}
    //   />
    // </Screen>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
