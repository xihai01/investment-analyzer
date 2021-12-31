import React from "react";
import { View, Text, StyleSheet } from "react-native";

/* SectionListItem.js */
export default function SectionListItem(props) {
  return (
    <View style={styles.sectionListItem}>
      <View>
        <Text>Indicator bar goes here</Text>
      </View>
      <View>
        <Text>
          {props.ticker} - {props.name}
        </Text>
      </View>
      <View>
        <Text>{props.target}</Text>
        <Text>{props.actual}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionListItem: {
    flexDirection: "column",
    backgroundColor: "#a3f3f9",
    alignItems: "center",
    justifyContent: "space-around",
  }
});