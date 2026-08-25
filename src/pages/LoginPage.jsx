import React, { useState } from "react";
import "../components/login/style.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";



export default function LoginPage() {
    const navigate = useNavigate();

    const validatefn = (data) => {
        const newErrors = {};
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordPattern = /^[a-zA-Z0-9]+$/;

        if (!data.email.trim()) newErrors.email = "Please enter email address here!";

        else if (!emailPattern.test(data.email)) newErrors.email = "Incorrect Email";
        if (!data.password.trim()) newErrors.password = "Password is required!";
        else if (!passwordPattern.test(data.password)) newErrors.password = "Pasword must not contains invalid symbols!"
        else if (data.password.length < 5) newErrors.password = "Password must contains 5 digits."
        return newErrors;
    }


    const { errors, formData, formValidation, handleChange } = useForm({
        email: "",
        password: "",
    },
        validatefn,
    );




    const [isLogin, setIsLogin] = useState(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();

        if (isValid) {

            localStorage.setItem("isLoggedIn", "true");
            window.dispatchEvent(new Event("storage"));
            navigate('/');
        }
    };



    return (
        <div className="main-div">
            <div className="form-card">
                <h2 className="form-title">{isLogin ? "Log in" : "Sign up"}</h2>

                <form onSubmit={handleSubmit} id="log-in">
                    <div className="input-box">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            value={formData.email}

                            onChange={
                                handleChange
                            }

                        />
                        {errors.email && (<p style={{
                            color: "red",

                            fontSize: "smaller",
                        }}>{errors.email}</p>)}
                    </div>

                    <div className="input-box">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}

                        />
                        {errors.password && (
                            <p
                                style={{
                                    color: "red",

                                    fontSize: "smaller",
                                }}
                            >
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <button type="submit" className="btns"

                    >
                        {isLogin ? "Log in" : "Sign up"}
                    </button>
                </form>

                <div className="divider">
                    <strong style={{ textAlign: 'center' }}>Or {isLogin ? "log in" : "sign up"} with</strong>
                </div>

                <div className="social-container">
                    <button type="button" className="social-btn">
                        <FcGoogle className="icon" /> Google
                    </button>

                    <button type="button" className="social-btn apple-btn">
                        <FaApple className="apple-icon" /> Apple
                    </button>
                </div>

                <div className="link" style={{ cursor: "pointer" }}>
                    <p>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <strong
                            className="toggle-text"
                            onClick={() => {
                                setIsLogin(!isLogin);

                            }}
                        >
                            {isLogin ? " Sign up" : " Log in"}
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    );
}
