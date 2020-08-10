import React from 'react';
import './UserOutput.css';

const userOutput = (props) =>{
    return(
        <div className="UserOutput">
            <p> Username: {props.username} </p>
            <p>I have been learning it.</p>
        </div>
    )
};

export default userOutput;