import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  Picker
} from "react-native";

export default class DashboardTraveller extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.navBar}>
          <Image
            style={{ height: 55, width: 100, marginLeft: 10 }}
            source={{
              uri:
                "http://www.yneer.com/wp-content/uploads/2019/08/Asset-15-8.png"
            }}
          />
        </View>
        <View style={styles.signupform}>
          <Text style={{ fontSize: 30 }}>TRAVELER DASHBOARD</Text>
          <View style={styles.DashView}>
            <TouchableOpacity activeOpacity={0.5} style={styles.DashOptions}>
              <Text style={{ color: "black" }}>Update profile</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.DashOptions}>
              <Text style={{ color: "black" }}>Reschedule Trip</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.DashView}>
            <TouchableOpacity activeOpacity={0.5} style={styles.DashOptions}>
              <Text style={{ color: "black" }}>Bank Information</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.DashOptions}>
              <Text style={{ color: "black" }}>Trip History</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.5} style={styles.backBtn}>
            <Text style={{ color: "white" }}>Back To Main Page</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 100,
    backgroundColor: "#000000",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  signupform: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: 600,
    width: 600
  },
  DashView: {
    height: 150,
    flexDirection: "row"
  },
  DashOptions: {
    height: 130,
    width: 150,
    backgroundColor: "#ff4500",
    alignItems: "center",
    justifyContent: "center"
  },
  backBtn: {
    alignItems: "center",
    backgroundColor: "#ff4500",
    padding: 10,
    width: 300,
    marginTop: 20
  }
});
