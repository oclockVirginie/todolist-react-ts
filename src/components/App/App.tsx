import React, { useEffect } from 'react';
import './App.scss';
import Tasks from "../Tasks/Tasks";
import Header from "../Header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Categories from "../Categories/categories";
import Login from "../Login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "../Register/Register";

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
