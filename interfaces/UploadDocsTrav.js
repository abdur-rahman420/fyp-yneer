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

export default class UpDocTrav extends React.Component {
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
          <Text style={{ fontSize: 30 }}>SIGN UP</Text>
          <Text style={{ fontSize: 20 }}>Upload Documents</Text>
          <View style={{ flexDirection: "row", width: 300 }}>
            <TextInput
              style={styles.entry}
              placeholder=" Add Profile Picture"
            />
            <TouchableOpacity activeOpacity={0.5} style={styles.uploadbtn}>
              <Text style={{ color: "white" }}>Choose</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: 300 }}>
            <TextInput style={styles.entry} placeholder=" Add CNIC Front" />
            <TouchableOpacity activeOpacity={0.5} style={styles.uploadbtn}>
              <Text style={{ color: "white" }}>Choose</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: 300 }}>
            <TextInput style={styles.entry} placeholder=" Add CNIC Back" />
            <TouchableOpacity activeOpacity={0.5} style={styles.uploadbtn}>
              <Text style={{ color: "white" }}>Choose</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: 300 }}>
            <TextInput style={styles.entry} placeholder=" Add Liscence Front" />
            <TouchableOpacity activeOpacity={0.5} style={styles.uploadbtn}>
              <Text style={{ color: "white" }}>Choose</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: 300 }}>
            <TextInput style={styles.entry} placeholder=" Add Liscence Back" />
            <TouchableOpacity activeOpacity={0.5} style={styles.uploadbtn}>
              <Text style={{ color: "white" }}>Choose</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: 300 }}>
            <TextInput
              style={styles.entry}
              placeholder=" Add Vehicle Reg. Book Front"
            />
            <TouchableOpacity activeOpacity={0.5} style={styles.uploadbtn}>
              <Text style={{ color: "white" }}>Choose</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.5} style={styles.signupbtn}>
            <Text style={{ color: "white" }}>Next Step >></Text>
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
  entry: {
    borderColor: "black",
    borderWidth: 1,
    width: 230,
    marginTop: 20
  },
  uploadbtn: {
    backgroundColor: "#ff4500",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 80,
    marginTop: 20
  },
  signupbtn: {
    alignItems: "center",
    backgroundColor: "#ff4500",
    padding: 10,
    width: 300,
    marginTop: 20
  }
});
