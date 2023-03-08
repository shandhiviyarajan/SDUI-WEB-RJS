import React from 'react';
import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { mapStyles } from '../../core/utils/mapStyles';
import BuildComponents from '../BuildComponents';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';




export const MainNavigation  = (props)=> {


  return (
   <>
   
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
        
        </Toolbar>
      </Container>
    </AppBar>
   </>
  )
}



//navigation items
export const NavItem = (props) => {
  const custom_nav_style = props.block.styles && mapStyles(props.block.styles);
  return (
    <>
      <Link {...props}  style={custom_nav_style}>
        <Box>
          {props.block.children && (typeof props.block.children === "string") ? (
            <Typography style={custom_nav_style}>{props.block.children}</Typography>
          ) : (
            <>
              {props.block && props.block.children && props.block.children.map((child) => BuildComponents(child))}
            </>
          )}
        </Box>
      </Link>
    </>
  )
}