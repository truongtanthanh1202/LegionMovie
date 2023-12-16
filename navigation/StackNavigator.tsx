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
import MovieCard from "../components/atoms/movie_card";
import MovieDetail from "../screens/movie_detail/MovieDetail";
import Notification from "../screens/profile/Notification";
import Comments from "../screens/movie_detail/Comments";
import VideoScreen from "../screens/movie_detail/VideoScreen";
import Security from "../screens/profile/sercurity/Security";
import ChangePassword from "../screens/profile/sercurity/ChangePassword";
import EditProfile from "../screens/profile/edit_profile/EditProfile";
import DownLoad from "../screens/profile/download/DownLoad";
import DownLoadSetting from "../screens/profile/download/DownLoadSetting";

import { AuthenticationHook } from "../redux/hook/AuthenticationHook";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { handlerGetIsSignIn, handlerSetIsSignIn } = AuthenticationHook();
  const isSignIn = handlerGetIsSignIn();
  // const isSignIn = true;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSignIn ? (
          <>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="MovieCard" component={MovieCard} />
            <Stack.Screen name="MovieDetail" component={MovieDetail} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Comments" component={Comments} />
            <Stack.Screen name="VideoScreen" component={VideoScreen} />
            <Stack.Screen name="Security" component={Security} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="DownLoad" component={DownLoad} />
            <Stack.Screen name="DownLoadSetting" component={DownLoadSetting} />
          </>
        ) : (
          <>
            <Stack.Screen name="WalkAround" component={WalkAround} />
            <Stack.Screen name="SignInWelcome" component={SignInWelcome} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="FavCategories" component={FavCategories} />
            <Stack.Screen name="SetupProfile" component={SetupProfile} />
            <Stack.Screen name="Forgot1" component={Forgot1} />
            <Stack.Screen name="Forgot2" component={Forgot2} />
            <Stack.Screen name="Forgot3" component={Forgot3} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
