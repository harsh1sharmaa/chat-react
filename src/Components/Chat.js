import React, { useEffect, useState } from "react";
import "./chat.css";

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [name, setUsername] = useState("harsh");
  const [message1, setMessage1] = useState([]);
  const [message, setMessage] = useState([
    {
      author: "harsh",
      message: "hey",
      time: "10:20",
    },
    {
      author: "harsh2",
      message: "hii",
      time: "10:20",
    },
    {
      author: "harsh",
      message:
        "You can managhe z-index property works with elements positioned relatively or absolutely. Also, is not correct semantically",
      time: "10:20",
    },
    {
      author: "harsh2",
      message:
        "e your dropdown position with the z-index property to bring it to front. Remember that thii2",
      time: "10:20",
    },
    {
      author: "harsh",
      message:
        "hend text slash remover for web developers and programmers. Just paste your bay",
      time: "10:20",
    },
    {
      author: "harsh",
      message:
        "hWorld's simplest online string ackslash-escaped text in the foey",
      time: "10:20",
    },
    {
      author: "harsh2",
      message: "hii",
      time: "10:20",
    },
    {
      author: "harsh",
      message:
        "You can manage yoerty works with elements positioned relatively or absolutely. Also, is not correct semantically",
      time: "10:20",
    },
    {
      author: "harsh2",
      message:
        "hur dropdown position with the z-index property to bring it to front. Remember that the z-index propii2",
      time: "10:20",
    },
    {
      author: "harsh",
      message:
        "hand programmers. Just paste your backslash-escaped text in the form below, press the Strip Slashes button, and all backslashes will getey",
      time: "10:20",
    },
  ]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      message1.push(messageData);
      setMessage1([...message1]);
      await socket.emit("send_message", messageData);
    }
    setCurrentMessage("");
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      message1.push(data);
      setMessage1([...message1]);
      console.log("Received message", data);
    });
  }, [socket]);

  return (
    <div>
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <div className="chat-body-header">
          <p>{username}</p>
        </div>
        <div className="container">
          {message1.map((obj) => {
            return (
              <div className={name !== obj.author ? "right" : "left"}>
                <h6 className="name">
                  <span>{obj.author}</span>
                </h6>
                <div className="message">
                  <p className="msg">{obj.message}</p>
                </div>
                <h6 className="time">
                  <span>{obj.time}</span>
                </h6>
              </div>
            );
          })}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            placeholder="hey.."
            className="chat-text"
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <button className="chat-btn" onClick={sendMessage}>
            &#9658;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
