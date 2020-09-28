import React from "react";
import { Text, View, StatusBar } from "react-native";
import Videos from "./src/components/videos";
import Strips from "./src/components/strips";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { navigationRef } from "./CustomNavigation";

import configureStore from "./src/store";
import AvatarImage from "./src/components/videos/AvatarImage";
import CameraScreen from "./src/components/videos/CameraScreen";

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
          headerRight: () => <AvatarImage />,
          title: false,
          headerStyle: {
            height: 100,
            backgroundColor: "#e5e6ea",
          },
        }}
        name="Videos"
        component={Videos}
      />
      <VideoStack.Screen name="CameraScreen" component={CameraScreen} />
    </VideoStack.Navigator>
  );
}

const Tabs = createBottomTabNavigator();

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="#e5e6ea"
        />
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
            showLabel: false,
            style: {
              backgroundColor: "#e5e6ea",
              height: 60,
            },
          }}
        >
          <Tabs.Screen name="Videos" component={VideoStackScreen} />
          <Tabs.Screen name="Strips" component={Strips} />
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
