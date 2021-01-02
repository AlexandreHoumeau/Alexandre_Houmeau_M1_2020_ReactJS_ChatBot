import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import BotList from "../BotList";
import ChatBox from "../ChatBox";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayMessage: null
    };
    this.getMessage = this.getMessage.bind(this);
  }
  async getMessage(message) {
    this.setState({
      arrayMessage: await message
    });
  }

  render() {
    const { arrayMessage } = this.state;
    return (
      <Grid container spacing={3} >
        <Grid item xs={3} style={{height: "100vh"}}>
          <BotList message={arrayMessage} />
        </Grid>
        <Grid item xs={9}>
          <ChatBox getMessage={this.getMessage} />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
