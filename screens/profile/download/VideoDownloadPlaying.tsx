import { StyleSheet, View, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { Colors } from "../../../constant/Color";
import { ResizeMode, Video } from "expo-av";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";

const VideoDownloadPlaying = ({ navigation, route }) => {
  const { localPath } = route.params;
  console.log(localPath);

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
            uri: `${localPath}`,
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

export default VideoDownloadPlaying;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
});
