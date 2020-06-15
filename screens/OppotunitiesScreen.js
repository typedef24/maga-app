import * as React from "react";
import { Text, StatusBar, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Progress from "../components/samples/progressBar";
import { ScrollView } from "react-native-gesture-handler";
import { OppotunityPreview } from "../components/OppotunityPreview";

export default function OppotunitiesScreen() {
  return (
    <SafeAreaView>
      <Text
        style={{
          textAlign: "center",
          padding: 20,
          backgroundColor: "#FFFFFF",
          fontSize: 23,
          fontWeight: "bold",
        }}
      >
        Invesments Opportunities
      </Text>
      <ScrollView>
        <OppotunityPreview />
      </ScrollView>
    </SafeAreaView>
  );
}
