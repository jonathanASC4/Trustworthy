import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';


class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
      anchorEl: null,
      open: false,
      appear: false,
      stick: false,
    };
  };

  logout(){
    this.props.firebase.logout();
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render(){
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const { open } = this.state;

    const font ={
      fontFamily: 'Raleway',
      color: "#EF0000"
    }

    const hamburger={
      color: 'white',
      marginLeft: 22,
      marginRight: -14,
    }

    const fontAndColor={
      fontFamily: 'Raleway',
      color: 'white',
    }

    const fontAndColorInverse={
      fontFamily: 'Raleway',
      color: '#424242',
      textDecoration: 'none',
    }

    const wide={
      width: 133,
    }

    // List for when user is not logged in
    const pageList = (
      <div style={wide}>
        <List>
          <Link to="/about" style={fontAndColorInverse}>
            <ListItem>
              About
            </ListItem>
          </Link>

          <Link to="/contact" style={fontAndColorInverse}>
            <ListItem>
              Contact
            </ListItem>
          </Link>

          <Link to="/donation" style={fontAndColorInverse}>
            <ListItem>
              Donate
            </ListItem>
          </Link>

          <Link to="/login" style={fontAndColorInverse}>
            <ListItem>
              Login
            </ListItem>
          </Link>

          <Link to="/signup" style={fontAndColorInverse}>
            <ListItem>
              Signup
            </ListItem>
          </Link>
        </List>
      </div>
    );

    // List for when user is logged in and is a student
    const pageList2 = (
      <div style={wide}>
        <List>
          <Link to="/about" style={fontAndColorInverse}>
            <ListItem>
              About
            </ListItem>
          </Link>

          <Link to="/contact" style={fontAndColorInverse}>
            <ListItem>
              Contact
            </ListItem>
          </Link>

          <Link to="/donation" style={fontAndColorInverse}>
            <ListItem>
              Donate
            </ListItem>
          </Link>

          <Link to="/form" style={fontAndColorInverse}>
            <ListItem>
              Get Started
            </ListItem>
          </Link>

          <Link to="/browse" style={fontAndColorInverse}>
            <ListItem>
              Counselors
            </ListItem>
          </Link>

          <Link to="/interview" style={fontAndColorInverse}>
            <ListItem>
              Interview
            </ListItem>
          </Link>

          <Divider />

          <Link to="/Profile" style={fontAndColorInverse}>
            <ListItem>
              My Profile
            </ListItem>
          </Link>

          <Link to="/" style={fontAndColorInverse}>
            <ListItem>
              Settings
            </ListItem>
          </Link>

          <Link to="/" style={fontAndColorInverse} onClick={() => {this.logout();}}>
            <ListItem>
              Logout
            </ListItem>
          </Link>
        </List>
      </div>
    );

    // List for when user is logged in and is a counselor
    const pageList3 = (
      <div style={wide}>
        <List>
          <Link to="/about" style={fontAndColorInverse}>
            <ListItem>
              About
            </ListItem>
          </Link>

          <Link to="/contact" style={fontAndColorInverse}>
            <ListItem>
              Contact
            </ListItem>
          </Link>

          <Link to="/donation" style={fontAndColorInverse}>
            <ListItem>
              Donate
            </ListItem>
          </Link>

          <Link to="/form" style={fontAndColorInverse}>
            <ListItem>
              Get Started
            </ListItem>
          </Link>

          <Link to="/interview" style={fontAndColorInverse}>
            <ListItem>
              Interview
            </ListItem>
          </Link>

          <Divider />

          <Link to="/Profile" style={fontAndColorInverse}>
            <ListItem>
              My Profile
            </ListItem>
          </Link>

          <Link to="/" style={fontAndColorInverse}>
            <ListItem>
              Settings
            </ListItem>
          </Link>

          <Link to="/" style={fontAndColorInverse} onClick={() => {this.logout();}}>
            <ListItem>
              Logout
            </ListItem>
          </Link>
        </List>
      </div>
    );
    let nav;
    if(!this.props.auth.isLoaded){
      // auth is still warming up
      // so unsure if user is logged in or not;
      nav = null;
    };
    if(this.props.auth.isLoaded && this.props.auth.isEmpty){
      // user is not logged in
      nav =
      <div>
        <Hidden only={['xs','sm']}>
          <Link to="/about" id="about">
            <Button color="inherit" style={fontAndColor}>About</Button>
          </Link>

          <Link to="/contact" id="contact">
            <Button color="inherit" style={fontAndColor}>Contact</Button>
          </Link>

          <Link to="/donation" id="donation">
            <Button color="inherit" style={fontAndColor}>Donate</Button>
          </Link>

          <Link to="/login" id="login">
            <Button color="inherit" style={fontAndColor}>Login</Button>
          </Link>

          <Link to="/signup" id="signup">
            <Button color="inherit" style={fontAndColor}>Signup</Button>
          </Link>
        </Hidden>

        <Hidden only={['md','lg','xl']}>
          <Button onClick={this.toggleDrawer('right', true)}>
            <IconButton style={hamburger}>
              <MenuIcon />
            </IconButton>
          </Button>
          <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
            <div tabIndex={0} role="button" onClick={this.toggleDrawer('right', false)} onKeyDown={this.toggleDrawer('right', false)}>
              {pageList}
            </div>
          </Drawer>
        </Hidden>
      </div>;
    };
    if(this.props.auth.isLoaded && !this.props.auth.isEmpty && this.props.profile.isLoaded && !this.props.profile.isEmpty){
      // user is logged in and is a student
      if(this.props.profile.role === "student") {
        nav=
        <div>
          <Hidden only={['xs','sm']}>
            <Link to="/about" id="about">
              <Button color="inherit" style={fontAndColor}>About</Button>
            </Link>

            <Link to="/contact" id="contact">
              <Button color="inherit" style={fontAndColor}>Contact</Button>
            </Link>

            <Link to="/donation" id="donation">
              <Button color="inherit" style={fontAndColor}>Donate</Button>
            </Link>

            <Link to="/form" id="form">
              <Button color="inherit" style={fontAndColor}>Get Started</Button>
            </Link>

            <Link to="/browse" id="browse">
              <Button color="inherit" style={fontAndColor}>Counselors</Button>
            </Link>

            <Link to="/interview" id="interview">
              <Button color="inherit" style={fontAndColor}>Interview</Button>
            </Link>

            <Button
              buttonRef={node => {
                this.anchorEl = node;
              }}
              aria-owns={open ? 'menu-list-grow' : null}
              aria-haspopup="true"
              onClick={this.handleToggle}
              style={{color:'white'}}
              >
              <AccountCircle />
            </Button>
            <Popper open={open} anchorEl={this.anchorEl} transition>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  id="menu-list-grow"
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                  <Paper>
                    <ClickAwayListener onClickAway={this.handleClose}>
                      <MenuList>
                        <Link to="/profile" style={fontAndColor}>
                          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        </Link>
                        <MenuItem onClick={this.handleClose}>Settings</MenuItem>
                        <MenuItem onClick={() => {this.logout();}}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Hidden>

          <Hidden only={['md','lg','xl']}>
            <Button onClick={this.toggleDrawer('right', true)}>
              <IconButton style={hamburger}>
                <MenuIcon />
              </IconButton>
            </Button>
            <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
              <div tabIndex={0} role="button" onClick={this.toggleDrawer('right', false)} onKeyDown={this.toggleDrawer('right', false)}>
                {pageList2}
              </div>
            </Drawer>
          </Hidden>
        </div>
      }
      else {
        nav = <div>
          <Hidden only={['xs','sm']}>
            <Link to="/about" id="about">
              <Button color="inherit" style={fontAndColor}>About</Button>
            </Link>

            <Link to="/contact" id="contact">
              <Button color="inherit" style={fontAndColor}>Contact</Button>
            </Link>

            <Link to="/donation" id="donation">
              <Button color="inherit" style={fontAndColor}>Donate</Button>
            </Link>

            <Link to="/form" id="form">
              <Button color="inherit" style={fontAndColor}>Get Started</Button>
            </Link>

            <Link to="/interview" id="interview">
              <Button color="inherit" style={fontAndColor}>Interview</Button>
            </Link>

            <Button
              buttonRef={node => {
                this.anchorEl = node;
              }}
              aria-owns={open ? 'menu-list-grow' : null}
              aria-haspopup="true"
              onClick={this.handleToggle}
              style={{color:'white'}}
              >
              <AccountCircle />
            </Button>
            <Popper open={open} anchorEl={this.anchorEl} transition>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  id="menu-list-grow"
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                  <Paper>
                    <ClickAwayListener onClickAway={this.handleClose}>
                      <MenuList>
                        <Link to="/profile" style={fontAndColor}>
                          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        </Link>
                        <MenuItem onClick={this.handleClose}>Settings</MenuItem>
                        <MenuItem onClick={() => {this.logout();}}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Hidden>

          <Hidden only={['md','lg','xl']}>
            <Button onClick={this.toggleDrawer('right', true)}>
              <IconButton style={hamburger}>
                <MenuIcon />
              </IconButton>
            </Button>
            <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
              <div tabIndex={0} role="button" onClick={this.toggleDrawer('right', false)} onKeyDown={this.toggleDrawer('right', false)}>
                {pageList3}
              </div>
            </Drawer>
          </Hidden>
        </div>
      }}
      return(
        <div>
          <AppBar
            id="appBarTextStyle"
            position="sticky"><Toolbar></Toolbar></AppBar>
          <AppBar position="fixed" id="appBarTextStyle" style={{backgroundColor: "#000000"}}>
              <Toolbar>
              <Link to="/" id="home">
                <div id="menuStyle">
                  <Typography variant="title" color='secondary' style={font}>
                    Trustworthy
                  </Typography>
                </div>
              </Link>

              <div id="right"></div>

              {nav}

            </Toolbar>
          </AppBar>
        </div>
      );
    }}

    export default compose(
      firebaseConnect(),
      connect(({firebase: {auth}}) => ({auth})),
      connect(({firebase: {profile}}) => ({profile}))
    )(NavBar);
