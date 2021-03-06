import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

const buttonStyle =
{
   padding: '1em 2em',
   margin: '2em',
   fontFamily: 'Raleway',
   backgroundColor: '#cfcfd1',
   color: 'black',
   borderRadius: '2em',
}

const font ={
  fontFamily: 'Raleway',
}



class ProfilePage extends React.Component{
	state = {
    avatar: "",
    isUploading: false,
    avatarURL: "",
    name: "",
    username: "",
    gender: "",
    email: "",
    occupation: "",
    academics: "",
    language: "",
    skills: "",
    bio: "",
  };
  
  

  addData(){
    let uid = this.props.auth.uid;

    this.props.firebase.update(`/users/${uid}`,
      {
        picture: this.state.avatar,
        picURL: this.state.avatarURL,
      });

    }

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
};
    handleUploadSuccess = filename => {
      this.setState({ avatar: filename, progress: 100, isUploading: false });
      firebase
        .storage()
        .ref("images")
        .child(filename)
        .getDownloadURL()
        .then(url => this.setState({ avatarURL: url })).then(this.addData());
    };

    handleChange(event, field){
      let uid = this.props.auth.uid;
      this.props.firebase.update(`/users/${uid}`,
      {[field]:
        event.target.value});
      /*
      this.setState({
        [field]: event.target.value,
      });
      */
    }

    render(){
      console.log(typeof this.props.profile.name);
      return(
	    <div>
        <center>
          <h1>
  		    Profile Page
      		</h1>
        </center>

		<center>
  		<Avatar src="data:image/png;base64,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" alt="image not found" size={1000} backgroundColor="rgba(0,0,0,0)"
  		style={{
  				width: 200,
       			height: 200,
       			marginRight: 10,
       			marginBottom: 12,
       			marginTop: 12}}
  		/>
        <CustomUploadButton
          accept="image/*"
          storageRef={firebase.storage().ref('images')}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
          style={buttonStyle}
        >
        Upload
        </CustomUploadButton>
		<br/>
		<br/>

       <FormControl>
         <InputLabel htmlFor="name" shrink={true}>
         Name
         </InputLabel>
          <Input
          id="name"
          label="Name"
          margin="normal"
          value={this.props.profile.name}
          onChange={(event) => {this.handleChange(event, 'name');}}
          />
       </FormControl>

  		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

        

        <FormControl>
         <InputLabel htmlFor="email" shrink={true}>
         Email
         </InputLabel>
          <Input
          id="email"
          label="email"
          margin="normal"
          value={this.props.profile.email}
          onChange={(event) => {this.handleChange(event, 'email');}}
          />
       </FormControl>

        <br/><br />

        <FormControl>
         <InputLabel htmlFor="username" shrink={true}>
         Username
         </InputLabel>
          <Input
          id="username"
          label="username"
          margin="normal"
          value={this.props.profile.username}
          onChange={(event) => {this.handleChange(event, 'username');}}
          />
       </FormControl>

		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

        <FormControl>
         <InputLabel htmlFor="academics" shrink={true}>
         Current college/high school
         </InputLabel>
          <Input
          id="academics"
          label="academics"
          margin="normal"
          value={this.props.profile.academics}
          onChange={(event) => {this.handleChange(event, 'academics');}}
          />
       </FormControl>

        <br/>
        <br/>

        <FormControl>
         <InputLabel htmlFor="gender" shrink={true}>
         Gender
         </InputLabel>
          <Input
          id="gender"
          label="gender"
          margin="normal"
          value={this.props.profile.gender}
          onChange={(event) => {this.handleChange(event, 'gender');}}
          />
       </FormControl>

		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;


        <FormControl>
         <InputLabel htmlFor="language" shrink={true}>
         Language
         </InputLabel>
          <Input
          id="language"
          label="language"
          margin="normal"
          align='right'
          value={this.props.profile.language}
          onChange={(event) => {this.handleChange(event, 'language');}}
          />
       </FormControl>
        
        
          <br/>
          <br/>

        <FormControl>
         <InputLabel htmlFor="occupation" shrink={true}>
         Occupation
         </InputLabel>
          <Input
          id="occupation"
          label="occupation"
          margin="normal"
          align='right'
          value={this.props.profile.occupation}
          onChange={(event) => {this.handleChange(event, 'occupation');}}
          />
       </FormControl>
        

		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;


        <FormControl>
         <InputLabel htmlFor="skills" shrink={true}>
         Skills
         </InputLabel>
          <Input
          id="skills"
          label="skills"
          margin="normal"
          align='right'
          value={this.props.profile.skills}
          onChange={(event) => {this.handleChange(event, 'skills');}}
          />
       </FormControl>

        <br/>
        <br/>

        <br />
			Biography <br />
			<textarea style={{"width": "90%", "height": "200px"}} value={this.props.profile.bio} onChange={(event) => {this.handleChange(event, 'bio');}}></textarea>
			<br /> <br />
			<div id="submit" style={{"text-align": "center"}}>
				<Button variant="contained" color="inherit" style={buttonStyle} onClick={() => {this.addData();}}>Submit</Button>
		</div>
		</center>
	    </div>
	)
    }
};

export default compose(
  firebaseConnect(),
  firebaseConnect((props) => [{path:'picture'}]),
  firebaseConnect((props) => [{path:'picURL'}]),
  firebaseConnect((props) => [{path:'username'}]),
  firebaseConnect((props) => [{path:'name'}]),
  firebaseConnect((props) => [{path:'gender'}]),
  firebaseConnect((props) => [{path:'email'}]),
  firebaseConnect((props) => [{path:'occupation'}]),
  firebaseConnect((props) => [{path:'academics'}]),
  firebaseConnect((props) => [{path:'skills'}]),
  firebaseConnect((props) => [{path:'language'}]),
  firebaseConnect((props) => [{path:'bio'}]),
  connect(({firebase: {auth}})  => ({auth})),
  connect(({firebase: {profile}}) => ({profile}))
)
(ProfilePage)
