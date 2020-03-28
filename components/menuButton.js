import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { DrawerActions } from "react-navigation-drawer";

class MenuButton extends React.Component {
  state = {
    userData: this.props.navigation.state.params
  };
  render() {
    console.log("lalala");
    console.log(this.state);
    return (
      <Icon.Button
        name="menu"
        backgroundColor="#000000"
        iconStyle={{ marginLeft: 10, marginTop: 20, fontSize: 40 }}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.toggleDrawer(), {
            UserInfo: this.state.userData
          });
        }}
      ></Icon.Button>
    );
  }
}

export default MenuButton;
