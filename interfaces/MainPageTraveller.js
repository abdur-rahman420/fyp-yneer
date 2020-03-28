import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Modal,
  AsyncStorage
} from "react-native";
import AddTripModal from "./../components/AddTripModal";
import FindRequests from "./../components/FindRequestsModal";
import Icon from "react-native-vector-icons/Entypo";
import MenuButton from "./../components/menuButton";
import SearchPlaces from "./../components/googleplaces";
import Search from "react-native-search-box";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import Marker from "react-native-maps";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
import { withOrientation } from "react-navigation";

export default class MainPage extends React.Component {
  state = {
    Cnic: "",
    userData: "",
    currentLatitude: 0,
    currentLongitude: 0,
    PickupCoordinates: {},
    DropoffCoordinates: {}
  };
  componentDidMount() {
    AsyncStorage.getItem("user").then(a => {
      this.setState({ userData: JSON.parse(a) });
      this.setState({ Cnic: JSON.parse(a).cnic });
    });

    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
      maximumAge: 60 * 60 * 24
    };
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ currentLatitude: position.coords.latitude });
      this.setState({ currentLongitude: position.coords.longitude });
      console.log(currentLatitude);
      console.log(currentLongitude);
    });
  }

  setPickupCoordinates = e => {
    this.setState({ PickupCoordinates: e.nativeEvent.coordinate });
    console.log(this.state.PickupCoordinates);
  };
  setDropoffCoordinates = e => {
    this.setState({ DropoffCoordinates: e.nativeEvent.coordinate });
    console.log(this.state.DropoffCoordinates);
  };
  render() {
    console.log(this.state.Cnic);
    console.log(this.state.userData);
    console.log("hehehe");
    return (
      <View>
        <View style={styles.navBar}>
          <MenuButton navigation={this.props.navigation} />
          <Image
            style={{ height: 55, width: 100, marginLeft: 100, marginTop: 20 }}
            source={{
              uri:
                "http://www.yneer.com/wp-content/uploads/2019/08/Asset-15-8.png"
            }}
          />
        </View>

        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: this.state.currentLatitude,
            longitude: this.state.currentLongitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
          showsUserLocation={true}
        >
          <MapView.Marker
            draggable
            title="Pickup Location"
            coordinate={{
              latitude: this.state.currentLatitude,
              longitude: this.state.currentLongitude
            }}
            onDragEnd={e => {
              this.setPickupCoordinates(e);
            }}
          />
          <MapView.Marker
            draggable
            title="DropOff Location"
            coordinate={{
              latitude: this.state.currentLatitude,
              longitude: this.state.currentLongitude
            }}
            onDragEnd={e => {
              this.setDropoffCoordinates(e);
            }}
          />
        </MapView>

        <View style={styles.buttonView}>
          <FindRequests />
          <AddTripModal uData={this.state.userData} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 100,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },

  buttonView: {
    flexDirection: "row",
    flex: 1
  },
  findReqbtn: {
    alignItems: "center",
    backgroundColor: "#ff4500",
    justifyContent: "center",
    height: 60,
    width: 200,
    borderWidth: 1
  },
  map: {
    marginTop: 50,
    height: 550,
    width: 400
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
    margin: 30
  }
});
