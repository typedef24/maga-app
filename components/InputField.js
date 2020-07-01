import * as React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import fonts from "../constants/fonts";

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
          style={{
            ...this.props.inputStyle,
            height: 60,
            backgroundColor: "white",
            padding: 15,
            fontSize: fonts.large,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
