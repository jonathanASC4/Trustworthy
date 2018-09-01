import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Parallax } from 'react-parallax';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import Grow from '@material-ui/core/Grow';
import Avatar from '@material-ui/core/Avatar';

const headStyle={
  fontSize: "7em",
  paddingTop: "20px", 
  height:"200px",
  margin: "0 auto",
  fontFamily: "'Arial Black', Gadget, sans-serif",
  borderBottom: "8px solid rgba(171, 0, 0, 1)",
  backgroundColor: "#CCCCCC",
  color: "#1a1a1a",
}

const paraStyle={
  fontSize: "1.3em",
  marginBottom: "5px",
  lineHeight: "50px"
}

class IndexPage extends React.Component{
  state = {
    checked: true,
  };

  componentDidMount() {
    window.scrollTo(0,0)
  }
  
    render(){
      const font ={
        fontFamily: 'Raleway',
      }
      const { checked } = this.state;

	return(
	    <div style={{"textAlign": "center"}}>
        <h1 style={headStyle}>Trustworthy</h1>
      <div style={paraStyle}>
        <h2>Your people wouldn't lie to you. They're honest. <br /> The only honest people in this country. <br /> They tell it like it is, and that's that.</h2>
        <h3>That's what they keep saying, anyway.</h3>
        <h2>How much of what "your people" say is a flat-out lie?</h2>
        <h2><a style={{"color": "rgb(230, 0, 0)"}} href='/challenge'>Care to test yourself and find out?</a></h2>
      </div>
      
	    </div>
	)
    }
};

export default IndexPage
