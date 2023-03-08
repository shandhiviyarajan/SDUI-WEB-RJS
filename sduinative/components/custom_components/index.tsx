import React from "react";
import { isChidrenString } from "../../core/utils/isChildrenString";
import BuildComponents from "../BuildComponents";
import { mapStyles, checkBreakpoints } from "../../core/utils/mapStyles";
import {
  Image,
  TouchableHighlight,
  TouchableHighlightProps,
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

import { Flex, Box, Button, Stack, HStack, VStack, Text } from "@react-native-material/core";
import { isLandscape } from "../../core/utils/getOrentation";
import { useNavigation } from "@react-navigation/native";

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
  const style = props.styles && mapStyles(props.styles);
  return (
    <>
      {props.direction && props.direction === "row" && (
        <HStack {...props}>
          {isChidrenString(props.block.children) ? (
            <Text style={style}>{props.block.children}</Text>
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
            <Text style={style}>{props.block.children}</Text>
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
let grids = 12;

//GridItem Component
export const CustomGridItemComponent = (props) => {
  const style = props.styles && mapStyles(props.styles);
  return (
    <>
      <Box {...props}>
        {isChidrenString(props.block.children) ? (
          <Text style={style}>{props.block.children}</Text>
        ) : (
          <>
            {props.block.children.map((child: any) => BuildComponents(child))}
          </>
        )}
      </Box>
    </>
  );
};


//Custom grid container
export const CustomGrid = (props) => {
  let spacing = props.block.props.spacing;
  let direction = props.block.props.direction || "row";
  const custom_styles = props.styles && mapStyles(props.styles);
  const additiona_margin_style = {
    margin: spacing ? spacing / 2 : 0,
  }
  return (
    <>
      {isChidrenString(props.block.children) ? (
        <Text style={custom_styles}>{props.block.children}</Text>
      ) : (

        <Stack direction={direction} {...props} style={{
          flexWrap: props.block.props.container ? "wrap" : "nowrap",
          ...custom_styles,
          ...additiona_margin_style

        }
        } {...props.block.props}>
          {props.block.children &&
            props.block.children.map((child: any) => BuildComponents({
              ...child,
              props: {
                ...child.props,
                spacing,
              }
            }))}
        </Stack>

      )}
    </>
  );
};

export const CustomGridItem = (props) => {

  let propsArray = Object.entries(props.block.props);
  let spacing = props.block.props.spacing;
  let grid_width = 0;
  let safe_area_padding = 0;
  let breakpoint = checkBreakpoints();
  let findProp = propsArray.find(prop => prop[0] === breakpoint);
  let custom_styles = props.block.styles && mapStyles(props.block.styles) || [];


  //screen width with safeareas
  const screenWidth = () => {
    return isLandscape(Dimensions)
      ? Dimensions.get("window").width - (safe_area_padding + spacing)
      : Dimensions.get("window").width - spacing;
  };

  //dimentions state
  const [dimentions, setDimentions] = React.useState({
    width: screenWidth(),
    cell_width: screenWidth() / grids,
  });
  //watch resize or orientation changes//
  const watchResize = () => {
    setDimentions({
      width: screenWidth(),
      cell_width: screenWidth() / grids,
    });
  };

  function updateGridItemWidth() {
    watchResize();
    Dimensions.addEventListener("change", () => {
      watchResize();
    });
  }
  React.useEffect(() => {
    updateGridItemWidth();
  }, []);

  React.useEffect(() => {
    updateGridItemWidth();
  }, [spacing]);

  if (findProp) {
    grid_width = findProp[1] * dimentions.cell_width;
  } else {
    grid_width = grids * dimentions.cell_width;
  }
  return (
    <>
      {isChidrenString(props.block.children) ? (
        <Text style={custom_styles}>{props.block.children}</Text>
      ) : (
        <Box
          {...props.block.props}
          style={{
            width: grid_width - spacing,
            margin: spacing ? spacing / 2 : 0,
            ...custom_styles,
          }}
        >
          {props.block.children.map((child: any) => BuildComponents(child))}
        </Box>
      )
      }
    </>
  );
};


//Custom button
export const CustomButton = (props) => {
  const navigation = useNavigation();

  const navigateTo = (route) => {
    navigation.navigate(route.href, route?.params)
  }
  return (
    <>
      {isChidrenString(props.block.children) ? (
        <>
          {
            props.block.route && props.block.route.href ?
              <Button {...props} title={props.block.children} onPress={() => {
                navigateTo(props.block.route)
              }} /> :
              <Button {...props} title={props.block.children} />
          }
        </>
      ) : (
        <></>
      )}
    </>
  );
}

//Link
export const Link = (props) => {
  const navigation = useNavigation();

  const navigateTo = (url) => {
    navigation.navigate(url)
  }
  return (
    <>
      {isChidrenString(props.block.children) ? (
        <>
          {
            props.block.url && props.block.url ?
              <TouchableOpacity {...props} onPress={() => {
                navigateTo(props.block.url)
              }}><Text>
                  {props.block.children}
                </Text></TouchableOpacity> :
              <></>
          }
        </>
      ) : (
        <></>
      )}
    </>
  );
}

//Main Navigation // Drawer navigation
export const MainNavigation = (props) => {
  return (
    <>
    </>
  )

}

//navigation items
export const NavItem = (props) => {
  const custom_nav_style = props.block.styles && mapStyles(props.block.styles);
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity {...props} onPress={() => {
        navigation.navigate(props.block?.route?.url)
      }} style={custom_nav_style}>
        <Box>
          {isChidrenString(props.block.children) ? (
            <Text style={custom_nav_style}>{props.block.children}</Text>
          ) : (
            <>
              {props.block && props.block.children && props.block.children.map((child: any) => BuildComponents(child))}
            </>
          )}
        </Box>

      </TouchableOpacity>

    </>
  )
}