import React, { Component } from "react";
import Input from "../Input";
import MessageBox from "../MessageBox";
import Bot from "../../mock"
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
    this.botMessage = this.botMessage.bind(this)

  }

  findActions(bot, value) {
    return bot.actions
      .map((actions) => actions.keyWords
        .map((keyWord) => (keyWord === value ? actions.response() : false))
        .filter((action) => (!action ? false : action)))
      .filter((result) => result.length !== 0);
  }

  botResponse(message) {
    Bot.forEach(element => {
      const res = this.findActions(element, message)
      if(res[0]) {
        this.botMessage(element, res[0])
      }
    })
  }

  botMessage(bot, message) {
    const { id, avatar, name } = bot;
    const { messageArray } = this.state;
    const newMessage = {
      id: id,
      avatar,
      name,
      content: message[0],
      from: 'bot',
      created_at: Date.now()
    }

    setTimeout(() => {
      this.concatMessages(newMessage)
    }, 1000)

  }

  concatMessages(newMessage) {
    const { messageArray } = this.state;
    this.setState({
      messageArray: messageArray.concat(newMessage)
    })
    
  }

  getMessage(message) {
    this.botResponse(message)
    const { messageArray } = this.state;
    const newMessage = {
      id: Math.floor(Math.random() * Math.floor(1000)),
      content: message,
      from: 'user',
      created_at: Date.now()
    }
    this.concatMessages(newMessage)
    // this.setState({
    //   messageArray: [...messageArray, newMessage]
    // })
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