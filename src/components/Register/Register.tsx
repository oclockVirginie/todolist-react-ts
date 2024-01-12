import React, {FC, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {actionAddTask} from "../../middlewares/apiTasks";
import axiosInstance from "../../middlewares/ApiBase";
import {actionAddCategory} from "../../middlewares/apiCategories";
import {actionAddUser} from "../../middlewares/apiUser";
import {useAppDispatch} from "../../hooks/redux";


function  Register()     {

    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValuePassword, setInputValuePassword] = useState('');
    const dispatch = useAppDispatch();
    const register = () => {
        let params = {
            id : 0,
            username: inputValueEmail,
            password: inputValuePassword,
        };

        dispatch(actionAddUser(params));
    };
    return (
        <>
            <div className="container">
                <div
                    className="row d-flex justify-content-center align-items-center"
                    style={{ height: "100vh" }}
                >
                    <div className="card mb-3" style={{ maxWidth: "320px" }}>
                        <div className="col-md-12">
                            <div className="card-body">
                                <h3 className="card-title text-center text-secondary mt-3">
                                    Register Form
                                </h3>
                                <form autoComplete="off"  onSubmit={(event) => {
                                    event.preventDefault();
                                    register();
                                    // au submit du form, on demande à ce que la nouvelle tache soit ajoutée coté back puis dans le state


                                }}>
                                    <div className="mb-3 mt-4">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control shadow-none"
                                            id="exampleFormControlInput1"
                                            onChange={(event) => {
                                                setInputValueEmail(event.target.value);
                                            }}

                                        />

                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control shadow-none"
                                            id="exampleFormControlInput2"
                                            onChange={(event) => {
                                                setInputValuePassword(event.target.value);
                                            }}

                                        />

                                    </div>
                                    <div className="text-center mt-4 ">
                                        <button
                                            className="btn btn-outline-primary text-center shadow-none mb-3"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                        <p className="card-text pb-2">
                                            <Link to="/login"
                                                  className="btn btn-outline-primary text-center shadow-none mb-3">
                                                j'ai un compte  Login
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
                limit={1}
                transition={Flip}
            />
        </>
    );
};
export default Register;
