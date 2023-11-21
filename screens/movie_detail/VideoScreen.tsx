import * as ScreenOrientation from "expo-screen-orientation";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";
import { Colors } from "../../constant/Color";
import { Video, ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";
import { SIZES } from "../../constant/Constant";

const VideoScreen = ({ navigation, route }) => {
  const handlerGoBack = () => {
    navigation.goBack();
  };

  const refVideo = React.useRef(null);

  const [inFullscreen, setInFullsreen] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ ...styles.container }}>
        <View style={styles.controllerContainer}>
          <TouchableOpacity onPress={handlerGoBack}>
            <Text style={{ color: "white" }}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <VideoPlayer
          style={{
            videoBackgroundColor: Colors.innerFieldBackground,
            height: inFullscreen ? SIZES.width - 40 : SIZES.height - 40,
            width: inFullscreen ? SIZES.height : SIZES.width,
          }}
          videoProps={{
            shouldPlay: false,
            resizeMode: ResizeMode.CONTAIN,
            source: {
              uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            },
            ref: refVideo,
          }}
          slider={{
            visible: true,
          }}
          timeVisible={true}
          fullscreen={{
            inFullscreen: inFullscreen,
            enterFullscreen: () => {
              setInFullsreen(true);
              console.log("enter Fullscreen");
            },
            exitFullscreen: () => {
              setInFullsreen(false);
              console.log("exit Fullscreen");
            },
          }}
        />
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
  controllerContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
});
