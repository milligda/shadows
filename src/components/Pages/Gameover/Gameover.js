import React from "react";
import "./gameover.css";

const GameoverPage = () => (

    <div id="gameover-page" className="page-container">
        <div className="gameover-message-container">
            <h2>You have been seen and captured!</h2>
            <p className="hint-message">Here are some hints: Look at the letters, not the words. What places do the letters have in the alphabet? How many characters does the word have?</p>

            <a className="begin-button" href="/play">Try again</a>
        </div>
    </div>
)

export default GameoverPage;
