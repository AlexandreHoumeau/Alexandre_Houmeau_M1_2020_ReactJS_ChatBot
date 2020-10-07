import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import BotList from "../BotList";
import ChatBox from "../ChatBox";

class Home extends Component {
  render() {
    return( 
      <Grid container spacing={3}>
      <Grid item xs={3}>
        <BotList/>
      </Grid>
      <Grid item xs={9}>
        <ChatBox/>
      </Grid>
    </Grid>
    )
  }
}

export default Home;