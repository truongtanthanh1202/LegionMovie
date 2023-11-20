import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { Colors } from "./constant/Color";
import StackNavigator from "./navigation/StackNavigator";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.backgroundColor}
      />
      <StackNavigator />
    </Provider>
  );
}
