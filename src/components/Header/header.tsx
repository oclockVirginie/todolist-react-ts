
import React from "react";

import { NavLink}
    from "react-router-dom";

function Header() {

    return (
        <header className="menu" id="header">
            <nav>
                <NavLink className={"menu-link" }

                    to="/Tasks">
                    Tasks
                </NavLink>
                <NavLink className="menu-link"
                         to="/Categories">
                    Categories
                </NavLink>
                <NavLink className="menu-link"
                         to="/Login">
                    Login
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
