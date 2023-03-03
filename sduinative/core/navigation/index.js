import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import Dashboard from "../../components/screens/dashboard";
import Details from "../../components/screens/details";
import Summary from "../../components/screens/summary";

export const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const AppDrawer = (props) => {
  return (
    <>
    
      <DrawerContentScrollView {...props}>
    <DrawerItemList {...props}/>
    </DrawerContentScrollView>
    </>
  )
  };
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen component={Dashboard} name="Dashboard" />
        <Stack.Screen
          component={Details}
          name="Details"
          options={{
            title: "Details Page",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "purple",
            },
          }}
        />
        <Stack.Screen
          component={Summary}
          name="Summary"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator> */}
      <Drawer.Navigator drawerContent={(props) => <AppDrawer {...props}/>}>
        <Drawer.Screen component={Dashboard} name="Dashboard" />
        <Drawer.Screen component={Details} name="Details" />
         <Drawer.Screen component={Summary} name="Summary" />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
