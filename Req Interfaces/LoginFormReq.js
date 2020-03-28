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
            .ref("/requesters")
            .on("value", snapshot => {
              var reqstr = snapshot.val();
              var cnic = Object.keys(reqstr);
              for (var i = 0; i < cnic.length; i++) {
                var a = cnic[i];
                var e = reqstr[a].Email;
                if (e === this.state.email) {
                  console.log(e);
                  this.state.email = reqstr[a].Email;
                  this.state.password = reqstr[a].Password;
                  this.state.name = reqstr[a].Name;
                  this.state.phoneNumber = reqstr[a].PhoneNumber;
                  this.state.cnic = reqstr[a].CNIC;
                  this.state.type = reqstr[a].Type;
                  AsyncStorage.setItem("user", JSON.stringify(this.state));
                  break;
                }
              }
            });
          this.props.navigation.navigate("RequesterMain", {
            UserInfo: this.state
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
          source={require(".././assets/yneerlogo.png")}
          style={styles.logoView}
        />
        <View>
          <Text style={styles.txt}>LOG-IN Requester</Text>
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
    padding: 10,
    backgroundColor: "white"
  },
  logoView: {
    height: 220,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingRight: 14,
    marginTop: 60,
    marginRight: 30,
    marginLeft: 30
  },
  btn: {},
  bgC: {
    backgroundColor: "black",
    flex: 1
  }
};
