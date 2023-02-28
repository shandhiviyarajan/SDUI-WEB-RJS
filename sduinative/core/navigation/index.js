import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Dashboard from '../../components/screens/dashboard';
import Details from '../../components/screens/details';





export default function RootNavigation() {
const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
        <Drawer.Navigator 
        initialRouteName="dashboard">
            <Drawer.Screen name="dashboard" component={Dashboard}/>
            <Drawer.Screen name="details" component={Details}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}