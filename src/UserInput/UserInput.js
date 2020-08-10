import React from 'react';

const userInput = (props) =>{
    const style = {
        border:'2px solid red'
    }
    return(
            <input 
            style={style} 
            onChange={props.changed} 
            type="text" 
            value={props.currentName}/>
    )
};

export default userInput;