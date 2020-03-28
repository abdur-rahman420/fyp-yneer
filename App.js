import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";
import Search from "react-native-search-box";
import LoginFormTrav from "./interfaces/LoginFormTrav";
import Splash from "./interfaces/Splash";
import SplashTwo from "./interfaces/SplashLoginSignup";
import SignUpFormTrav from "./interfaces/SignUpFormTrav";
import UpDocTrav from "./interfaces/UploadDocsTrav";
import MainPage from "./interfaces/MainPageTraveller";
import MyTrips from "./interfaces/MyTrips";
import TravNotifications from "./interfaces/TravNotification";
import DashboardTraveller from "./interfaces/DashboardTraveller";
import { render } from "react-dom";
import AppContainer from "./components/index";

export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
