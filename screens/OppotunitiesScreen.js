import React, { useState, useEffect } from "react";
import { Text, StatusBar, Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { OppotunityPreview } from "../components/OppotunityPreview";
import { PageTitle } from "../components/PageTitle";

import axios from "axios";

export default function OppotunitiesScreen({ navigation }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetchOpportunities();
  });

  async function fetchOpportunities() {
    try {
      axios
        .get("http://64.227.20.176/opportunities")
        .then((response) => {
          // console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.log("An errored occured");
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <PageTitle title="Investment Opportunities" />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <OppotunityPreview item={item} />}
      />
    </SafeAreaView>
  );
}
