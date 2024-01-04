import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZES } from "../../constant/Constant";
import { Video, ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";

const VideoHeader = ({ posterPath }) => {
  return (
    <View>
      <VideoPlayer
        style={{
          width: SIZES.width,
          height: SIZES.width * 0.5625,
        }}
        icon={{}}
        fullscreen={{
          visible: false,
        }}
        timeVisible={false}
        slider={{
          visible: false,
        }}
        videoProps={{
          posterSource: {
            uri: `https://image.tmdb.org/t/p/w500/${posterPath}`,
          },
          usePoster: true,
          posterStyle: { width: SIZES.width, height: SIZES.width * 0.5625 },
          shouldPlay: false,
          resizeMode: ResizeMode.CONTAIN,
          source: {
            uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
          },
        }}
      />
    </View>
  );
};

export default VideoHeader;

const styles = StyleSheet.create({});
