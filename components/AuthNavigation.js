import { createStackNavigator } from "react-navigation-stack";
import LoginFormTrav from "./../interfaces/LoginFormTrav";
import SignUpFormTrav from "./../interfaces/SignUpFormTrav";
import Splash from "./../interfaces/Splash";
import SplashTwo from "./../interfaces/SplashLoginSignup";
import SplashThree from "./../Req Interfaces/SplashLSReq";
import LoginReq from "./../Req Interfaces/LoginFormReq";
import SignupReq from "./../Req Interfaces/SignUpFormReq";
import RequesterMain from "./../Req Interfaces/MainPageRequester";

const AuthNavigation = createStackNavigator(
  {
    SignupTraveler: { screen: SignUpFormTrav },
    LoginTraveler: { screen: LoginFormTrav },
    Splash: { screen: Splash },
    SplashTwo: { screen: SplashTwo },
    SplashThree: { screen: SplashThree },
    LoginReq: { screen: LoginReq },
    SignupReq: { screen: SignupReq },
    RequesterMain: { screen: RequesterMain }
  },
  {
    initialRouteName: "Splash",
    headerMode: "none"
  }
);

export default AuthNavigation;
