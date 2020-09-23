import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { loadVideos } from "../../actions";
import { FlatList } from "react-native-gesture-handler";

class Videos extends React.Component {
  componentDidMount() {
    this.props.loadVideos();
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <Text> This is Feed Component </Text>
        {this.props.isLoading ? <Text>Loading videos....</Text> : null}

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
