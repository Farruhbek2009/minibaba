import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";
import { User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../store/authStore";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const { t } = useTranslation();

    const login = useAuthStore((state) => state.login);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !password.trim()) {
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post(
                "https://uzum-api.onrender.com/api/auth/register",
                {
                    name: name.trim(),
                    email: email.trim(),
                    password: password
                }
            );

            console.log("REGISTER RESPONSE:", response.data);

            if (response.data?.success) {
                const user =
                    response.data?.data ||
                    response.data?.user ||
                    {};

                login({
                    id: user.id || user._id || "",
                    name: user.name || name.trim(),
                    email: user.email || email.trim(),
                    accessToken:
                        user.accessToken ||
                        response.data?.accessToken ||
                        response.data?.token ||
                        ""
                });

                navigate("/profil");
            } else {
                console.log(
                    "Register xatosi:",
                    response.data
                );
            }
        } catch (error) {
            console.log(
                "REGISTER ERROR:",
                error.response?.data || error.message
            );
        } finally {
            setIsLoading(false);
        }
    };

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

                <form onSubmit={onSubmit}>

                    <div className="register-input-group">
                        <p>
                            {t("name")}
                        </p>

                        <input
                            type="text"
                            placeholder={t("your_name")}
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="register-input-group">
                        <p>
                            {t("email_address")}
                        </p>

                        <input
                            type="email"
                            placeholder="your@example.com"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="register-input-group">
                        <p>
                            {t("enter_password")}
                        </p>

                        <input
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="register-btn"
                        disabled={isLoading}
                    >
                        {isLoading
                            ? t("loading")
                            : t("register")}
                    </button>

                </form>

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