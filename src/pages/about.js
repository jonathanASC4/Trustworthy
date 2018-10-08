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
import MetaTags from 'react-meta-tags';

const buttonStyle =
{
   padding: '1em 2em',
   margin: '5em',
   fontFamily: 'Raleway',
   textDecoration: 'none',
}

const headStyle={
  fontSize: "4em",
  paddingTop: "40px", 
  paddingBottom: "40px",
  margin: "0 auto",
  fontFamily: "'Arial Black', Gadget, sans-serif",
  borderBottom: "8px solid rgba(171, 0, 0, 1)",
  backgroundColor: "#CCCCCC",
  color: "#1a1a1a",
}

const headStyle2={
  fontSize: "2em",
  paddingTop: "40px", 
  paddingBottom: "40px",
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

class AboutPage extends React.Component{
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
        <MetaTags>
          <title>About Trustworthy</title>
        </MetaTags>
        <Media query="(max-width: 819px)">
          {matches =>
            matches ? (
              <h1 style={headStyle2}>About Trustworthy</h1>
            ) : (
              <h1 style={headStyle}>About Trustworthy</h1>
            )
          }
        </Media>
        
        <div style={{"width": "80%", "margin": "0 auto", "font-size": "1.2em"}}>
        <h1>Being critical of information is important.</h1>
         <p>
            Modern politics enables people to construct echo chambers, believing anything they hear from their end of the political spectrum and
            nothing from the other side. <a style={{"color":"rgb(230, 0, 0)"}} href='https://www.statista.com/statistics/620117/fake-crime-news-facebook-engagement/'>According to
            Politico,</a> 46 percent of Americans believe that the mainstream news media outright invents stories, despite the fact that they
            are typically accompanied by video evidence of the story. Modern Americans do not want to face any hard realities that
            contradict their worldview.
          </p>
          <p>
            This has had devastating consequences. <a style={{"color":"rgb(230, 0, 0)"}} href='https://www.nytimes.com/2016/12/05/us/pizzagate-comet-ping-pong-edgar-maddison-welch.html'>In 2016,</a> Edgar Welch opened
            fire on a Comet Ping Pong pizzeria, believing that it had the core of a pedophile ring in its basement (despite the fact that the
            building did not have a basement). He believed in "Pizzagate," an online conspiracy theory, that, despite having no evidence,
            convinced <a style={{"color":"rgb(230, 0, 0)"}} href=
            'https://www.publicpolicypolling.com/polls/trump-remains-unpopular-voters-prefer-obama-on-scotus-pick/'>over 9 million
            voters.</a> Thankfully, no one was hurt, but someone easily could have been. The total willingness of people to believe anything
            they choose to hear can lead to violence.
          </p>
          <p>
              People must be more critical of their information sources, especially the ones they trust most. Even major media outlets can get
              details wrong.
          </p>
          <p>
              Trustworthy is an attempt to show people that a bubble is not a reliable source. Unfavorable facts are still facts, and a falsehood
              is not made true by persistent belief in it.
          </p>
          </div>
      
	    </div>
	)
    }
};

export default AboutPage