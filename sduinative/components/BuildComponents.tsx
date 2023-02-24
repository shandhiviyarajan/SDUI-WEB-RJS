import React from 'react';
import { AppBar, Box, HStack, VStack, IconButton, Button, Flex, } from "@react-native-material/core";
import { ScrollView, SafeAreaView, View, Text, TouchableHighlight, } from 'react-native';
import Link from './custom_components';
import mapStyles from '../core/utils/mapStyles';

//native components
const NativeComponents = {
    ScrollView,
    SafeAreaView,
    View,
    Text,
    Title:Text,
    Link,
};
//material components
const MaterialComponents = {
    AppBar,
    HStack,
    VStack,
    IconButton,
    Button,
    Box,
    Grid:Flex,
    GridItem: Box,
    Stack: Flex,
    StackItem: Box,
    Container: Flex,
};


const IconComponents = {
    MdHome:Text,
    MdNotes:Text,
    MdInsertChartOutlined:Text,

}
//map components
const mapComponents = {
    ...NativeComponents,
    ...MaterialComponents,
};

//build components
function BuildComponents(block) {
    console.log(block);
  if (typeof mapComponents[block.component] !== 'undefined') {
    return React.createElement(
      mapComponents[block.component],
      {
        key: block._id,
        ...block.props,
        block:block,
        style:block.styles && mapStyles(block.styles)
      },
      block.children &&
        (typeof block.children === 'string'
          ? block.children
          : block.children.length && block.children.map(child => BuildComponents(child))),
    );
  }
}

export default BuildComponents;

