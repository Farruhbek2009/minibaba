import React from "react";
import "./profil.css";
import {
    UserRound,
    ShieldHalf,
    ShoppingCart,
    MapPin,
    LogOut,
    BadgeCheck
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Profil = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { isAuth, name, email, logout } = useAuthStore();
    const handleLogout = () => {
        logout();
        navigate("/");
    };
    if (!isAuth) {
        return (
            <div className="box">
                <div className="card">
                    <h3>{t("login")}</h3>
                    <p>
                        Profilni ko'rish uchun avval tizimga kiring.
                    </p>
                    <button
                        className="save"
                        onClick={() => navigate("/login")}
                    >
                        {t("login")}
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="box">
            <div className="side">
                <p>
                    <UserRound />
                    {t("profile_personal_info")}
                </p>
                <p>
                    <ShieldHalf />
                    {t("profile_security")}
                </p>
                <p>
                    <ShoppingCart />
                    {t("profile_order_history")}
                </p>
                <p>
                    <MapPin />
                    {t("profile_delivery_address")}
                </p>
                <hr />
                <h4 onClick={handleLogout} style={{ cursor: "pointer" }}>
                    <LogOut />
                    {t("profile_logout")}
                </h4>

            </div>
            <div className="card">
                <div className="man">

                    <img
                        src="/profile.jpg"
                        alt="Profile"
                    />
                    <div className="man-text">
                        <h3>
                            {name || "User"}
                        </h3>
                        <span>
                            {email}
                        </span>
                    </div>
                </div>
                <div className="block">
                    <h5>
                        {t("profile_basic_info")}
                    </h5>
                    <div className="row">
                        <div className="field">
                            <label>
                                {t("profile_full_name")}
                            </label>
                            <input
                                type="text"
                                value={name || ""}
                                readOnly
                            />
                        </div>
                        <div className="field">
                            <label>
                                {t("profile_phone")}
                            </label>
                            <div className="phone">
                                <input
                                    type="text"
                                    placeholder="+998 XX XXX XX XX"
                                />
                                <span className="badge">
                                    <BadgeCheck />
                                    {t("profile_verified")}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="field">
                            <label>
                                {t("profile_email")}
                            </label>
                            <input
                                type="text"
                                value={email || ""}
                                readOnly
                            />
                        </div>
                        <div className="field">
                            <label>
                                {t("profile_region_city")}
                            </label>
                            <select>
                                <option>
                                    {t("profile_tashkent")}
                                </option>
                                <option>
                                    {t("profile_andijan")}
                                </option>
                                <option>
                                    {t("profile_namangan")}
                                </option>
                                <option>
                                    {t("profile_fergana")}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <h5>
                        {t("profile_security_settings")}
                    </h5>
                    <p className="desc">
                        {t("profile_security_description")}
                    </p>
                    <div className="row three">
                        <div className="field">
                            <label>
                                {t("profile_current_password")}
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                            />
                        </div>
                        <div className="field">
                            <label>
                                {t("profile_new_password")}
                            </label>
                            <input
                                type="password"
                                placeholder={t(
                                    "profile_password_placeholder"
                                )}
                            />
                        </div>
                        <div className="field">
                            <label>
                                {t("profile_confirm_password")}
                            </label>
                            <input
                                type="password"
                                placeholder={t("profile_confirm_password_placeholder")}
                            />
                        </div>
                    </div>
                </div>
                <div className="block">
                    <h5>
                        {t("profile_notifications")}
                    </h5>
                    <div className="toggle-row active">
                        <div>
                            <p className="t-title">
                                {t(
                                    "profile_order_status_notifications"
                                )}
                            </p>
                            <p className="t-desc">
                                {t(
                                    "profile_order_status_description"
                                )}
                            </p>
                        </div>
                        <label className="switch">
                            <input
                                type="checkbox"
                                defaultChecked
                            />
                            <span></span>
                        </label>
                    </div>
                    <div className="toggle-row">
                        <div>
                            <p className="t-title">
                                {t("profile_promotions")}
                            </p>
                            <p className="t-desc">
                                {t(
                                    "profile_promotions_description"
                                )}
                            </p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span></span>
                        </label>
                    </div>
                    <div className="toggle-row active">
                        <div>
                            <p className="t-title">
                                {t("profile_push_notifications")}
                            </p>
                            <p className="t-desc">
                                {t(
                                    "profile_push_description"
                                )}
                            </p>
                        </div>
                        <label className="switch">
                            <input
                                type="checkbox"
                                defaultChecked
                            />
                            <span></span>
                        </label>
                    </div>
                </div>
                <div className="btns">

                    <button className="cancel">
                        {t("profile_cancel")}
                    </button>
                    <button className="save">
                        {t("profile_save_changes")}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Profil;