import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";
// import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);

    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/PhotoBG.jpg")}>
          <Text></Text>
          <StatusBar style="auto" />
          <KeyboardAvoidingView>
            <RegistrationScreen dimensions={dimensions} />
            {/* <LoginScreen dimensions={dimensions} /> */}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
