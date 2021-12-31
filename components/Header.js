/* Header.js */
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Header(props) {
  // may need to replace logo with some sort of img tag
  return (
    <View style={styles.header}>
      <View>
        <Text>Passiv Logo</Text>
      </View>
      <View>
        <Text>Hi Xihai Luo!</Text>
        <Text>Thursday, 30th December</Text>
        <Button
          title="LOGOUT"
          onPress={() => {
            props.setView(false);
            console.log("Logout!");
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#a3f3f9",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
