import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import Cafe from "./components/Cafe";

/* SectionListItem.js */
function SectionListItem(props) {
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

/* sectionList.js */
export default function App() {
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

/* Summary.js */
/* export default function App() {
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
}); */

/* Header.js */
/* export default function App() {
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
}); */

/* App.js */
/* export default function App() {
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
 */
