import React from "react";
import Header from "./Header";
import Summary from "./Summary";
import SectionList from "./SectionList";
import { View } from "react-native";

/* this component will display our main page */
export default function Index(props) {
  return (
    <View>
      <Header setView={props.setView} />
      <Summary />
      <SectionList />
    </View>
  );
}
