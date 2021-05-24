import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Rooms(props) {
  
  
  const [roomType, setRoomType] = useState(props.roomType);
  const [roomName, setRoomName] = useState(props.roomName);
  const [roomColor, setRoomColor] = useState(props.roomColor);  
  const [roomDevices, setRoomDevices] = useState(props.roomDevices);
  const [showAddDeviceList, setShowAddDeviceList] = useState(false);
  
  const [deviceStatus, setDeviceStatus] = useState(false);
  const [deviceName, setDeviceName] = useState('');
  const [deviceStateColor, setDeviceStateColor] = useState('red');


  const OpenAddDevices = () => { setShowAddDeviceList(!showAddDeviceList) };
  
  const AddDevicePanel = () => {
    if (showAddDeviceList === true) {
      return <div className="devicesList">          
                <select onChange={(e)=>{setDeviceName(e.target.value)}} className="deviceChoice" >              
                  <option label="Select Device"></option>
                  <option>AC</option>
                  <option>Lamp</option>
                  <option>Stereo</option>
                  <option>Boiler</option>          
                </select>      
                <button onClick={() =>{sendDeviceToRoom()} } className="AddDeviceButton">Update Devices</button>       
              </div> 
      
    }
  };      
  
  const sendDeviceToRoom = () => { 
    if (props.roomDevices.length < 5) {  
      
      if (deviceName === "Boiler" && roomType !== "Bathroom") {      
        alert('you can add Boiler only at the Bathroom! ');
      return;       
      };
      if (deviceName === "Stereo") {
        //מקפיץ את ההתראה אבל מוסיף את המוצר 
        props.roomDevices.forEach(item => {
          if (item.deviceName === "Stereo") {
            alert('you can only add one stereo in each room!');
            return; 
          };         
        });
      }    
    }
      props.updateDevices(deviceName, props.index);   
      OpenAddDevices();      
  }    
  
    return (
      <div className="RoomsContainer"  >       
        <div className="Room" style={{ backgroundColor: roomColor }}  >
          <Link to='/RoomMenu'>
          <button className="AddDeviceButton">Go Back </button>
          </Link> 
          <h1>{roomType}</h1>
          <h2>{roomName}</h2>
              {props.roomDevices.map((val, index) => {
                return (<button id={index} key={index} className="deviceButton" style={{ backgroundColor: val.deviceStatus ? 'green' : 'red' }} onClick={() => { props.turnOnOff(props.index, index ) }}>{val.deviceName}</button>);
              })}

          <button onClick={() => {OpenAddDevices()}} className="AddDeviceButton"> Add Device </button>
          <br />
          {AddDevicePanel()}         
        </div> 
    
    </div>
      
    )
  
}