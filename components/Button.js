import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        {...this.props.touchableProps} // Inherit any props passed to it e.g onPress
        style={(styles.container, { ...this.props.touchableStyleProps })}
      >
        {this.props.body}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    //marginBottom: 10,
    //alignContent: "center"
  },

});
