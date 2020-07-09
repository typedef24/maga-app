import React, { useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

// import components
import MyInvestmentPreview from "../components/MyInvestmentPreview";
import MyInvestment from "../components/MyInvestment";
import { Ionicons } from "@expo/vector-icons";

// API Connetion
import Strapi from "../api/Strapi";

export default function HomeScreen({ route, navigation }) {
  const [data, setData] = useState();
  const [currentValue, setCurrentValue] = useState();

  useEffect(() => {
    fetchInvestments();
  }, []);

  // Fetch for available investments
  const fetchInvestments = async () => {
    try {
      const response = await Strapi.get("/investments", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk0MDI0MzQwLCJleHAiOjE1OTY2MTYzNDB9.gu2xIUQTlwfJW0t6yo-JhjDZx3DaU0aLilNpj8jd3xw",
        },
      });
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
              // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              onPress={() => alert("Clicked")}
            >
              <Ionicons name="md-menu" size={28} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.moneyValue}>CURRENT VALUE</Text>
            <Text style={styles.currencyText}>usd 36545643</Text>
            <MyInvestmentPreview />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.scrolHeading}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Portfiolio</Text>
            <TouchableOpacity
              style={styles.linkText}
              onPress={() => navigation.navigate("myinvestsments")}
            >
              <Text>see all </Text>
              <Icon name="ios-arrow-forward" size={20} />
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 60 }}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <MyInvestment
                  item={item}
                  touchableProps={{
                    onPress: () =>
                      navigation.navigate("details-screen", { item }),
                  }}
                />
              )}
            />
          </View>
        </View>
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
