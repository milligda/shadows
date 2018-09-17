import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/Partials/Header";
import Welcome from "./components/Pages/Welcome";
import Game from "./components/Containers/GameContainer";
import Gameover from "./components/Pages/Gameover";
import Won from "./components/Pages/Won";


const App = () => (
    <HashRouter>
        <div>
            <Header />
            <Route exact path="/" component={Welcome} />
            <Route path="/play" component={Game} />
            <Route path="/gameover" component={Gameover} />
            <Route path="/won" component={Won} />
        </div>
    </HashRouter>
);

export default App;
