import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavBar from '../components/navbar.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import email from '../images/email.svg';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import firebase from 'firebase'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';


const variantIcon = {
  success: CheckCircleIcon,
};

const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

class ForgotPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      open: false,
      disabled: false,
    }
  }

  handleChange(event, field){
    this.setState({
      [field]: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    var auth = firebase.auth();
    auth.sendPasswordResetEmail(this.state.email).then(() => {
      // Email sent.
      this.setState({ open: true,disabled: true });

      setTimeout(() => {this.props.history.push("/");}, 2000);

    }).catch(function(error) {
      console.log("no work");
      // An error happened.
    });

  }

  handleClose = (event, reason) => {
	  if (reason === 'clickaway') {
		return;
	  }

	this.setState({ open: false });
	};

  render(){
    const top ={
      textAlign: "center",
      margin: '3%',
      fontFamily: 'Raleway',
    }

    const box={
      margin: 'auto',
      height: '25%',
      padding: 'auto',
    }

    const {classes}=this.props;
    return(
      <div>
        <br />
        <Grid xs={10} sm={6} md={5} lg={4} xl={4} justify="center"  style={box}>
          <Paper elevation={5}>
            <br />
            <h1 style={top}>
              Forgot Password?
            </h1>
            <form onSubmit={(event) => {this.handleSubmit(event);}}>
              <Grid container spacing={8} justify="center" alignItems="flex-end" >
                <Grid item>
                  <img src={email} alt="" />
                </Grid>
                <Grid item>
                  <TextField
                    label="Email"
                    value={this.state.email}
                    onChange={(event) => {this.handleChange(event, 'email');}} />
                </Grid>
              </Grid>

              <br />
              <center>
                <Button type="submit" disabled={this.state.disabled} variant="raised" color="primary">Submit</Button>
                  <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="success"
            message="An email has been sent to reset your password."
          />
        </Snackbar>

              </center>
            </form>
            <br />
          </Paper>
        </Grid>
      </div>
    )
  }
};

export default compose(
  firebaseConnect(),
  connect(({firebase: {auth}}) => ({auth}))
)(ForgotPage)
