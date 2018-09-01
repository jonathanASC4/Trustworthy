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

class Claim extends React.Component{
    constructor(){
        super();
        this.state = {
            pictures: [],
        }
        console.log("checking");
    }

    speakerCheck(item, speaker_slug){
        return item.speaker.name_slug==speaker_slug && item.statement_type.statement_type !== "Flip";
    }
    //https://randomuser.me/api/?results=500
    //https://www.politifact.com/api/statements/truth-o-meter/people/barack-obama/json/?n=100
    //http://politifact.com/api/v/2/statement/?format=[JSON]&order_by=-ruling_date&limit=1
    componentDidMount(){
        fetch("https://www.politifact.com/api/statements/truth-o-meter/people/barack-obama/json/?n=100", {'mode': 'no-cors'})
        .then(results => {
            //return results.json();
        })
        /*
        .then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic => {
                return(
                    <div key={pic.results}>
                        <img src={pic.picture.medium} />
                    </div>
                )
            }))
            this.setState({pictures: pictures});
            console.log("state", this.state.pictures);
        })
        */
        //     data=data.filter(function(item){return item.speaker.name_slug=="barack-obama" && item.statement_type.statement_type !== "Flip";});
        // }).then(questions => {
        //     this.setState({
        //         statements: [questions[0]],
        //     });
        // })
    }
    render(){
        return(
            <div className="container2">
                <div className="container1">
                    {this.state.pictures}
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