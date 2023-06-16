import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

const PostsScreen = () => {
  return (
    <ImageBackground style={styles.bg}>
      <View style={styles.header}>
        <Text style={styles.homeTitle}>Публікації</Text>
        <TouchableOpacity>
          <Image
            style={styles.logOut}
            source={require("../assets/images/log-out.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.imgContainer}></View>
        <View style={styles.text}>
          <Text>Natali Romanova</Text>
          <Text>email@example.com</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    borderBottomWidth: 1,
    borderBottomColor: "#A9A9A9",

    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 15,

    marginTop: 55,
  },
  homeTitle: {
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",

    color: "#212121",
  },
  logOut: {
    position: "absolute",
    top: -20,
    right: 0,
    marginLeft: "auto",
    display: "flex",
  },
  main: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 10,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imgContainer: {
    width: 50,
    height: 50,
    backgroundColor: "grey",
    borderRadius: 20,
  },
  text: {
    marginLeft: 10,
  },
});

export default PostsScreen;
