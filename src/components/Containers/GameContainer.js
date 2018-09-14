import React, { Component } from "react";
// import GameView from "../Pages/Game";
import plays from "../../plays.json";
import GameUpdate from "../Partials/GameUpdate";
import GameStats from "../Partials/GameStats";
import Tile from "../Partials/Tile";
import "../Pages/Game/game.css";

class GameContainer extends Component {

    state={
        steps: 0,
        score: 0,
        lastPlay: "",
        lastStep: "",
        plays: plays
    };

    // when one of the tiles is clicked, adjust the GameContainer state
    removePlay = (id, points, title) => {

        // adjust the plays to remove the tile that was clicked
        const revisedPlays = this.state.plays.filter(play => play.id !== id);

        // calculate the new score by taking the current score and adding the points from the tile
        const newScore = this.state.score + points;

        // update the steps taken so far
        const newSteps = this.state.steps + 1;

        // update the state
        this.setState({ plays: revisedPlays, score: newScore, steps: newSteps, lastPlay: points, lastStep: title});

        if (newScore >= 100) { 
            window.location.replace("/gameover");
        }

        if (newSteps === 8 && newScore < 100 ) {
            window.location.replace("/won");
        }
    }

    render() {
        return (
            <div id="game-page" className="page-container">
                <GameStats 
                    score={this.state.score} 
                    steps={this.state.steps} 
                />
                <GameUpdate
                    steps={this.state.steps}
                    points={this.state.lastPlay}
                    title={this.state.lastStep}
                />
                <div className="container game-board">
                    <div className="row justify-content-center">
                        {this.state.plays.map(play => (
                            <Tile 
                                removePlay={this.removePlay}
                                id={play.id}
                                key={play.id}
                                title={play.title}
                                points={play.points}
                            />
                        ))}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default GameContainer;