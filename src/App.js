import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./img/smartHouseLOGO.png";
import RoomMenu from './Components/RoomMenu';
import RoomSelection from './Components/RoomSelection';
import Rooms from './Components/Rooms';



export default function App() {

  const [room, setRoom] = useState();
  // const [roomId, setRoomId] = useState([]);
  const [rooms, setRooms] = useState([]);

  const addNewRoom = (type, name, color,index) => {
    let newRoom = {      
      roomType: type,
      roomName: name,
      roomId: index,
      roomColor: color,
      roomDevices: [],
    };  
    setRoom(newRoom)
    rooms.push(newRoom);
    
    console.log(rooms);
  };

  const updateDevices = (deviceName, index) => {
    rooms[index].roomDevices.push({ deviceName: deviceName, deviceStatus: false });
    setRooms([...rooms]);
  };

  const turnOnOff = (roomIndex, deviceIndex) => {
    rooms[roomIndex].roomDevices[deviceIndex].deviceStatus = !rooms[roomIndex].roomDevices[deviceIndex].deviceStatus;
    setRooms([...rooms]);    
  }



  return (
    <Router>
      <div className='App' >
        <div className="title"><Link to="/"> <img src={logo} alt="logo" /></Link></div>
        <div className="title"><Link to="/RoomSelection"><button className="addRoomButton">+</button></Link></div>
        <Switch>
          <Route exact path="/RoomSelection" component={() => { return <RoomSelection addNewRoom={addNewRoom} /> }} />         

          <Route exact path='/RoomMenu' component={() => {
            return (rooms.map((val, index) => {
              return (
                <RoomMenu
                key={index}
                id={index}
                type={val.roomType}
                name={val.roomName}
                color={val.roomColor}                
                />
              )
            }))              
          }} />

          {rooms.map((val, index) => {
            return (
              <Route exact path={`/${val.roomType}`} key={index} component={() => {
                return <Rooms
                    index={index}
                    key={index}
                    roomType={val.roomType}
                    roomName={val.roomName}
                    roomColor={val.roomColor}
                    roomDevices={val.roomDevices} 
                  updateDevices={updateDevices}
                  turnOnOff={turnOnOff}
                  />                  
              }}                
            />)
          })};

         

        </Switch>        
      </div>
    </Router>     
    
  )
}