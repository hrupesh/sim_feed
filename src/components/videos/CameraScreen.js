import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Navigation from "../../../CustomNavigation";
import { IMAGE } from "../../constants/img";

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.on);
  let camera = null;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        flashMode={flashMode}
        ref={(ref) => {
          camera = ref;
        }}
        style={{ flex: 1 }}
        type={type}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 20,
              top: 20,
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Ionicons name="md-reverse-camera" size={40} color="#e5e6ea" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.75}
            style={{
              alignSelf: "flex-end",
              margin: 15,
              marginLeft: Dimensions.get("screen").width / 2 - 50,
            }}
            onPress={async () => {
              const { uri } = await camera.takePictureAsync();
              if (uri) {
                IMAGE.uri = uri;
                Navigation.navigate("Videos");
              }
            }}
          >
            <MaterialCommunityIcons
              name="circle-slice-8"
              size={100}
              color="#e5e6ea"
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({});
