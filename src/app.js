/*
   --------
   import the packages we need
   --------
 */

import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './style/theme';
import initialState from './initialState.json';
import './style/main.css';
import NavBar from './components/navbar.js';
import Footer from './components/footer.js';




/*
   --------
   import your pages here
   --------
 */

import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ForgotPage from './pages/forgot';
import BrowsePage from './pages/browse';
import ProfilePage from './pages/profile';
import SettingsPage from './pages/settings';
import FormPage from './pages/form';
import DonationPage from './pages/donation';
import InterviewPage from './pages/interview';
import FAQPage from './pages/faq';
import ChallengePage from './pages/challenge';

/*
   --------
   configure everything
   --------
 */

const firebaseConfig = {
    /*
       --------
       REPLACE WITH YOUR FIREBASE CREDENTIALS
       --------
     */
     apiKey: "AIzaSyCG7I6brMVmePWm3YZbxULFNZ27GSKNTXE",
     authDomain: "hire-me-8e33a.firebaseapp.com",
     databaseURL: "https://hire-me-8e33a.firebaseio.com",
     projectId: "hire-me-8e33a",
     storageBucket: "hire-me-8e33a.appspot.com",
     messagingSenderId: "895062975692"
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);









/*
   --------
   setup redux and router
   --------
 */


const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer
});

const store = createStoreWithFirebase(rootReducer, initialState);


const ConnectedRouter = connect()(Router);



export default class App extends React.Component{
    render(){
	return(
	    <MuiThemeProvider theme={theme}>
		<Provider store={store}>
		    <ConnectedRouter>
			<div>
        <NavBar />
			    <Route exact path="/" component={HomePage} />
			    <Route exact path="/login" component={LoginPage} />
			    <Route exact path="/signup" component={SignupPage} />
          		    <Route exact path="/about" component={AboutPage} />
          		    <Route exact path="/contact" component={ContactPage} />
          	 	    <Route exact path="/forgot" component={ForgotPage} />
			    <Route exact path="/browse" component={BrowsePage} />
          <Route exact path="/settings" component={SettingsPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/form" component={FormPage} />
          <Route exact path="/faq" component={FAQPage} />
          <Route exact path="/challenge" component={ChallengePage} />
        {/* <Footer /> */}
			</div>
		    </ConnectedRouter>
		</Provider>
	    </MuiThemeProvider>
	);
    }
}
