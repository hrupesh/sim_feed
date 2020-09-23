import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { connect } from "react-redux";
import { loadVideos } from "../../actions";
import { FlatList } from "react-native-gesture-handler";
import { Video } from "expo-av";
import VideoCard from "./VideoCard";

class Videos extends React.Component {
  componentDidMount() {
    this.props.loadVideos();
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        {this.props.isLoading ? <Text>Loading videos....</Text> : null}

        <FlatList
          data={this.props.videos}
          keyExtractor={(item) =>
            item.title + Math.floor(Math.random() * 987546)
          }
          renderItem={({ item }) => {
            return <VideoCard video={item} />;
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
