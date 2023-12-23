import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Colors } from "../../constant/Color";
import { ResizeMode, Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import { SIZES } from "../../constant/Constant";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";

const VideoScreen = ({ navigation, route }) => {
  const handlerGoBack = () => {
    navigation.goBack();
  };

  const refVideo = React.useRef(null);
  const videoExpoAv = () => {
    return (
      <>
        <Video
          ref={refVideo}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
          source={{
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={() => {}}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={{ ...styles.container }}>
        {videoExpoAv()}
        <View>
          <TouchableOpacity
            onPress={handlerGoBack}
            style={{
              position: "absolute",
              top: 10,
              left: 10,
            }}
          >
            <Feather
              name="arrow-left"
              size={24}
              color={Colors.primaryColorDark}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
});
