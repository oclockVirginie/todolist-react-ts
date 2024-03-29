import React, { useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.min.css";



function  Login()     {

    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValuePassword, setInputValuePassword] = useState('');

    /**
     * login permet de se connecter lors de la soumission du formulaire
     * A déporter dans le middleware apiUser
     * Mais laisser ici afin de savoir que bien sur on peut faire des appels api dans les composants
     */
    const login = () => {
        let params = {
            username: inputValueEmail,
            password: inputValuePassword,
        };
        axios
            .post("http://localhost:8000/api/login_check", params)
            .then(function (response) {
                //   IF EMAIL ALREADY EXISTS
                    localStorage.removeItem("auth");
                    localStorage.setItem("auth", response.data.token);

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
        </>
    );
};
export default Login;
