import React from "react";
import { Text, TextInput, View } from "react-native";

function getFullName(firstName, secondName, thirdName) {
  return firstName + " " + secondName + " " + thirdName;
}

export default function Cat() {
  return (
    <View>
      <Text>Hello, I am...</Text>
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: "grey",
          borderWidth: 1,
        }}
        defaultValue="Name me!"
      />
    </View>
  );
}
