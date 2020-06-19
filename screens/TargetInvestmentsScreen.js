import * as React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

// import components
import { PageTitle } from "../components/PageTitle";
import { HorizontalSlider } from "../components/HorizontalSlider";
import { Accordion } from "../components/Accordion";
import globalStyles from "../constants/globalStyles";
import Button from "../components/Button";
import fonts from "../constants/fonts";

export default function TargetInvestmentsScreen({ navigation }) {
  return (
    <View>
      <PageTitle title="Target Investments" />
      <View style={styles.container}>
        <View style={styles.containerContent}>
          <Text style={styles.textHeading}>Enter investment amount</Text>
          <TextInput style={styles.inputStyle} keyboardType="numeric" />
        </View>
        <View style={styles.containerSlider}>
          <Text style={[styles.textHeading, { marginTop: 20 }]}>
            Investment Time
          </Text>
          <View style={styles.sliderStyle}>
            <HorizontalSlider minValue={0} maxValue={36} unit="months" />
          </View>
        </View>
        <View style={styles.containerSlider}>
          <Text style={[styles.textHeading, { marginTop: 20 }]}>
            Success Index
          </Text>
          <View style={styles.sliderStyle}>
            <HorizontalSlider minValue={0.6} maxValue={10.6} />
          </View>
        </View>
        <View style={styles.containerSlider}>
          <Text style={[styles.textHeading, { marginTop: 20 }]}>
            Risk Level
          </Text>
          <View style={styles.sliderStyle}>
            <Accordion label1="Low risk" label2="Medium" label3="High risk" />
          </View>
        </View>
      </View>
      <View style={styles.btnSearch}>
        <Button
          body={<Text style={globalStyles.btnLabel}>Suggest Investments</Text>}
          touchableStyleProps={{ backgroundColor: "#52c41a" }}
          touchableProps={{
            onPress: () => {
              navigation.navigate("no-result");
            },
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginRight: 5,
    marginLeft: 5,
    // justifyContent: "space-between",
  },
  containerContent: {
    margin: 5,
  },
  textHeading: {
    color: "#a28f8f",
    fontSize: fonts.large,
  },
  inputStyle: {
    backgroundColor: "#e6f7ff",
    height: 45,
    padding: 5,
    marginTop: 15,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#c5eaff",
  },
  containerSlider: {
    margin: 5,
  },
  sliderStyle: {
    marginTop: 10,
    marginRight: 25,
  },
  btnSearch: {
    marginTop: 50,
    marginRight: 5,
    marginLeft: 5,
  },
});
