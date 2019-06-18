import React from 'react';

const Display = props => {
    return (
        <div className= "display">
            <div>Ball: {props.bball.ball} </div>
            <div>Strike: {props.bball.strike} </div>
            <div>Foul: {props.bball.foul} </div>
        </div>
    );
};

export default Display;