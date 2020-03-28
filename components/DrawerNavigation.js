import React from "react";
import { Dimensions, AsyncStorage } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerActions } from "react-navigation-drawer";
import MyTrips from "./../otherInterfaces/MyTrips";
import MainPage from "./../interfaces/MainPageTraveller";
import TravelerNotification from "./../otherInterfaces/Notifications";
import TravelerDashboard from "./../otherInterfaces/TravelDB";
import settings from "./../otherInterfaces/Settings";
import SideMenu from "./SideMenu";
import RSideMenu from "./../Req Components/SideMenuReq";
import MyRequests from "./../Req Interfaces/MyRequests";
var userType = "";
AsyncStorage.getItem("user").then(a => {
  userType = "";
  userType = JSON.parse(a).type;
  console.log(userType);
});

const WIDTH = Dimensions.get("window").width;
const Config = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    if (userType === "Traveler") {
      return <SideMenu navigation={navigation} />;
    } else if (userType === "Requester") {
      return <RSideMenu navigation={navigation} />;
    }
  }
};
const Menu = createDrawerNavigator(
  {
    Home: { screen: MainPage },
    Trips: { screen: MyTrips },
    Requests: { screen: MyRequests },
    Notifications: { screen: TravelerNotification },
    Dashboard: { screen: TravelerDashboard },
    Settings: { screen: settings }
  },
  Config
);
export default Menu;
