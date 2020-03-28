import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  AsyncStorage
} from "react-native";
import menuButton from "./menuButton";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

class SideMenu extends React.Component {
  state = {
    userData: ""
  };
  componentDidMount() {
    AsyncStorage.getItem("user").then(a => {
      this.setState({ userData: JSON.parse(a) });
    });
  }
  navLink(nav, text) {
    return (
      <TouchableOpacity
        style={{ height: 70 }}
        onPress={() => {
          this.props.navigation.navigate(nav);
        }}
      >
        <Text style={styles.opt}>{text}</Text>
      </TouchableOpacity>
    );
  }
  render() {
    console.log("hahaha");
    console.log(this.state.userData);
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profileInfo}>
            <View style={styles.ImgView}>
              <Image
                style={styles.img}
                source={require("./../assets/image1.jpg")}
              />
            </View>
            <View style={styles.profileText}>
              <Text style={{ color: "white", fontSize: 20, marginLeft: 15 }}>
                {this.state.userData.name}
              </Text>
              <Text style={{ color: "white", fontSize: 16, marginLeft: 15 }}>
                4.8
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.screens}>
          {this.navLink("Home", "Home")}
          {this.navLink("Trips", "Trips")}
          {this.navLink("Notifications", "Notifications")}
          {this.navLink("Dashboard", "Dashboard")}
          {this.navLink("Settings", "Settings")}
        </View>
        <TouchableOpacity
          style={styles.signOut}
          onPress={() => {
            AsyncStorage.removeItem("user");
            this.props.navigation.navigate("LoginTraveler");
          }}
        >
          <Text style={{ color: "red", fontSize: 20 }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SideMenu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray"
  },
  opt: {
    flex: 1,
    fontSize: 24,
    padding: 6,
    margin: 5,
    marginLeft: 15,
    paddingLeft: 20,
    color: "black"
  },
  profile: {
    backgroundColor: "#ff4500",
    height: 180
  },
  profileInfo: {
    height: 120,
    flexDirection: "row",
    backgroundColor: "#ff4500",
    marginTop: 60
  },
  profileText: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  ImgView: {
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 50,
    marginLeft: 20
  },
  screens: {
    backgroundColor: "white",
    flex: 1
  },
  signOut: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderWidth: 1
  }
});
