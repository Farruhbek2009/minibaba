import React from "react";
import "./hero.css";

import {
    Menu,
    LaptopMinimal,
    ChevronRight,
    Shirt,
    Hammer,
    NotepadText,
    CarFront,
    House,
    Smile,
    WandSparkles,
    TrendingUp,
    ShieldCheck,
    Check
} from "lucide-react";
import { useTranslation } from "react-i18next";
const products = [];
const post = [];
const Hero = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="mid">
                <div className="sidebar">
                    <div className="sidebar-header">
                        <Menu className="orange-icon" />
                        <p className="bold-text">
                            {t("categories")}
                        </p>
                    </div>
                    <div className="sidebar-menu">
                        <div className="menu-item">
                            <div className="item-left">
                                <LaptopMinimal />
                                <p>
                                    {t("electronics")}
                                </p>
                            </div>
                            <ChevronRight
                                size={16}
                                className="arrow"
                            />
                        </div>
                        <div className="menu-item">
                            <div className="item-left">
                                <Shirt />
                                <p>
                                    {t("clothing")}
                                </p>
                            </div>
                            <ChevronRight
                                size={16}
                                className="arrow"
                            />
                        </div>
                        <div className="menu-item">
                            <div className="item-left">
                                <Hammer />
                                <p>
                                    {t("construction")}
                                </p>
                            </div>
                            <ChevronRight
                                size={16}
                                className="arrow"
                            />

                        </div>


                        <div className="menu-item">

                            <div className="item-left">
                                <NotepadText />

                                <p>
                                    {t("wholesale_food")}
                                </p>
                            </div>

                            <ChevronRight
                                size={16}
                                className="arrow"
                            />

                        </div>
                        <div className="menu-item">
                            <div className="item-left">
                                <CarFront />
                                <p>
                                    {t("auto_parts")}
                                </p>
                            </div>

                            <ChevronRight
                                size={16}
                                className="arrow"
                            />

                        </div>
                        <div className="menu-item">

                            <div className="item-left">
                                <House />

                                <p>
                                    {t("home_goods")}
                                </p>
                            </div>

                            <ChevronRight
                                size={16}
                                className="arrow"
                            />

                        </div>
                        <div className="menu-item">

                            <div className="item-left">
                                <Smile />

                                <p>
                                    {t("kids")}
                                </p>
                            </div>

                            <ChevronRight
                                size={16}
                                className="arrow"
                            />

                        </div>
                        <div className="menu-item">

                            <div className="item-left">
                                <WandSparkles />

                                <p>
                                    {t("beauty")}
                                </p>
                            </div>

                            <ChevronRight
                                size={16}
                                className="arrow"
                            />

                        </div>

                    </div>

                </div>
                <div className="f">
                    <img
                        src="/rasm.png"
                        alt="Rasm"
                    />

                    <div className="hero-content">

                        <div className="mini">

                            <p>
                                {t("logistics")}
                            </p>

                        </div>

                        <h1>
                            {t("fast_delivery")}
                        </h1>

                        <p className="desc">
                            {t("hero_description")}
                        </p>

                        <button className="btn">
                            {t("more")}
                        </button>

                    </div>

                </div>

            </div>


            <div className="middle">

                <div className="a">

                    <div className="b">

                        <TrendingUp className="c" />

                        <h2>
                            {t("top_products")}
                        </h2>

                    </div>


                    <div className="e">

                        {products?.map((product) => (

                            <div
                                key={product.id}
                                className="g"
                            >

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Hero;