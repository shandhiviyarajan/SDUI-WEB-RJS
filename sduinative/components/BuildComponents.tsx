import React from 'react';
import { AppBar, Box, HStack, VStack, IconButton, Button, Flex, Spacer, Stack,} from "@react-native-material/core";
import { ScrollView, SafeAreaView, View, Text} from 'react-native';
import {LinkComponent, ImageComponent, ContainerComponent} from './custom_components';
import mapStyles from '../core/utils/mapStyles';
import ChartComponent from './chart_component';

//native components
const NativeComponents = {
    ScrollView,
    SafeAreaView,
    View,
    Text,
    Title:Text,
    Link:LinkComponent,
    Image :ImageComponent,
};
//material components
const MaterialComponents = {
    AppBar,
    HStack,
    VStack,
    IconButton,
    Button,
    Box:View,
    Grid:Stack,
    GridItem: View,
    Container: ContainerComponent,
    Stack: Flex,
    StackItem: Box,
    Divider: Spacer,
};

const CustomComponents = {
    Chart:ChartComponent,
}


const IconComponents = {
    MdHome:Text,
    MdNotes:Text,
    MdInsertChartOutlined:Text,

}
//map components
const mapComponents = {
    ...NativeComponents,
    ...MaterialComponents,
    ...CustomComponents,
};

//build components
function BuildComponents(block) {
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
          ? <Text>{block.children}</Text>
          : block.children.length && block.children.map(child => BuildComponents(child))),
    );
  }
}

export default BuildComponents;

