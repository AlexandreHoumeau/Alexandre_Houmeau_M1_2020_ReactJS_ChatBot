import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import BotList from "../BotList";
import ChatBox from "../ChatBox";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayMessage: null
    }
    this.getMessage = this.getMessage.bind(this)
  }
  getMessage(message) {
    this.setState({
      arrayMessage: message
    })
  }
  
  render() {
    const { arrayMessage } = this.state;
    return( 
      <Grid container spacing={3}>
      <Grid item xs={3}>
        <BotList message={arrayMessage}/>
      </Grid>
      <Grid item xs={9}>
        <ChatBox getMessage={this.getMessage}/>
      </Grid>
    </Grid>
    )
  }
}

export default Home;