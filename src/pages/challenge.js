import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

const proxyURL = "https://stark-beyond-49493.herokuapp.com/";
const URL1 = "https://www.politifact.com/api/statements/truth-o-meter/people/barack-obama/json/?n=100";

class Claim extends React.Component{
    constructor(){
        super();
        this.state = {
            statements: ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
            claim1: <p>give us a moment</p>,
            text: <p>getting desperate</p>
        }
        console.log("checking");
    }

    speakerCheck(item, speaker_slug){
        return item.speaker.name_slug==speaker_slug && item.statement_type.statement_type !== "Flip";
    }
    //https://randomuser.me/api/?results=500
    //https://www.politifact.com/api/statements/truth-o-meter/people/barack-obama/json/?n=100
    //http://politifact.com/api/v/2/statement/?format=[JSON]&order_by=-ruling_date&limit=1
    //https://stark-beyond-49493.herokuapp.com/
    componentDidMount(){
        fetch("https://cors-anywhere.herokuapp.com/"+URL1)
        .then(results => {
            //console.log(results.json());
            return results.json();
        })
        .then(data => {
            data=data.filter(function(item){return item.speaker.name_slug=="barack-obama" && item.statement_type.statement_type !== "Flip";});
            var arr = [];
            for(var i=0; i<10; i++){
                arr.push(data.splice(Math.random()*data.length, 1)[0]);
            }
            this.setState({
                statements: arr,
                claim1: arr[0].statement,
            });
            console.log(this.state.statements);
            console.log(arr[0].statement);
        })
        
    }
    render(){
        if(this.state.claim1 !== undefined && this.state.text == <p>getting desperate</p>){
            console.log(this.state.claim1);
            this.setState({
                text: this.state.claim1,
            })
        }
        return(
            <div className="container2">
                <div className="container1">
                    
                    <FormControlLabel control={<div>{this.state.claim1}</div>} />
                </div>
            </div>
        )
    }
};

class ChallengePage extends React.Component{
  state = {
    checked: true,
  };

  componentDidMount() {
    window.scrollTo(0,0);
  }
  
    render(){
      const font ={
        fontFamily: 'Raleway',
      }
      const { checked } = this.state;
	return(
	    <div style={{"textAlign": "center"}}>
            <p>Which political party do you identify with?</p>
            <Claim />
	    </div>
	)
    }
};

export default ChallengePage