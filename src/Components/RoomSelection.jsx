import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RoomMenu from './RoomMenu';

export default function RoomSelection(props) {

  const [roomType, setRoomType] = useState('');
  const [roomName, setRoomName] = useState('');
  const [roomColor, setRoomColor] = useState('');
  const [roomId, setRoomId] = useState();
  const [count, setCount] = useState(0);


  const createRoom = () => {
    if (roomType === '' ) {
      alert("Choose RoomType ");      
    }
    if (roomName === '') {
      alert("Choose roomName ");      
    }
    if (roomName !== '' && roomType !== '') {
      if (roomName.length > 5 ) {
        alert("room name must be 1-5 leters");       
      } else {
        setCount(count + 1);
        setRoomId(count);
        props.addNewRoom(roomType, roomName, roomColor, roomId);
      }     
    } 
  };

  return (
    <div className="roomSelectionContainer">
      <div className="roomSelection">
        <div>
          <h1>Add a Room</h1>
          <select onChange={e => {setRoomType(e.target.value);}} className="roomChoice">
            <option label={'choose RoomType'} ></option>
            <option>Kitchen</option>
            <option>Living-Room</option>
            <option>Sleeping-room</option>
            <option>Bathroom</option>
          </select>
        </div>
        <br />
        <div>
          <input onChange={e => {setRoomName(e.target.value);}}className="roomChoice"type="text"placeholder="Room Name"></input>
        </div>
        <br />
        <div>
          <input onChange={e => {{setRoomColor(e.target.value);}}}className="roomChoice"type="text"placeholder="Room Color"></input>
        </div>
        <div>
          <Link to="/RoomMenu">
            <button onClick={() => {createRoom()}} className="MyRoomsButton">Add Room</button>
          </Link>
        </div>
      </div>
    </div>     
  )
};