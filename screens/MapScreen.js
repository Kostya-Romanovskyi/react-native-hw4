import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MapScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapScreen;
