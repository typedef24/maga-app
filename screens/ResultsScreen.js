import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { OppotunityPreview } from "../components/OppotunityPreview";

const ResultScreen = ({ route, navigation }) => {
  //   const { data } = route.params;
  const data = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>{JSON.stringify(data)}</Text>
      {/* <FlatList
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
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ResultScreen;
