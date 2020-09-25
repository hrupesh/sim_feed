import React, { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import {
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native-gesture-handler";
import { loadChemicals } from "../../actions";
import { connect } from "react-redux";
import ColorList from "./ColorList";
import { StatusBar } from "expo-status-bar";

function Strips({
  chemicalsisLoading,
  chemicals,
  chemicalsError,
  loadChemicals,
}) {
  useEffect(() => {
    loadChemicals();
  }, []);

  if (chemicalsisLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Image
          source={{ uri: "https://i.gifer.com/DuZY.gif" }}
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" translucent />
      <View style={styles.nextContainer}>
        <TouchableOpacity>
          <View style={styles.nextbtn}>
            <Text style={styles.next}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Test Strip</Text>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
          }}
        >
          <FlatList
            style={{ maxWidth: 25 }}
            data={chemicals[0]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: 25,
                    height: 100,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: `${item.values[0].color}`,
                      width: 25,
                      height: 25,
                      position: "absolute",
                      bottom: 30,
                    }}
                  ></View>
                </View>
              );
            }}
            contentContainerStyle={{
              borderWidth: 1,
              borderColor: "#e5e6ea",
              borderRadius: 5,
            }}
          />
          <FlatList
            data={chemicals[0]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <ColorList pname={item} />;
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    flex: 1,
  },
  nextContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  nextbtn: {
    backgroundColor: "#888a",
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  next: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#303F9F",
  },
});

const mapStateToProps = ({
  chemicalsisLoading,
  chemicals,
  chemicalsError,
}) => ({
  chemicalsisLoading,
  chemicals,
  chemicalsError,
});

const mapDispatchToProps = (dispatch) => ({
  loadChemicals: () => dispatch(loadChemicals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Strips);
