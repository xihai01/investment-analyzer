import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cafe from "./components/Cafe";

export default function App() {
  console.log("app executed");

  return (
    <View style={styles.container}>
      <Cafe />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
