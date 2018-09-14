import React from "react";
import "./gamestats.css";

const GameStats = props => {

    let scorePercentage = props.score;

    const iconStyle = {
        backgroundColor: `rgba(255, 255, 255, ${scorePercentage / 100})`
    }

    const percentageColor = {
        opacity: `${scorePercentage / 100}`
    }

    return (
        <div className="gamestats-container">
            <div className="gamestats-steps">
                <h4>Steps: {props.steps}</h4>
            </div>
            <div className="gamestats-score">
                <img className="illuminated-icon" style={iconStyle} src="images/life-icon.svg" alt={scorePercentage}></img>
                <h4 className="score-percentage" style={percentageColor}>{scorePercentage}%</h4>
            </div>
        </div>
    )
}

export default GameStats;
