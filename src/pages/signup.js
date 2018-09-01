import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import email from '../images/email.svg'
import TextField from '@material-ui/core/TextField'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid'
import key from '../images/key.svg'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import skype from '../images/skype.svg'
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioGroup from '@material-ui/core/RadioGroup';
import Tooltip from '@material-ui/core/Tooltip';
import info from '../images/info.svg';

class SignupPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password1: '',
      password2: '',
      name: '',
      skypeName: '',
      role: 'student',
      invalidEmailError: false,
      usedEmailError: false,
      emailError: false,
      emailErrorMessage: '',
      nameError: false,
      nameErrorMessage: '',
    };
  }

  handleChange(event, field){
    this.setState({
      [field]: event.target.value
    });
  }

  handleRoleChange = event => {
    console.log(this.state.role);
    this.setState({ role: event.target.value });
  }

  checkPassword(p1,p2){
    return p1 === p2;
  }

  checkName(name){
    return !(/\w+ \w+/.test(name));
  }

  errorHandler(){
    if(this.state.invalidEmailError) {
      this.setState({emailErrorMessage: 'Invalid email'})
    }
    else if (this.state.usedEmailError) {
      this.setState({emailErrorMessage: 'Email in use'})
    }
    else if (this.state.nameError){
      this.setState({nameErrorMessage: 'Incorrect name format, e.g. "John Doe"'})
    }
  }

  handleSubmit(event){
    var credentials ={
      email: '',
      password: '',
    }
    event.preventDefault();
    if(this.checkPassword(this.state.password1,this.state.password2)){
      credentials = {
        email: this.state.email,
        password: this.state.password1,
      }
    }
    else {
      credentials = {
        email: this.state.email,
        password: this.state.password,
      }
    }
    const profile = {
      name: this.state.name,
      email: this.state.email,
      skypeName: this.state.skypeName,
      role: this.state.role,
    }
    if(this.checkName(this.state.name)){
      this.setState({nameError: true})
    }
    this.props.firebase.createUser(credentials,profile)
    .then((response) => {
      console.log("Account Created!");
      this.props.history.push("/");
    })
    .catch((error) => {
      switch(error.code){
        case 'auth/email-already-in-use':
        this.setState({usedEmailError:true});
        this.setState({emailError:true});
        this.errorHandler()
        console.log(this.state.usedEmailError)
        console.log(this.state.emailErrorMessage);
        break;
        case 'auth/invalid-email':
        this.setState({invalidEmailError: true});
        this.setState({emailError:true});
        this.errorHandler()
        console.log(this.state.invalidEmailError);
        console.log(this.state.emailErrorMessage);
        break;
        case 'auth/operation-not-allowed':
        // do something
        break;
        case 'auth/weak-password':
        // do something
        break;
        default:
        this.errorHandler();
        console.log(error);
        console.log(this.state.credentials);
        console.log(this.state.profile);
        // default error
      }
    });
  }

  render(){
    const top ={
      textAlign: "center",
      margin: '3%',
      fontFamily: 'Raleway',
    }

    const signUpBox={
      margin: 'auto',
      height: '25%',
      padding: 'auto',
    }

    const font = {
      fontFamily: 'Raleway',
      textDecoration: 'none',
      fontSize: '.75em',
    }

    const toolTip = {
      test: {
        maxWidth: 300,
      },
    }

    const infotext = `
      If you are interested in gaining interview experience, please select the student role.
      Otherwise if you are interested in helping others by conducting mock interviews and giving feedback
      please select the counselor role.
      `;

    const {classes} = this.props;

    let payload;
    if(!this.props.auth.isLoaded){
      // auth is not warmed up
      payload = null;
    }
    if(this.props.auth.isLoaded && this.props.auth.isEmpty){
      payload = <div> 
      <form onSubmit={(event) => {this.handleSubmit(event);}}>
        <br />
        <Grid xs={10} sm={6} md={5} lg={4} xl={4} justify="center"  style={signUpBox}>
          <div>
            <Paper elevation={5}>
              <br />
              <h1 style={top}>
                Signup
              </h1>

              <Grid container spacing={8} justify="center" alignItems="flex-end">
                <Grid item>
                  <img src={email} alt=""/>
                </Grid>
                <Grid item>
                  <FormControl>
                    <TextField
                      label="Email"
                      value={this.state.email}
                      onChange={(event) => {this.handleChange(event, 'email');}}
                      error={this.state.emailError}
                      helperText={this.state.emailError ? this.state.emailErrorMessage : ''}
                      />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={8} justify="center" alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField
                    label="Full Name"
                    value={this.state.name}
                    onChange={(event) => {this.handleChange(event,'name');}}
                    error={this.state.nameError}
                    helperText={this.state.nameError ? this.state.nameErrorMessage: ''}
                    />
                </Grid>
              </Grid>

              <Grid container spacing={8} justify="center" alignItems="flex-end">
                <Grid item>
                  <img src={skype} alt=""/>
                </Grid>
                <Grid item>
                  <TextField
                    label="Skype Username"
                    value={this.state.skypeName}
                    onChange={(event) => {this.handleChange(event,'skypeName');}}
                    />
                </Grid>
              </Grid>

              <Grid container spacing={8} justify="center" alignItems="flex-end">
                <Grid item>
                  <img src={key} alt=""/>
                </Grid>
                <Grid item>
                  <FormControl>
                    <TextField
                      label="Password"
                      type="password"
                      value={this.state.password1}
                      onChange={(event) => {this.handleChange(event, 'password1');}}/>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={8} justify="center" alignItems="flex-end">
                <Grid item>
                  <img src={key} alt="" />
                </Grid>
                <Grid item>
                  <TextField
                    label="Confirm password"
                    type="password"
                    value={this.state.password2}
                    onChange={(event) => {this.handleChange(event, 'password2');}}/>
                </Grid>
              </Grid>

              <br />

              <Grid container spacing={8} justify="center" alignItems="flex-end">
                <Grid item>
                  <FormControl>
                    <FormLabel>
                      Role {'  '}
                      <Tooltip title={infotext} classes={{tooltip: toolTip.test}}>
                        <img src={info} width="6%" height="6%" alt=""/>
                      </Tooltip>
                    </FormLabel>
                    <RadioGroup
                      aria-label="Role"
                      name="role"
                      value={this.state.role}
                      onChange={this.handleRoleChange}
                      style={{display: 'flex', flexDirection: 'row'}}
                      >
                      <FormControlLabel value="student" control={<Radio color="primary"/>} label="Student" />
                      <FormControlLabel value="counselor" control={<Radio color="primary"/>} label="Counselor" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>

              <center>
                <Link to = "/login" style={font}>Already have an account?</Link>
                <br />
                <br />
                <Button
                  type="submit"
                  variant="raised"
                  color="primary">
                  Submit
                </Button>
              </center>
              <br />
            </Paper>
            <br/><br/>
          </div>
        </Grid>
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
)(SignupPage);
