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
  Dimensions,
  AsyncStorage,
  FlatList
} from "react-native";
import { Header, Left, Right, Icon } from "native-base";
import { DrawerActions } from "react-navigation-drawer";
import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAMECk2PvnFPi51y77c2TIurqzJqWsuWH0",
  authDomain: "yneer-19e0e.firebaseapp.com",
  databaseURL: "https://yneer-19e0e.firebaseio.com",
  projectId: "yneer-19e0e",
  storageBucket: "yneer-19e0e.appspot.com",
  messagingSenderId: "979443319716",
  appId: "1:979443319716:web:690b89edb5f50f03f8b731",
  measurementId: "G-59Y5LPP5LQ"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
var Trips = [];
var arr = [];
class MyTrips extends Component {
  state = {
    userData: ""
  };
  componentDidMount() {
    this.setState({ userData: "" });
    AsyncStorage.getItem("user").then(a => {
      this.setState({ userData: JSON.parse(a) });
    });
  }
  componentWillUpdate() {
    Trips = [];
    arr = [];
  }
  renderTrips = ({ item }) => {
    return (
      <View style={styles.tt}>
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>{item.key}</Text>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Start Location:{"  "}
          {item.StartAddress}
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Destination Location:{"  "}
          {item.DestinationAddress}
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Description:{"  "}
          {item.Description}
        </Text>
        <Text> ────────────────────────────────────</Text>
      </View>
    );
  };
  render() {
    var trips, a;
    firebase
      .database()
      .ref("/trips")
      .on("value", snapshot => {
        trips = snapshot.val();
        console.log(this.state.userData.cnic);
        var cnic = Object.keys(trips);
        for (var i = 0; i < cnic.length; i++) {
          if (cnic[i] === this.state.userData.cnic) {
            a = cnic[i];
            Trips.push(trips[a]);
            break;
          }
        }
        console.log(Trips[0]);
        arr = Object.values(Trips[0]);
        console.log(arr);
      });

    return (
      <View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            height: 70,
            fontSize: 30,
            fontWeight: "bold",
            backgroundColor: "black"
          }}
        >
          <Icon
            name="menu"
            style={{ color: "#505050", paddingLeft: 15 }}
            onPress={() => {
              this.props.navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          />
          <Text style={{ fontSize: 30, color: "white", paddingLeft: 80 }}>
            {" "}
            My Trips{" "}
          </Text>
        </View>

        <ScrollView>
          <FlatList data={arr} renderItem={this.renderTrips} />
        </ScrollView>
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

export default MyTrips;
