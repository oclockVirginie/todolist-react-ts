
import React, {useEffect} from "react";
import Tasks from "../Tasks/Tasks";
import {BrowserRouter as Router, Routes, Route, NavLink}
    from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {actionLoadTasks} from "../../middlewares/apiTasks";

function Header() {

    const dispatch = useAppDispatch();
    const tasks = useAppSelector((state) => state.tasks);

    useEffect(
        () => {
            // au premier chargement du composant on demande le chargement des données
            dispatch(actionLoadTasks());
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

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

                {/*<button className="menu-btn" type="button">Activer le mode zen</button>*/}
            </nav>


        </header>
    );
}

export default Header;
