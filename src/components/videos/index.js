import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Image,
  ToastAndroid,
} from "react-native";
import { connect } from "react-redux";
import { loadVideos } from "../../actions";
import { FlatList } from "react-native-gesture-handler";
import VideoCard from "./VideoCard";

function Videos({ isLoading, videos, error, loadVideos }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setTimeout(async () => {
      await loadVideos();
      setRefreshing(false);
    }, 500);
  }, [refreshing]);

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <View style={styles.screenContainer}>
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      > */}
      <FlatList
        data={videos}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        extraData={refreshing}
        renderItem={({ item }) => {
          return <VideoCard video={item} />;
        }}
        keyExtractor={(item) =>
          item.video_url + Math.floor(Math.random() * 1000000000)
        }
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.01}
        onEndReached={() => {
          loadVideos();
        }}
        contentContainerStyle={
          {
            // backgroundColor: "red",
            // position: "absolute",
            // width: "100%",
          }
        }
        ListFooterComponent={
          isLoading ? (
            <ActivityIndicator
              size="large"
              color="#512DF8"
              style={{ margin: 15 }}
            />
          ) : null
        }
      />
      {/* </ScrollView> */}
    </View>
  );
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
