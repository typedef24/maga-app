import * as React from "react";
import {
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
import { Ionicons } from "@expo/vector-icons";

// import components
import MyInvestmentPreview from "../components/MyInvestmentPreview";
import MyInvestment from "../components/MyInvestment";
import MenuDrawer from "../components/MenuDrawer";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
    };
  }

  _handlePress = () =>
    this.state({
      expanded: !this.state.expanded,
    });

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {Platform.OS === "android" && (
            <StatusBar backgroundColor="#003A8C" barStyle="light-content" />
          )}
          <View style={styles.headerContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "stretch",
              }}
            >
              <View></View>
              <View>
                <Text style={styles.mainText}>MAGA</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.setState({ menuVisible: true })}
              >
                <Ionicons name="md-menu" size={28} color="white" />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.moneyValue}>CURRENT VALUE</Text>
              <Text style={styles.currencyText}>usd 365456435</Text>
              <MyInvestmentPreview />
            </View>
          </View>
          <ScrollView>
            <View style={styles.scrolHeading}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Portfiolio
              </Text>
              <TouchableOpacity
                style={styles.linkText}
                onPress={() => this.props.navigation.navigate("myinvestsments")}
              >
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    backgroundColor: "#033c8d",
    // alignItems: "center",
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
