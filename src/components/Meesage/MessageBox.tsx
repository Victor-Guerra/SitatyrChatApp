import "./MessageBox.css";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import Contact from "../../types/Contact";
import Message from "../../types/Message";

interface MessageProps {
  message: Message;
  currentUserId: string;
}

const MessageBox: React.FC<MessageProps> = (props) => {
  let senderId = "-1";
  let messageText = "";
  if (
    props.message.messageBody !== undefined &&
    props.message.idSender !== undefined
  ) {
    senderId = props.message.idSender;
    messageText = props.message.messageBody;
  }

  let currentUserId = "-1";
  if (props.currentUserId !== undefined) {
    currentUserId = props.currentUserId;
  }
  console.log(currentUserId)

  const boxStyles = {
    borderRadius: "5%",
    bgcolor: senderId === currentUserId ? "rgb(51, 158, 241)" : "gray",
  };

  return (
    <Grid
      container
      item
      className="rootGrid"
      xs={12}
      justifyContent={senderId === currentUserId ? "flex-end" : "flex-start"}
    >
      <Grid className="messageGrid" item container xs={10} md={5}>
        <Box sx={boxStyles} className="messageBox" flex>
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <Typography>{messageText}</Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MessageBox;
