import React from 'react';
import "./hero.css";
import {
    Menu, LaptopMinimal, ChevronRight, Shirt, Hammer,
    NotepadText, CarFront, House, Smile, WandSparkles,
    TrendingUp, ShieldCheck, Check
} from 'lucide-react';

const products = [];
const post = [];

const Hero = () => {
    return (
        <div>
            <div className="mid">
                <div className="sidebar">
                    <div className="sidebar-header">
                        <Menu className="orange-icon" />
                        <p className="bold-text">Kategoriyalar</p>

                    </div>
                    <div className="sidebar-menu">
                        <div className="menu-item">
                            <div className="item-left"><LaptopMinimal />
                                <p>Elektronika</p>
                            </div>
                            <ChevronRight size={16} className="arrow" />
                        </div>
                        <div className="menu-item">
                            <div className="item-left"><Shirt />
                                <p>Kiyim-kechak</p>
                            </div>
                            <ChevronRight size={16} className="arrow" />
                        </div>
                        <div className="menu-item">
                            <div className="item-left"><Hammer />
                                <p>Qurilish mollari</p>
                            </div>
                            <ChevronRight size={16} className="arrow" />
                        </div>
                        <div className="menu-item">
                            <div className="item-left"><NotepadText />
                                <p>Ulgurji oziq-ovqat</p>
                            </div>
                            <ChevronRight size={16} className="arrow" />
                        </div>
                        <div className="menu-item">
                            <div className="item-left"><CarFront />
                                <p>Avto qismlar</p>
                            </div>
                            <ChevronRight size={16} className="arrow" />
                        </div>
                        <div className="menu-item">
                            <div className="item-left"><House />
                                <p>Uy buyumlari</p>
                            </div>
                            <ChevronRight size={16} className="arrow" />
                        </div>
                        <div className="menu-item">
                            <div className="item-left"><Smile />
                                <p>Bolalar uchun</p>
                            </div>
                            <ChevronRight size={16} className="arrow" />
                        </div>
                        <div className="menu-item">
                            <div className="item-left"><WandSparkles />
                                <p>Go'zallik</p>
                            </div>
                            <ChevronRight size={16} className="arrow" />
                        </div>
                    </div>
                </div>

                <div className="f">
                    <img src="/rasm.png" alt="Rasm" />
                    <div className="hero-content">
                        <div className="mini">
                            <p>MINIBABA LOGISTICS</p>
                        </div>
                        <h1>O‘zbekiston bo‘ylab tez yetkazib berish</h1>
                        <p className="desc">Eng arzon ulgurji narxlar va ishonchli sotuvchilar bitta platformada.</p>
                        <button className='btn'>Batafsil</button>
                    </div>
                </div>
            </div>

            <div className="middle">
                <div className="a">
                    <div className="b">
                        <TrendingUp className="c" />
                        <h2>Top mahsulotlar</h2>
                    </div>
                    <div className="e">
                        {products?.map((product) => (
                            <div key={product.id} className="g">
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;