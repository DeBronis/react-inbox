import React from "react";
import "../App.css";
import Message from "./Message";

let MessageList = props => {
  return props.messages.map(message => {
    return <Message />;
  });
};

export default MessageList;
