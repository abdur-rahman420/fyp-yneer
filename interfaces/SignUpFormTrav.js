import React from "react";
import { useState } from "react";
import * as firebase from "firebase";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  Picker,
  AsyncStorage
} from "react-native";

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

export default class SignUpFormTrav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      cnic: "",
      phoneNumber: ""
    };
  }
  SignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.email.trim(),
        this.state.password
      )
      .then(() => {
        firebase
          .database()
          .ref("/travelers/" + this.state.cnic)
          .set({
            Name: this.state.name,
            Email: this.state.email,
            Password: this.state.password,
            CNIC: this.state.cnic,
            PhoneNumber: this.state.phoneNumber,
            Type: "Traveler"
          });
        AsyncStorage.setItem("user", JSON.stringify(this.state));
        this.props.navigation.navigate("TravelerMain", {
          UserInfo: this.state
        });
      })
      .catch(error => {
        alert(error);
      });
  };
  render() {
    return (
      <View style={styles.bgC}>
        <View style={styles.navBar}>
          <Image
            style={{ height: 55, width: 100, marginLeft: 10 }}
            source={{
              uri:
                "http://www.yneer.com/wp-content/uploads/2019/08/Asset-15-8.png"
            }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Text style={styles.txt}>SIGN-UP</Text>
          <Text style={styles.traveler}>Traveler</Text>
          <TextInput
            placeholder=" Full Name"
            style={styles.TN}
            onChangeText={fullname => {
              this.setState({ name: fullname });
            }}
          />
          <TextInput
            placeholder=" Email"
            style={styles.TN}
            keyboardType="email-address"
            onChangeText={email => {
              this.setState({ email });
            }}
          />
          <TextInput
            placeholder="Password (atleast 6 characters)"
            secureTextEntry={true}
            style={styles.TN}
            onChangeText={password => {
              this.setState({ password });
            }}
          />
          <TextInput
            placeholder="XXXXX-1234567-X (CNIC Number)"
            style={styles.TN}
            onChangeText={cnic => {
              this.setState({ cnic });
            }}
          />

          <TextInput
            placeholder=" Phone Number"
            style={styles.TN}
            onChangeText={phoneNumber => {
              this.setState({ phoneNumber });
            }}
          />
          <Button
            title="SignUp"
            style={styles.btn}
            color="orange"
            onPress={this.SignUp}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgC: {
    backgroundColor: "white",
    marginTop: 20
  },

  navBar: {
    height: 70,
    backgroundColor: "#000000",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  txt: {
    fontFamily: "Proxima",
    paddingLeft: 120,
    fontSize: 40,
    fontWeight: "bold",
    margin: 15
  },
  traveler: {
    fontFamily: "Proxima",
    paddingLeft: 160,
    fontSize: 30,
    fontWeight: "bold"
  },
  TN: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    margin: 10,
    padding: 10
  },
  btn: {
    position: "absolute",
    paddingTop: 8555,
    left: 0,
    margin: 20
  }
});
