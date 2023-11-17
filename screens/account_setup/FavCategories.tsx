import {
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  Platform,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import styles from "./Style";
import { Colors } from "../../constant/Color";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { CategoriesArray } from "../../constant/Constant";

const FavCategories = ({ navigation }) => {
  const handlerToSetupProfile = (action: string) => {
    if (action === "skip") {
      navigation.navigate("SetupProfile");
    }
    if (action === "continue") {
      navigation.navigate("SetupProfile");
    }
  };

  const userFavCategory: string[] = [];

  const removerUserFavCategory = (unselectedCategory: string) => {
    userFavCategory.find(function (currentValue, index, arr) {
      if (currentValue === unselectedCategory) {
        userFavCategory.splice(index, 1);
      }
      return currentValue === unselectedCategory;
    }, unselectedCategory);
  };

  let [fontsLoaded, fontError] = useFonts({
    Urbanist_700Bold,
    Urbanist_500Medium,
    Urbanist_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const Tags = ({ categorie }: { categorie: string }) => {
    const [selected, setSelected] = React.useState(false);
    return (
      <TouchableOpacity
        style={!selected ? styles.tags : styles.tagsSelected}
        onPress={() => {
          setSelected(!selected);
          if (selected) {
            console.log("unselected", categorie);
            removerUserFavCategory(categorie);
          } else {
            userFavCategory.push(categorie);
          }
        }}
      >
        <Text style={{ ...styles.textInTags, fontFamily: "Urbanist_700Bold" }}>
          {categorie}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 32,
          marginTop: 50,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          {/* <Ionicons name="arrow-back" size={28} color="white" /> */}
          <Image
            source={require("../../assets/icon/arrow-back-48.png")}
            style={{
              width: 26,
              height: 26,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "Urbanist_700Bold",
            color: "white",
            fontSize: 24,
            letterSpacing: 0.4,
            marginLeft: 16,
          }}
        >
          Choose Your Interest
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: "Urbanist_400Regular",
            color: "white",
            fontSize: 16,
            letterSpacing: 1,
            lineHeight: 24,
          }}
        >
          Choose your interests and get the best movie recommendations. Dont't
          worry, you can always chang it later.
        </Text>

        {/* All categories */}
        <View
          style={{
            flex: 1,
            marginBottom: 120,
            marginTop: 20,
          }}
        >
          <ScrollView>
            <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
              {CategoriesArray.map((item, index) => {
                return <Tags categorie={item} key={index} />;
              })}
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 16,
            backgroundColor: Colors.backgroundColor,
            paddingBottom: 40,
            paddingTop: 20,
            position: "absolute",
            bottom: 0,
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handlerToSetupProfile("skip");
            }}
          >
            <Text
              style={{
                ...styles.textInButton,
                fontFamily: "Urbanist_700Bold",
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: Colors.primaryColorLight,
            }}
            onPress={() => {
              console.log(userFavCategory);
              handlerToSetupProfile("continue");
            }}
          >
            <Text
              style={{
                ...styles.textInButton,
                fontFamily: "Urbanist_700Bold",
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FavCategories;
