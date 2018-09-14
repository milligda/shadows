import React from "react";
import "./tile.css";

const Tile = props => (
    <div className="col-3 tile" onClick={() => props.removePlay(props.id, props.points, props.title)}>

        <h4>{props.title}</h4>
        
    </div>
)

export default Tile;
