import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Components/Chat";

const socket = io.connect("http://localhost:3001");
function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if(username!=""&& room!=""){
      socket.emit("join_room",room)
      
    }
  };
  return (
    <div className="App">
      <h1> welcome</h1>
      <h3> join chat </h3>
      <input
        type="text"
        placeholder="harsh.."
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input type="text" placeholder="Room Id" onChange={(e) => {setRoom(e.target.value)}}/>
      <button onClick={joinRoom}>join a Room </button>
    <Chat socket={socket} username={username} room={room}/>
    </div>
  );
}

export default App;
