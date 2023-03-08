import React, { lazy } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Dashboard from "../../components/screens/dashboard";
import Details from "../../components/screens/details";
import Summary from "../../components/screens/summary";
import { View, Text, ScrollView } from "react-native";
import { json } from "../server";
import { NavItem } from "../../components/custom_components";
import BuildComponents from "../../components/BuildComponents";
import StackNavigations from "./stack";

export const MainNavigation = () => {
  //Get the main navigation
  const navigations = json && json.find(
    (block) => block.component === "MainNavigation"
  );

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const AppDrawer = (props) => {
    return (
      <>
        <DrawerContentScrollView {...props}>
         <ScrollView>
           {navigations.children &&
            navigations.children.length &&
            navigations.children.map((child) => child.component==="NavItem" ?  <NavItem block={child} /> : BuildComponents(child))}
         </ScrollView>
        </DrawerContentScrollView>
      </>
    );
  };




  const getScreens = (screen) => {
    switch (screen) {
      case "Dashboard":
       return  Dashboard;
     

      case "Details":
       return Details;
    

      case "Summary":
        return Summary;
  
    }

  }

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <AppDrawer {...props} />} initialRouteName={Dashboard}>       
          {
            navigations && navigations.children.map(child => child.component ==="NavItem" ?  
              <Drawer.Screen options={
                child.props.options
            
              } component={getScreens(child?.route?.url)} name={child?.route?.url} /> : <></>
            )
          }
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
