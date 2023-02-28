import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../../components/screens/dashboard';
import Details from '../../components/screens/details';


export default function RootNavigation() {
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="dashboard">
            <Stack.Screen name="dashboard" component={Dashboard}/>
            <Stack.Screen name="details" component={Details}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}