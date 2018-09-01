import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import firebase from "firebase";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Parallax } from 'react-parallax';
import Grow from '@material-ui/core/Grow';
import Media from 'react-media';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

const browseBox={
  margin: 'auto',
  height: '25%',
  padding: '4em',
}

const titleTextStyle =
{
  color: '#FFFFFF',
  padding: "10px",
  width: "70%",
  margin: "0 auto",
  fontFamily: 'Raleway',
}


const font ={
  fontFamily: 'Raleway',
}


class DonationPage extends React.Component{
  state = {
    checked: true,
  };
    render(){
      const { checked } = this.state;
	return(

		<div>
        <Parallax
          blur={1}
          bgImage={require('../images/donation.jpg')}
          bgImageAlt="the background"
          strength={0}
        >



	    <div>
		 <Media query="(max-width: 815px)">
          {matches =>
            matches ? (
              <Grow in={checked}>
              <Typography variant="display5" style={titleTextStyle} component="h1">
                <center style={{"border": "transparent", "margin-top": "10%", "background": "rgba(255, 102, 102, 0.5)", "border-radius": "10px", "padding-bottom": "10px"}}>
                  Donate Today
                </center>
              </Typography>
              </Grow>
            ) : (
            <Grow in={checked}>
              <Typography variant="display4" style={titleTextStyle} component="h1">
                <center style={{"border": "transparent", "margin-top": "10%", "background": "rgba(255, 102, 102, 0.5)", "border-radius": "10px", "padding-bottom": "10px"}}>
                  Donate Today
                </center>
              </Typography>
              </Grow>
            )
          }
          </Media>

      <Grow in={checked} style={{ transitionDelay: checked ? 500 : 0 }}>
   		<Typography variant="display1" component="p" style={font}>
            <center>
            	Your donation will be used to get counselors and more
            </center>
		</Typography>
    </Grow>
		</div>
		<div style={{ height: '10em'}} />
		</Parallax>
 		<Paper style={browseBox}>
     <Grow in={checked} style={{ transitionDelay: checked ? 500 : 0 }}>
		<Typography variant="headline" component="p" style={font}>
			<center>
				Click the button down below to donate now
			</center>
		</Typography>
    </Grow>
		<center>
		<br/>
		<br/>
     <Grow in={checked} style={{ transitionDelay: checked ? 500 : 0 }}>
			<Button
                  type="submit"
                  variant="raised"
                  color="secondary"
                  >
                  <a href="https://www.paypal.com/us/webapps/mpp/requesting-payments" target="_blank" id="donationTextBox">
                  	Donate
                  </a>
            </Button>
            </Grow>
		</center>
		</Paper>
	    </div>



	)
    }
};

export default DonationPage
