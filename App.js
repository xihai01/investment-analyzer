import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import Cafe from "./components/Cafe";
import Index from "./components/Index";

/* App.js */
export default function App() {
  const [view, setView] = useState(false);
  console.log("app executed");

  if (!view) {
    return (
      <View style={styles.container}>
        <Text>Passiv</Text>
        <Button
          title="View Portfolio"
          onPress={() => {
            setView(true);
            console.log("button clicked");
          }}
        ></Button>
      </View>
    );
  } else {
    return <Index setView={setView}/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a3f3f9",
    alignItems: "center",
    justifyContent: "center",
  },
});
