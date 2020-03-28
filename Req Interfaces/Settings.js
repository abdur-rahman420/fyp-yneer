import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions
} from "react-native";
import { Header, Left, Right, Icon } from "native-base";

class Settings extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            height: 90,
            fontSize: 30,
            fontWeight: "bold",
            backgroundColor: "black"
          }}
        >
          <Icon
            name="ios-arrow-back"
            size={25}
            style={{
              color: "#505050",
              paddingLeft: 15,
              marginLeft: 10,
              marginTop: 5
            }}
            onPress={() => {
              this.props.navigation.navigate("TravelerMain");
            }}
          />
          {/* <Icon name="ios-arrow-back" size={25} style={{ color: "#505050" }} /> */}
          <Text style={{ fontSize: 30, color: "white", paddingLeft: 80 }}>
            {" "}
            Settings{" "}
          </Text>
        </View>

        <View style={styles.tt}>
          <TouchableOpacity>
            <Text>Update Name</Text>
          </TouchableOpacity>
          <Text> ────────────────────────────────────</Text>
        </View>

        <View style={styles.tt}>
          <TouchableOpacity>
            <Text>Update Email</Text>
          </TouchableOpacity>
          <Text> ────────────────────────────────────</Text>
        </View>

        <View style={styles.tt}>
          <TouchableOpacity>
            <Text>Update Phone Number</Text>
          </TouchableOpacity>
          <Text> ────────────────────────────────────</Text>
        </View>

        <View style={styles.tt}>
          <TouchableOpacity>
            <Text>Change Password</Text>
          </TouchableOpacity>
          <Text> ────────────────────────────────────</Text>
        </View>

        <View style={styles.tt}>
          <TouchableOpacity>
            <Text>Date of birth</Text>
          </TouchableOpacity>
          <Text> ────────────────────────────────────</Text>
        </View>

        <View style={styles.tt}>
          <TouchableOpacity>
            <Text>Change default location</Text>
          </TouchableOpacity>
          <Text> ────────────────────────────────────</Text>
        </View>

        <View style={styles.tt}>
          <TouchableOpacity>
            <Text>Update Address</Text>
          </TouchableOpacity>
          <Text> ────────────────────────────────────</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tt: {
    marginTop: 30,
    paddingLeft: 18
  }
});

export default Settings;
