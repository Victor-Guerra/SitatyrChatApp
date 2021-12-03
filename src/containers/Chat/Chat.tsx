import "./Chat.css";
import { Button, Grid, TextField } from "@material-ui/core";
import React, { Component } from "react";
import Contact from "../../types/Contact";
import Message from "../../types/Message";
import MessageBox from "../../components/Message/MessageBox";
import SessionStorageHelper from "../../tools/SessionStorageHelper";
interface ChatProps {
  contact: Contact;
  userId: string;
}

interface ChatState {
  messages: Message[];
}

/**
 * Chat Container
 * @extends {Component<ChatProps, ChatState>}
 */
export default class Chat extends Component<ChatProps, ChatState> {
  state = {
    messages: [] as Message[],
  };

  /**
   * Renders the container
   * @returns The chat container UI elements
   */
  render() {
    let messagesToRender = [] as any[];
    this.state.messages.forEach((msg) => {
      messagesToRender.push(
        <MessageBox message={msg} currentUserId ={this.props.userId} />
      );
    });
    return (
      <Grid
        className="mainGrid"
        container
        justifyContent="space-between"
        alignItems="stretch"
        alignContent="stretch"
      >
        <Grid
          className="chatGrid"
          item
          xs={12}
          alignContent="stretch"
          alignItems="stretch"
        >
          {messagesToRender}
        </Grid>
        <Grid className="textFieldGrid" container item xs={12} spacing={2} alignItems="center" justifyContent="space-around" >
          <Grid item xs={9} sm={11}>
            <TextField variant="outlined" multiline fullWidth />
          </Grid>
          <Grid item xs={2} sm={1}>
            <Button variant="contained" color="primary" >
              Send
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  /**
   * Runs when the component is mounted
   */
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
      idSender: SessionStorageHelper.getUserId(),
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

    this.setState({ messages });
  };
}
