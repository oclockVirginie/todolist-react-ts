import React, { useEffect } from 'react';
import './App.scss';
import Tasks from "../Tasks/Tasks";
import Header from "../Header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Categories from "../Categories/categories";
import Login from "../Login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "../Register/Register";

/**
 *  Composant principal de l'application
 *
 *  on utilise le composant BrowserRouter pour gérer les routes
 *  on utilise le composant Routes pour définir un ensemble de routes
 *  on utilise le composant Route pour définir une route
 *  
 *  BrowserRouter, Routes et Route servent à créer les routes mais ne permettent pas de naviguer entre les routes
 *  pour naviguer entre les routes on utilise le composant Link qui se trouve dans le composant Header
 *
 *  on utilise le composant Header pour afficher le menu de l'application
 *
 */
function App() {

  return (

      <div className="todo-app">
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path="/Tasks"
                         element={ <Tasks />} />
                  <Route path="/Categories"
                         element={ <Categories />} />
                  <Route path="/Login"
                         element={ <Login/>} />
                  <Route path="/Register"
                         element={ <Register/>} />
              </Routes>
          </BrowserRouter>

      </div>
  );
}

export default App;
