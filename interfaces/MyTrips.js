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
import MenuButton from "./../components/menuButton";
import { ScrollView } from "react-native-gesture-handler";

class MyTrips extends React.Component {
  state = {};
  render() {
    return (
      <View>
        <View style={styles.navBar}>
          <MenuButton navigation={this.props.navigation} />
          <Image
            style={{ height: 55, width: 100, marginLeft: 100, marginTop: 20 }}
            source={{
              uri:
                "http://www.yneer.com/wp-content/uploads/2019/08/Asset-15-8.png"
            }}
          />
        </View>
        <ScrollView style={styles.trips}></ScrollView>
      </View>
    );
  }
}

export default MyTrips;

const styles = StyleSheet.create({
  navBar: {
    height: 100,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  trips: {
    backgroundColor: "white"
  }
});
