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
  const [progressValue, setProgressValue] = React.useState(0);
  const [totalFileSize, setTotalFileSize] = React.useState(0);

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const downLoadThisMovieTv = async () => {
    setDownloadState("Downloading");

    const callback = (downloadProgress) => {
      setTotalFileSize(formatBytes(downloadProgress.totalBytesExpectedToWrite));

      var progress =
        downloadProgress.totalBytesWritten /
        downloadProgress.totalBytesExpectedToWrite;
      progress = progress.toFixed(2) * 100;
      setProgressValue(progress.toFixed(0));
    };

    const downloadResumable = FileSystem.createDownloadResumable(
      videoDownloadUrl,
      FileSystem.cacheDirectory + name + id,
      {},
      callback
    );

    try {
      const { uri } = await downloadResumable.downloadAsync();
      console.log("Finished downloading to ", uri);
      setDownloadState("Done");
    } catch (e) {
      console.error(e);
    }
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
          {totalFileSize}
        </Text>
        <Text
          style={{
            fontFamily: "Urbanist_500Medium",
            color: Colors.primaryColorLight,
            fontSize: 12,
          }}
        >
          {progressValue}%
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
              width: `${progressValue}%`,
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
          onPress={() => {
            if (downloadState === "None") {
              downLoadThisMovieTv();
            } else if (downloadState === "Downloading") {
              cancelDownload();
            }
          }}
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
