import {
    Search,
    Camera,
    User,
    ShoppingCart,
    Menu,
    X,
    ChevronDown
} from 'lucide-react';

import "./navbar.css";
import { Link } from 'react-router-dom';
import React, { useContext, useState } from "react";
import { CartContext } from "../cart/cart";

const Navbar = () => {
    const { cartCount } = useContext(CartContext);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "Tarjima"
    );
    const [languageOpen, setLanguageOpen] = useState(false);
    const languages = ["Русский", "O‘zbekcha", "English"];
    const handleLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
        setLanguageOpen(false);
    };
    return (
        <>
            <div className="navbar">
                <Link to={"/"} className="logo-div">
                    <div className="logo-icon-wrapper">
                        <ShoppingCart size={22} color="white" />
                    </div>
                    <h2>Minibaba</h2>
                </Link>
                <div className="inp-div">
                    <Search size={18} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Mahsulot yoki sotuvchini qidiring..."
                    />
                    <Camera size={20} className="camera-icon" />
                    <button>Qidirish</button>
                </div>
                <div className="end">
                    <span className="nav-link">
                        Kategoriyalar
                    </span>
                    <span className="nav-link">
                        Yordam
                    </span>
                    <div className="language-wrapper">
                        <button className="language-btn" onClick={() => setLanguageOpen(!languageOpen)}
                        > <span>{language}</span><ChevronDown size={16} className={languageOpen ? "rotate" : ""} />
                        </button>
                        {languageOpen && (
                            <div className="language-dropdown">
                                {languages.map((lang) => (
                                    <button key={lang} className={language === lang ? "language-option active" : "language-option"
                                    } onClick={() => handleLanguage(lang)} >{lang}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="nav-item">
                        <Link to={"/login"}>
                            <User size={22} />
                            <div>Kirish</div>
                        </Link>
                    </div>
                    <div className="nav-item cart-item">
                        <Link to={"/carts"}>
                            <div className="cart-icon-wrapper">
                                <ShoppingCart size={22} />
                                <span className="cart-badge">
                                    {cartCount}
                                </span>
                            </div>
                            <span>Savat</span>
                        </Link>
                    </div>
                </div>
                <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}
                >{mobileOpen ? <X size={25} /> : <Menu size={25} />}
                </button>
                {mobileOpen && (
                    <div className="mobile-menu">
                        <div className="mobile-search">
                            <Search size={18} />
                            <input type="text" placeholder="Mahsulot yoki sotuvchini qidiring..." />
                            <button>
                                Qidirish
                            </button>

                        </div>
                        <div className="mobile-actions">
                            <div className="mobile-language">
                                <button className="language-btn" onClick={() =>
                                    setLanguageOpen(!languageOpen)
                                }>
                                    <span>{language}</span>
                                    <ChevronDown size={16} className={
                                        languageOpen ? "rotate" : ""
                                    }
                                    />
                                </button>
                                {languageOpen && (
                                    <div className="language-dropdown">
                                        {languages.map((lang) => (
                                            <button key={lang} className={language === lang ? "language-option active" : "language-option"} onClick={() => handleLanguage(lang)}
                                            > {lang}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <Link to="/login">
                                <User size={22} />
                                <span>Kirish</span>
                            </Link>
                            <Link to="/carts">
                                <div className="mobile-cart">
                                    <ShoppingCart size={22} />
                                    <span className="cart-badge">
                                        {cartCount}
                                    </span>
                                </div>
                                <span>Savat</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;