import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Cafe from "./components/Cafe";

export default function App() {
  console.log("app executed");

  return (
    <View style={styles.container}>
      <Text>Passiv</Text>
      <Button
        title="View Portfolio"
        onPress={() => {
          console.log("button clicked");
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a3f3f9",
    alignItems: "center",
    justifyContent: "center",
  },
});
