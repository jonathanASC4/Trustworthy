import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Parallax } from 'react-parallax';
import TextField from '@material-ui/core/TextField';
import NavBar from '../components/navbar.js';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Media from 'react-media';
import Mailto from 'react-protected-mailto';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';


const styles = theme => ({
	close: {
	  width: theme.spacing.unit * 4,
	  height: theme.spacing.unit * 4,
	},
  });

  class Email extends React.Component{
	state = {
		sendto: '',
	}

	_handleTextFieldChange = (e) => {
		this.setState({
			sendto: e.target.value
		});

	};

	render(){
		return (
			<TextField value={this.state.sendto} onChange={this._handleTextFieldChange} />

		)
	}
  }

  class Submit extends React.Component {
	state = {
	  open: false,
	};

	handleClick = () => {
	  this.setState({ open: true });
	};

	handleClose = (event, reason) => {
	  if (reason === 'clickaway') {
		return;
	  }

	  this.setState({ open: false });
	};



	render() {
	  const { classes } = this.props;
	  return (
		<div>
		  <Button onClick={this.handleClick} variant="contained" color="inherit" style={buttonStyle}>Submit</Button>
		  <Snackbar
			anchorOrigin={{
			  vertical: 'bottom',
			  horizontal: 'left',
			}}
			open={this.state.open}
			autoHideDuration={6000}
			onClose={this.handleClose}
			ContentProps={{
			  'aria-describedby': 'message-id',
			}}
			message={<span id="message-id">Information submitted</span>}
			action={[
			  <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
				UNDO
			  </Button>,
			  <IconButton
				key="close"
				aria-label="Close"
				color="inherit"
				onClick={this.handleClose}
			  >
				<CloseIcon />
			  </IconButton>,
			]}
		  />
		</div>
	  );
	}
  }


const columnStyle =
{
  float: "left",
  width: "50%",
}

const buttonStyle =
{
   padding: '1em 2em',
   margin: '2em',
   fontFamily: 'Raleway',
}

const formBox={
  margin: 'auto',
  padding: '5%',
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

class DateTime extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			numOn: 1,
			times: [],
			options: [
				<div id='1'>On <TextField id="date" type="date" margin="normal"/> from <TextField id="time1" type="time" defaultValue="12:00" margin="normal"/> to <TextField id="time2" type="time" defaultValue="12:15" margin="normal"/></div>,
			],
		};
	}
	handleAddTime(time){
		let times = this.state.times;
		times.push(time);
		this.setState({times: times})
	}

	addTimeOptions(){
		let options = this.state.options;
		let numOn = this.state.numOn + 1;
		var addThis = <div id = {numOn}>On <TextField id="date" type="date" margin="normal"/> from <TextField id="time1" type="time" defaultValue="12:00" margin="normal"/> to <TextField id="time2" type="time" defaultValue="12:15" margin="normal"/></div>
		options.push(addThis);
		this.setState({options: options, numOn: numOn})
	}
//
//On <TextField id="date" type="date" margin="normal"/> from <TextField id="time1" type="time" defaultValue="12:00" margin="normal"/> to <TextField id="time2" type="time" defaultValue="12:15" margin="normal"/>
	render(){
		return(
			<div>
				<p>Dates and times available (please allow at least 15 minutes):</p>
				<button onClick='addTimeOptions()'>add</button> <br />
				<FormControlLabel control={<div>{this.state.options}</div>}/>
			</div>
		)
	}
}

class CheckOther extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			isDisabled: true,
		}
	}

	toggleDisable = function(){
		this.setState({

			isDisabled: !this.state.isDisabled
		})
	}

	render(){
		return(
			<div>
				<FormControlLabel control={<div><Checkbox value="checkedOther" onClick={() => this.toggleDisable()}/></div>}label="Other (please specify)"/>
				<TextField defaultValue = '' disabled={this.state.isDisabled} />
			</div>
		)
	}
}

class Checkboxes extends React.Component{
	handleChange = name => event => {
		this.setState({ [name]: event.target.checked });
	};
}

class ContactPage extends React.Component{


	constructor(props){
		super(props);
		this.state = {
			email: '',
			times: [],
			want: '',
		};
		  }

	componentDidMount(){
		document.title = "Contact Info"
	}

	handleChange(event, field){
		this.setState({
			[field]: event.target.value
		});
		  }

		  handleSubmit(event){
		event.preventDefault();

			};


    render(){

	return(
	    <div>

      <Parallax
        blur={3}
        bgImage={require('../images/contactBack.jpg')}
        bgImageAlt="dynamic background"
        strength={0}
      >
      <div>				
				<Media query="(max-width: 815px)">
					{matches =>
 		        matches ? (
     		      <Typography variant="display5" style={titleTextStyle} component="h1">
		    		    <center style={{"border": "transparent", "margin-top": "10%", "background": "rgba(100, 100, 100, 0.5)", "border-radius": "10px", "padding-bottom": "10px"}}>
     							Contact Information
								</center>
     					</Typography>
            ) : (
 		          <Typography variant="display4" style={titleTextStyle} component="h1">
     						<center style={{"border": "transparent", "margin-top": "10%", "background": "rgba(100, 100, 100, 0.5)", "border-radius": "10px", "padding-bottom": "10px"}}>
			  		      Contact Information
								</center>
   		    		</Typography>
         		)
         	}
				</Media>

        

        </div>
        <div style={{ height: '2em' }} />

      </Parallax>
      <br />
    <Paper style={formBox} elevation={5}>
		<form style={{"font-family": "Raleway", "margin-left": "30px", "font-size": "1.2em"}}>
			First and last name: <br />
			<TextField></TextField> <br /> <br />

			Email: <br />
			<Email></Email> <br /> <br />
			
			<br /> <br />
			What questions do you have about the interview, or about Hire.me?<br />
			<textarea style={{"width": "80%", "height": "180px"}}></textarea>
			<br /> <br />
			<div id="submit" style={{"text-align": "center"}}>
				<Submit></Submit>
			</div>
			</form>
      </Paper>
	    </div>
	)
    }
};

export default ContactPage
