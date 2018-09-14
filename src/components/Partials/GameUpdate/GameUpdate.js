import React from "react";
import "./gameupdate.css";

const GameUpdate = props => (

    <div className="gameupdate-container">
        <h3>
            {props.steps !== 0 ? 
                `You stepped on "${props.title}". Your visibility increased +${props.points}` : 
                `Choose your first step...`}
        </h3>
    </div>
)

export default GameUpdate;
