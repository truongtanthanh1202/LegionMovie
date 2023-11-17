import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React from "react";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { Feather, Entypo } from "@expo/vector-icons";
import { Colors } from "../../constant/Color";

interface propsTypes {
  leftIcon?: JSX.Element;
  title: string;
  subTitle?: string;
  type: "Normal" | "Boolean";
  onPress: Function;
}

const LongListCard = ({
  leftIcon,
  title,
  subTitle,
  type,
  onPress,
}: propsTypes) => {
  const [isSelected, setIsSeclected] = React.useState(true);

  const radioAnimated = React.useRef(new Animated.Value(2)).current;

  const circleColorAnimated = radioAnimated.interpolate({
    inputRange: [2, 28],
    outputRange: ["#333", Colors.primaryColorDark],
  });

  React.useEffect(() => {
    if (isSelected) {
      Animated.timing(radioAnimated, {
        toValue: 28,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(radioAnimated, {
        toValue: 2,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isSelected]);

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
      <TouchableOpacity
        onPress={() => {
          onPress();
          setIsSeclected(!isSelected);
        }}
        style={styles.button}
      >
        <View style={styles.innerContainer}>
          {leftIcon}
          <Text style={{ ...styles.title, fontFamily: "Urbanist_500Medium" }}>
            {title}
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text
            style={{ ...styles.subTitle, fontFamily: "Urbanist_500Medium" }}
          >
            {subTitle}
          </Text>
          {type == "Boolean" ? (
            <>
              <Animated.View style={styles.buttonBoolean}>
                <Animated.View
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 20,
                    position: "absolute",
                    top: 2,
                    left: radioAnimated, //Animation 2-> 28
                    backgroundColor: circleColorAnimated, //Animation #333 -> #3787ff
                  }}
                ></Animated.View>
              </Animated.View>
            </>
          ) : (
            <Feather name="chevron-right" size={20} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LongListCard;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    color: "white",
    letterSpacing: 1,
    marginLeft: 20,
  },
  subTitle: {
    fontSize: 16,
    color: "white",
    letterSpacing: 0.4,
  },
  buttonBoolean: {
    width: 52,
    height: 26,
    borderRadius: 30,
    backgroundColor: "#d4d4d4",
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
});
