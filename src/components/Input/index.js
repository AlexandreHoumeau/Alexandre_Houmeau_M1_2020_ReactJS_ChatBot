import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }
  onChangeText = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (e) => {
    const { text } = this.state;
    e.preventDefault()
    if (text.length > 0) {
      this.props.getMessage(text)
      this.setState({text: ""})
    }
  }
  render() {
    const { text } = this.state;
    return (
      <form onSubmit={(value) => {this.handleSubmit(value)}} autoComplete="off">
        <Grid container style={{justifyContent: 'space-around', alignItems: 'center'}}>
          <Grid item xs={9}>
            <TextField style={{color: '#1096F5', borderColor: '#1096F5'}} placeholder="Ecrivez une commande" label="Ecrivez un message" variant="outlined" fullWidth onChange={(value) => {this.onChangeText(value)}} value={text} id="standard-basic" />
          </Grid>
          <Grid item xs={1}>
            <Button style={{backgroundColor: '#1096F5'}} onClick={(value) => {this.handleSubmit(value)}}  variant="contained" color="primary">
              Envoyer
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default Input;
