/* Summary.js */
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Summary() {
  return (
    <View style={styles.summary}>
      <View>
        <Text>Accuracy: 93%</Text>
      </View>
      <View>
        <Text>Total Assets: $24,476,77</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  summary: {
    flexDirection: "row",
    backgroundColor: "#a3f3f9",
    alignItems: "center",
    justifyContent: "space-around",
  },
});