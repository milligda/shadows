import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Partials/Header";
import Welcome from "./components/Pages/Welcome";
import Game from "./components/Containers/GameContainer";
import Gameover from "./components/Pages/Gameover";
import Won from "./components/Pages/Won";


const App = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/play" component={Game} />
                <Route exact path="/gameover" component={Gameover} />
                <Route exact path="/won" component={Won} />
            </Switch>
        </div>
    </Router>
);

export default App;
