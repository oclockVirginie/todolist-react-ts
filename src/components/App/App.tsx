import React, { useEffect } from 'react';
import logo from '../../logo.svg';
import './App.scss';
import Tasks from "../Tasks/Tasks";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import { actionLoadTasks } from '../../middlewares/apiTasks';
import TaskForm from "../TaskForm/TaskForm";
import Header from "../Header/header";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Categories from "../Categories/categories";
import {actionLoadCategories} from "../../middlewares/apiCategories";
import Login from "../Login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
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
