import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Animated,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../constant/Color";
import React from "react";
import {
  useFonts,
  Urbanist_500Medium,
  Urbanist_400Regular,
  Urbanist_700Bold,
} from "@expo-google-fonts/urbanist";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type dumpContentData = {
  id: string;
  title: string;
  descript: string;
  img: any;
};

const dumpContent: dumpContentData[] = [
  {
    id: "0",
    title: "Welcome to Legion",
    descript:
      "The best movie streaming app of the century to make your day great.",
    img: require("../../assets/images/walkaround1.jpg"),
  },
  {
    id: "1",
    title: "Enjoys your moments",
    descript:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: require("../../assets/images/walkaround0.jpg"),
  },
  {
    id: "2",
    title: "Customize playlists",
    descript:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly.",
    img: require("../../assets/images/walkaround2.jpg"),
  },
];

const WalkAround = ({ navigation }) => {
  const handlertoWelcomeLogin = () => {
    navigation.navigate("SignInWelcome");
  };

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const Dots = () => {
    const dotPositions = Animated.divide(
      scrollX,
      Dimensions.get("window").width
    );
    return (
      <View
        style={{
          alignSelf: "center",
          marginTop: 8,
          flexDirection: "row",
          gap: 6,
        }}
      >
        {dumpContent.map((item, index) => {
          const dotColor = dotPositions.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ["#fff", Colors.primaryColorLight, "#fff"],
            extrapolate: "clamp",
          });

          const dotWidth = dotPositions.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 24, 10],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                width: dotWidth,
                height: 10,
                borderRadius: 5,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  let [fontsLoaded, fontError] = useFonts({
    Urbanist_500Medium,
    Urbanist_400Regular,
    Urbanist_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === "android" && <View style={{ marginTop: 20 }}></View>}
      <View style={{ flex: 1 }}>
        <Animated.FlatList
          data={dumpContent}
          keyExtractor={(item) => item.id}
          horizontal
          snapToInterval={Dimensions.get("window").width}
          decelerationRate={0.75}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          renderItem={({ item }: { item: dumpContentData }) => {
            return (
              <View style={{ width: Dimensions.get("window").width }}>
                <ImageBackground
                  source={item.img}
                  resizeMode="cover"
                  style={{
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  <View style={{ flex: 75 }}></View>
                  <View style={{ flex: 25 }}>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "Urbanist_700Bold",
                        fontSize: 34,
                        alignSelf: "center",
                        marginBottom: 20,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "Urbanist_500Medium",
                        fontSize: 16,
                        alignSelf: "center",
                        textAlign: "center",
                        marginHorizontal: 20,
                      }}
                    >
                      {item.descript}
                    </Text>

                    <Dots />

                    <TouchableOpacity
                      onPress={handlertoWelcomeLogin}
                      style={{
                        backgroundColor: Colors.redLight,
                        padding: 18,
                        borderRadius: 28,
                        justifyContent: "center",
                        alignItems: "center",
                        marginHorizontal: 20,
                        marginTop: 16,
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontFamily: "Urbanist_700Bold",
                          fontSize: 14,
                          letterSpacing: 0.4,
                        }}
                      >
                        Get started
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default WalkAround;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
});
