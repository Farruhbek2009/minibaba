import {
    Search,
    Camera,
    User,
    ShoppingCart,
    Menu,
    X,
    ChevronDown
} from "lucide-react";

import "./navbar.css";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { CartContext } from "../cart/cart";

const Navbar = () => {
    const { cartCount } = useContext(CartContext);
    const { t, i18n } = useTranslation();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);

    const languages = [
        {
            code: "uz",
            name: "O‘zbekcha"
        },
        {
            code: "en",
            name: "English"
        },
        {
            code: "ru",
            name: "Русский"
        }
    ];
    const currentLanguage =
        languages.find(
            (lang) => lang.code === i18n.language
        ) || languages[0];

    const handleLanguage = (lang) => {
        i18n.changeLanguage(lang);

        setLanguageOpen(false);
    };
    return (
        <div className="navbar">
            <Link to="/" className="logo-div">
                <div className="logo-icon-wrapper">
                    <ShoppingCart
                        size={22}
                        color="white"
                    />
                </div>

                <h2>Minibaba</h2>
            </Link>
            <div className="inp-div">
                <Search
                    size={18}
                    className="search-icon"
                />
                <input
                    type="text"
                    placeholder={t("search_placeholder")}
                />

                <Camera
                    size={20}
                    className="camera-icon"
                />
                <button>
                    {t("search")}
                </button>

            </div>
            <div className="end">

                <span className="nav-link">
                    {t("categories")}
                </span>
                <span className="nav-link">
                    {t("help")}
                </span>
                <div className="language-wrapper">

                    <button
                        className="language-btn"
                        onClick={() =>
                            setLanguageOpen(
                                !languageOpen
                            )
                        }
                    >
                        <span>
                            {currentLanguage.name}
                        </span>
                        <ChevronDown
                            size={16}
                            className={
                                languageOpen
                                    ? "rotate"
                                    : ""
                            }
                        />
                    </button>
                    {languageOpen && (
                        <div className="language-dropdown">

                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    className={
                                        i18n.language === lang.code
                                            ? "language-option active"
                                            : "language-option"
                                    }
                                    onClick={() =>
                                        handleLanguage(
                                            lang.code
                                        )
                                    }
                                >
                                    {lang.name}
                                </button>
                            ))}

                        </div>
                    )}

                </div>
                <div className="nav-item">
                    <Link to="/login">
                        <User size={22} />
                        <div>
                            {t("login")}
                        </div>
                    </Link>
                </div>
                <div className="nav-item cart-item">
                    <Link to="/carts">
                        <div className="cart-icon-wrapper">
                            <ShoppingCart size={22} />
                            <span className="cart-badge">
                                {cartCount}
                            </span>
                        </div>
                        <span>
                            {t("cart")}
                        </span>
                    </Link>
                </div>
            </div>
            <button
                className="mobile-menu-btn"
                onClick={() =>
                    setMobileOpen(!mobileOpen)
                }
            >
                {mobileOpen
                    ? <X size={25} />
                    : <Menu size={25} />
                }
            </button>
            {mobileOpen && (
                <div className="mobile-menu">
                    <div className="mobile-search">
                        <Search size={18} />
                        <input
                            type="text"
                            placeholder={t(
                                "search_placeholder"
                            )}
                        />
                        <button>
                            {t("search")}
                        </button>
                    </div>
                    <div className="mobile-actions">
                        <div className="mobile-language">
                            <button
                                className="language-btn"
                                onClick={() =>
                                    setLanguageOpen(
                                        !languageOpen
                                    )
                                }
                            >
                                <span>
                                    {currentLanguage.name}
                                </span>
                                <ChevronDown
                                    size={16}
                                    className={
                                        languageOpen
                                            ? "rotate"
                                            : ""
                                    }
                                />
                            </button>
                            {languageOpen && (
                                <div className="language-dropdown">
                                    {languages.map(
                                        (lang) => (

                                            <button
                                                key={
                                                    lang.code
                                                }
                                                className={
                                                    i18n.language ===
                                                        lang.code
                                                        ? "language-option active"
                                                        : "language-option"
                                                }
                                                onClick={() =>
                                                    handleLanguage(
                                                        lang.code
                                                    )
                                                }
                                            >
                                                {lang.name}
                                            </button>

                                        )
                                    )}

                                </div>

                            )}

                        </div>
                        <Link to="/login">

                            <User size={22} />

                            <span>
                                {t("login")}
                            </span>

                        </Link>
                        <Link to="/carts">

                            <div className="mobile-cart">

                                <ShoppingCart size={22} />

                                <span className="cart-badge">
                                    {cartCount}
                                </span>

                            </div>

                            <span>
                                {t("cart")}
                            </span>

                        </Link>

                    </div>

                </div>

            )}

        </div>
    );
};
export default Navbar;