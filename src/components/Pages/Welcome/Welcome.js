import React from "react";
import "./welcome.css";

const WelcomePage = () => (
    <div id="welcome-page" className="page-container">
        <div className="welcome-message-container">
            <p>To cross the Land of Shadows, you must stay hidden.</p>
            <p>Crack the code and choose your steps wisely.</p>
            <p>It takes 8 steps to cross, but if you are fully illuminated along the way, you will be captured...</p>
            <a className="begin-button" href="/play">Begin Your Journey</a>
        </div>
    </div>
)


export default WelcomePage;
