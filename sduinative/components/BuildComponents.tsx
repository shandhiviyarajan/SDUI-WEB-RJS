import React from "react";
import { ScrollView, SafeAreaView, View, StatusBar } from "react-native";
import {
  AppBar,
  Box,
  HStack,
  VStack,
  IconButton,
  Button,
  Spacer,
  Text,
  Switch,
} from "@react-native-material/core";
import {
  LinkComponent,
  CustomImageComponent,
  CustomContainerComponent,
  CustomGridItemComponent,
  CustomGridComponent,
} from "./custom_components";
import {mapStyles, mapBreakpointProps} from "../core/utils/mapStyles";
import ChartComponent from "./chart_component";
import { isTextCompnent } from "../core/utils/isChildrenString";

//native components
const NativeComponents = {
  ScrollView,
  SafeAreaView,
  View,
  Title: Text,
  Link: LinkComponent,
  Image: CustomImageComponent,
  StatusBar: StatusBar,
};
//material components
const MaterialComponents = {
  AppBar,
  HStack,
  VStack,
  IconButton,
  Button,
  Text,
  Box,
  Switch,
  Container: CustomContainerComponent, //view
  Grid: CustomGridComponent, //stack
  GridItem: CustomGridItemComponent, //box
  Divider: Spacer,
};

const CustomComponents = {
  Chart: ChartComponent,
};

const IconComponents = {
  MdHome: Text,
  MdNotes: Text,
  MdInsertChartOutlined: Text,
};
//map components
const mapComponents = {
  ...NativeComponents,
  ...MaterialComponents,
  ...CustomComponents,
};



//build components
function BuildComponents(block) {
  if (typeof mapComponents[block.component] !== "undefined") {

  mapBreakpointProps(block.props);
    return React.createElement(
      mapComponents[block.component],
      {
        key: block._id,
        ...block.props,
        block: block,
        style: block.styles && mapStyles(block.styles)
      },
      block.children &&
        (typeof block.children === "string" ? (
         
          (isTextCompnent(block.component)) ? block.children : <Text>{block.children}</Text>

        ) : (
          block.children.length &&
          block.children.map((child) => BuildComponents(child))
        ))
    );
  }
}

export default BuildComponents;
