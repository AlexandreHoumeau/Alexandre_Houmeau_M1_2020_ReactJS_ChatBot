import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Data from "../../mock";
class BotList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayMessage: null,
      arrayLength: null
    };
  }

  componentWillReceiveProps(newProps) {
    Data.map(bot => {
      if (bot.id === newProps.message.id) {
        bot.lastMessage = newProps.message.content;
      }
    });
  }
  render() {
    return (
      <List style={{ backgroundColor: "#EFF2F5", height: "100%" }}>
        {Data.map(element => (
          <>
            <ListItem
              style={{ backgroundColor: "#fff" }}
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={element.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={element.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {element.description} 
                    </Typography>
                      {element.lastMessage ? element.lastMessage : null}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    );
  }
}

export default BotList;
