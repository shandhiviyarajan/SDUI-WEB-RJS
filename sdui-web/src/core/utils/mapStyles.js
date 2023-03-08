export const mapStyles = (styles) => {
  let componentStyles = {};
  styles.forEach((style) => {
    componentStyles[style.name] = style.value;
  });
  return componentStyles;
}