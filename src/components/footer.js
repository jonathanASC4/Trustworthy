import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';

class Footer extends React.Component{
  render(){
    const leftBox={
      margin: 'auto',
      padding: '4em',
      align: 'bottom'
    }
    const rightBox={
      margin: 'auto',
      padding: '4em',
      align: 'bottom'
    }

    const fontAndColor={
      fontFamily: 'Raleway',
      color: 'white',
    }

    const fontAndColorInverse={
      fontFamily: 'Raleway',
      color: '#FFFFFF',
      textDecoration: 'none',
    }

    return(
      <div id="footer">
      <Parallax
        blur={10}
        bgImage={require('../images/1.jpg')}
        bgImageAlt="Browse Page background"
        strength={100}
      >
      <Grid container spacing={24}>
    <Grid item xs={6} style={leftBox}>
        <Typography gutterBottom variant="display1" style={fontAndColorInverse}>
          <b>Hire.me</b>
        </Typography>
        <Typography gutterBottom variant="subheading" style={fontAndColorInverse}>
          Follow Us!
        </Typography>
    </Grid>
    <Grid item xs={6} style={rightBox}>
        <Typography gutterBottom variant="display1" style={fontAndColorInverse}>
          <b>Media</b>
        </Typography>
        <a href="http://www.jointhebloc.com">
        <img title="Bloc Website" alt="Bloc Website" src="https://scontent-lga3-1.cdninstagram.com/vp/3358478089a86871eee6cd8480656efb/5C09943F/t51.2885-19/s150x150/14128727_187344468356747_936623222_a.jpg"
        style={{
				width: 50,
     			height: 50,
     			marginRight: 10,
     			marginBottom: 12,
     			marginTop: 12}}
		/>
        </a>
        <a href="https://www.instagram.com/our_bloc/"> 
        <img title="Instagram" alt="Instagram" src="https://sguru.org/wp-content/uploads/2018/01/instagram-colourful-icon.png"
        style={{
				width: 50,
     			height: 50,
     			marginRight: 10,
     			marginBottom: 12,
     			marginTop: 12}}
		/>
        </a>
    </Grid>
</Grid>
</Parallax>
      </div>
    )
  }
}

export default Footer
