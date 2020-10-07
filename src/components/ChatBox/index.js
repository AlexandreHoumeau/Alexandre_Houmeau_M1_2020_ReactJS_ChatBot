import React, { Component } from "react";
import Input from "../Input";
import MessageBox from "../MessageBox";

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageArray: [{
        id: Math.floor(Math.random() * Math.floor(1000)),
        content: "Hello new User",
        from: 'bot',
        created_at: Date.now()
      }]
    }
    this.getMessage = this.getMessage.bind(this)
  }

  getMessage(message) {
    const { messageArray } = this.state;
    const newMessage = {
      id: Math.floor(Math.random() * Math.floor(1000)),
      content: message,
      from: 'user',
      created_at: Date.now()
    }
    this.setState({
      messageArray: [...messageArray, newMessage]
    })
  }
  render() {
    const { messageArray } = this.state;
    return( 
      <div style={{height: '100%', width: '100%'}}>
        
        <MessageBox messages={messageArray}/>
        <Input getMessage={this.getMessage}/>
      </div>
    )
  }
}

export default ChatBox;