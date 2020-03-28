import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  AsyncStorage
} from "react-native";
import React, { Component } from "react";
import * as firebase from "firebase";

export default class LoginFormTrav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      phoneNumber: "",
      name: "",
      cnic: "",
      type: ""
    };
  }
  LoginUser = () => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(user => {
          console.log(user);
          firebase
            .database()
            .ref("/travelers")
            .on("value", snapshot => {
              var travs = snapshot.val();
              var cnic = Object.keys(travs);
              for (var i = 0; i < cnic.length; i++) {
                var a = cnic[i];
                var e = travs[a].Email;
                if (e === this.state.email) {
                  console.log(e);
                  this.state.email = travs[a].Email;
                  this.state.password = travs[a].Password;
                  this.state.name = travs[a].Name;
                  this.state.phoneNumber = travs[a].PhoneNumber;
                  this.state.cnic = travs[a].CNIC;
                  this.state.type = travs[a].Type;
                  AsyncStorage.setItem("user", JSON.stringify(this.state));

                  break;
                }
              }
            });
          this.props.navigation.navigate("TravelerMain", {
            UserCnic: this.state.cnic
          });
        });
    } catch (error) {
      console.log(error);
      alert("wrong Email or Password!");
    }
  };
  render() {
    return (
      <View style={styles.bgC}>
        <Image
          source={require(".././assets/logo.png")}
          style={styles.logoView}
        />
        <View>
          <Text style={styles.txt}>LOG-IN</Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            placeholder="Email/CNIC"
            style={styles.TN}
            onChangeText={email => {
              this.setState({ email });
            }}
            textContentType="emailAddress"
            value={this.state.email}
          />

          <TextInput
            placeholder="Password"
            style={styles.TN}
            secureTextEntry={true}
            textContentType="password"
            onChangeText={password => {
              this.setState({ password });
            }}
            value={this.state.password}
          />
          <Text style={styles.txt1}>forgot Password?</Text>
          <Button
            title="LOGIN"
            color="orange"
            style={styles.btn}
            onPress={this.LoginUser}
          />
        </View>
      </View>
    );
  }
}
const styles = {
  txt1: {
    paddingLeft: 290,
    fontWeight: "bold",
    fontSize: 12,
    margin: 10
  },
  txt: {
    paddingLeft: 135,
    fontSize: 40,
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
  logoView: {
    height: 320,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingRight: 14
  },
  btn: {},
  bgC: {
    backgroundColor: "white"
  }
};
