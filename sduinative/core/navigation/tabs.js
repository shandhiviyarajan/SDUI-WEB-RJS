import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Details from "../../components/screens/details";
import Summary from "../../components/screens/summary";
function TabNavigations(screens) {
  //dynamically import screens
  //tab navigator
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
        tabBarIcon:()=>{<></>},
    }}>
      <Tab.Screen options={{
        tabBarShowLabel:false,
      }} name="Details" component={Details} />
      <Tab.Screen name="Summary" component={Summary} />
    </Tab.Navigator>
  );
}

export default TabNavigations;
