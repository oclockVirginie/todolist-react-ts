import React, {FC, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {actionAddTask} from "../../middlewares/apiTasks";
import axiosInstance from "../../middlewares/ApiBase";


function  Login()     {

    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValuePassword, setInputValuePassword] = useState('');

    const login = () => {
        let params = {
            username: inputValueEmail,
            password: inputValuePassword,
        };
        axios
            .post("http://localhost:8000/api/login_check", params)
            .then(function (response) {
                //   IF EMAIL ALREADY EXISTS
                if (response.data.success === false) {
                    toast.error(response.data.error, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: 0,
                        toastId: "my_toast",
                    });
                } else {
                    toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: 0,
                        toastId: "my_toast",
                    });
                    localStorage.removeItem("auth");
                    localStorage.setItem("auth", response.data.token);

                }
            })
            .catch(function (error) {
                console.log(error);
            });
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
                                    Login Form
                                </h3>
                                <form autoComplete="off"  onSubmit={(event) => {
                                    event.preventDefault();
                                    login();
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
                                            Have an Account?{" "}
                                            <Link style={{ textDecoration: "none" }} to={"/register"}>
                                                Sign Up
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
export default Login;
