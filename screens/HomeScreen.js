import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

// import components
import MyInvestmentPreview from "../components/MyInvestmentPreview";
import MyInvestment from "../components/MyInvestment";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {Platform.OS === "android" && (
          <StatusBar backgroundColor="#003A8C" barStyle="light-content" />
        )}
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.mainText}>MAGA</Text>
          </View>
          <View>
            <Text style={styles.moneyValue}>CURRENT VALUE</Text>
            <Text style={styles.currencyText}>usd 365456435</Text>
          </View>
          <MyInvestmentPreview />
        </View>
        <ScrollView>
          <View style={styles.scrolHeading}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Portfiolio</Text>
            <TouchableOpacity style={styles.linkText}>
              <Text>see all </Text>
              <Icon name="ios-arrow-forward" size={20} />
            </TouchableOpacity>
          </View>
          <MyInvestment></MyInvestment>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    backgroundColor: "#033c8d",
    alignItems: "center",
    padding: 20,
  },
  mainText: {
    color: "#fff",
    marginBottom: 30,
    fontSize: 34,
    fontWeight: "bold",
  },
  moneyValue: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  currencyText: {
    color: "#fff",
    fontSize: 37,
    fontWeight: "bold",
  },
  scrolHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    paddingTop: 25,
    paddingBottom: 5,
  },
  linkText: {
    flexDirection: "row",
  },
});
