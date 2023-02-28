import React from "react";
import {isChidrenString} from "../../core/utils/isChildrenString";
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
import { Flex, HStack, VStack, Box, } from "@react-native-material/core";

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
export const CustomImageComponent = (props) => {
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

export const CustomContainerComponent = (props) => {
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

//Grid component
export const CustomGridComponent = (props) => {
  return (
    <>
      {props.direction && props.direction === "row" && (
        <HStack {...props}>
          {isChidrenString(props.block.children) ? (
            <Text>{props.block.children}</Text>
          ) : (
            <>
              {props.block.children.map((child: any) => BuildComponents(child))}
            </>
          )}
        </HStack>
      )}

      {props.direction && props.direction === "column" && (
        <VStack {...props}>
          {isChidrenString(props.block.children) ? (
            <Text>{props.block.children}</Text>
          ) : (
            <>
              {props.block.children.map((child: any) => BuildComponents(child))}
            </>
          )}
        </VStack>
      )}
      {!props.direction && (
        <VStack {...props}>
          {isChidrenString(props.block.children) ? (
            <Text>{props.block.children}</Text>
          ) : (
            <>
              {props.block.children.map((child: any) => BuildComponents(child))}
            </>
          )}
        </VStack>
      )}
    </>
  );
};

//GridItem Component
export const CustomGridItemComponent = (props) => {
  return (
    <>
 
        <Box {...props}>
          {isChidrenString(props.block.children) ? (
            <Text>{props.block.children}</Text>
          ) : (
            <>
              {props.block.children.map((child: any) => BuildComponents(child))}
            </>
          )}
        </Box>
      
    </>
  );
};


export const CustomGrid = (props)=>{
  return (
    <>
    
    

    </>
  )
}
