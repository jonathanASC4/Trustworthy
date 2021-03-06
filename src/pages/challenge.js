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
import TextField from '@material-ui/core/TextField';
import MetaTags from 'react-meta-tags';

const proxyURL = "https://stark-beyond-49493.herokuapp.com/";
const currentProxy = "https://cors-anywhere.herokuapp.com/";
const URL1 = "https://www.politifact.com/api/statements/truth-o-meter/people/barack-obama/json/?n=50";
const URL2 = "https://www.politifact.com/api/statements/truth-o-meter/people/hillary-clinton/json/?n=210";
const URL3 = "https://www.politifact.com/api/statements/truth-o-meter/people/bernie-s/json/?n=70";

const styles = theme => ({
    multilineColor:{
      color:'red',
    },});

var arr = [];

class Claim extends React.Component{
    constructor(){
        super();
        this.state = {
            statements: ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
            die: <p>now</p>,
            testLength: 10,
            test: <button onClick={() => this.displayClaimsDem()}>do the thing</button>,
            claim1: [],
        }
        console.log("checking");
    }

    returnPush(arr1, val){
        var arr2 = arr1;
        arr2.push(val);
        return arr2;
    }

    displayClaimsDem(){
        console.log("idk");
        //ReactHtmlParser(arr.splice(Math.floor(Math.random()*arr.length), 1)[0].statement
        //console.log(this.returnPush(this.state.claim1, ReactHtmlParser(arr.splice(Math.floor(Math.random()*arr.length), 1)[0].statement)));
        this.setState({
            claim1: <p>do something</p>, //this.returnPush(this.state.claim1, ReactHtmlParser(arr.splice(Math.floor(Math.random()*arr.length), 1)[0].statement)),
            test: [<p>doing a thing</p>, <p>another thing</p>],
            die: <p>please</p>,
        })

        var temp = [];
        for(var i=0; i<this.state.testLength; i++){
            temp.push(ReactHtmlParser(arr.splice(Math.floor(Math.random()*arr.length), 1)[0].statement));
        }
        
        this.setState({
            test: temp,
        })
        //console.log(this.state.claim1);
    }

    handleChange(event, field){
        this.setState({
          [field]: event.target.value,
        });
      }

    speakerCheck(item, speaker_slug){
        return item.speaker.name_slug==speaker_slug && item.statement_type.statement_type !== "Flip";
    }
    
    //https://randomuser.me/api/?results=500
    //https://www.politifact.com/api/statements/truth-o-meter/people/barack-obama/json/?n=100
    //http://politifact.com/api/v/2/statement/?format=[JSON]&order_by=-ruling_date&limit=1
    //https://stark-beyond-49493.herokuapp.com/
    componentDidMount(){
        
        fetch(currentProxy+URL1)
        .then(results => {
            return results.json();
        })
        .then(data => {
            
            data=data.filter(function(item){return item.speaker.name_slug=="barack-obama" && item.statement_type.statement_type !== "Flip";});
            for(var i=0; i<10; i++){
                arr.push(data.splice(Math.floor(Math.random()*data.length), 1)[0]);
                //console.log(arr);
            }
            
            fetch(currentProxy+URL2)
            .then(results2 => {
                return results2.json();
            })
            .then(data2 => {
                data2=data2.filter(function(item){return item.speaker.name_slug=="hillary-clinton" && item.statement_type.statement_type !== "Flip";});
                for(var i=0; i<10; i++){
                    arr.push(data2.splice(Math.floor(Math.random()*data2.length), 1)[0]);
                    //console.log(arr);
                }

                fetch(currentProxy+URL3)
                .then(results3 => {
                    return results3.json();
                })
                .then(data3 => {
                    data3=data3.filter(function(item){return item.speaker.name_slug=="bernie-s" && item.statement_type.statement_type !== "Flip";});
                    for(var i=0; i<10; i++){
                        arr.push(data3.splice(Math.floor(Math.random()*data3.length), 1)[0]);
                        //console.log(arr);
                    }
                    for(var i=0; i<arr.length; i++){
                        console.log(arr[i]);
                    }



                    this.setState({
                        statements: arr,
                        
                    });
                    console.log(arr.splice(Math.floor(Math.random()*arr.length), 1)[0].statement);
                })

            })
            
        })
    }
    //
    render(){
        return(
            <div className="container2">
                <div className="container1">
                    <TextField style={{ width: '30px', paddingLeft: '10px', backgroundColor: 'rgb(200, 200, 200)', borderRadius: '4px' }}
                    value={this.state.testLength}
                    onChange={(event) => {this.handleChange(event, 'testLength');}}/>
                    <br />
                    {this.state.test}
                </div>
            </div>
        )
    }
};

class ChallengePage extends React.Component{
  state = {
    checked: true,
    content: <button onClick={() => this.displayClaimsDem()}>do the thing</button>
  };

  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  displayClaimsDem(){
    //console.log(ReactHtmlParser(arr.splice(Math.floor(Math.random()*arr.length), 1)[0].statement));
      this.setState({
          content: <Claim />
      })
  }

    render(){
      const font ={
        fontFamily: 'Raleway',
      }
      const { checked } = this.state;
	return(
	    <div style={{"textAlign": "center"}}>
            <MetaTags>
                <title>Trustworthy Challenge</title>
            </MetaTags>
            <p>Which political party do you identify with?</p>
            <Claim />
	    </div>
	)
    }
};

export default ChallengePage