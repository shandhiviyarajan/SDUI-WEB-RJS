import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { WebView } from 'react-native-webview';
import Dashboard from "./components/screens/dashboard";
function App() {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <StatusBar />
        <Dashboard />
         <WebView
        source={{ uri: 'https://infinite.red' }}
        style={{ marginTop: 20 }}
      />
      </SafeAreaView>
    </>
  );
}

export default App;
