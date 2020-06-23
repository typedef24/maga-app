import * as React from "react";
// import { View, Text } from "react-native";
import { Modal, Provider, Text, Button, Portal } from "react-native-paper";

export default class ModalComponent extends React.Component {
  state = {
    visible: false,
  };

  _showModal = () => this.setState({ visible: true });
  _hideModal = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    return (
      <Provider>
        <Portal>
          <Modal visible={visible} onDismiss={this._hideModal}>
            <Text>Example Modal</Text>
          </Modal>
          <Button onPress={this._showModal}>Menu</Button>
        </Portal>
      </Provider>
    );
  }
}
