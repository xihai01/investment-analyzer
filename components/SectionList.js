import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import SectionListItem from "./SectionListItem";

/* sectionList.js */
export default function SectionList() {
  return (
    <ScrollView style={styles.sectionList}>
      <Text style={styles.portfolioHeader}>
        Individual TFSA - Questrade Account
      </Text>
      <SectionListItem
        ticker="BA"
        name="Boeing Co."
        target="10.0%"
        actual="8.4%"
      />
      <SectionListItem
        ticker="CBO.TO"
        name="BlackRock iShares 1-5 Year Laddered"
        target="10.0%"
        actual="8.2%"
      />
      <SectionListItem
        ticker="MRU.TO"
        name="Metro Inc"
        target="10.0%"
        actual="10.2%"
      />
      <SectionListItem
        ticker="SU.TO"
        name="Suncor Energy, Inc"
        target="10.0%"
        actual="11.6%"
      />
      <SectionListItem
        ticker="XEC.TO"
        name="BlackRock Canada iShares Core"
        target="15.0%"
        actual="11.8%"
      />
      <SectionListItem
        ticker="XIC.TO"
        name="BlackRock iShares Core S&P/TSX"
        target="20.0%"
        actual="20.3%"
      />
      <SectionListItem
        ticker="XSP.TO"
        name="BlackRock Canada iShares Core"
        target="20.0%"
        actual="21.6%"
      />
      <SectionListItem
        ticker="CASH.TO"
        name="Cash"
        target="5.0%"
        actual="7.9%"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionListItem: {
    flexDirection: "column",
    backgroundColor: "#a3f3f9",
    alignItems: "center",
    justifyContent: "space-around",
  },
  sectionList: {},
  portfolioHeader: {
    textAlign: "center",
  },
});