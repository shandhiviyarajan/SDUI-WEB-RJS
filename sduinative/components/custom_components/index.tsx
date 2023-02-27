import React from "react";
import isChidrenString from "../../core/utils/isChildrenString";
import BuildComponents from "../BuildComponents";
import mapStyles from "../../core/utils/mapStyles";
import {
  Image,
  TouchableHighlight,
  Text,
  TouchableHighlightProps,
  Dimensions,
  View,
  ScrollView,
} from "react-native";
import { Flex } from "@react-native-material/core";

//link component
export const LinkComponent = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<TouchableHighlight> &
    Readonly<TouchableHighlightProps>
) => {
  return (
    <TouchableHighlight {...props}>
      {isChidrenString(props.block.children) ? (
        <Text>{props.block.children}</Text>
      ) : (
        <>{props.block.children.map((child: any) => BuildComponents(child))}</>
      )}
    </TouchableHighlight>
  );
};

//image component
export const ImageComponent = (props) => {
  let window_width = Dimensions.get("window").width;
  let image_styles = mapStyles(props.block.styles);
  console.log(image_styles);
  return (
    <Image
      source={{ uri: props.src }}
      style={{
        resizeMode: "contain",
        width: window_width,
        height: window_width,
      }}
    />
  );
};


export const ContainerComponent = (props) => {
  return (
    <>
      {props.type === "scroll" && (
        <ScrollView {...props}>
          {isChidrenString(props.block.children) ? (
            <Text>{props.block.children}</Text>
          ) : (
            <>
              {props.block.children.map((child: any) => BuildComponents(child))}
            </>
          )}
        </ScrollView>
      )}

      {!props.type && (
        <Flex {...props}>
          {isChidrenString(props.block.children) ? (
            <Text>{props.block.children}</Text>
          ) : (
            <>
              {props.block.children.map((child: any) => BuildComponents(child))}
            </>
          )}
        </Flex>
      )}
    </>
  );
};
