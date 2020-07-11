import React, { useState, useEffect } from "react";
import { Text, StatusBar, Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { OppotunityPreview } from "../components/OppotunityPreview";
import { PageTitle } from "../components/PageTitle";

// import API connection
import Strapi from "../api/Strapi";
import { ActivityIndicator } from "react-native-paper";

export default function OppotunitiesScreen({ navigation }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  // Fectch available Opportunities
  const fetchOpportunities = async () => {
    try {
      // Set loading indicator to true
      setIsLoading(true);
      const response = await Strapi.get("/opportunities");
      setData(response.data);
      // Set loading indicator to false
      setIsLoading(false);
    } catch (error) {
      // Set loading indicator to false
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {Platform.OS === "android" && (
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      )}
      <PageTitle title="Investment Opportunities" />
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" color="green" />
        </View>
      ) : null}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OppotunityPreview
            item={item}
            touchableProps={{
              onPress: () => navigation.navigate("investment-card", { item }),
            }}
          />
        )}
      />
    </SafeAreaView>
  );
}
