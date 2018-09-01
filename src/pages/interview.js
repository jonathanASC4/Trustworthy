import React from 'react';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import { Parallax } from 'react-parallax';
import Speech from '../components/speech.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Iframe from 'react-iframe'
import { render } from "react-dom";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'

declare var Skype;

const styles = {
  textAlign: 'center',
  fontFamily: 'Raleway',
  fontSize: '5em',
}

const callBox={
  margin: 'auto',
  height: '25%',
  padding: 'auto',
}

const titleTextStyle =
{
  color: '#FFFFFF',
  padding: "10px",
  width: "70%",
  margin: "0 auto",
  fontFamily: 'Raleway',
}

class InterviewPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checked: true,
      transcript: '',
      userSkype: '',
      search: '',
      final: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ final: this.state.search });
  }

  handleChange(event, field){
    this.setState({
      [field]: event.target.value,
    });
  }

  // componentDidMount() {
  //   Skype.ui({
  //     name: "dropdown",
  //     element: "SkypeButton_Call",
  //     participants: [""],
  //     imageSize: 32,
  //     imageColor: "skype",
  //   });
  // }

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
        var toSearch = this.state.final;
        if(user.email === toSearch) {
          var result = user.skypeName;
          Skype.ui({
            name: "dropdown",
            element: "SkypeButton_Call",
            participants: [result],
            imageSize: 32,
            imageColor: "skype",
          });
          console.log(result);
        }

      })}


      return(
        <div>
          <Parallax
            blur={10}
            bgImage={require('../images/interviewBack.jpg')}
            bgImageAlt="Browse Page background"
            strength={100}
            >

            <div>
              <Grow in={this.state.checked}>
                <Typography variant="display4" style={titleTextStyle} component="h1">
                  <center style={{"border": "transparent", "margin-top": "10%", "background": "rgba(100, 100, 100, 0.5)", "border-radius": "10px"}}>
                    Start Your Interview
                  </center>
                </Typography>
              </Grow>
            </div>
            <div style={{ height: '10em' }} />
          </Parallax>

          <br />
          <br />
          <Grid xs={10} sm={6} md={5} lg={4} xl={4} justify="center" style={callBox}>
            <Paper elevation={5}>
              <div id="SkypeButton_Call" style={styles}>
              </div>
            </Paper>
          </Grid>

          <form onSubmit={(event) => {this.handleSubmit(event);}}>
            <TextField
              label="search"
              value={this.state.search}
              onChange={(event) => {this.handleChange(event, 'search');}}/>
            <Button type="submit" variant="raised" color="primary">Submit</Button>
          </form>

        </div>
      )
    }
  };

  export default compose(
    firebaseConnect((props) =>
    [{path: 'users'}
  ]),
  connect((state, props) => ({
    users: state.firebase.data.users
  })),
)(InterviewPage)
