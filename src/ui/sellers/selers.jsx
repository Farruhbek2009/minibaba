import React, { useState, useEffect } from "react";
import "./selers.css";
import { ShieldPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";

const Selers = () => {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        const fetchSellers = async () => {
            try {
                const response = await fetch(
                    "https://uzum-api.onrender.com/api/sellers"
                );

                const data = await response.json();

                setSellers(data.data);

                console.log(data.data);
            } catch (error) {
                console.error("Xatolik:", error);
            }
        };

        fetchSellers();
    }, []);

    return (
        <div className="aaaaa">

            <div className="lite">

                <h2>
                    <ShieldPlus
                        size={20}
                        style={{ color: "orange" }}
                    />

                    {t("verified_sellers")}
                </h2>

                <h3>
                    {t("all")}
                </h3>

            </div>

            <div className="bbbbb">

                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="seller-swiper"
                >

                    {sellers.map((seller) => {
                        const experience =
                            seller.experienceLabel?.match(/\d+/)?.[0] ||
                            "";
                        return (
                            <SwiperSlide key={seller.id}>

                                <div className="ccccc">

                                    <div className="ddddd">

                                        <img
                                            src={seller.logoUrl}
                                            alt={seller.name}
                                        />

                                    </div>

                                    <h3 className="eeeee">
                                        {seller.name}
                                    </h3>

                                    <p className="fffff">
                                        {experience}{" "}
                                        {t("years_experience")}{" "}
                                        •{" "}
                                        {seller.location}
                                    </p>

                                    <div className="ggggg">

                                        <div className="hhhhh">

                                            <span>
                                                {seller.reliabilityScore}%
                                            </span>
                                            <p>
                                                {t("reliability")}
                                            </p>
                                        </div>
                                        <div className="iiiii">
                                            <span>
                                                {seller.responseTimeSeconds}s
                                            </span>
                                            <p>
                                                {t("response_time")}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        className="jjjjjbtn"
                                        onClick={() =>
                                            navigate(
                                                `/store/${seller.slug}`
                                            )
                                        }
                                    >
                                        {t("seller_page")}
                                    </button>

                                </div>

                            </SwiperSlide>
                        );
                    })}

                </Swiper>

            </div>

        </div>
    );
};
export default Selers;