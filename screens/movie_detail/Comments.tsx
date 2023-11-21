import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { Colors } from "../../constant/Color";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { AntDesign } from "@expo/vector-icons";

const Comments = ({ navigation, route }) => {
  const { commentGroup } = route.params;
  const [moviesReviews, setMoviesReviews] = React.useState(commentGroup);

  const handlerGoback = () => {
    navigation.goBack();
  };

  let [fontsLoaded, fontError] = useFonts({
    Urbanist_700Bold,
    Urbanist_500Medium,
    Urbanist_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handlerGoback}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{ ...styles.numComments, fontFamily: "Urbanist_500Medium" }}
          >
            {69} Comments
          </Text>
        </View>
        <View style={styles.body}>
          <FlatList
            data={moviesReviews}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View style={{ marginBottom: 20 }} key={index}>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <Image
                    style={{ width: 36, height: 36, borderRadius: 36 }}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w200${item.author_details.avatar_path}`,
                    }}
                  />
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontFamily: "Urbanist_700Bold",
                      letterSpacing: 0.4,
                    }}
                  >
                    {item.author}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontFamily: "Urbanist_400Regular",
                  }}
                >
                  {item.content.length > 200
                    ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    : item.content}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    marginHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  numComments: {
    fontSize: 24,
    color: "white",
    letterSpacing: 0.6,
  },
  body: {
    marginHorizontal: 20,
    flex: 1,
    marginTop: 20,
    marginBottom: 80,
  },
});
