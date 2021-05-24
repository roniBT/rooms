import React, {useState} from 'react';
import { Link } from 'react-router-dom';


export default function RoomMenu(props) { 
    
    const [roomId, setRoomId] = useState(props.id)

    return (
        <div>
            <Link to={`/${props.type}`} >
                <div className="RoomsContainer">
                    <button className="Room" style={{ backgroundColor: props.color }} >
                        <h1>{props.type}</h1><br />                        
                    </button>
                </div>
            </Link>
        </div>
    )
};


