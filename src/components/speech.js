import React from 'react';
import PropTypes from 'prop-types'
import SpeechRecognition from 'react-speech-recognition'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Request from 'react-http-request';

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

class Speech extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      message: ''
    };
  }
  handleChange(event, field){
    this.setState({
      [field]: event.target.value,
    });
  }
  handleClick(event){
    event.preventDefault();
    console.log("Success");
  }
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span>
        <Input
        id="full-width"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event) => {this.handleChange(event, 'message');}}
        fullWidth
        margin="normal"></Input>
        <Button variant="contained" type="submit" onClick={this.handleClick}>Submit</Button>

      </div>
    )
  }
};

Speech.propTypes = propTypes

export default SpeechRecognition(Speech)
