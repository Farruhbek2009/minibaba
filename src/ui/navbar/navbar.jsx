import React from 'react';
import { Search, Camera, User, ShoppingCart, Box } from 'lucide-react';
import "./navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <Link to={"/"}>
                    <div className="logo-div">
                        <div className="logo-icon-wrapper">
                            <Box size={20} color="white" />
                        </div>
                        <h2>Minibaba</h2>
                    </div>
                </Link>

                <div className="inp-div">
                    <Search size={18} className="search-icon" />
                    <input type="text" placeholder='Mahsulot yoki sotuvchini qidiring...' />
                    <Camera size={20} className="camera-icon" />
                    <button>Qidirish</button>
                </div>

                <div className="end">
                    <span className="nav-link">Kategoriyalar</span>
                    <span className="nav-link">Yordam</span>
                    <div className="nav-item">
                        <Link to={"/login"}>
                            <User size={22} />
                            <div>Kirish</div>
                        </Link>
                    </div>
                    <div className="nav-item cart-item">
                        <div className="cart-icon-wrapper">
                            <ShoppingCart size={22} />
                            <span className="cart-badge">0</span>
                        </div>
                        <span>Savat</span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;