import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Feed from "./src/components/feed/index";
import { Provider } from "react-redux";

import configureStore from "./src/store";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Feed />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
