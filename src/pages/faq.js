import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import firebase from "firebase";
import { Parallax } from 'react-parallax';

const font ={
  fontFamily: 'Raleway',
}

const buttonStyle =
{
   padding: '1em 2em',
   margin: '2em',
   fontFamily: 'Raleway',
   backgroundColor: '#cfcfd1',
   color: 'black',
   borderRadius: '2em',
}

const titleTextStyle =
{
  color: '#FFFFFF',
  padding: "10px",
  width: "70%",
  margin: "0 auto",
  fontFamily: 'Raleway',
}


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="FAQ from Students" />
            <Tab label="FAQ from Counselors" />
          </Tabs>
        </AppBar>
        {value === 0 && 
          <TabContainer>
        <div>
        <Parallax
          blur={1}
          bgImage={require('../images/faq.jpg')}
          bgImageAlt="the background"
          strength={0}
        >



      <div>
    <Typography variant="display4" style={titleTextStyle} component="h1">
       <center style={{"border": "transparent", "margin-top": "10%", "background": "rgba(0, 153, 204, 0.5)", "border-radius": "10px"}}>
       FAQ
       </center>
    </Typography>

      <Typography variant="display1" component="p" style={font}>
            <center>
              If you still have any questions, then let us know
            </center>
    </Typography>
    </div>
    <div style={{ height: '10em'}} />
    </Parallax>
    <br/>
    <br/>
    <br/>
        <Typography variant="display1" style={font}>
          <center>
            How do I get started?
          </center> 
        </Typography>
        <br/>
        <Typography variant="title" style={font}>
      <center>
        Go to sign-up page. Make an account (selecting student). Go to form page, fill up the information and you are good to go.
      </center> 
    </Typography>

<br/>
<br/>
<br/>
      <Typography variant="display1" style={font}>
      <center>
        How does the One-on-One Mentorship work?
      </center> 
    </Typography>
    <br/>
    <Typography variant="title" style={font}>
      <center>
      You will be connected to a counselor in your own field of interest by a skype call.
      </center> 
    </Typography>
    <br/>
    <br/>
    <br/>
        <Typography variant="display1" style={font}>
      <center>
        How long is the Skype call?
      </center> 
    </Typography>
    <br/>
    <Typography variant="title" style={font}>
      <center>
      The Skype call will be at least 15 minutes and the longest will be 30 minutes.
      </center>
    </Typography>
     <br/>
    <br/>
    <br/>
        <Typography variant="display1" style={font}>
      <center>
        How will my personal counselor help me?
      </center> 
    </Typography>
    <br/>
    <Typography variant="title" style={font}>
      <center>
      Your counselor can help you by giving advice for passing exams, achieving scholarships, and making plans for college.
      </center>
    </Typography>
  <br/>
  <br/>
  <br/>
  <br/>
  <center>
  <Typography variant="subheading" gutterBottom>
        Still have a question? Let us know down below.
      </Typography>
  <textarea style={{"width": "90%", "height": "200px"}}></textarea>
  </center>
      <br/> 
    <div id="submit" style={{"text-align": "center"}}>
      <Button variant="contained" color="inherit" style={buttonStyle}>Submit</Button>
    </div>
    </div>

          </TabContainer>
        }
        {value === 1 && <TabContainer>
          <div>
        <Parallax
          blur={1}
          bgImage={require('../images/faq.jpg')}
          bgImageAlt="the background"
          strength={0}
        >



      <div>
    <Typography variant="display4" style={titleTextStyle} component="h1">
       <center style={{"border": "transparent", "margin-top": "10%", "background": "rgba(0, 153, 204, 0.5)", "border-radius": "10px"}}>
       FAQ
       </center>
    </Typography>

      <Typography variant="display1" component="p" style={font}>
            <center>
              If you still have any questions, then let us know
            </center>
    </Typography>
    </div>
    <div style={{ height: '10em'}} />
    </Parallax>
    <br/>
    <br/>
    <br/>
        <Typography variant="display1" style={font}>
          <center>
            How do I get started?
          </center> 
        </Typography>
        <br/>
        <Typography variant="title" style={font}>
      <center>
        Go to sign-up page. Make an account (selecting counselor). Go to form page, fill up the information and you are good to go.
      </center> 
    </Typography>

<br/>
<br/>
<br/>
      <Typography variant="display1" style={font}>
      <center>
        Where will my donations go?
      </center> 
    </Typography>
    <br/>
    <Typography variant="title" style={font}>
      <center>
        Your donations will be used to get more counselors and to make any kind of improvements based on your comments.     
      </center> 
    </Typography>
    <br/>
    <br/>
    <br/>
        <Typography variant="display1" style={font}>
      <center>
        How long is the Skype call?
      </center> 
    </Typography>
    <br/>
    <Typography variant="title" style={font}>
      <center>
      The Skype call will be at least 15 minutes and the longest will be 30 minutes.
      </center>
  <br/>
  <br/>
  <br/>
  <br/>
  <center>
  <Typography variant="subheading" gutterBottom>
        Still have a question? Let us know down below.
      </Typography>
  <textarea style={{"width": "90%", "height": "200px"}}></textarea>
  </center>
      <br/> 
    <div id="submit" style={{"text-align": "center"}}>
      <Button variant="contained" color="inherit" style={buttonStyle}>Submit</Button>
    </div>
    </Typography>
    </div>
          </TabContainer>
        }
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);





