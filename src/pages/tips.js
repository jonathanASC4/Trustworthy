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
  textAlign: "center",
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
  textAlign: "center",
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

class TipsPage extends React.Component{
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
	    <div>
        <MetaTags>
          <title>Fact-Checking Tips</title>
        </MetaTags>
        <Media query="(max-width: 819px)">
          {matches =>
            matches ? (
              <h1 style={headStyle2}>Fact-Checking Tips</h1>
            ) : (
              <h1 style={headStyle}>Fact-Checking Tips</h1>
            )
          }
        </Media>
        
        
            <div style={{"margin": "0 auto", "textAlign": "center", "width": "80%"}}>
                <h2>It's always better to inquire than to blindly believe.</h2>
                <h2>And inquiring isn't as hard as you might think.</h2>
                <h3>Sometimes, it's as easy as 30 seconds on Google. Often, fact-checking websites like <a style={{"color":"rgb(230, 0, 0)"}} href='http://www.snopes.com'>Snopes</a> and <a style={{"color":"rgb(230, 0, 0)"}} href='http://www.politifact.com'>Politifact</a> have already checked to see if a story is true or not.
                Other times, however, you may need to do a little bit of work for yourself.</h3>
            </div>
        <div style={{"width": "80%", "font-size": "1.2em", "margin-left": "7%"}}>
            <ul>
                <li>If a website or social media post makes a claim, check the original source. Legitimate-sounding websites are often cited as sources of
                    information, but sounding legitimate is not enough. Often, the website is strongly biased, such as Super-PACs. Other times, it
                    is simply not known to tell facts, such as satire news sites or a websites with a reputation for telling lies. Of course, a website that
                    simply does not have a source while claiming to get information from one should not be trusted.
                </li>
                <li>If a photo seems fishy, you can look it up on Google. Google allows users to search for other times an image appears by
                    right-clicking it and selecting "search Google for image." Often, images and videos are taken out of context and put in
                    unrelated stories, such as a photograph of a non-politically motivated assault attached to a fabricated story about
                    victimization of a group for political reasons.
                </li>
                <li>Look for inconsistencies in a story. Fabricated news stories often have conflicting ideas or claims in them. For
                    example, <a style={{"color":"rgb(230, 0, 0)"}} href='https://www.snopes.com/was-snopes-busted-ties-to-soros'>one rumor claims</a> both that Facebook hired Snopes
                    to fact-check the news on its site and that George Soros and the DNC are its only clients. Inconsistencies can also be found in
                    images, such as lighting or background differences, which can indicate a photoshop job rather than a genuine image.
                </li>
                <li><p>Know that statements and images can be taken out of their proper context. For example:</p>
                    <div style={{"text-align": "center"}}><img style={{"margin": "0 auto"}} src='https://us-east-1.tchyn.io/snopes-production/uploads/2018/02/obama-v-trump-2.jpg?w=526' width="360" height="350" /></div>
                    <p>While this image makes it seem that President Trump does not care about the victims of a recent mass shooting, it is taken out
                    of context. The full image shows the President in a group photo visiting the shooting victims, with other people smiling:</p>
                    <div style={{"text-align": "center"}}><img style={{"margin": "0 auto"}} src='https://us-east-1.tchyn.io/snopes-production/uploads/2018/02/trump-instagram.jpg?w=656' width="520" height="300" /></div>
                </li>
                <li>Beyond these, there are certain red flags often found in viral claims that can be spotted right away.
                    <ol>
                        <li>The author is anonymous, or claims to be someone of unrealistic prestige (for example, a doctor with several nobel prizes).</li>
                        <li>The text contains spelling and/or grammar errors, or contains an excess of capital letters and exclamation points.</li>
                        <li>If a post tells its readers "You do the math!" or something similar, it is not uncommon for the math to be wrong.</li>
                        <li>The post blames mainstream news outlets for not reporting "the real story."</li>
                    </ol>
                </li>
            </ul>
          </div>
	    </div>
	)
    }
};

export default TipsPage;