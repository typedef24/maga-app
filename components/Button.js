import * as React from "react";
import { TouchableOpacity } from "react-native";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        {...this.props.touchableProps} // Inherit any props passed to it e.g onPress
        style={({ ...this.props.touchableStyleProps })}
      >
        {this.props.body}
      </TouchableOpacity>
    );
  }
}