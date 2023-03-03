import { Dimensions } from "react-native";

//breakpoint sizes
const breakpoint_sizes = {
  xs: 375,
  sm: 850,
  md: 980,
  lg: 1200,
  xl: 1536,
};
//breakpoint names 
const breakpoint_names = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
};
//map styles
export const mapStyles = (styles) => {
  let componentStyles = {};
  styles.forEach((style) => {
    componentStyles[style.name.replace(/['"]+/g, '')] = translateStyleProp(style);
  });
  return componentStyles;
};
//translate styles
const translateStyleProp = (style) => {
  let value = style.value;
  switch (style.name) {
    //width

    //height

    //paddings

      case "padding":
      value = parseInt(style.value);

      break;
    case "paddingTop":
      value = parseInt(style.value);
      break;

    case "paddingBottom":
      value = parseInt(style.value);
      break;

    case "paddingRight":
      value = parseInt(style.value);
      break;

    case "paddingLeft":
      value = parseInt(style.value);
      break;

    case "paddingHorizontal":
      value = parseInt(style.value);
      break;

    case "paddingVertical":
      value = parseInt(style.value);
      break;
    //font size//
    case "fontSize":
      value = parseInt(style.value);
      break;

    //shadow radios
    case "borderRadius":
      value = parseInt(style.value);

       case "width":
      value = parseInt(style.value);

          case "height":
      value = parseInt(style.value);

    case "shadow":
  }

  return value;
};


export const checkBreakpoints = () => {
  const screen_width = Dimensions.get("window").width;
  if (screen_width < breakpoint_sizes.xs) {
    return breakpoint_names.xs;
  } else if (screen_width <= breakpoint_sizes.sm) {
     return breakpoint_names.sm;
  } else if (screen_width <= breakpoint_sizes.md) {
      return breakpoint_names.md;
  } else if (screen_width <= breakpoint_sizes.lg) {
    return breakpoint_names.lg;
  } else if (screen_width > breakpoint_sizes.xl) {
     return breakpoint_names.xl;
  }
};
