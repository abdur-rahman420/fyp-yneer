import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity
} from "react-native";

class TravelDB extends Component {
  render() {
    return (
      <View style={styles.bgC}>
        {/* <View style={styles.navBar}>
        <Image
          style={{ height: 55, width: 100, marginLeft: 10 }}
          source={{
            uri:
              "http://www.yneer.com/wp-content/uploads/2019/08/Asset-15-8.png"
          }}
        />
      </View> */}
        <View style={styles.signupform}>
          <Text style={styles.TB}>TRAVELER DASHBOARD</Text>
          <View style={styles.DashView}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.DashOptions}
              color="orange"
            >
              <Text style={styles.txts} color="white">
                Update profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              color="orange"
              activeOpacity={0.5}
              style={styles.DashOptions}
            >
              <Text style={styles.txts}>Reschedule Trip</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.DashView}>
            <TouchableOpacity activeOpacity={0.5} style={styles.DashOptions}>
              <Text style={styles.txts}>Bank Information</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.DashOptions}>
              <Text style={styles.txts}>Trip History</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 60, marginRight: 20, marginLeft: 20 }}>
            {
              <Button
                title="Back To Main Page"
                style={styles.backBtn}
                color="orange"
                onPress={() => {
                  this.props.navigation.navigate("TravelerMain");
                }}
              />
            }
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bgC: {
    // backgroundColor:'white'
  },
  TB: {
    //fontFamily: "Proxima Nova",
    // paddingLeft:60,
    fontSize: 25,
    fontWeight: "bold",
    margin: 20
  },
  txts: {
    // fontWeight: "bold",
    // color:'white',
    fontSize: 15
  },

  DashView: {
    flexDirection: "row"
  },
  DashOptions: {
    height: 130,
    width: 150,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 35,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray"
  },
  backBtn: {}
});

export default TravelDB;
