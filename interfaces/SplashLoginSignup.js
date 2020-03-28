import React, { Component } from "react";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export default class SplashTwo extends React.Component {
  handleSignup = () => {
    this.props.navigation.navigate("SignupTraveler");
  };
  handleLogin = () => {
    this.props.navigation.navigate("LoginTraveler");
  };
  render() {
    return (
      <View style={styling.MainScreen}>
        <View style={styling.logoView}>
          <Image
            style={{ height: 200, width: 350 }}
            source={{
              uri:
                "http://www.yneer.com/wp-content/uploads/2019/08/Asset-15-8.png"
            }}
          />
        </View>
        <View style={styling.btnView}>
          <View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styling.btn}
              onPress={this.handleLogin}
            >
              <Text style={{ color: "white", fontSize: 18 }}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 10 }}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styling.btn}
              onPress={this.handleSignup}
            >
              <Text style={{ color: "white", fontSize: 18 }}>SIGNUP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styling = StyleSheet.create({
  MainScreen: {
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    flex: 3
  },
  logoView: {
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flex: 1
  },
  btnView: {
    justifyContent: "center",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  btn: {
    backgroundColor: "#1e90ff",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 200
  }
});
