import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavBar from '../components/navbar.js'
import { Parallax, Background } from 'react-parallax';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Media from 'react-media';

const titleTextStyle =
{
  color: '#FFFFFF',
  padding: "10px",
  width: "70%",
  margin: "0 auto",
  fontFamily: 'Raleway',
}
const aboutBox={
  margin: 'auto',
  padding: '4em',
  height: '25%',
}
const font ={
  fontFamily: 'Raleway',
}

class AboutPage extends React.Component{
  state = {
    checked: true,
  };
    render(){
       const { checked } = this.state;  

	return(
	    <div>


	     <Parallax
	        blur={10}
	        bgImage={require('../images/aboutBack.jpeg')}
	        bgImageAlt="Browse Page background"
	        strength={100}
	      >
        <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <Media query="(max-width: 815px)">
          {matches =>
            matches ? (
              <Typography variant="display5" style={titleTextStyle} component="h1">
                <center style={{"border": "transparent", "margin-top": "10%", "background": "rgba(100, 100, 100, 0.5)", "border-radius": "10px", "padding-bottom": "10px"}}>
                  About 
                </center>
              </Typography>
            ) : (
              <Typography variant="display4" style={titleTextStyle} component="h1">
                <center style={{"border": "transparent", "margin-top": "10%", "background": "rgba(100, 100, 100, 0.5)", "border-radius": "10px", "padding-bottom": "10px"}}>
                  About 
                </center>
              </Typography>
            )
          }
        </Media>
        </div>
        <div style={{ height: '10em' }} />
    		</Parallax>

        <br />
      <Paper style={aboutBox}>
        <center>
        <Grow in={checked} style={{ transitionDelay: checked ? 500 : 0 }}>
          <Typography variant="display2" style={font} gutterBottom>THE TEAM</Typography>
          </Grow>
           <Grow in={checked} style={{ transitionDelay: checked ? 800 : 0 }}>
          <Typography variant="subheading" style={font} gutterBottom>
            <b>
            Hire.me is a service geared towards providing underpriviledged students with the skills necessary to ace their college and job interviews.
            With emotion analysis software, one on one mentorship, and personalized feedback, Hire.me aims to cultivate the next generation of African
            American leaders in the workforce.

            </b>
          </Typography>
          </Grow>
          <br/>
          <Grow in={checked} style={{ transitionDelay: checked ? 500 : 0 }}>
          <Typography variant="display2" style={font} gutterBottom>WHAT ARE WE WORKING ON?</Typography>
          </Grow>
          <Grow in={checked} style={{ transitionDelay: checked ? 800 : 0 }}>
          <Typography variant="subheading" style={font} gutterBottom>
            <b>
      			We are working to help the talents of color by utilizing natural language processing, collaborative filtering,
      			and emotion analysis technology to educate those on how to effectively present themselves in all settings.
            </b>
          </Typography>
          </Grow>

          <br/>

          <Grow in={checked} style={{ transitionDelay: checked ? 500 : 0 }}>
          <Typography variant="display2" style={font} gutterBottom>
            OUR MISSION
          </Typography>
          </Grow>
          <Grow in={checked} style={{ transitionDelay: checked ? 800 : 0 }}>
          <Typography variant="subheading" style={font} gutterBottom>
            <b>
            Leveraging emerging technology to empower, rather than displace, talent of color.
            </b>
          </Typography>
          </Grow>
          
        </center>
      </Paper>
	    </div>

	)
    }
};
export default AboutPage
