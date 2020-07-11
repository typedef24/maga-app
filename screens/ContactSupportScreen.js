import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  StatusBar,
} from "react-native";
import fonts from "../constants/fonts";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";

export default class ContactSupportScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  // Handle data submitted
  handleSubmit() {
    alert("Data " + JSON.stringify(this.state));
  }

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "android" && (
          <StatusBar backgroundColor="#fffcfc" barStyle="dark-content" />
        )}
        <View style>
          <Text>
            Complete the form below to send us a message. Please try to be brief
            and precise about your complains. For more urgent issue consider
            calling us through our toll free line. 333 215 145
          </Text>
          <TextInput
            // Inherit any props passed to it; e.g., multiline, numberOfLines below
            style={styles.inputStyle}
            multiline={true}
            numberOfLines={10}
          />
        </View>
        <Button
          touchableProps={{
            onPress: () => this.handleSubmit(),
          }}
          body={
            <Text
              style={[globalStyles.btnLabel, { textTransform: "uppercase" }]}
            >
              Send Message
            </Text>
          }
          touchableStyleProps={{
            backgroundColor: "#52c41a",
            marginRight: 5,
            marginLeft: 5,
            marginTop: 20,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    justifyContent: "space-between",
  },
  inputStyle: {
    backgroundColor: "#e6f7ff",
    marginTop: 15,
    fontSize: fonts.medium,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#c5eaff",
    textAlignVertical: "top",
  },
});
