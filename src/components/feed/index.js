import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { loadVideos } from "../../actions";

export class Feed extends React.Component {
  componentDidMount() {
    this.props.loadVideos();
  }

  render() {
    return (
      <View>
        <Text> This is Feed Component </Text>
        {this.props.isLoading ? <Text>Loading videos....</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = ({ isLoading, videos, error }) => ({
  isLoading,
  videos,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  loadVideos: () => dispatch(loadVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
