import 'react-native-gesture-handler';
import { Text, HStack, Box, Spacer,} from "@react-native-material/core";
import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import { WebView } from 'react-native-webview';
import Dashboard from "./components/screens/dashboard";
import RootNavigation from "./core/navigation";
function App() {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
// lg:4, //md:4, sm:6, xm:12,

  console.log(width, height);

  let cell_width = (width)/12;
  console.log(cell_width);


  
  return (
    <>
      <SafeAreaView>
        <RootNavigation/>
        <StatusBar />
        <Dashboard />
      </SafeAreaView>

      

      <HStack  m={0} spacing={5} style={{
        justifyContent:"flex-start",
        flexWrap:"wrap",
      }}>

<Box style={{
  margin:5,
   width:4*cell_width - 10,
  backgroundColor: "#dd6347"
}}>
<Text>4</Text>
</Box>

<Box style={{
    margin:5,
    width:4*cell_width - 10,
  backgroundColor: "#ff9047",
}}>
<Text>4</Text>
</Box>
<Box style={{
    margin:5,
     width:4*cell_width - 10,
  backgroundColor: "#fd6907",
}}>
<Text>4</Text>
</Box>

<Box mt={10} style={{
    margin:5,
    width:6*cell_width - 10,
  backgroundColor: "#ff6347"
}}>
<Text>6</Text>
</Box>

<Box mt={10} style={{
    margin:5,
    width:6*cell_width - 10,
  backgroundColor: "#2432"
}}>
<Text>6</Text>
</Box>
  </HStack>
    </>
  );
}

export default App;
