import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../../../constant/Color";
import * as FileSystem from "expo-file-system";
import { AntDesign } from "@expo/vector-icons";

const DownLoadVideo = ({ url, name, id }) => {
  var videoDownloadUrl = "";
  if (url == "") {
    videoDownloadUrl =
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  } else {
    videoDownloadUrl = url;
  }

  const [downloadState, setDownloadState] = React.useState("None"); //None || Downloading || Done
  const [progressValue, setProgressValue] = React.useState(0.1);
  const [totalFileSize, setTotalFileSize] = React.useState(20);

  const downLoadThisMovieTv = async () => {
    const result = await FileSystem.downloadAsync(
      videoDownloadUrl,
      FileSystem.cacheDirectory + name + id
    )
      .then(({ uri }) => {
        console.log("Finished downloading to ", uri);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const cancelDownload = () => {};

  const hideDownload = () => {};

  return (
    <View>
      <Text
        style={{
          fontFamily: "Urbanist_700Bold",
          color: Colors.redLight,
          fontSize: 24,
          letterSpacing: 0.4,
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        Download
      </Text>
      <Text
        style={{
          fontFamily: "Urbanist_400Regular",
          color: "white",
          fontSize: 15,
          letterSpacing: 0.1,
          lineHeight: 20,
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        {downloadState === "None" &&
          "Do you want to download this movie, click Download button over here to download"}
        {downloadState === "Downloading" &&
          "Movie still downloading..., please wait or hide the process"}
        {downloadState === "Done" &&
          "Successfully downloaded, check your download movie in Profile -> Download"}
      </Text>
      <View style={styles.line}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "Urbanist_500Medium",
            color: "white",
            fontSize: 12,
          }}
        >
          {progressValue} / {totalFileSize} MB
        </Text>
        <Text
          style={{
            fontFamily: "Urbanist_500Medium",
            color: Colors.primaryColorLight,
            fontSize: 12,
          }}
        >
          {((progressValue / totalFileSize) * 100).toFixed(0)}%
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
        }}
      >
        <View style={styles.progressBackground}>
          <View
            style={{
              ...styles.currentProgress,
              width: `${(progressValue / totalFileSize) * 100}%`,
            }}
          ></View>
        </View>
        <TouchableOpacity onPress={cancelDownload}>
          <AntDesign name="close" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          marginTop: 24,
        }}
      >
        <TouchableOpacity style={styles.buttonHide} onPress={hideDownload}>
          <Text
            style={{ ...styles.textInBtn, fontFamily: "Urbanist_500Medium" }}
          >
            Hide
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.buttonHide,
            backgroundColor: Colors.primaryColorDark,
          }}
          onPress={() => {}}
        >
          <Text
            style={{ ...styles.textInBtn, fontFamily: "Urbanist_500Medium" }}
          >
            {downloadState === "None" && "Download"}
            {downloadState === "Downloading" && "Stop"}
            {downloadState === "Done" && "Back"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DownLoadVideo;

const styles = StyleSheet.create({
  line: {
    height: 2,
    width: "auto",
    backgroundColor: Colors.innerFieldBackground,
    borderRadius: 10,
    marginBottom: 24,
  },
  progressBackground: {
    flex: 1,
    height: 10,
    borderRadius: 10,
    backgroundColor: Colors.boderColorDark,
    overflow: "hidden",
  },
  currentProgress: {
    height: 10,
    borderRadius: 10,
    backgroundColor: Colors.primaryColorDark,
  },
  buttonHide: {
    paddingVertical: 12,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.boderColorDark,
    flex: 50,
  },
  textInBtn: {
    fontSize: 14,
    color: "white",
    letterSpacing: 0.4,
  },
});
