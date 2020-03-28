import { createStackNavigator } from "react-navigation-stack";
import MainPageTraveller from "./../interfaces/MainPageTraveller";
import Icon from "react-native-vector-icons/Entypo";
import MainPageRequester from "../Req Interfaces/MainPageRequester";

const AppNavigation = createStackNavigator(
  {
    RequesterMain: { screen: MainPageRequester },
    TravelerMain: {
      screen: MainPageTraveller
    }
  },
  {
    headerMode: "none"
  }
);

export default AppNavigation;
