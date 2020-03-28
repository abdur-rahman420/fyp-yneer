import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Button,
  Dimensions
} from "react-native";
import * as firebase from "firebase";
import Icon from "react-native-vector-icons/Entypo";
import { TextInput } from "react-native-gesture-handler";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

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

class FindRequests extends React.Component {
  state = {
    userData: "",
    isVisible: false,
    startAdd: "",
    destAdd: ""
  };

  ModalVisibility = bool => {
    this.setState({ isVisible: bool });
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.findReqbtn}
          onPress={() => {
            this.setState({ isVisible: true });
          }}
        >
          <Text style={{ color: "white" }}>Find Requests</Text>
        </TouchableOpacity>
        <View style={styles.ModalStyle}>
          <Modal
            transparent={true}
            animationType={"fade"}
            visible={this.state.isVisible}
          >
            <View
              style={{
                backgroundColor: "white",
                marginTop: 200,
                marginLeft: 30,
                marginRight: 30
              }}
            >
              <Icon.Button
                name="circle-with-cross"
                iconStyle={{
                  backgroundColor: "white",
                  fontSize: 20,
                  flex: 1,
                  justifyContent: "flex-start"
                }}
                color="black"
                onPress={() => {
                  this.setState({ isVisible: false });
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: "white",
                height: 300,
                borderWidth: 1,
                marginLeft: 30,
                marginRight: 30
              }}
            >
              <TextInput
                placeholder="   enter start address"
                placeholderTextColor="black"
                style={{
                  margin: 10,
                  borderWidth: 1,
                  height: 30,
                  borderRadius: 20
                }}
                onChangeText={startAddress => {
                  this.setState({ startAdd: startAddress });
                }}
              />
              <TextInput
                placeholder="   enter destination address"
                placeholderTextColor="black"
                style={{
                  margin: 10,
                  borderWidth: 1,
                  height: 30,
                  borderRadius: 20
                }}
                onChangeText={destAddress => {
                  this.setState({ destAdd: destAddress });
                }}
              />

              <TouchableOpacity activeOpacity={0.5} style={styles.ATbtn}>
                <Text style={{ color: "white" }}>Find Requests</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

export default FindRequests;

const styles = StyleSheet.create({
  ModalSize: {
    height: 150,
    width: 250,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  ATbtn: {
    height: 60,
    width: 250,
    backgroundColor: "#ff4500",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 35,
    marginTop: 20
  },
  findReqbtn: {
    alignItems: "center",
    backgroundColor: "#ff4500",
    justifyContent: "center",
    height: 60,
    width: 200,
    borderWidth: 1
  },
  ModalStyle: {
    height: 400,
    width: WIDTH * 0.8,
    marginTop: 30
  }
});
