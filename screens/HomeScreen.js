import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";
import { SafeAreaView } from "react-native-safe-area-context";

// import components
import MyInvestmentPreview from "../components/MyInvestmentPreview";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
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
      </ScrollView>
    </View>
  );
}

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change"
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
});
