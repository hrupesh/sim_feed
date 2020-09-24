import React, { useState } from "react";
import { Video } from "expo-av";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function VideoCard({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [usePoster, setUsePoster] = useState(true);

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: `${video.video_url}`,
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={isPlaying}
        isLooping
        style={{ width: "100%", height: 200, borderRadius: 10 }}
        onReadyForDisplay={() => {
          setUsePoster(false);
        }}
        usePoster={usePoster}
        posterSource={{ uri: `${video.thumbnail_url}` }}
        posterStyle={{ width: "100%", height: 200, resizeMode: "cover" }}
        useNativeControls={false}
      />
      {!isPlaying ? (
        <MaterialCommunityIcons
          name="play-circle"
          size={75}
          color={usePoster ? "#0000" : "#0008"}
          style={styles.icon}
          onPress={() => {
            setIsPlaying(true);
          }}
        />
      ) : (
        <MaterialCommunityIcons
          name="pause-circle"
          size={75}
          color={usePoster ? "#0000" : "#0008"}
          style={styles.icon}
          onPress={() => {
            setIsPlaying(false);
          }}
        />
      )}
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
  icon: {
    position: "absolute",
    alignSelf: "center",
    marginTop: 65,
    textShadowColor: "#fff2",
    textShadowOffset: {
      height: 0,
    },
    textShadowRadius: 15,
  },
});
