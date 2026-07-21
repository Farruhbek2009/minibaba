import React from 'react';
import { Lock } from 'lucide-react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const Login = () => {
        navigate('/');
    };
    return (
        <div className="login-wrapper">
            <div className="login-box">
                <div className="si">
                    <div className="icon-wrapper">
                        <Lock className="lock-icon" />
                    </div>
                </div>
                <h2>Xush kelibsiz!</h2>
                <p className="subtitle">Kirish va xaridni davom ettirish</p>

                <div className="input-grxoup">
                    <p>Email manzilingiz</p>
                    <input className="input-field" type="email" placeholder="your@example.com" />
                </div>

                <div className="input-group">
                    <p>Parolni kiriting</p>
                    <input className="input-field" type="password" placeholder="********" />
                </div>

                <div className="forgot-link">Parolni unutdingizmi?</div>

                <Link to={"/"}>
                    <button className="btn-main">
                        Kirish
                    </button>
                </Link>
                <div className="lin">
                    <div className="or"></div>
                    <p className="or-text">yoki</p>
                    <div className="or"></div>
                </div>
                <button className="btn-reg">Ro'yxatdan o'tish</button>
            </div>
        </div>
    );
};

export default Login;