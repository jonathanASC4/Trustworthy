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

const buttonStyle =
{
   padding: '1em 2em',
   margin: '5em',
   fontFamily: 'Raleway',
   textDecoration: 'none',
}

const clear = {
  textDecoration: 'none',
}

const titleTextStyle =
{
  color: '#527a7a',
  fontFamily: 'Raleway',
}
const homeBox={
  padding: '2em',
  margin: '1em',
}

const topHomeBox={
  margin: 'auto',
  padding: '4em',
  height: '25%',
}

class HomePage extends React.Component{
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
        <Parallax
          blur={1}
          bgImage={require('../images/background.png')}
          bgImageAlt="the background"
          strength={0}
        >


        <div>
        <Grow in={checked}>
          <Typography variant="display4" style={titleTextStyle} component="h1">
            <center>
            <br/>
            <br/>
            Hire.me
            </center>
          </Typography>
        </Grow>
        <Grow in={checked} style={{ transitionDelay: checked ? 500 : 0 }}>
          <Typography variant="display2" component="p" style={font}>
            <center>
            Live College and Job Interview Counseling
            </center>
          </Typography>
          </Grow>
        <Grow in={checked} style={{ transitionDelay: checked ? 1000 : 0 }}>
            <Grid item xs={12}>
              <center>
              <Link to ="/about" id="about" style={clear}>
                <Button size="large" style = {buttonStyle} variant="contained" className={HomePage.button}>
                  LEARN MORE
                </Button>
              </Link>
              <Link to ="/form" id="form" style={clear}>
                <Button size="large" style = {buttonStyle} variant="contained" className={HomePage.button}>
                  SCHEDULE A MEETING
                </Button>
              </Link>
              <Link to="/browse" id="browse" style={clear}>
                <Button size="large" style = {buttonStyle} variant="contained" className={HomePage.button}>
                  BROWSE COUNSELORS
                </Button>
              </Link>
              </center>
            </Grid>
          </Grow>
        </div>
        <div style={{ height: '25em' }} />

        </Parallax>

        <Parallax
          blur={0}
          bgImage={require('../images/background2.jpg')}
          bgImageAlt="the interview"
          strength={0}
        >

        <div>

          <Typography variant="display3" style={titleTextStyle} component="h1">
            <center>
            <br/>
            <br/>
            What Will Hire.me Mean to You?
            </center>
            <br/>
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs>
              <Paper style={homeBox}>

          <center>
          <Avatar src="http://teenleadershipfoundation.com/wp-content/uploads/2014/01/mentorlogo2-011.png" size={1000} backgroundColor="rgba(0,0,0,0)"
			style={{
				width: 200,
     			height: 200,
     			marginRight: 10,
     			marginBottom: 12,
     			marginTop: 12}}
		/>
		</center>
                <Typography variant="headline" component="h3" style={titleTextStyle}>
                  <center>
                    One-on-One Mentorship
		               <Typography variant="subheading" style={titleTextStyle} gutterBottom>
        	          Here, you can be paired with a counselor. Our counselors all have different skillsets - scholarships, financial aid, finding suitable programs, and more! Begin your road to success starting now!
      		         </Typography>
                </center>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper style={homeBox}>

          <center>
          <Avatar src="https://kaggle2.blob.core.windows.net/competitions/kaggle/6733/logos/front_page.png" size={1000} backgroundColor="rgba(0,0,0,0)"
			style={{
				width: 200,
     			height: 200,
     			marginRight: 10,
     			marginBottom: 12,
     			marginTop: 12}}
				/>
			</center>

                <Typography variant="headline" component="h3" style={titleTextStyle}>
                  <center>
                    Emotion Analysis
		                <Typography variant="subheading" style={titleTextStyle} gutterBottom>
        	           A tool that can be specifically used for interviews. What does it do, you ask? It analyzes emotions - hence the name "Emotion Analysis" - and gives you feedback on what you should do during the scenario of an interview. Although this may not seem like much help, we can guarantee that will be one of the factors taken into by the interviewer.
      		          </Typography>
                  </center>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper style={homeBox}>

		<center>
          <Avatar src="https://www.wired.com/images_blogs/business/2011/06/Picture-2-300x287.png" size={1000} backgroundColor="rgba(0,0,0,0)"
			style={{
				width: 200,
     			height: 200,
     			marginRight: 10,
     			marginBottom: 12,
     			marginTop: 12}}
				/>
			</center>
                <Typography variant="headline" component="h3" style={titleTextStyle}>
                  <center>
                  Personal Feedback
		              <Typography variant="subheading" style={titleTextStyle} gutterBottom>
        	         A page that is designed for another way to communicate with your personal counselor. Your counselor can give you advice for passing exams, achieving scholarships, and making plans for college.
      		        </Typography>
                  </center>
                </Typography>
              </Paper>
            </Grid>
          </Grid>

        </div>
        <div style={{ height: '25em' }} />

        </Parallax>
	    </div>
	)
    }
};

export default HomePage
