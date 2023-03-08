import React from "react";
import { Box, Container, Grid, Link, Stack, } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { Typography } from "@mui/material";
import { Image } from "mui-image"
import * as Material from "react-icons/md";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { MainNavigation, NavItem } from "./custom_components";



ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ThemeComponents = {
  ThemeProvider,
}

const CustomComponents = {
  Chart,
  MainNavigation,
NavItem,
};

const CommonComponets = {
  Title: Typography,
  Text: Typography,
  Link: Link,
  Image,
};


const LayoutComponents = {
  Container,
  Grid,
  GridItem: Grid,
  Box,
  Stack,
  StackItem: Stack,
};

const icons = {
  MdHome: Material.MdHome,
  MdNotes: Material.MdNotes,
  MdGraphicEq: Material.MdGraphicEq,
  MdInsertChartOutlined:Material.MdInsertChartOutlined
  
}

const mapComponents = {
  ...ThemeComponents,
  ...CommonComponets,
  ...LayoutComponents,
  ...CustomComponents,
  ...icons,
};

//map styles
const mapStyles = (styles) => {
  let componentStyles = {};
  styles.forEach((style) => {
    componentStyles[style.name] = style.value;
  });
  return componentStyles;
}
//build components
function BuildComponents(block) {
  if (typeof mapComponents[block.component] !== "undefined") {
    return React.createElement(
      mapComponents[block.component],
      {
        key: block._id,
        ...block.props,
        item: block.component === "GridItem" ? true:false,
        sx: block.styles && mapStyles(block.styles),

      },
      
      block.children && (typeof block.children === "string" ?
        block.children : block.children.map(child => BuildComponents(child)))
    );
  }
}

export default BuildComponents;
