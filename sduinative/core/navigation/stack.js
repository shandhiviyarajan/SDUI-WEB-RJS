import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Page_one from '../../components/screens/page/page_one';

function StackNavigations() {

    const Stack = createNativeStackNavigator();
  return (
     <Stack.Navigator>
        <Stack.Screen component={Page_one} name="Page_one" />
      </Stack.Navigator> 
  )
}

export default StackNavigations