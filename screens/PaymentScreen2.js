import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";
import fonts from "../constants/fonts";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import CheckBox from "react-native-check-box";
import { RadioButton } from "react-native-paper";

export default function PaymentScreen2({ route, navigation }) {
  const [termsChecked, setTermsChecked] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  // Read params from navigation state
  const { item } = route.params;

  function handleSubmit() {
    if (!termsChecked && !paymentMethod)
      Alert.alert(
        "NOTICE!",
        "Please select a payment method and accept our terms and conditions of service to continue. Thanks"
      );
    else if (termsChecked && !paymentMethod)
      Alert.alert(
        "NOTICE!",
        "Please select a payment method to continue. Thanks"
      );
    else if (!termsChecked && paymentMethod)
      Alert.alert(
        "NOTICE!",
        "Please you have to accept our terms and conditions of service to continue. Thanks"
      );
    else
      navigation.navigate("paymentScreen3", {
        paymentMethod: paymentMethod,
        item,
      });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#f4fbff",
              padding: 15,
            }}
          >
            <FontAwesome
              style={{ marginRight: 10 }}
              name="check-circle"
              size={20}
              color="#52c41a"
            />
            <View
              style={{
                borderBottomColor: "#52c41a",
                borderBottomWidth: 1,
                flex: 2,
              }}
            />
            <Text style={{ flex: 1, fontWeight: "bold", marginLeft: 10 }}>
              pay
            </Text>
            <View
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                flex: 2,
              }}
            />
            <Text style={{ flex: 1, color: "gray", marginLeft: 10 }}>
              confirm
            </Text>
          </View>

          <View style={{ padding: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
                backgroundColor: "#f4fbff",
                borderWidth: 1,
                borderColor: "#ccedff",
              }}
            >
              <View>
                <Text>Total Amount :</Text>
                <Text style={{ fontWeight: "bold" }}>USD {item.price}</Text>
              </View>
              <Button
                body={
                  <Text
                    style={{
                      color: "#003a8c",
                      fontWeight: "bold",
                      fontSize: fonts.medium,
                    }}
                  >
                    DETAILS
                  </Text>
                }
                touchableStyleProps={{
                  backgroundColor: "#f4fbff",
                }}
                touchableProps={{
                  onPress: () => {
                    alert("DETAILS Btn Clicked!!");
                  },
                }}
              />
            </View>
            <View
              style={{
                padding: 20,
                backgroundColor: "#f4fbff",
                borderWidth: 1,
                borderColor: "#ccedff",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome
                style={{ marginRight: 10 }}
                name="check-circle"
                size={25}
                color="#52c41a"
              />
              <Text style={{ fontWeight: "bold" }}>CASHBACK025</Text>
            </View>
          </View>

          <Text
            style={{
              textAlign: "center",
              padding: 10,
              fontWeight: "bold",
              color: "#2f3d52",
              fontSize: fonts.large,
            }}
          >
            select payment method
          </Text>

          <View style={{ marginBottom: 40 }}>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor:
                  paymentMethod === "Bank Transfer" ? "#5c8bc0" : "#c3eaff",
                backgroundColor:
                  paymentMethod == "Bank Transfer" ? "#bae7ff" : "#f4fbff",
                padding: 10,
                alignItems: "center",
              }}
            >
              <RadioButton
                value="Bank Transfer"
                status={
                  paymentMethod === "Bank Transfer" ? "checked" : "unchecked"
                }
                onPress={() => {
                  setPaymentMethod("Bank Transfer");
                }}
              />
              <FontAwesome5
                name="money-check-alt"
                size={20}
                color="#003a8c"
                style={{ marginLeft: 20, marginRight: 10 }}
              />
              <Text
                style={{
                  fontSize: fonts.large,
                  fontWeight: "bold",
                  color: "#003a8c",
                }}
              >
                Bank Transfer
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: paymentMethod === "Paypal" ? "#5c8bc0" : "#c3eaff",
                backgroundColor:
                  paymentMethod == "Paypal" ? "#bae7ff" : "#f4fbff",
                padding: 10,
                alignItems: "center",
              }}
            >
              <RadioButton
                value="Paypal"
                status={paymentMethod === "Paypal" ? "checked" : "unchecked"}
                onPress={() => {
                  setPaymentMethod("Paypal");
                }}
              />
              <FontAwesome
                name="paypal"
                size={20}
                color="#003a8c"
                style={{ marginLeft: 20, marginRight: 10 }}
              />
              <Text
                style={{
                  fontSize: fonts.large,
                  fontWeight: "bold",
                  color: "#003a8c",
                }}
              >
                Paypal
              </Text>
            </View>
          </View>

          <CheckBox
            style={{ flex: 1, padding: 10, marginTop: 5 }}
            onClick={() => {
              setTermsChecked({ termsChecked: !termsChecked });
            }}
            isChecked={termsChecked}
            rightText={
              "I have read and approved all content of prospectus and Fund facts sheet. I understand the risk to my investment decision and Kemet LLC is not responsible for any losses in the investment. I agree to Kemet LLC terms and conditions and Privacy policy."
            }
          />
        </View>
        <Button
          body={<Text style={globalStyles.btnLabel}>CONTINUE</Text>}
          touchableStyleProps={{
            backgroundColor: "#52c41a",
            marginRight: 15,
            marginLeft: 15,
          }}
          touchableProps={{
            onPress: () => handleSubmit(),
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 20,
    justifyContent: "space-between",
  },
});
