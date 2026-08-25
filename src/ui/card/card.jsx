import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import api from "../axios/axios";
import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await api.get("/products");

                console.log("BACKEND:", res.data);

                const productList = res.data?.data || [];

                console.log(
                    "PRODUCTLAR SONI:",
                    productList.length
                );

                setProducts(productList);
            } catch (error) {
                console.log(
                    "PRODUCT ERROR:",
                    error.response?.data || error
                );
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="great">
            <div className="middle">
                {products.length > 0 ? (
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={4}
                        spaceBetween={20}
                        loop={products.length > 4}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 12,
                            },

                            576: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },

                            768: {
                                slidesPerView: 3,
                                spaceBetween: 18,
                            },

                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="product-swiper"
                    >

                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div
                                    className="g"
                                    onClick={() =>
                                        navigate(
                                            `/detail/${product.slug}`
                                        )
                                    }
                                >

                                    <div className="h">

                                        {product.discountPercent > 0 && (
                                            <span className="i">
                                                -
                                                {
                                                    product.discountPercent
                                                }
                                                %
                                            </span>
                                        )}

                                        <img
                                            src={
                                                product.imageUrl
                                            }
                                            alt={
                                                product.name
                                            }
                                        />

                                    </div>

                                    <div className="j">

                                        <h3 className="k">
                                            {product.name}
                                        </h3>

                                        <p className="slug">
                                            {product.slug}
                                        </p>

                                        <h3 className="k">
                                            Minimal buyurtma:{" "}
                                            {
                                                product.minOrderQuantity
                                            }
                                        </h3>

                                        <p className="l">
                                            {
                                                product.discountedPrice
                                            }{" "}
                                            {
                                                product.currency
                                            }
                                        </p>

                                        <div className="n">

                                            <div className="o">
                                                <Check
                                                    size={10}
                                                    strokeWidth={3}
                                                />
                                            </div>

                                            <div>
                                                {
                                                    product.isVerifiedSeller
                                                        ? "Tasdiqlangan"
                                                        : "Tasdiqlanmagan"
                                                }
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p>Mahsulotlar yuklanmoqda...</p>
                )}
            </div>
        </div>
    );
};

export default Card;