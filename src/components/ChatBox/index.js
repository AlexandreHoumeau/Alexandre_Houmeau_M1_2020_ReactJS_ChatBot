import React, { Component } from "react";
import Input from "../Input";
import MessageBox from "../MessageBox";
import Bot from "../../mock"
class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageArray: [{
        id: Math.floor(Math.random() * Math.floor(10000)),
        content: "Bonjour, nouvel utilisteur. Vous pouvez taper la commande 'help' pour afficher les différentes options",
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
    Bot.forEach(async(element) => {
      const res = await this.findActions(element, message)
      if(res[0]) {
        if(res[0][0] === "jokes") {
          this.botMessage(element, await this.fetchJokes())
        } else {
          this.botMessage(element, res[0])
        }
      }
    })
  }

  botMessage(bot, message) {
    const { id, avatar, name } = bot;
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
      this.props.getMessage(newMessage)
    }, 1000)
  }

  async fetchJokes() {
    return fetch("http://api.icndb.com/jokes/random")
      .then(response => response.json())
      .then(data => {
        return [data.value.joke]
      })
      .catch((err) => {
        console.log(err)
      })
  }

  async concatMessages(newMessage) {
    const { messageArray } = this.state;
    this.setState({
      messageArray: await messageArray.concat(newMessage)
    })
  }

  async getMessage(message) {
    this.botResponse(message)
    const newMessage = {
      id: Math.floor(Math.random() * Math.floor(10000)),
      content: message,
      from: 'user',
      created_at: Date.now()
    }
    this.concatMessages(newMessage)
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