import React from "react";
import { Lock } from "lucide-react";
import "./login.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
    const { t } = useTranslation();

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
                    />

                </div>

                <div className="forgot-link">
                    {t("forgot_password")}
                </div>

                <Link to="/">
                    <button className="btn-main">
                        {t("login")}
                    </button>
                </Link>

                <div className="lin">

                    <div className="or"></div>

                    <p className="or-text">
                        {t("or")}
                    </p>

                    <div className="or"></div>

                </div>

                <button className="btn-reg">
                    {t("register")}
                </button>

            </div>

        </div>
    );
};

export default Login;