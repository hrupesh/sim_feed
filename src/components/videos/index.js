import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { connect } from "react-redux";
import { loadVideos } from "../../actions";
import { FlatList } from "react-native-gesture-handler";
import { Video } from "expo-av";

class Videos extends React.Component {
  componentDidMount() {
    this.props.loadVideos();
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <Text> This is Feed Component </Text>
        {this.props.isLoading ? <Text>Loading videos....</Text> : null}

        <Video
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          usePoster={true}
          posterSource={{ uri: "https://picsum.photos/1500/1100" }}
          posterStyle={{ width: Dimensions.get("screen").width }}
          style={{ width: "100%", height: 300 }}
        />

        <FlatList
          data={this.props.videos}
          keyExtractor={(item) =>
            item.title + Math.floor(Math.random() * 987546)
          }
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.title}</Text>
                <Text>{item.thumbnail_url}</Text>
                <Text>{item.video_url}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
});

const mapStateToProps = ({ isLoading, videos, error }) => ({
  isLoading,
  videos,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  loadVideos: () => dispatch(loadVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Videos);
