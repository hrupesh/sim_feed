import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function VideoCard({ video }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: `${video.thumbnail_url}` }} style={styles.image} />
      <View style={styles.overlap}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Text style={styles.new}>New</Text>
          <Text style={styles.time}>1 hr ago</Text>
        </View>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.dummy}>John Doe</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  overlap: {
    backgroundColor: "#fff",
    padding: 10,
    elevation: 20,
    borderRadius: 10,
    bottom: 20,
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
    },
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  new: {
    color: "dodgerblue",
    fontSize: 10,
  },
  time: {
    color: "#aaa",
    fontSize: 10,
  },
  dummy: {
    fontSize: 10,
    color: "#aaa",
  },
});
