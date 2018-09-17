import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => (
    <div className="header-container">
        <Link to="/">
            <h3>Land of Shadows</h3>
        </Link>
        
    </div>
)

export default Header;
