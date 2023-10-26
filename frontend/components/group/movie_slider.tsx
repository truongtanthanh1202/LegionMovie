import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Modal,
} from "react-native";
import React from "react";
import {
  useFonts,
  Urbanist_600SemiBold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { Colors } from "../../constant/Color";
import MovieCard from "../atoms/movie_card";
import { AntDesign, Feather } from "@expo/vector-icons";

type props = {
  title: string;
  listMoviesData: object[];
};

const MovieSlider = ({ title, listMoviesData }: props) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  let [fontsLoaded, fontError] = useFonts({
    Urbanist_600SemiBold,
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
            <ScrollView style={styles.modalContainer}>
              <View style={styles.modalViewHeader}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{ ...styles.textTitle, flex: 70, marginLeft: 10 }}>
                  {title}
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Feather name="search" size={24} color="white" />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginTop: 28,
                  gap: 20,
                }}
              >
                {/* List of Movie Card */}
                {listMoviesData.map((item, index) => {
                  return (
                    <MovieCard
                      key={index}
                      movieItem={item}
                      size="XL"
                      setTitle={true}
                    />
                  );
                })}
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </Modal>

      <View style={styles.header}>
        <Text
          style={{ ...styles.textTitle, fontFamily: "Urbanist_600SemiBold" }}
        >
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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", gap: 16 }}>
          {listMoviesData.map((item, index) => {
            return (
              <MovieCard
                key={index}
                movieItem={item}
                size="L"
                setTitle={true}
              />
            );
          })}
        </View>
      </ScrollView>
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
  },
});
