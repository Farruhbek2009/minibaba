import React, { useState } from "react";
import { Lock } from "lucide-react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useAuthStore } from "../store/authStore";

const Login = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);
    function onSubmit() {
        const formData = { email, password };
        setIsLoading(true);

        axios.post("https://uzum-api.onrender.com/api/auth/login", formData)
            .then((result) => {
                console.log("Login javobi:", result.data);

                if (result.data.success) {
                    const user = result.data.data;
                    login({
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        accessToken: user.accessToken
                    });
                    console.log("Login muvaffaqiyatli:", user);
                    navigate("/");
                } else {
                    console.log("Login xatosi:", result.data);
                    setIsLoading(false);
                }
            });
    }

    return (
        <div className="login-wrapper">
            <div className="login-box">
                <div className="si">
                    <div className="icon-wrapper">
                        <Lock className="lock-icon" />
                    </div>
                </div>
                <h2>
                    {t("welcome")}
                </h2>
                <p className="subtitle">
                    {t("login_subtitle")}
                </p>
                <div className="input-grxoup">
                    <p>
                        {t("email_address")}
                    </p>
                    <input
                        className="input-field"
                        type="email"
                        placeholder="your@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <p>
                        {t("enter_password")}
                    </p>
                    <input
                        className="input-field"
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="forgot-link">
                    {t("forgot_password")}
                </div>
                <button
                    className="btn-main"
                    onClick={onSubmit}
                    disabled={isLoading}
                >
                    {isLoading
                        ? "Loading..."
                        : t("login")}
                </button>
                <div className="lin">
                    <div className="or"></div>
                    <p className="or-text">
                        {t("or")}
                    </p>
                    <div className="or"></div>
                </div>
                <Link to="/register">
                    <button className="btn-reg">
                        {t("register")}
                    </button>
                </Link>
            </div>
        </div>
    );
};
export default Login;