import "./Chat.css";
import { Box, Grid } from "@material-ui/core";
import React, { Component } from "react";
import Contact from "../../types/Contact";
import Message from "../../types/Message";
import MessageBox from "../../components/Meesage/MessageBox";

interface ChatProps {
  contact: Contact;
  user: Contact;
}

interface ChatState {
  messages: Message[];
}

export default class Chat extends Component<ChatProps, ChatState> {
  state = {
    messages: [] as Message[],
  };

  render() {
    let messagesToRender = [] as any[]
    this.state.messages.forEach((msg) => {
      messagesToRender.push(<MessageBox message={msg} currentUser={this.props.user} />)
    })
    return (
      <Grid
        className="mainGrid"
        container
        // direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        alignContent="stretch"
      >
        <Grid className="chatGrid" item xs={12} alignContent="stretch" alignItems="stretch" >
            {messagesToRender}
        </Grid>
        <Grid className="textFieldGrid" item xs={2}>
          Chat
        </Grid>
      </Grid>
    );
  }

  componentDidMount = () => {
    let messages: Message[] = [];
    let message1: Message = {
      id: "1",
      idSender: "1",
      idReceiver: "3",
      messageBody: "TE ODIO CON TODO MI CORAZON",
    };
    let message2: Message = {
      id: "2",
      idSender: "3",
      idReceiver: "1",
      messageBody: "YO TE AMO CON TODO MI CORAZON",
    };
    let message3: Message = {
      id: "3",
      idSender: "1",
      idReceiver: "3",
      messageBody: "ok + dont care + didnt ask + ratio",
    };

    messages.push(message1);
    messages.push(message2);
    messages.push(message3);
    messages.push(message3);
    messages.push(message3);
    messages.push(message3);
    messages.push(message3);
    messages.push(message3);
    messages.push(message3);
    messages.push(message3);
    messages.push(message3);
    messages.push(message3);
    messages.push(message3);
    messages.push(message3);
    messages.push(message3);
    messages.push(message3);
    messages.push(message3);

    this.setState({ messages });
  };
}
