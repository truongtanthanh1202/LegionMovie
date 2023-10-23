import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/splash/Splash";
import WalkAround from "../screens/walk_around/WalkAround";
import SignInWelcome from "../screens/sign_in_welcome/SignInWelcome";
import SignUp from "../screens/sign_up/Signup";
import SignIn from "../screens/sign_in/SignIn";
import FavCategories from "../screens/account_setup/FavCategories";
import SetupProfile from "../screens/account_setup/SetupProfile";
import Forgot1 from "../screens/forgot_reset_password/Forgot1";
import Forgot2 from "../screens/forgot_reset_password/Forgot2";
import Forgot3 from "../screens/forgot_reset_password/Forgot3";
import BottomTab from "./BottomTab";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
