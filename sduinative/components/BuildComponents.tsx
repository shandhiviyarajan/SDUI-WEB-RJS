import React from 'react';
import { AppBar, HStack, IconButton, Button, } from "@react-native-material/core";
import { ScrollView, SafeAreaView, View } from 'react-native';

//native components
const NativeComponents = {
    ScrollView,
    SafeAreaView,
    View,
};
//material components
const MaterialComponents = {
    AppBar,
    HStack,
    IconButton,
    Button,
}
//map components
const mapComponents = {
    ...NativeComponents,
    ...MaterialComponents,
};
//build components
function BuildComponents(block) {
  if (typeof mapComponents[block.component] !== 'undefined') {
    return React.createElement(
      mapComponents[block.component],
      {
        key: block._id,
        ...block.props,
      },
      block.children &&
        (typeof block.children === 'string'
          ? block.children
          : block.children.map(child => BuildComponents(child))),
    );
  }
}

export default BuildComponents;
// //map styles
// const mapStyles = (styles) => {
//   let componentStyles = {};
//   styles.forEach((style) => {
//     componentStyles[style.name] = style.value;
//   });
//   return componentStyles;
// }
// //build components
