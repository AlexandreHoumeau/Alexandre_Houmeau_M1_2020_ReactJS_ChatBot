import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

class UserMessage extends Component {
  constructor(props) {
    super(props)
  }

    render() {
      const { message } = this.props;
      return(
        <Grid container >
          <Grid item xs={9} />
          <Grid item xs={2} style={{flexDirection:'row', backgroundColor: '#1096F5', borderRadius: 10, marginRight: 10, paddingLeft: 10, paddingBottom: 10, marginBottom: 20}}>
            <p style={{color: '#fff', flexWrap: 'wrap', margin: 5}}>{message.content}</p>
            <small style={{color: '#fff'}}>{moment(message.created_at).fromNow()}</small>
          </Grid>
        </Grid>
      )
    }
}

export default UserMessage;