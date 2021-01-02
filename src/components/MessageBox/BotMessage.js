import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import Avatar from '@material-ui/core/Avatar';

class BotMessage extends Component {
  constructor(props) {
    super(props);
    this.message = React.createRef();
  }

  componentDidMount() {
    this.message.current.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    const { message } = this.props;
    return (
      <Grid ref={this.message} style={{alignItems: "center"}} container>
        <Avatar style={{marginRight: '10px'}} alt="Remy Sharp" src={message.avatar} />
        <Grid
          item
          xs={3}
        >
          <div className="bot_message">
            <p style={{ color: "black", textAlign: "left", margin: 5 }}>
              {message.content}
            </p>
            <small style={{ color: "black" }}>
              {moment(message.created_at).format('LT')}
            </small>
          </div>
        </Grid>
        <Grid item xs={9} />
      </Grid>
    );
  }
}

export default BotMessage;
