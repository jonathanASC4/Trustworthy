import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import key from '../images/key.svg';
import Paper from '@material-ui/core/Paper';
import NavBar from '../components/navbar.js';


class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleChange(event, field){
    this.setState({
      [field]: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.firebase.login(this.state)
    .then((response) => {
      console.log(response);
      this.props.history.push("/");
    })
    .catch((error) => {
      switch(error.code){
        case 'auth/user-not-found':
        // do something
        break;
        case 'auth/wrong-password':
        case 'auth/invalid-email':
        // do something
        break;
        case 'auth/network-request-failed':
        // do something
        break;
        default:
        // default error
      }
    });
  }

  logout(){
    this.props.firebase.logout();
  }

  render(){
    const top ={
      textAlign: "center",
      margin: '3%',
      fontFamily: 'Raleway',
    }

    const loginBox={
      margin: 'auto',
      height: '25%',
      padding: 'auto',
    }

    const font = {
      fontFamily: 'Raleway',
      textDecoration: 'none',
      fontSize: '.75em',
    }

    const centering = {
      display: 'flex',  justifyContent:'center', alignItems:'center',
    }

    let payload;
    if(!this.props.auth.isLoaded){
      // auth is not warmed up
      payload = null;
    }
    if(this.props.auth.isLoaded && this.props.auth.isEmpty){
      payload = <div><form onSubmit={(event) => {this.handleSubmit(event);}}>
        <br />
        <div style={centering}>

        <Grid xs={10} sm={6} md={5} lg={4} xl={4} justify="center"  style={loginBox}>
          <Paper elevation={5}>
            <br />
            <h1 style={top}>
              Login
            </h1>
            <Grid container spacing={8} justify="center" alignItems="flex-end" >
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  value={this.state.email}
                  onChange={(event) => {this.handleChange(event, 'email');}} />
              </Grid>
            </Grid>

            <Grid container spacing={8} justify="center" alignItems="flex-end">
              <Grid item>
                <img src={key} alt=""/>
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  type="password"
                  value={this.state.password}
                  onChange={(event) => {this.handleChange(event, 'password');}}/>
              </Grid>
            </Grid>

            <br />
            <center>
              <Link to="/forgot" style={font}>Forgot password?</Link>
              <br />
              <Link to = "/signup" style={font}>Don't have an account already?</Link>
              <br />
              <br />
              <Button type="submit" variant="raised" color="primary">Submit</Button>
            </center>
            <br />
          </Paper>
          <br/>
        </Grid>
      </div>
      
      </form>
    </div>
    }
    return(
      <div>
        {payload}
      </div>
    )
  }
};



export default compose(
  firebaseConnect(),
  connect(({firebase: {auth}}) => ({auth}))
)(LoginPage);
