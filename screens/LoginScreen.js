import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({ dimensions }) => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const keybordHideOnSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
    console.log(state);
  };

  const unreadValues = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <TouchableWithoutFeedback onPress={unreadValues}>
      <View style={styles.loginWrapp}>
        <View
          style={{
            ...styles.form,
            marginBottom: isShowKeyboard ? 20 : 100,
            width: dimensions,
          }}>
          <Text style={styles.titleLogin}>Увійти</Text>

          <View>
            <TextInput
              style={[styles.input, styles.inputMargin]}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, email: value }))
              }
              value={state.email}
              placeholder="Адреса електронної пошти"
            />
          </View>

          <View>
            <TextInput
              style={[styles.input, styles.marginToBtn]}
              secureTextEntry={!showPassword}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
              value={state.password}
              placeholder="Пароль"
            />
          </View>
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Text
              style={styles.showPass}
              name={showPassword ? "eye-off" : "eye"}>
              Показати
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerBtn}
            activeOpacity={0.7}
            onPress={keybordHideOnSubmit}>
            <Text style={styles.textBtn}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textSubBtn}>
              Немає аккаунту? Зареєструватись
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  loginWrapp: {
    backgroundColor: "#ffffff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  form: {
    marginHorizontal: 16,
  },
  titleLogin: {
    color: "#212121",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    paddingBottom: 33,
    paddingTop: 32,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    textAlign: "left",
    paddingLeft: 16,
  },
  inputMargin: {
    marginBottom: 16,
  },
  marginToBtn: {
    marginBottom: 43,
  },
  registerBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
  },
  textBtn: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  textSubBtn: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
    marginTop: 16,
  },
  showPass: {
    position: "absolute",
    top: -77,
    right: 20,

    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    zIndex: 1000,
  },
});

export default LoginScreen;