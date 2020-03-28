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

class Notifications extends Component {
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
              marginTop: 5,
              marginLeft: 10
            }}
            onPress={() => {
              this.props.navigation.navigate("TravelerMain");
            }}
          />
          {/* <Icon name="ios-arrow-back" size={25} style= {{color:'#505050'}} /> */}
          <Text style={{ fontSize: 30, color: "white", paddingLeft: 80 }}>
            {" "}
            Notifications{" "}
          </Text>
        </View>

        <View style={styles.tt}>
          <Text style={{ fontSize: 17 }}>
            You have pending offers, go to points menu to avail them
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>Date, Day</Text>
          <Text> ────────────────────────────────────</Text>
        </View>

        <View style={styles.tt}>
          <Text style={{ fontSize: 17 }}>
            Profile not complete, go to Settings and complete your file
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>Date, Day</Text>
          <Text> ────────────────────────────────────</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tt: {
    marginTop: 50,
    paddingLeft: 18
  }
});

export default Notifications;
