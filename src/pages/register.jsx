import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";
import { User } from "lucide-react";
import { useTranslation } from "react-i18next";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const { t } = useTranslation();

    function onSubmit() {
        const formData = {
            name,
            email,
            password
        };

        setIsLoading(true);

        axios
            .post(
                "https://uzum-api.onrender.com/api/auth/register",
                formData
            )
            .then((response) => {
                console.log(response.data);
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className="register-wrapper">
            <div className="register-box">

                <div className="register-icon">
                    <User />
                </div>

                <h2>
                    {t("create_account")}
                </h2>

                <p className="register-subtitle">
                    {t("create_account_subtitle")}
                </p>

                <div className="register-input-group">
                    <p>{t("name")}</p>

                    <input
                        type="text"
                        placeholder={t("your_name")}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="register-input-group">
                    <p>{t("email_address")}</p>

                    <input
                        type="email"
                        placeholder="your@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="register-input-group">
                    <p>{t("enter_password")}</p>

                    <input
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    className="register-btn"
                    onClick={onSubmit}
                    disabled={isLoading}
                >
                    {isLoading
                        ? t("loading")
                        : t("register")}
                </button>

                <div className="register-login">

                    <span>
                        {t("already_have_account")}
                    </span>

                    <Link to="/login">
                        {t("login")}
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default Register;