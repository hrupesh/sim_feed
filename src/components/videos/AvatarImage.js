import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Alert,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import * as Navigation from "../../../CustomNavigation";
import { IMAGE } from "../../constants/img";

export default function AvatarImage() {
  const [image, setImage] = useState(IMAGE.uri);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("You need to grant permissions to use this feature");
        }
      }
    })();
    setImage(IMAGE.uri);
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      IMAGE.uri = result.uri;
      setImage(IMAGE.uri);
    }
  };

  const askChoice = () =>
    Alert.alert(
      "How would you like to upload your Avatar Image?",
      "You can either choose from your gallery or click a new one",
      [
        {
          text: "Cancel",
        },
        {
          text: "Gallery 🖼",
          onPress: () => pickImage(),
        },
        {
          text: "Click 📷",
          onPress: () => Navigation.navigate("CameraScreen"),
        },
      ],
      { cancelable: false }
    );

  return (
    <>
      <TouchableOpacity activeOpacity={0.75} onPress={askChoice}>
        <Image
          source={{
            uri: image,
          }}
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            marginRight: 15,
            marginTop: 20,
          }}
        />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({});
