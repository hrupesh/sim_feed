import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import Videos from "./src/components/videos";
import Strips from "./src/components/strips";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

import configureStore from "./src/store";

const VideoStack = createStackNavigator();

function VideoStackScreen() {
  return (
    <VideoStack.Navigator>
      <VideoStack.Screen
        options={{
          headerLeft: (props) => (
            <View style={{ paddingLeft: 15 }}>
              <Text
                style={{
                  color: "#aaa",
                  fontSize: 10,
                  fontWeight: "bold",
                  letterSpacing: 1,
                }}
              >
                TODAY
              </Text>
              <Text
                style={{
                  color: "#000",
                  fontSize: 28,
                  fontWeight: "bold",
                }}
              >
                My Feed
              </Text>
            </View>
          ),
          headerRight: (props) => (
            <Image
              source={{
                uri:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
              }}
              style={{
                height: 40,
                width: 40,
                borderRadius: 40 / 2,
                marginRight: 15,
                marginTop: 20,
              }}
            />
          ),
          title: false,
          headerStyle: {
            height: 100,
            backgroundColor: "#e5e6ea",
          },
        }}
        name="Videos"
        component={Videos}
      />
    </VideoStack.Navigator>
  );
}

const Tabs = createBottomTabNavigator();

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="#e5e6ea"
      />
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Videos") {
                iconName = focused ? "video-wireless" : "video-outline";
              } else if (route.name === "Strips") {
                iconName = focused ? "chemical-weapon" : "chemical-weapon";
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: "black",
            inactiveTintColor: "gray",
          }}
        >
          <Tabs.Screen name="Videos" component={VideoStackScreen} />
          <Tabs.Screen name="Strips" component={Strips} />
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
