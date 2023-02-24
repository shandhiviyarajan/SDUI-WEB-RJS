/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, TouchableHighlight, View} from 'react-native';
import Dashboard from './components/screens/dashboard';
function App() {
  return (

      <SafeAreaView style={{
        flex:1,
        backgroundColor:"#ccc"
      }}>
            <StatusBar />
            <Dashboard/>
      </SafeAreaView>

  );
}

export default App;
