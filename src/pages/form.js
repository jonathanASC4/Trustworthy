import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Parallax } from 'react-parallax';
import TextField from '@material-ui/core/TextField';
import NavBar from '../components/navbar.js';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Mailto from 'react-protected-mailto';
import Select from 'react-select';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import classNames from 'classnames';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

const columnStyle =
{
  float: "left",
  width: "50%",
}

const font = {
  fontFamily: 'Raleway',
  textDecoration: 'none',
}

const buttonStyle =
{
  padding: '1em 2em',
  margin: '2em',
  fontFamily: 'Raleway',
}

const formBox={
  margin: 'auto',
  padding: '3%',
  height: '25%',
}

const rowStyle =
{
  content: "",
  display: "table",
  clear: "both",
  height: "350px",
  width: "40%"
}

const titleTextStyle =
{
  color: '#FFFFFF',
  padding: "10px",
  width: "70%",
  margin: "0 auto",
  fontFamily: 'Raleway',
}

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    fontSize: 16,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
});
const suggestions = [
  { label: 'Athletics' },
  { label: 'Biology' },
  { label: 'Computer Science' },
  { label: 'Creative Writing' },
  { label: 'Earth Science' },
  { label: 'Economics' },
  { label: 'Engineering' },
  { label: 'English' },
  { label: 'History/Government' },
  { label: 'Language' },
  { label: 'Mathematics' },
  { label: 'Music' },
  { label: 'Physics/Chemistry' },
  { label: 'Social Sciences' },
  { label: 'Visual Arts' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const components = {
  Option,
  Control,
  NoOptionsMessage,
  Placeholder,
  SingleValue,
  MultiValue,
  ValueContainer,
};

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
      >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {

          ref: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
      >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      {...props.innerProps}
      >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      onDelete={event => {
        props.removeProps.onClick();
        props.removeProps.onMouseDown(event);
      }}
      />
  );
}

function ValueContainer(props) {
  return <div>{props.children}</div>;
  }


  class FormPage extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        single: null,
        multiStudent: null,
        multiCounselor: null,
        email: '',
        date: '',
        message: '',
        education: '',
      };
    }

    addData(){
      let uid = this.props.auth.uid;
      this.props.firebase.update(`/users/${uid}`,
        {
          preferences: this.state.multiStudent,
          expertise: this.state.multiCounselor,
          education: this.state.education
        });
      this.props.history.push("/");
      }

      componentDidMount(){
        document.title = "Form",
        window.scrollTo(0,0)
      }

      handleChange(event, field){
        this.setState({
          [field]: event.target.value,
        });
      }

      handleAutoCompleteChange = name => value => {
        this.setState({
          [name]: value,
        });
      };

      handleSubmit(event){
        event.preventDefault();
        console.log("test");
      }

      render(){
        const { classes } = this.props;
        let form;
        if(!this.props.auth.isLoaded){
          // auth is still warming up
          form = null;
        };
        if(this.props.auth.isLoaded && this.props.auth.isEmpty){
          // user is not logged in
          form =
          <div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <center>
              <Link to="/login" style={{textDecoration: 'none'}}>
                <Button style={buttonStyle} color="secondary" variant="contained"> Please log in to access the form page </Button>
              </Link>
            </center>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
        }
        if(this.props.auth.isLoaded && !this.props.auth.isEmpty && this.props.profile.isLoaded && !this.props.profile.isEmpty){
          if(this.props.profile.role === "student") {
            form =
            <div>

              <Parallax
                blur={3}
                bgImage={require('../images/Interview.jpg')}
                bgImageAlt="dynamic background"
                strength={0}
                >
                <div>
                  <Typography variant="display4" style={titleTextStyle} component="h1">
                    <center style={{"border": "transparent", "margin-top": "10%", "background": "rgba(100, 100, 100, 0.5)", "border-radius": "10px", "padding-bottom": "10px"}}>

                      Get Matched to your Interviewer
                    </center>
                  </Typography>

                </div>
                <div style={{ height: '2em' }} />

              </Parallax>

              <Paper style={formBox} elevation={5}>
                <form onSubmit={(event) => {this.handleSubmit(event);}} style={{"font-family": "Raleway", "margin-left": "30px", "font-size": "1.2em"}}>
                  <br /> <br />
                  What are your career interests? (check all that apply) <br />
                <Select
                  classes={classes}
                  options={suggestions}
                  components={components}
                  value={this.state.multi}
                  onChange={this.handleAutoCompleteChange('multiStudent')}
                  placeholder="Select multiple interests if applicable"
                  isMulti
                  />
                <br />
                What do you want to get out of your interview? <br />
              <TextField
                id="full-width"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Type here"
                onChange={(event) => {this.handleChange(event, 'message');}}
                fullWidth
                margin="normal"
                />
              <br /> <br />
              <div id="submit" style={{"text-align": "center"}}>
                <Button variant="contained" type="submit" onClick={() => {this.addData();}} style={buttonStyle}>Submit</Button>
              </div>
            </form>
          </Paper>
        </div>
      }
      else {
        form =
        <div>

          <Parallax
            blur={3}
            bgImage={require('../images/Interview.jpg')}
            bgImageAlt="dynamic background"
            strength={0}
            >
            <div>
              <Typography variant="display4" style={titleTextStyle} component="h1">
                <center style={{"border": "transparent", "margin-top": "10%", "background": "rgba(100, 100, 100, 0.5)", "border-radius": "10px", "padding-bottom": "10px"}}>

                  Become a Counselor
                </center>
              </Typography>

            </div>
            <div style={{ height: '2em' }} />

          </Parallax>

          <br />
          <Paper style={formBox} elevation={5}>
            <form onSubmit={(event) => {this.handleSubmit(event);}} style={{"font-family": "Raleway", "margin-left": "30px", "font-size": "1.2em"}}>
              Education (e.g. Columbia University '17'): <br />
            <TextField
              id="education"
              value={this.state.education}
              onChange={(event) => {this.handleChange(event, 'education');}}
              margin="normal"
              />
            <br /><br /><br />

            What are your areas of expertise? (check all that apply) <br />
          <Select
            classes={classes}
            options={suggestions}
            components={components}
            value={this.state.multi}
            onChange={this.handleAutoCompleteChange('multiCounselor')}
            placeholder="Select multiple if applicable"
            isMulti
            />
          <br />
          <br />
          <div id="submit" style={{"text-align": "center"}}>
            <Button type="submit" onClick={() => {this.addData();}} style={buttonStyle}>Submit</Button>
          </div>
        </form>
      </Paper>
    </div>
  }}
  return(

    <div>
      {form}
    </div>

  )
}
};

export default compose(
  firebaseConnect(),
  firebaseConnect((props) => [{path:'preferences'}]),
  firebaseConnect((props) => [{path:'education'}]),
  firebaseConnect((props) => [{path:'expertise'}]),
  connect(({firebase: {auth}})  => ({auth})),
  connect(({firebase: {profile}}) => ({profile}))
)
(FormPage)
