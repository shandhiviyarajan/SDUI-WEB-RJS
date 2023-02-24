import { Text } from "@react-native-material/core";
import React from "react";
import { Alert, TouchableHighlight, View } from "react-native";
import isChidrenString  from "../../core/utils/isChildrenString";
import mapStyles from "../../core/utils/mapStyles";
import BuildComponents from "../BuildComponents";

function Link(props) {
  return (
    <TouchableHighlight {...props} onPress={
        props.block.actions && props.block.actions._click && props.block.actions._click
    }>
      {isChidrenString(props.block.children) ? (
        <Text>{props.block.children}</Text>
      ) : <>
        {
            props.block.children.map(child=>BuildComponents(child))
        }
       <Text>
         {
            JSON.stringify(props.block)
        }
       </Text>
      </>
      }
    </TouchableHighlight>
  );
}

export default Link;
