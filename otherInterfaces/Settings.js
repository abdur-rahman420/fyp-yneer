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
  Modal,
  AsyncStorage
} from "react-native";
import icon from "react-native-vector-icons/Entypo";
import { Header, Left, Right, Icon } from "native-base";
import * as firebase from "firebase";
const WIDTH = Dimensions.get("window").width;
var userData = "";
AsyncStorage.getItem("user").then(a => {
  userData = JSON.parse(a);
});
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
class Settings extends Component {
  state = {
    name: "",
    phonenumber: "",
    email: "",
    password: "",
    nameModal: false,
    phonenumberModal: false,
    emailModal: false,
    passwordModal: false
  };
  changeName = name => {
    firebase
      .database()
      .ref("/travelers/" + userData.cnic)
      .set({
        Name: name,
        CNIC: userData.cnic,
        Email: userData.email,
        Password: userData.password,
        PhoneNumber: userData.phoneNumber
      });
    alert("Name updated!");
  };
  changePhoneNumber = phone => {
    firebase
      .database()
      .ref("/travelers/" + userData.cnic)
      .set({
        Name: userData.name,
        CNIC: userData.cnic,
        Email: userData.email,
        Password: userData.password,
        PhoneNumber: phone
      });
    alert("Phone Number updated!");
  };
  changeEmail = email => {
    firebase
      .auth()
      .currentUser.updateEmail(email)
      .then(() => {
        firebase
          .database()
          .ref("/travelers/" + userData.cnic)
          .set({
            Email: email,
            Name: userData.name,
            CNIC: userData.cnic,
            Password: userData.password,
            PhoneNumber: userData.phoneNumber
          });
      });
    alert("Email updated!");
  };
  changePassword = password => {
    firebase
      .auth()
      .currentUser.updateEmail(password)
      .then(() => {
        firebase
          .database()
          .ref("/travelers/" + userData.cnic)
          .set({
            Password: password,
            PhoneNumber: userData.phoneNumber,
            Email: userData.email,
            Name: userData.name,
            CNIC: userData.cnic
          });
      });

    alert("Password updated!");
  };
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

        <TouchableOpacity
          onPress={() => {
            this.setState({ nameModal: true });
          }}
        >
          <View style={styles.tt}>
            <Text>Update Name</Text>
          </View>
        </TouchableOpacity>
        <Text> ────────────────────────────────────</Text>

        <TouchableOpacity
          onPress={() => {
            this.setState({ emailModal: true });
          }}
        >
          <View style={styles.tt}>
            <Text>Update Email</Text>
          </View>
        </TouchableOpacity>
        <Text> ────────────────────────────────────</Text>

        <TouchableOpacity
          onPress={() => {
            this.setState({ phonenumberModal: true });
          }}
        >
          <View style={styles.tt}>
            <Text>Update Phone Number</Text>
          </View>
        </TouchableOpacity>
        <Text> ────────────────────────────────────</Text>

        <TouchableOpacity
          onPress={() => {
            this.setState({ passwordModal: true });
          }}
        >
          <View style={styles.tt}>
            <Text>Change Password</Text>
          </View>
        </TouchableOpacity>
        <Text> ────────────────────────────────────</Text>

        {/*below is modal for name */}
        <View style={styles.ModalStyle}>
          <Modal
            transparent={true}
            animationType={"fade"}
            visible={this.state.nameModal}
          >
            <View
              style={{
                backgroundColor: "white",
                marginTop: 200,
                marginLeft: 30,
                marginRight: 30
              }}
            >
              <icon.Button
                name="circle-with-cross"
                iconStyle={{
                  backgroundColor: "white",
                  fontSize: 20,
                  flex: 1,
                  justifyContent: "flex-start"
                }}
                color="black"
                onPress={() => {
                  this.setState({ nameModal: false });
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: "white",
                height: 160,
                borderWidth: 1,
                marginLeft: 30,
                marginRight: 30
              }}
            >
              <TextInput
                placeholder="   enter new name"
                placeholderTextColor="black"
                style={{
                  margin: 10,
                  borderWidth: 1,
                  height: 30,
                  borderRadius: 20
                }}
                onChangeText={newName => {
                  this.setState({ name: newName });
                }}
              />

              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.ATbtn}
                onPress={this.changeName(this.state.name)}
              >
                <Text style={{ color: "white" }}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        {/*below is modal for phoneNumber */}
        <View style={styles.ModalStyle}>
          <Modal
            transparent={true}
            animationType={"fade"}
            visible={this.state.phonenumberModal}
          >
            <View
              style={{
                backgroundColor: "white",
                marginTop: 200,
                marginLeft: 30,
                marginRight: 30
              }}
            >
              <icon.Button
                name="circle-with-cross"
                iconStyle={{
                  backgroundColor: "white",
                  fontSize: 20,
                  flex: 1,
                  justifyContent: "flex-start"
                }}
                color="black"
                onPress={() => {
                  this.setState({ phonenumberModal: false });
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: "white",
                height: 160,
                borderWidth: 1,
                marginLeft: 30,
                marginRight: 30
              }}
            >
              <TextInput
                placeholder="   enter new phoneNumber"
                placeholderTextColor="black"
                style={{
                  margin: 10,
                  borderWidth: 1,
                  height: 30,
                  borderRadius: 20
                }}
                onChangeText={newNumber => {
                  this.setState({ phonenumber: newNumber });
                }}
              />

              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.ATbtn}
                onPress={this.changePhoneNumber(this.state.phonenumber)}
              >
                <Text style={{ color: "white" }}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        {/*below is modal for email */}
        <View style={styles.ModalStyle}>
          <Modal
            transparent={true}
            animationType={"fade"}
            visible={this.state.emailModal}
          >
            <View
              style={{
                backgroundColor: "white",
                marginTop: 200,
                marginLeft: 30,
                marginRight: 30
              }}
            >
              <icon.Button
                name="circle-with-cross"
                iconStyle={{
                  backgroundColor: "white",
                  fontSize: 20,
                  flex: 1,
                  justifyContent: "flex-start"
                }}
                color="black"
                onPress={() => {
                  this.setState({ emailModal: false });
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: "white",
                height: 160,
                borderWidth: 1,
                marginLeft: 30,
                marginRight: 30
              }}
            >
              <TextInput
                placeholder="   enter new email"
                placeholderTextColor="black"
                style={{
                  margin: 10,
                  borderWidth: 1,
                  height: 30,
                  borderRadius: 20
                }}
                onChangeText={newEmail => {
                  this.setState({ email: newEmail });
                }}
              />

              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.ATbtn}
                onPress={this.changeEmail(this.state.email)}
              >
                <Text style={{ color: "white" }}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        {/*below is modal for password */}
        <View style={styles.ModalStyle}>
          <Modal
            transparent={true}
            animationType={"fade"}
            visible={this.state.passwordModal}
          >
            <View
              style={{
                backgroundColor: "white",
                marginTop: 200,
                marginLeft: 30,
                marginRight: 30
              }}
            >
              <icon.Button
                name="circle-with-cross"
                iconStyle={{
                  backgroundColor: "white",
                  fontSize: 20,
                  flex: 1,
                  justifyContent: "flex-start"
                }}
                color="black"
                onPress={() => {
                  this.setState({ passwordModal: false });
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: "white",
                height: 160,
                borderWidth: 1,
                marginLeft: 30,
                marginRight: 30
              }}
            >
              <TextInput
                placeholder="   enter new Password"
                placeholderTextColor="black"
                style={{
                  margin: 10,
                  borderWidth: 1,
                  height: 30,
                  borderRadius: 20
                }}
                onChangeText={newPassword => {
                  this.setState({ password: newPassword });
                }}
              />

              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.ATbtn}
                onPress={this.changePassword(this.state.password)}
              >
                <Text style={{ color: "white" }}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tt: {
    marginTop: 30,
    paddingLeft: 18
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
  ModalStyle: {
    height: 400,
    width: WIDTH * 0.8,
    marginTop: 30
  }
});

export default Settings;
