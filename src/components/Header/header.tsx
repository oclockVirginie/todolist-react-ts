
import React from "react";

import { NavLink}
    from "react-router-dom";

/**
 * Composant Header
 *
 * Ce composant affiche le menu de l'application
 * - il est composé de 3 liens :
 *  - Tasks : lien vers la page des tâches
 *  - Categories : lien vers la page des catégories
 *  - Login : lien vers la page de login
 *
 */
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
