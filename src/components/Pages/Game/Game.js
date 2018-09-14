import React from "react";
// import the game status bar partial
import Tile from "../../Partials/Tile";
import "./game.css";

const GamePage = props => {

    console.log(props.data.plays);


    return (
        <div id="game-page" className="page-container">
            <div className="game-board">
                {props.data.plays.map(play => (
                    <Tile 
                        key={play.id}
                        title={play.title}
                        points={play.points}
                    />
                ))}
            </div>
        </div>
    );

}

export default GamePage;