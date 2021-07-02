import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className="ui secondary  menu">
            <div className="right menu">
                <Link className="item" to="/">
                    Home
                </Link>
            </div>
        </div>
    );
}

export default Header;
