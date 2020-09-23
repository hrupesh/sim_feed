import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Videos from "./src/components/videos";
import Strips from "./src/components/strips";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import configureStore from "./src/store";

const Tab = createBottomTabNavigator();

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Videos" component={Videos} />
          <Tab.Screen name="Strips" component={Strips} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
