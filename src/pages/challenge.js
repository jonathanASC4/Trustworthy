import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
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
const currentProxy = "https://cors-anywhere.herokuapp.com/";
const URL1 = "https://www.politifact.com/api/statements/truth-o-meter/people/barack-obama/json/?n=50";
const URL2 = "https://www.politifact.com/api/statements/truth-o-meter/people/hillary-clinton/json/?n=210";
const URL3 = "https://www.politifact.com/api/statements/truth-o-meter/people/bernie-s/json/?n=70";

class Claim extends React.Component{
    constructor(){
        super();
        this.state = {
            statements: ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
            claim1: <p>give us a moment</p>,
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
        var superArray = [];
        var arr = [];
        fetch(currentProxy+URL1)
        .then(results => {
            return results.json();
        })
        .then(data => {
            
            data=data.filter(function(item){return item.speaker.name_slug=="barack-obama" && item.statement_type.statement_type !== "Flip";});
            for(var i=0; i<10; i++){
                arr.push(data.splice(Math.floor(Math.random()*data.length), 1)[0]);
            }
            
            fetch(currentProxy+URL2)
            .then(results2 => {
                return results2.json();
            })
            .then(data2 => {
                data2=data2.filter(function(item){return item.speaker.name_slug=="hillary-clinton" && item.statement_type.statement_type !== "Flip";});
                for(var i=0; i<10; i++){
                    arr.push(data2.splice(Math.floor(Math.random()*data2.length), 1)[0]);
                }

                fetch(currentProxy+URL3)
                .then(results3 => {
                    return results3.json();
                })
                .then(data3 => {
                    data3=data3.filter(function(item){return item.speaker.name_slug=="bernie-s" && item.statement_type.statement_type !== "Flip";});
                    for(var i=0; i<10; i++){
                        arr.push(data3.splice(Math.floor(Math.random()*data3.length), 1)[0]);
                    }

                    this.setState({
                        statements: arr,
                        claim1: arr[Math.floor(Math.random()*arr.length)].statement,
                    });
                    console.log(this.state.statements);
                    console.log(arr[0].statement);
                })

            })
            
        })
        
        // fetch("https://cors-anywhere.herokuapp.com/"+URL2)
        // .then(results => {
        //     return results.json();
        // })
        // .then(data => {
        //     data=data.filter(function(item){return item.speaker.name_slug=="hillary-clinton" && item.statement_type.statement_type !== "Flip";});
        //     for(var i=0; i<10; i++){
        //         superArray.push(data.splice(Math.random()*data.length, 1)[0]);
        //     }
        // })
        // fetch("https://cors-anywhere.herokuapp.com/"+URL3)
        // .then(results => {
        //     return results.json();
        // })
        // .then(data => {
        //     data=data.filter(function(item){return item.speaker.name_slug=="bernie-s" && item.statement_type.statement_type !== "Flip";});
        //     for(var i=0; i<10; i++){
        //         superArray.push(data.splice(Math.random()*data.length, 1)[0]);
        //     }
        // })
        // console.log(superArray);
        // console.log(superArray[0]);
        // this.setState({
        //     statements: superArray,
        //     claim1: superArray[Math.floor(Math.random()*superArray.length)],
        // })
    }
    render(){
        return(
            <div className="container2">
                <div className="container1">
                    <div>{ReactHtmlParser(this.state.claim1)}</div>
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