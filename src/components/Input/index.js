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
        <Grid container>
          <Grid item xs={9}>
            <TextField fullWidth onChange={(value) => {this.onChangeText(value)}} value={text} id="standard-basic" label="Standard" />
          </Grid>
          <Grid item xs={3}>
            <Button onClick={(value) => {this.handleSubmit(value)}}  variant="contained" color="primary">
              Primary
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default Input;
