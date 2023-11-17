import { lazy, Suspense } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Modal,
  FlatList,
} from "react-native";
import React from "react";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { Colors } from "../../constant/Color";
import { AntDesign, Feather } from "@expo/vector-icons";
import MovieCard from "../atoms/movie_card";

type props = {
  title: string;
  listMoviesData: any;
};

const MovieSlider = ({ title, listMoviesData }: props) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  let [fontsLoaded, fontError] = useFonts({
    Urbanist_700Bold,
    Urbanist_500Medium,
    Urbanist_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <SafeAreaView
            style={{ ...styles.modalContainer, paddingHorizontal: 20 }}
          >
            <View style={styles.modalViewHeader}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign name="arrowleft" size={24} color="white" />
              </TouchableOpacity>
              <Text style={{ ...styles.textTitle, flex: 70, marginLeft: 10 }}>
                {title}
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Feather name="search" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={listMoviesData}
              numColumns={2}
              keyExtractor={(item) => item.id}
              horizontal={false}
              renderItem={({ item, index }) => (
                <View style={{ marginBottom: 16, marginRight: 16 }} key={index}>
                  <MovieCard movieItem={item} size="XL" setTitle={true} />
                </View>
              )}
            />
          </SafeAreaView>
        </View>
      </Modal>

      <View style={styles.header}>
        <Text style={{ ...styles.textTitle, fontFamily: "Urbanist_700Bold" }}>
          {title}
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text
            style={{ ...styles.textExplore, fontFamily: "Urbanist_500Medium" }}
          >
            see all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={listMoviesData}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 16 }} key={index}>
            <MovieCard movieItem={item} size="L" setTitle={true} />
          </View>
        )}
      />
    </View>
  );
};

export default MovieSlider;

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 16,
    alignItems: "center",
    marginBottom: 12,
  },
  textTitle: {
    color: "white",
    fontSize: 20,
    letterSpacing: 0.4,
  },
  textExplore: {
    color: Colors.primaryColorLight,
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  modalViewHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 28,
  },
});
