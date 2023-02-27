
import React from "react";
import isChidrenString  from "../../core/utils/isChildrenString";
import BuildComponents from "../BuildComponents";
import { Image, TouchableHighlight, Text, TouchableHighlightProps } from "react-native";


//link component
export const LinkComponent = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<TouchableHighlight> & Readonly<TouchableHighlightProps>) => {
  return (
    <TouchableHighlight {...props}>
      {isChidrenString(props.block.children) ? (
        <Text>{props.block.children}</Text>
      ) : <>
        {
            props.block.children.map((child: any)=>BuildComponents(child))
        }
      </>
      }
    </TouchableHighlight>
  );
}

//image component
export const ImageComponent = (props) => {
    let source = require(`../../${props.src}`);
  return (
   <>
   <Image source={source}/>
   <Text>
    {
        source
    }
   </Text>
   </>

   
  );
}
