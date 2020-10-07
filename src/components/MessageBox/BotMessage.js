import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

class BotMessage extends Component {
  constructor(props) {
    super(props)
  }

    render() {
      const { message } = this.props;
      return(
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <p>{message.content}</p>
            <small>{moment(message.created_at).fromNow()}</small>
          </Grid>
          <Grid item xs={9} />
        </Grid>
      )
    }
}

export default BotMessage;