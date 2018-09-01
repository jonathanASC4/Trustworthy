import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Parallax } from 'react-parallax';
import NavBar from '../components/navbar.js';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Grow from '@material-ui/core/Grow';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Media from 'react-media';

const buttonStyle =
{
  padding: '1em 2em',
  margin: '2em',
  fontFamily: 'Raleway',
}

const columnStyle =
{
  float: "center",
  width: "50%",
}

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

class BrowsePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checked: true,
    }
  }

  render(){
    const { checked } = this.state;
    let payload;
    if(!isLoaded(this.props.users)){
      // still waiting for connection
      payload = null;
    }
    if(isLoaded(this.props.users) && !isEmpty(this.props.users)){
      payload = Object.keys(this.props.users).map((key) => {
        let user = this.props.users[key];
        var result = ""
        if(user.role == 'counselor' && user.expertise != null) {
          var arr = user.expertise;
        for(var i = 0; i < arr.length; i++) {
          result += arr[i].value + ", ";
        }}
        result = result.substring(0,result.length - 2);
        console.log(result);
        if(user.role == 'counselor'){
          return <li key={key} style={{ listStyleType: "none" }}>
            <Paper style={browseBox} elevation={5}>
            <Grow in={this.state.checked} style={{ transitionDelay: this.state.checked ? 500 : 0 }}>
              <Typography variant="headline" style={font} gutterBottom>
                Name - {user.name}
              </Typography>
            </Grow>
            <Grow in={checked} style={{ transitionDelay: checked ? 700 : 0 }}>
              <Typography variant="subheading" style={font} gutterBottom>
                Education - {user.education}
              </Typography>
            </Grow>
            <Grow in={checked} style={{ transitionDelay: checked ? 900 : 0 }}>
              <Typography variant="subheading" style={font} gutterBottom>
                <div id="expertise">
                  Expertise - {result}
                </div>
              </Typography>
            </Grow>
            <Grow in={checked} style={{ transitionDelay: checked ? 700 : 0 }}>
              <Link to ="/form" id="form">
                <Button variant="contained" color="inherit" style={buttonStyle}>Get in contact!</Button>
              </Link>
            </Grow>
          </Paper>

          </li>}
          else {
            return ''
          }
        });
      }
      return(
        <div>

          <Parallax
            blur={10}
            bgImage={require('../images/test.jpg')}
            bgImageAlt="Browse Page background"
            strength={100}
            >

            <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Media query="(max-width: 815px)">
          {matches =>
            matches ? (
              <Typography variant="display5" style={titleTextStyle} component="h1">
                <center style={{"border": "transparent", "margin-top": "10%", "background": "rgba(100, 100, 100, 0.5)", "border-radius": "10px", "padding-bottom": "10px"}}>
                  Browse Counselors
                </center>
              </Typography>
            ) : (
              <Typography variant="display4" style={titleTextStyle} component="h1">
                <center style={{"border": "transparent", "margin-top": "10%", "background": "rgba(100, 100, 100, 0.5)", "border-radius": "10px", "padding-bottom": "10px"}}>
                  Browse Counselors
                </center>
              </Typography>
            )
          }
        </Media>

            </div>
            <div style={{ height: '10em' }} />
          </Parallax>

          <br />
          {payload}
          <br />
        </div>
      )
    }
  }

  export default compose(
    firebaseConnect((props) =>
    [{path: 'users'}
  ]),
  connect((state, props) => ({
    users: state.firebase.data.users
  })),
)
(BrowsePage)
