import { Dimensions } from "react-native";
//map styles
export const mapStyles = (styles) => {
  let componentStyles = {};
  styles.forEach((style) => {
    componentStyles[style.name] = translateStyleProp(style);
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

    //font wight
    case "fontWeight":
      value = isNaN(parseInt(style.value))
        ? style.value
        : parseInt(style.value);

      break;
    //font size//
    case "fontSize":
      value = parseInt(style.value);
      break;

    //shadow radios
    case "borderRadius":
      value = parseInt(style.value);
  }

  return value;
};
//map props
let break_points = ["xl", "lg", "md", "sm", "xs"];

export const mapBreakpointProps = (props) => {
  let componentProps = {};
  let breakPointStyles = {};

  let propsArray = (props && Object.entries(props)) || [];

  propsArray.length > 0 &&
    propsArray.forEach((prop) => {
      if (break_points.includes(prop[0])) {
        translateBreakpointProps(prop[0]);
      }
    });
};
// translate props
const translateBreakpointProps = (prop) => {
  console.log(checkDimentions());
  let device_break_point_width = false;

  if (prop[0] === checkDimentions()) {
    device_break_point_width = prop[0];
  }
};

const checkDimentions = () => {
  const screen_width = Dimensions.get("screen").width;
  if (screen_width > 1536) {
    return "xl";
  } else if (screen_width > 1200) {
    return "lg";
  } else if (screen_width >= 980) {
    return "md";
  } else if (screen_width < 768) {
    return "sm";
  } else if (screen_width < 600) {
    return "xs";
  }
};

/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
*/
