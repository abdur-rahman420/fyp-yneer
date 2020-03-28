import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation";
import DrawerNavigation from "./DrawerNavigation";
const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation,
    Drawer: DrawerNavigation
  },
  {
    initialRouteName: "Auth"
  }
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
