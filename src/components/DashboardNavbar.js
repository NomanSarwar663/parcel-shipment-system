import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Container,
} from '@material-ui/core';

import Logo from './Logo';

// Menu

import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';


import { makeStyles } from '@material-ui/styles';

import { useSelector, useDispatch } from 'react-redux'



import Avatar from '@material-ui/core/Avatar';

import { useEffect } from "react";

import Login from 'src/pages/Login';







const useStyles = makeStyles({
  btnMain: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5px',
    marginBottom: '5px',
    marginRight: '5px'
  },


});


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    minWidth: '300px'
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '-5px'
  },
}))(MenuItem);





const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {

  const state = useSelector(state => state);

  const dispatch = useDispatch();

  // console.log(state.profile.userName)

  const [userDetail, setUserDetail] = useState();




  useEffect(() => {
    const profile = localStorage.getItem("user");
    const loginUserId = JSON.parse(profile);
    

    const loginUserDetails = state.profiles.find((u) => { return (u.id == loginUserId) });
    console.log(`Login user detail ===> ${JSON.stringify(loginUserDetails)}`)

    dispatch({type: "OK", payload: loginUserDetails})

    setUserDetail(loginUserDetails);
    console.log("in",userDetail);
    console.log("in",loginUserDetails.id);
    

  }, [])
  console.log("in",userDetail);
  console.log("Outside",state.User.name);

  // dispatch(AddProfile(JSON.parse(profile)));

  const token = localStorage.getItem("token");
  

  
  

  const classes = useStyles();
  // 
  const [anchorEl, setAnchorEl] = React.useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // 
  const [notifications] = useState([]);

  function logout() {
    localStorage.removeItem("token");
  }

  
    
  

  return (
    <AppBar

      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        {/* <Hidden xlDown>
          <IconButton color="inherit" size="large">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" size="large">
            <InputIcon />
          </IconButton>
        </Hidden> */}
        {/* <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
            <MenuIcon />
          </IconButton>
        </Hidden> */}

        <Button color="inherit" size="large"
          aria-controls="customized-menu"
          aria-haspopup="true"
          // variant="contained"
          color="primary"
          onClick={handleClick}
        >
          <Avatar alt="Remy Sharp" src={state.User.avatarUrl} />
        </Button>



        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >

          <StyledMenuItem>
            <Avatar sx={{ width: "80px", height: "auto" }} alt="Remy Sharp" src={state.User.avatarUrl} />
          </StyledMenuItem>

          <RouterLink to="account">
            <StyledMenuItem>
              <ListItemText primary={state.User.name} />
            </StyledMenuItem>
          </RouterLink>

          <StyledMenuItem>
            <p>{state.User.post}</p>
          </StyledMenuItem>

          <Container className={classes.btnMain} >

            <RouterLink to="/change-password">
              <Button variant="contained" >
                Change Password
              </Button>
            </RouterLink>

            <RouterLink to="/login">
              <Button variant="contained" onClick={logout} >
                Logout
              </Button>
            </RouterLink>
          </Container>


        </StyledMenu>
      </Toolbar>
    </AppBar>
  );
      
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
